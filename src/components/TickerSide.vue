<template>
    <div class="ticker-side-wrapper">
        <div class="ticker-side-content">
            <div class="search-select">
                <Input class="search" style="width: 45%" @on-search="searchHandle" v-model="searchCode" size="small" search placeholder="search" />
                <Select class="select" v-model="exchange" size="small" style="width: 45%">
                    <Option v-for="item in dockingCoins" :value="item" :key="item">{{ item }}</Option>
                </Select>
            </div>
            <div class="symbol-radio">
                <Button type="default"
                        ghost
                        size="small"
                        class="symbol-btn"
                        :style="symbolType === item ? {'border-color': '#ff9900', 'color': '#ff9900' } : {}"
                        @click="changeSymbolType(item)"
                        v-for="item in symbolCoins"
                        :key="item">{{item}}</Button>
            </div>
            <div class="ticker-table">
                <Table @on-row-click="selectSymbol"
                       size="small"
                       :columns="columnSide[language]"
                       height="630"
                       :data="tickerList"></Table>
            </div>
        </div>
    </div>
</template>

<script>
import { Input, Select, Option, Button, Table } from 'iview'
import { formatSideTickers, connectList, sortList } from '../helper/util'
import { dockingCoins, symbolCoins, columnSide } from '../constants/textContents'

export default {
  name: 'exchange',
  components: {
    Input,
    Select,
    Option,
    Button,
    Table
  },
  props: ['language', 'tickers', 'exchange', 'symbol', 'changeState'],
  data () {
    return {
      theme: 'dark',
      symbolType: 'BTC',
      searchCode: '',
      symbolCoins,
      columnSide,
      tickerAllList: [],
      tickerList: [],
      dockingCoins
    }
  },
  created () {
  },
  mounted () {
    this.getTickerList()
  },
  watch: {
    tickers (data) {
      const tickers = formatSideTickers(data)
      if (this.tickers.length === 0) {
        this.tickerAllList = sortList(tickers, 'pair')
      } else {
        this.tickerAllList = sortList(connectList(this.tickerAllList, tickers), 'pair')
      }
      this.getTickerList()
    }
  },
  methods: {
    searchHandle (val) {
      this.searchCode = val
      this.getTickerList()
    },
    changeSymbolType (type) {
      this.symbolType = type
      this.searchCode = ''
      this.getTickerList()
    },
    selectSymbol (e) {
      this.changeState('symbol', e.pair)
    },
    getTickerList () {
      if (this.searchCode) {
        const reg = new RegExp(this.searchCode, 'i')
        this.tickerList = this.tickerAllList.filter(item => {
          if (reg.test(item.pair)) return true
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
          if (reg.test(item.pair)) return true
        }).map(item => {
          const temp = { ...item }
          temp.cellClassName = {
            change: item.change.indexOf('+') > -1 ? 'blue-color' : 'red-color'
          }
          return temp
        })
      }
    }
  }
}
</script>

<style lang="scss">
    .ticker-side-wrapper{
        color: #ccc;
        width: 260px;
        height: 100%;
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        .ticker-side-content{
            padding: 10px 0;
            height: 100%;
            background-color: #272B3D;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            overflow: hidden;
        }
        .search-select{
            padding: 0 10px;
            overflow: hidden;
            .search{
                float: left;
                .ivu-input{
                    background-color: #272B3D;
                    border-color: #ccc;
                    color: #ccc;
                    box-shadow: none;
                }
            }
            .select{
                float: right;
                .ivu-select-selection{
                    background-color: #272B3D;
                    border: none;
                    box-shadow: none;
                }
                &.ivu-select{
                    color: #ff9900;
                    font-weight: bold;
                    border-bottom: 2px #ff9900 solid;
                }
                .ivu-select-arrow {
                    color: #ccc;
                }
            }
            .ivu-select-dropdown{
                background-color: #272B3D;
                .ivu-select-item{
                    color: #ccc;
                }
                .ivu-select-item-selected{
                    color: #ff9900;
                }
            }
        }
        .symbol-radio{
            margin-top: 10px;
            padding: 5px 10px;
            width: 100%;
            overflow: hidden;
            background-color: #1C1F2C;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            .ivu-btn-default{
                color: #ccc;
                border-color: #ccc;
            }
            .symbol-btn{
                margin-right: 10px;
                flex: 1;
                -webkit-flex: 1;
                -ms-flex: 1;
                &:hover {
                    border-color: #ff9900;
                    color: #ff9900;
                }
            }
        }
        .ticker-table{
            margin-top: 10px;
            padding: 0 10px;
            .ivu-table-wrapper{
                border: none;

                .ivu-table{
                    background-color: transparent;
                    th {
                        background-color: #272B3D;
                        color: #666;
                        border: none;
                        font-size: 12px;
                    }
                    td{
                        background-color: #272B3D;
                        color: #FFF;
                        border: none;
                        font-size: 12px;
                    }
                    .red-color{
                        color: #EF534F;
                    }
                    .blue-color{
                        color: #26A79A;
                    }
                    &:after{
                        background-color: transparent;
                    }
                    &:before{
                        background-color: transparent;
                    }
                    .ivu-table-row{
                        cursor: pointer;
                    }
                    .ivu-table-header{

                    }
                    .ivu-table-cell{
                        padding: 0;
                    }
                }
            }
        }
    }
</style>
