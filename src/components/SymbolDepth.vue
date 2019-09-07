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
            <span>{{commonText['price'][language]}}</span>
            <span>{{commonText['amount'][language]}}</span>
        </div>
        <div class="depth-content">
            <div v-if="tab !== 'asks'" class="bids-list">
                <div v-for="(item, index) in bidsList"
                     class="bids-item" :key="index"
                     :style="{background: `linear-gradient(to left, rgb(239, 83, 79, 0.1) 0%, rgb(239, 83, 79, 0.1) ${item[1] / maxBids * 100}%, #272B3D ${item[1] / maxBids * 100}%, #272B3D 100%)`}"
                >
                    <span>{{formatSidePrice(item[0])}}</span>
                    <span>{{formatSidePrice(item[1])}}</span>
                </div>
            </div>
            <div v-if="tab === 'all'" class="current">
                <span class="price">{{formatSidePrice(symbolDetail.close)}}</span>
                <span class="amount">${{formatSidePrice(symbolDetail.amount)}}</span>
            </div>
            <div v-if="tab !== 'bids'" class="asks-list">
                <div v-for="(item, index) in asksList"
                     class="asks-item" :key="index"
                     :style="{background: `linear-gradient(to left, rgb(38, 167, 154, 0.1) 0%, rgb(38, 167, 154, 0.1) ${item[1] / maxAsks * 100}%, #272B3D ${item[1] / maxAsks * 100}%, #272B3D 100%)`}"
                >
                    <span>{{formatSidePrice(item[0])}}</span>
                    <span>{{formatSidePrice(item[1])}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { formatSidePrice } from '../helper/util'
import { commonText } from '../constants/textContents'

export default {
  name: 'SymbolDepth',
  props: ['symbolDepth', 'symbolDetail', 'symbol', 'language'],
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
      maxBids: 0,
      asksList: [],
      maxAsks: 0,
      formatSidePrice,
      commonText,
      firstScroll: true,
      tab: 'all'
    }
  },
  mounted () {
    console.log(this.tab)
  },
  watch: {
    symbolDepth (symbolDepth) {
      this.getList(symbolDepth)
    },
    symbol (symbol) {
      this.firstScroll = true
    }
  },
  updated () {
    if (this.tab === 'all' && this.bidsList.length > 0 && this.firstScroll) {
      this.firstScroll = false
      const scrollCont = document.querySelector('.depth-content')
      const current = document.querySelector('.current')
      scrollCont.scrollTop = current.offsetTop - scrollCont.offsetHeight / 2
    }
  },
  methods: {
    getList (symbolDepth) {
      const { bids = [], asks = [] } = symbolDepth
      this.maxBids = Math.max.apply(null, bids.map(item => item[1]))
      this.maxAsks = Math.max.apply(null, asks.map(item => item[1]))
      if (this.tab === 'all') {
        this.bidsList = (symbolDepth.bids || [])
        this.asksList = (symbolDepth.asks || [])
      } else if (this.tab === 'bids') {
        this.bidsList = (symbolDepth.bids || [])
      } else if (this.tab === 'asks') {
        this.asksList = (symbolDepth.asks || [])
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
    position: relative;
    font-size: 12px;
    .depth-tab{
        background-color: #1C1F2C;
        padding: 5px 10px;
        height: 35px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
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
        position: absolute;
        top: 35px;
        left: 0;
        right: 0;
        font-size: 12px;
        background-color: #272B3D;
        span{
            flex: 1;
            -webkit-flex: 1;
            -ms-flex: 1;
            line-height: 30px;
            color: #999;
            padding: 0 10px;
            &:first-child{
                text-align: left;
            }
            &:last-child{
                text-align: right;
            }
        }
    }
    .depth-content{
        padding-top: 65px;
        overflow-y: scroll;
        height: 100%;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
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
                &:first-child{
                    color: #EF534F;
                    padding-left: 10px;
                    text-align: left;
                }
                &:last-child{
                    color: #ccc;
                    padding-right: 10px;
                    text-align: right;
                }
            }
        }
    }
    .current{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        background-color: #1C1F2C;
        font-size: 14px;
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
            color: #ccc;
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
                    padding-left: 10px;
                    text-align: left;
                }
                &:last-child{
                    color: #ccc;
                    padding-right: 10px;
                    text-align: right;
                }
            }
        }
    }
}
</style>
