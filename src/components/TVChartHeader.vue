<template>
    <div class="TVChart-header">
        <div class="content">
            <div class="name">
                <p class="symbol-name">{{symbol}}</p>
                <p class="docking">{{exchange}}</p>
            </div>
            <div class="price-container">
                <p class="title">Last Price</p>
                <p class="price">
                    <span class="dollar">{{formatE7(close)}}</span>
                </p>
            </div>
            <div class="change">
                <p class="title">24h Change</p>
                <p :class="priceChange.indexOf('+') > -1 ? 'price blue-color' : 'price red-color'">
                    <span>{{priceChange}}</span>
                    <span>{{change}}</span>
                </p>
            </div>
            <div class="high">
                <p class="title">24h High</p>
                <p class="price">{{high}}</p>
            </div>
            <div class="low">
                <p class="title">24h Low</p>
                <p class="price">{{low}}</p>
            </div>
            <div class="volume">
                <p class="title">24h Volume</p>
                <p class="price">{{vol}} USDT</p>
            </div>
        </div>
    </div>
</template>

<script>
import { tickerChange, formatE7 } from '../helper/util'
export default {
  name: 'TVChartContainer',
  props: ['symbol', 'exchange', 'symbolDetail'],
  data () {
    return {
      close: '--',
      priceChange: '--',
      change: '--',
      high: '--',
      low: '--',
      vol: '--',
      formatE7
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
                font-size: 14px;
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
            .change .price span:first-child {
                margin-right: 5px;
            }
        }
    }
</style>
