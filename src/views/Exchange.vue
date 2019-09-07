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
            ></TickerSide>
            <div class="ticker-content-wrapper">
                <div class="ticker-content-left">
                    <div class="trading-chart">
                        <TVChartHeader :symbol="symbol"
                                       :exchange="exchange"
                                       :symbolDetail="symbolDetail"
                                       :language="language"
                        ></TVChartHeader>
                        <div class="TVChartContainer">
                            <div class="tab">
                                <span :class="{'selected': tabType === 'tradingView'}" @click="tabChange('tradingView')">TradingView</span>
                                <span :class="{'selected': tabType === 'depth'}" @click="tabChange('depth')">Depth</span>
                            </div>
                            <TVChartContainer v-if="tabType === 'tradingView'"
                                              :symbol="symbol"
                                              :exchange="exchange"
                                              :language="language"
                            ></TVChartContainer>
                            <EChartsDepth v-else
                                          :symbolDepth="symbolDepth"
                                          :symbol="symbol"
                                          :language="language"
                            ></EChartsDepth>
                        </div>
                    </div>
                    <TradeColumn></TradeColumn>
                </div>
                <div class="ticker-content-right">
                    <SymbolDepth :symbolDepth="symbolDepth"
                                 :symbolDetail="symbolDetail"
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
    TradeDetail
  },
  data () {
    const urlParams = this.$route.query
    return {
      theme: 'dark',
      symbol: 'BTC/USDT',
      exchange: 'Huobi',
      language: urlParams.lang || 'en',
      tickers: [],
      symbolDetail: {},
      symbolDepth: {},
      tradeDetail: [],
      socket: null,
      isLogin: true,
      tabType: 'tradingView',
      TVjsApi: null
    }
  },
  created () {
    Socket.register({ commonSetData: this.changeState })
    Socket.connect(this.exchange, () => {
      this.sendSocket(this.symbol)
    })
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
    getDataCallback (data) {

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
        height: 780px;
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
        width: 260px;
    }
</style>
