<template>
    <div class="depth-wrapper">
        <div class="depth-tab">
            <ul v-for="item in tabList"
                :class="[item.class, {'selected': item.type === tab}]"
                :key="item.class"
                @click="changeTab(item.type)">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div class="depth-title">
            <span>Price</span>
            <span>Amount</span>
        </div>
        <div v-if="tab !== 'asks'" class="bids-list">
            <div v-for="(item, index) in bidsList" class="bids-item" :key="index">
                <span>{{formatE7(item[0])}}</span>
                <span>{{item[1]}}</span>
            </div>
        </div>
        <div v-if="tab === 'all'" class="current">
            <span class="price">{{formatE7(symbolDetail.close)}}</span>
            <span class="amount">${{symbolDetail.amount}}</span>
        </div>
        <div v-if="tab !== 'bids'" class="asks-list">
            <div v-for="(item, index) in asksList" class="asks-item" :key="index">
                <span>{{formatE7(item[0])}}</span>
                <span>{{item[1]}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import { formatE7 } from '../helper/util'
export default {
  name: 'SymbolDepth',
  props: ['symbolDepth', 'symbolDetail'],
  data () {
    return {
      tabList: [{
        type: 'all',
        class: 'bidsAndAsks'
      }, {
        type: 'bids',
        class: 'bids'
      }, {
        type: 'asks',
        class: 'asks'
      }],
      bidsList: [],
      asksList: [],
      formatE7,
      tab: 'all'
    }
  },
  mounted () {
    console.log(this.symbolDepth)
  },
  watch: {
    symbolDepth (symbolDepth) {
      this.getList(symbolDepth)
    }
  },
  methods: {
    getList (symbolDepth) {
      if (this.tab === 'all') {
        this.bidsList = (symbolDepth.bids || []).slice(-9)
        this.asksList = (symbolDepth.asks || []).slice(-7)
      } else if (this.tab === 'bids') {
        this.bidsList = (symbolDepth.bids || []).slice(-18)
      } else if (this.tab === 'asks') {
        this.asksList = (symbolDepth.asks || []).slice(-18)
      }
    },
    changeTab (tab) {
      this.tab = tab
      this.getList(this.symbolDepth)
    }
  }
}
</script>

<style lang="scss" scoped>
.depth-wrapper{
    height: 360px;
    background-color: #272B3D;
    border-radius: 2px;
    overflow-y: hidden;
    .depth-tab{
        background-color: #1C1F2C;
        padding: 5px 10px;
        height: 35px;
        ul{
            display: inline-block;
            list-style-type: none;
            padding: 1px;
            margin-right: 10px;
            cursor: pointer;
        }
        .selected {
            border: 1px #ff9900 solid;
        }
        li{
            width: 20px;
            height: 3px;
            border-radius: 2px;
            background-color: red;
            margin-bottom: 2px;
            &:last-child {
                margin-bottom: 0;
            }
        }
        .bidsAndAsks {
            li:nth-child(3) {
                background-color: #26A79A;
            }
            li:nth-child(4) {
                background-color: #26A79A;
            }
        }
        .bids{
            li:nth-child(4) {
                background-color: #FFF;
            }
        }
        .asks{
            li{
                background-color: #26A79A;
            }
            li:nth-child(4) {
                background-color: #FFF;
            }
        }
    }
    .depth-title{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        span{
            flex: 1;
            -webkit-flex: 1;
            -ms-flex: 1;
            text-align: center;
            line-height: 30px;
            color: #999;
        }
    }
    .bids-list{
        .bids-item{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            span{
                flex: 1;
                -webkit-flex: 1;
                -ms-flex: 1;
                text-align: center;
                &:first-child{
                    color: #EF534F;
                }
                &:last-child{
                    color: #fff;
                }
            }
        }
    }
    .current{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        background-color: #1C1F2C;
        span {
            flex: 1;
            -webkit-flex: 1;
            -ms-flex: 1;
            line-height: 28px;
        }
        .price{
            color: #EF534F;
            padding-right: 2px;
            text-align: right;
        }
        .amount{
            padding-left: 2px;
            color: #fff;
        }
    }
    .asks-list{
        .asks-item{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            span{
                flex: 1;
                -webkit-flex: 1;
                -ms-flex: 1;
                text-align: center;
                &:first-child{
                    color: #26A79A;
                }
                &:last-child{
                    color: #fff;
                }
            }
        }
    }
}
</style>
