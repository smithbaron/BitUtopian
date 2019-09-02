<template>
    <Layout class="exchange-wrapper">
        <Header>
            <CommonHeader :language="language" :changeState="changeState"></CommonHeader>
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
                        ></TVChartHeader>
                        <div class="TVChartContainer" id="tv_chart_container"></div>
                    </div>
                    <TradeColumn></TradeColumn>
                </div>
                <div class="ticker-content-right">
                    <SymbolDepth :symbolDepth="symbolDepth" :symbolDetail="symbolDetail"></SymbolDepth>
                    <TradeDetail :tradeDetail="tradeDetail"></TradeDetail>
                </div>
            </div>
        </Content>
        <EChartsDepth :symbolDepth="symbolDepth"></EChartsDepth>
    </Layout>
</template>

<script>
import { Layout } from 'iview'
import Socket from '../helper/ioService'
import TVjsApi from '../helper/TVjsApi'
import CommonHeader from '../components/CommonHeader'
import TickerSide from '../components/TickerSide'
import TVChartHeader from '../components/TVChartHeader'
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
      isLogin: false
    }
  },
  created () {
    Socket.register({ commonSetData: this.changeState })
    Socket.connect(this.exchange, () => {
      this.sendSocket(this.symbol)
    })
  },
  mounted () {
    const config = {
      exchange: this.exchange,
      symbol: this.symbol.replace('/', '').toLocaleLowerCase(),
      locale: this.language,
      callback: (data) => this.getDataCallback(data)
    }
    const _TVjsApi = new TVjsApi(config)
    _TVjsApi.init()
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
        width: calc(100% - 300px);
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
            }
        }
    }
    .ticker-content-right{
        display: inline-block;
        width: 260px;
    }
</style>
