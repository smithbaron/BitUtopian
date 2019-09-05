<template>
    <div class="trade-detail-wrapper">
        <div class="header">
            Trade History
        </div>
        <div class="trade-title">
            <span class="price">Price</span>
            <span class="amount">Amount</span>
            <span class="date">Date</span>
        </div>
        <div class="trade-content">
            <div v-for="(item, index) in tradeHistory" class="trade-item" :key="index">
                <span :class="{'price': true, 'buy': item.direction === 'buy'}">{{formatSidePrice(item.price)}}</span>
                <span class="amount">{{formatSidePrice(item.amount)}}</span>
                <span class="date">{{getDate(item.ts)}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { addZero, formatE7, formatSidePrice } from '../helper/util'
export default {
  name: 'TradeDetail',
  props: ['tradeDetail'],
  data () {
    return {
      tradeHistory: [],
      formatE7,
      formatSidePrice
    }
  },
  watch: {
    tradeDetail (tradeDetail) {
      this.getList(tradeDetail)
    }
  },
  methods: {
    getList (tradeDetail) {
      const len = tradeDetail.length
      if (len === 0) {
        this.tradeHistory = tradeDetail.slice(0, 100)
      } else {
        this.tradeHistory = [...tradeDetail, ...this.tradeHistory].slice(0, 100)
      }
    },
    getDate (ts) {
      const date = new Date(ts)
      const hour = date.getHours()
      const minute = date.getMinutes()
      const second = date.getSeconds()
      return `${addZero(hour)}:${addZero(minute)}:${addZero(second)}`
    }
  }
}
</script>

<style lang="scss" scoped>
.trade-detail-wrapper{
    margin-top: 5px;
    height: 360px;
    border-radius: 2px;
    background-color: #272B3D;
    position: relative;
    .header{
        background-color: #1C1F2C;
        line-height: 28px;
        height: 30px;
        width: 100%;
        color: #ccc;
        font-size: 14px;
        padding-left: 10px;
        position: absolute;
        top: 0;
        left: 0;
    }
    .trade-title{
        height: 25px;
        line-height: 25px;
        width: 100%;
        position: absolute;
        background-color: #272B3D;
        top: 28px;
        left: 0;
    }
    .trade-content {
        padding-top: 55px;
        overflow-y: scroll;
        height: 100%;
        box-sizing: border-box;
    }
    .trade-title, .trade-item{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        padding: 0 10px;
        span {
            color: #666;
            flex: 1;
            -webkit-flex: 1;
            -ms-flex: 1;
            text-align: center;
        }
        .price, .amount{
            text-align: left;
        }
        .date{
            text-align: right;
        }
    }
    .trade-item{
        line-height: 15px;
        span{
            color: #ccc;
        }
        span:first-child{
            color: #EF534F;
        }
        span.buy{
            color: #26A79A;
        }
    }
}
</style>
