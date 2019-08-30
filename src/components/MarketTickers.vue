<template>
    <div class="wrapper-market-tickers">
        <div class="wrapper-content">
            <h3>{{titleText[language]}}</h3>
            <Button v-if="isLogin !== 'true'" type="info" class="bgcolor">{{registerText[language]}}</Button>
            <Button type="info" class="bgcolor tradeText">{{tradeText[language]}}</Button>
            <div class="wrapper-tab">
                <div class="wrapper-coin" >
                    <Button type="info"
                            class="bgcolor"
                            :style="marketType === item ? {'background-color': 'rgba(255, 153, 0, 1)' } : {}"
                            @click="changeMarketType(item)"
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
                <Table class="ticker-table" :columns="columns[language]" height="400" :data="tickerList"></Table>
            </div>
        </div>
    </div>
</template>

<script>
import { Button, Input, Table } from 'iview'
import { getHuoBiMarket, getOKExMarket } from '../services/active'
import { loopRequest, formatTickers } from '../helper/util'
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
      tickerAllList: [],
      tickerList: [],
      pageNo: 1,
      marketType: 'Huobi',
      symbolType: 'BTC',
      loading: false,
      searchCode: '',
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
    this.initMethod()
  },
  mounted () {
    this.addScrollEvent()
  },
  methods: {
    initMethod () {
      let action
      const type = this.marketType
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
    changeMarketType (type) {
      this.marketType = type
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
        background: -webkit-linear-gradient(to top, #272B3D 0%, #000000 100%);
        background: linear-gradient(to top, #272B3D 0%, #000000 100%);
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
