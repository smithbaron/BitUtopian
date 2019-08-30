<template>
    <div class="trade-detail-wrapper">
        <div class="header">
            Trade History
        </div>
        <div class="trade-title">
            <span>Price</span>
            <span>Amount</span>
            <span>Date</span>
        </div>
        <div v-for="(item, index) in tradeHistory" class="trade-item" :key="index">
            <span :class="{'buy': item.direction === 'buy'}">{{formatE7(item.price)}}</span>
            <span>{{item.amount.toFixed(4)}}</span>
            <span>{{getDate(item.ts)}}</span>
        </div>
    </div>
</template>

<script>
import { addZero, formatE7 } from '../helper/util'
export default {
  name: 'TradeDetail',
  props: ['tradeDetail'],
  data () {
    return {
      tradeHistory: [],
      formatE7
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
        this.tradeHistory = tradeDetail
      } else if (len > 20) {
        this.tradeHistory = tradeDetail.slice(-20)
      } else {
        this.tradeHistory = [...this.tradeHistory.slice(len - 20), ...tradeDetail]
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
    .header{
        background-color: #1C1F2C;
        line-height: 28px;
        color: #ccc;
        font-size: 12px;
        padding-left: 10px;
    }
    .trade-title, .trade-item{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        span {
            color: #999;
            flex: 1;
            -webkit-flex: 1;
            -ms-flex: 1;
            text-align: center;
        }
    }
    .trade-item{
        color: #fff;
        line-height: 15px;
        span:first-child{
            color: #EF534F;
        }
        span.buy{
            color: #26A79A;
        }
    }
}
</style>
