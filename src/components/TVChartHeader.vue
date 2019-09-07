<template>
    <div class="TVChart-header">
        <div class="content">
            <div class="name">
                <p class="symbol-name">{{symbol}}</p>
                <p class="docking">{{exchange}}</p>
            </div>
            <div class="price-container">
                <p class="title">{{commonText.lastPrice[language]}}</p>
                <p class="price">
                    <span class="dollar"
                          :style="{color: tradeDetail[0] && tradeDetail[0].direction === 'buy' ? '#26A79A' : '#EF534F'}"
                    >{{formatSidePrice(close)}}</span>
                </p>
            </div>
            <div class="change">
                <p class="title">{{commonText.change[language]}}</p>
                <p :class="priceChange.indexOf('+') > -1 ? 'price blue-color' : 'price red-color'">
                    <span>{{formatSidePrice(priceChange)}}</span>
                    <span>{{change}}</span>
                </p>
            </div>
            <div class="high">
                <p class="title">{{commonText.high[language]}}</p>
                <p class="price">{{formatSidePrice(high)}}</p>
            </div>
            <div class="low">
                <p class="title">{{commonText.low[language]}}</p>
                <p class="price">{{formatSidePrice(low)}}</p>
            </div>
            <div class="volume">
                <p class="title">{{commonText.volume[language]}}</p>
                <p class="price">{{`${vol} ${symbol.split('/')[1]}`}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { tickerChange, formatE7, formatSidePrice } from '../helper/util'
import { commonText } from '../constants/textContents'

export default {
  name: 'TVChartContainer',
  props: ['symbol', 'exchange', 'symbolDetail', 'language', 'tradeDetail'],
  data () {
    return {
      close: '--',
      priceChange: '--',
      change: '--',
      high: '--',
      low: '--',
      vol: '--',
      commonText,
      formatE7,
      formatSidePrice
    }
  },
  mounted () {
    console.log('symbolDetail', this.symbolDetail)
  },
  watch: {
    symbolDetail (symbolDetail) {
      if (symbolDetail.close) {
        this.close = symbolDetail.close
        this.priceChange = this.getPriceChange()
        this.change = this.getChange()
        this.high = symbolDetail.high
        this.low = symbolDetail.low
        this.vol = symbolDetail.vol
      }
    }
  },
  methods: {
    getPriceChange () {
      const { open, close } = this.symbolDetail
      const change = (close - open).toFixed(2)
      return `${change > 0 ? '+' : ''}${change}`
    },
    getChange () {
      const { open, close } = this.symbolDetail
      return tickerChange(open, close)
    }
  }
}
</script>

<style lang="scss" scoped>
    .TVChart-header{
        width: 100%;
        height: 60px;
        padding-bottom: 5px;
        .content{
            background-color: #272B3D;
            height: 100%;
            color: #666;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            padding: 10px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            div{
                flex: auto;
                -webkit-flex: auto;
                -ms-flex: auto;
            }
            .title{
                font-size: 12px;
            }
            .dollar{
                color: #EF534F;
            }
            .red-color{
                color: #EF534F;
            }
            .blue-color{
                color: #26A79A;
            }
            .symbol-name, .high .price,.low .price,.volume .price{
                color: #FFF;
            }
            .symbol-name{
                font-size: 14px;
            }
            .change .price span:first-child {
                margin-right: 5px;
            }
        }
    }
</style>
