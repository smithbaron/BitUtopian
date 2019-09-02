<template>
    <div class="wrapper-market-tickers">
        <div class="wrapper-content">
            <h3>{{titleText[language]}}</h3>
            <Button v-if="isLogin !== true" type="info" class="bgcolor" @click="signIn">{{registerText[language]}}</Button>
            <Button type="info" class="bgcolor tradeText" @click="goTrade">{{tradeText[language]}}</Button>
            <div class="wrapper-tab">
                <div class="wrapper-coin" >
                    <Button type="info"
                            class="bgcolor"
                            :style="exchange === item ? {'background-color': 'rgba(255, 153, 0, 1)' } : {}"
                            @click="changeExchange(item)"
                            v-for="item in dockingCoins"
                            :key="item">{{item}}</Button>
                </div>
                <div class="wrapper-symbol">
                    <Button class="line bgcolor"></Button>
                    <Button type="info"
                            class="bgcolor"
                            v-for="item in symbolCoins"
                            @click="changeSymbolType(item)"
                            :style="symbolType === item ? {'background-color': 'rgba(255, 153, 0, 1)' } : {}"
                            :key="item">{{item}}</Button>
                </div>
                <Input class="search" @on-search="searchHandle" size="large" search :placeholder="searchText[language]" />
                <Table class="ticker-table"
                       :columns="columns[language]"
                       height="400"
                       @on-sort-change="changeSort"
                       :data="tickerList"></Table>
            </div>
        </div>
    </div>
</template>

<script>
import { Button, Input, Table } from 'iview'
import { getHuoBiMarket, getOKExMarket } from '../services/active'
import { loopRequest, formatTickers, connectList } from '../helper/util'
import { userSession } from '../userSession'
import Socket from '../helper/ioService'
import { titleText, registerText, tradeText, dockingCoins, symbolCoins, searchText, columns } from '../constants/textContents'
export default {
  name: 'marketTickers',
  components: {
    Button,
    Input,
    Table
  },
  props: ['language', 'isLogin'],
  data () {
    return {
      exchange: 'Huobi',
      tickers: [],
      tickerAllList: [],
      tickerList: [],
      pageNo: 1,
      symbolType: 'BTC',
      loading: false,
      searchCode: '',
      sortKey: 'symbol',
      sortOrder: 'asc',
      titleText,
      registerText,
      tradeText,
      searchText,
      dockingCoins,
      symbolCoins,
      columns
    }
  },
  created () {
    Socket.register({ commonSetData: this.changeState })
    Socket.connect(this.exchange)
  },
  mounted () {
    this.addScrollEvent()
  },
  watch: {
    tickers (data) {
      const tickers = formatTickers(data)
      if (this.tickers.length === 0) {
        this.tickerAllList = this.sortList(tickers)
      } else {
        this.tickerAllList = this.sortList(connectList(this.tickerAllList, tickers, 'symbol'))
      }
      this.getTickerList()
    }
  },
  methods: {
    initMethod () {
      let action
      const type = this.exchange
      switch (type) {
        case 'OKEx':
          action = getOKExMarket
          break
        case 'Huobi':
        default:
          action = getHuoBiMarket
          break
      }
      loopRequest.loop(action, (data) => {
        this.tickerAllList = formatTickers(data, type)
        this.getTickerList()
      }, type)
    },
    changeState (state, value) {
      this[state] = value
    },
    signIn () {
      userSession.redirectToSignIn()
    },
    goTrade () {
      location.href = location.origin + '/exchange'
    },
    changeSort (data) {
      const { key, order } = data
      this.sortKey = key
      this.sortOrder = order
      this.tickerAllList = this.sortList(this.tickerAllList)
      this.getTickerList()
    },
    sortList (arr) {
      return arr.sort((prev, next) => {
        const x = prev[this.sortKey].toLowerCase()
        const y = next[this.sortKey].toLowerCase()
        if (x < y) { return this.sortOrder === 'asc' ? -1 : 1 }
        if (x > y) { return this.sortOrder === 'asc' ? 1 : -1 }
        return 0
      })
    },
    changeExchange (type) {
      this.exchange = type
      this.searchCode = ''
      this.initMethod()
    },
    changeSymbolType (type) {
      this.symbolType = type
      this.searchCode = ''
      this.getTickerList()
    },
    searchHandle (e) {
      this.searchCode = e
      this.getTickerList()
    },
    addScrollEvent () {
      const scrollWarp = document.querySelector('.ivu-table-body')
      scrollWarp.addEventListener('scroll', this.listenerFunction, false)
    },
    listenerFunction (e) {
      if (this.searchCode || this.loading) return
      const ev = e.target
      if (ev.scrollHeight === (ev.scrollTop + ev.clientHeight)) {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.pageNo++
          this.getTickerList()
        }, 200)
      }
    },
    getTickerList () {
      if (this.searchCode) {
        const reg = new RegExp(this.searchCode, 'i')
        this.tickerList = this.tickerAllList.filter(item => {
          if (reg.test(item.symbol)) return true
        })
      } else {
        let reg
        switch (this.symbolType) {
          case 'OTHER':
            reg = new RegExp('(HUSD|HT|TRX|10)$', 'i')
            break
          case 'USDT':
            reg = new RegExp('USDT$', 'i')
            break
          case 'ETH':
            reg = new RegExp('ETH$', 'i')
            break
          case 'BTC':
          default:
            reg = new RegExp('BTC$', 'i')
            break
        }
        this.tickerList = this.tickerAllList.filter(item => {
          if (reg.test(item.symbol)) return true
        }).slice(0, this.pageNo * 15)
      }
    }
  }
}
</script>

<style lang="scss">
    .wrapper-market-tickers{
        height: 775px;
        margin-top: 50px;
        background: -webkit-linear-gradient(to bottom, #272B3D 0%, #000000 100%);
        background: linear-gradient(to bottom, #272B3D 0%, #000000 100%);
        width:100%;
        color: #fff;
        .wrapper-content{
            width: 88%;
            margin: 0 auto;
            padding-top: 60px;
            text-align: center;
            h3{
                text-align: center;
                letter-spacing: 1px;
                font-size: 28px;
                padding-bottom: 50px;
            }
            .bgcolor{
                background-color: #272B3D;
                border-color: #272B3D;
                margin-right: 16px;
                color: #fff;
                font-size: 14px;
            }
            .tradeText{
                margin-right: 0;
            }
            .ivu-btn-info:focus {
                background-color: rgba(255, 153, 0, 1);
                border-color: rgba(255, 153, 0, 1);
                box-shadow: 0 0 0 2px rgba(255, 153, 0,.2);
            }
        }
        .wrapper-tab{
            height: 50px;
            width: 900px;
            margin: 40px auto 10px;
        }
        .wrapper-coin{
            float: left;
            .ivu-btn-info{
                font-weight: normal;
                height: 35px;
            }
        }
        .wrapper-symbol{
            float: right;
            .line{
                display: inline-block;
                width: 2px;
                height: 35px;
                padding: 2px;
                cursor: auto;
            }
            .bgcolor:last-child{
                margin-right: 0;
            }
        }
        .search{
            margin-top: 16px;
            .ivu-input{
                background-color: #272B3D;
                border-color: #272B3D;
                color: #fff;
            }
            .ivu-icon{
                font-size: 24px;
                right: 10px;
            }
        }
        .ivu-scroll-wrapper{
            margin-top: 16px;
        }
        .ticker-table{
            margin-top: 16px;
            .ivu-table th, td{
                background-color: #272B3D;
                color: #fff;
            }
            .ivu-table-body{
                background-color: #272B3D;
            }
        }
    }
</style>
