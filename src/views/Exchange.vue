<template>
    <Layout class="exchange-wrapper">
        <Header>
            <CommonHeader :language="language" :changeState="changeState" :isLogin="isLogin"></CommonHeader>
        </Header>
        <Content class="ticker-content">
            <TickerSide :language="language"
                        :exchange="exchange"
                        :tickers="tickers"
                        :symbol="symbol"
                        :changeState="changeState"
                        @exchange-change="handleExchangeChange"
            ></TickerSide>
            <div class="ticker-content-wrapper">
                <div class="ticker-content-left">
                    <div class="trading-chart">
                        <TVChartHeader :symbol="symbol"
                                       :exchange="exchange"
                                       :tradeDetail="tradeDetail"
                                       :symbolDetail="symbolDetail"
                                       :language="language"
                        ></TVChartHeader>
                        <div class="TVChartContainer">
                            <div class="tab">
                                <span :class="{'selected': tabType === 'compare'}" @click="tabChange('compare')">Compare</span>
                                <span :class="{'selected': tabType === 'manyCycles'}" @click="tabChange('manyCycles')">ManyCycles</span>
                                <span :class="{'selected': tabType === 'tradingView'}" @click="tabChange('tradingView')">TradingView</span>
                                <span :class="{'selected': tabType === 'depth'}" @click="tabChange('depth')">Depth</span>
                            </div>
                            <div :class="{'control-right': true, 'left': !showRight}" @click="controlRight">
                                <span class="arrow"></span>
                            </div>
                            <div :class="{'control-bottom': true, 'top': !showBottom}" @click="controlBottom">
                                <span class="arrow"></span>
                            </div>
                            <TVChartContainer v-if="tabType === 'tradingView'"
                                              :symbol="symbol"
                                              :exchange="exchange"
                                              :language="language"
                                              :containerId="'tv_chart_container'"
                            ></TVChartContainer>
                            <TVChartCompare v-else-if="tabType === 'manyCycles' || tabType === 'compare'"
                                            :symbolCoins="symbolCoinsList"
                                            :exchange="exchange"
                                            :language="language"
                                            :isManyCycles="tabType === 'manyCycles'">
                            </TVChartCompare>
                            <EChartsDepth v-else
                                          :symbolDepth="symbolDepth"
                                          :symbol="symbol"
                                          :language="language"
                            ></EChartsDepth>
                        </div>
                    </div>
                    <TradeColumn v-if="showBottom" :language="language"></TradeColumn>
                </div>
                <div class="ticker-content-right" :style="{width: showRight ? '260px' : '0px'}">
                    <SymbolDepth :symbolDepth="symbolDepth"
                                 :symbolDetail="symbolDetail"
                                 :tradeDetail="tradeDetail"
                                 :symbol="symbol"
                                 :language="language"
                    ></SymbolDepth>
                    <TradeDetail :tradeDetail="tradeDetail"
                                 :language="language"
                    ></TradeDetail>
                </div>
            </div>
        </Content>
    </Layout>
</template>

<script>
import { Layout } from 'iview'
import Socket from '../helper/ioService'
import CommonHeader from '../components/CommonHeader'
import TickerSide from '../components/TickerSide'
import TVChartHeader from '../components/TVChartHeader'
import TVChartContainer from '../components/TVChartContainer'
import TradeColumn from '../components/TradeColumn'
import SymbolDepth from '../components/SymbolDepth'
import EChartsDepth from '../components/EChartsDepth'
import TradeDetail from '../components/TradeDetail'
import TVChartCompare from '../components/TVChartCompare'
import { symbolCoins, manyCyclesInterval } from '../constants/textContents'

export default {
  name: 'exchange',
  components: {
    Layout,
    CommonHeader,
    TickerSide,
    TVChartHeader,
    TradeColumn,
    SymbolDepth,
    EChartsDepth,
    TVChartContainer,
    TradeDetail,
    TVChartCompare
  },
  data () {
    const urlParams = this.$route.query
    return {
      theme: 'dark',
      symbol: 'BTC/USDT',
      exchange: 'Huobi',
      showRight: true,
      showBottom: true,
      language: urlParams.lang || 'en',
      tickers: [],
      symbolDetail: {},
      symbolDepth: {},
      tradeDetail: [],
      socket: null,
      isLogin: true,
      tabType: 'tradingView',
      TVjsApi: null,
      symbolCoinsList: []
    }
  },
  created () {
    Socket.register({ commonSetData: this.changeState })
    Socket.connect(this.exchange, () => {
      this.sendSocket(this.symbol)
    })
    this.symbolCoinsList = symbolCoins.map((t, index) => {
      return { symbol: 'BTC/USTD', containerId: t, interval: manyCyclesInterval[index] }
    })
    // console.log(this.symbolCoinsList, 'list')
  },
  mounted () {
    // const config = {
    //   exchange: this.exchange,
    //   symbol: this.symbol.replace('/', '').toLocaleLowerCase(),
    //   locale: this.language,
    //   callback: (data) => this.getDataCallback(data)
    // }
    // this.TVjsApi = new TVjsApi(config)
    // this.TVjsApi.init()
  },
  watch: {
    '$route' (to) {
      const urlParams = to.query
      this.language = urlParams.lang || 'en'
    }
  },
  methods: {
    changeState (state, value) {
      if (state === 'symbol' && this.symbol !== value) {
        this.sendSocket(value)
        // this.TVjsApi.symbol = value.replace('/', '').toLocaleLowerCase()
        // this.TVjsApi.widgets.chart().setSymbol(value.replace('/', '').toLocaleLowerCase());
      }
      this[state] = value
    },
    sendSocket (value) {
      const symbol = value.replace('/', '').toLocaleLowerCase()
      this.symbolDetail = {}
      this.symbolDepth = {}
      this.tradeDetail = []
      Socket.sendSymbolDetail(symbol)
      Socket.sendSymbolDepth(symbol)
      Socket.sendTradeDetail(symbol)
    },
    tabChange (value) {
      this.tabType = value
    },
    controlRight () {
      this.showRight = !this.showRight
    },
    controlBottom () {
      this.showBottom = !this.showBottom
    },
    getDataCallback (data) {},
    handleExchangeChange (value) {
      Socket.doClose()
      this.exchange = value
      Socket.register({ commonSetData: this.changeState })
      Socket.connect(this.exchange, () => {
        this.sendSocket(this.symbol)
      })
    }
  }
}
</script>

<style lang="scss">
    .exchange-wrapper{
        background-color: #000;
    }
    .ticker-content{
        width: 100%;
        height: 850px;
        padding-top: 55px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-align: stretch;
        -ms-flex-align: stretch;
        align-items: stretch;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .ticker-content-wrapper{
        width: calc(100% - 260px);
        height: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        -webkit-box-flex: 1;
        -ms-flex: 1 0 auto;
        flex: 1 0 auto;
    }
    .ticker-content-left{
        display: inline-block;
        width: 100%;
        padding: 0 5px;
        box-sizing: border-box;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        .trading-chart{
            width: 100%;
            -webkit-box-flex: auto;
            -ms-flex: auto;
            flex: auto;
            height: 100%;
            .TVChartContainer{
                height: calc(100% - 65px);
                position: relative;
                background-color: #272B3D;
                .control-right{
                    position: absolute;
                    right: -8px;
                    top: 50%;
                    transform: translateY(-50%);
                    border-radius: 4px;
                    width: 8px;
                    height: 30px;
                    background-color: #1C1F2C;
                    z-index: 10;
                    overflow: hidden;
                    cursor: pointer;
                    &.left{
                        right: 0;
                        transform: translateY(-50%) rotate(180deg);
                    }
                    .arrow {
                        position: absolute;
                        left: 2px;
                        top: 50%;
                        transform: translateY(-50%);
                        width: 0;
                        height: 0;
                        border-top: 8px #1C1F2C solid;
                        border-right: 4px #1C1F2C solid;
                        border-bottom: 8px #1C1F2C solid;
                        border-left: 4px #ccc solid;
                    }
                }
                .control-bottom {
                    position: absolute;
                    bottom: -8px;
                    left: 50%;
                    transform: translateX(-50%);
                    border-radius: 4px;
                    width: 30px;
                    height: 8px;
                    background-color: #1C1F2C;
                    z-index: 10;
                    overflow: hidden;
                    cursor: pointer;
                    &.top{
                        position: fixed;
                        bottom: 8px;
                        transform: translateX(-50%) rotate(180deg);
                    }
                    .arrow {
                        position: absolute;
                        top: 2px;
                        left: 50%;
                        transform: translateX(-50%);
                        width: 0;
                        height: 0;
                        border-top: 4px #ccc solid;
                        border-right: 8px #1C1F2C solid;
                        border-bottom: 4px #1C1F2C solid;
                        border-left: 8px #1C1F2C solid;
                    }
                }
                .tab{
                    position: absolute;
                    top: 0;
                    right: 50px;
                    height: 38px;
                    line-height: 38px;
                    color: #CCC;
                    z-index: 900;
                    span{
                        margin-right: 10px;
                        padding: 5px;
                        cursor: pointer;
                    }
                    .selected {
                        background-color: #FF9900;
                        border-radius: 4px;
                        color: #fff;
                    }
                }
                #tv_chart_container{
                    height: 100%;
                }
            }
        }
    }
    .ticker-content-right{
        display: inline-block;
    }
</style>
