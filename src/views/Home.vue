<template>
  <Layout>
    <Header>
      <CommonHeader :language="language" :changeState="changeState" :isLogin="isLogin"></CommonHeader>
    </Header>
    <Content>
      <MarketTickers :language="language" :isLogin="isLogin"></MarketTickers>
      <div class="content1">
        <div class="con-con">
          <Row>
            <Col span="8">
              <p class="dollar-data" style="padding-left: 44px;">$--</p>
              <p class="time-data">24HOUR VOLUME</p>
            </Col>
            <Col span="8">
              <p class="dollar-data">$--</p>
              <p class="time-data">7HOUR VOLUME</p>
            </Col>
            <Col span="8">
              <p class="dollar-data" style="padding-right: 37px">$--</p>
              <p class="time-data">30HOUR VOLUME</p>
            </Col>
          </Row>
        </div>
      </div>
      <div v-if="language === 'en'" class="content2" style="height: 385px;">
        <div class="con-con2">
          <p class="con2-title">BitUtopian PLATFORM FEATURES</p>
          <p class="con2-detail">
            BitUtopian is a full-featured spot trading platform mainly for digital assets & crypto-currencies,
            <br/>
            including Bitcoin, Ethereum, EOS, Litecoin, Ripple, NEO, Monero and so on.
          </p>
          <Row>
            <Col span="8">
              <img src="../images/icon1.png" class="icon-img">
              <div class="con-icon left">
                <p class="icon-p1">EXCHANGE</p>
                <p class="icon-p2">
                  BitUtopian offers orders with the highest liquidity in the whole world, where users are allowed to easily exchange Bitcoin, Ethereum, EOS, Litecoin, Ripple, NEO and many other digital assets with minimal slippage.
                </p>
              </div>
            </Col>
            <Col span="8">
              <img src="../images/icon2.png" class="icon-img">
              <div class="con-icon left">
                <p class="icon-p1">INDICATORS</p>
                <p class="icon-p2">
                  BitUtopian provides users with applications of some economic indicators of traditional stock market in the crypto-currency market so that users can have a better understanding and self-analysis of volatility trends of Bitcoin and other digital asset.
                </p>
              </div>
            </Col>
            <Col span="8">
              <img src="../images/icon3.png" class="icon-img">
              <div class="con-icon left">
                <p class="icon-p1">TRADING VIEW</p>
                <p class="icon-p2">BitUtopian will be open to TradingView's crypto-currency market view so that it will be easier to switch between transactions and ideas, allowing the sharing and exchanges of opinions among more users.</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div v-else class="content2" >
        <div class="con-con2">
          <p class="con2-title">BitUtopian平台特点</p>
          <p class="con2-detail">BitUtopian是一个功能齐全的现货交易平台的主要数字资产和加密货币，<br/>包括Bitcoin, Ethereum, EOS, Litecoin, Ripple, NEO, Monero和更多。
          </p>
          <Row>
            <Col span="8">
              <img src="../images/icon1.png" class="icon-img">
              <div class="con-icon left">
                <p class="icon-p1">交易</p>
                <p class="icon-p2">
                  BitUtopian提供了世界上最具流动性的订货单，允许用户轻松地交换比特币、以太坊(Ethereum)、EOS、莱特币(Litecoin)、Ripple、NEO和许多其他数字资产，而且几乎没有任何下滑。
                </p>
              </div>
            </Col>
            <Col span="8">
              <img src="../images/icon2.png" class="icon-img">
              <div class="con-icon left">
                <p class="icon-p1">指标</p>
                <p class="icon-p2">
                  BitUtopian为用户提供了传统股票市场的一些经济学指标如何在加密货币市场应用，更好的了解和自我分析Bitcoin和许多其他数字资产波动趋势。
                </p>
              </div>
            </Col>
            <Col span="8">
              <img src="../images/icon3.png" class="icon-img">
              <div class="con-icon left">
                <p class="icon-p1">策略</p>
                <p class="icon-p2">
                  BitUtopian将要接入TradingView的加密货币市场观点，更加便捷在交易和观点中进行切换，让更多的用户分享自己的观点并且进行交流。
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div v-if="language === 'en'" class="content3">
        <div class="con-con3">
          <Row>
            <Col span="10">
              <p class="con3-title" style="padding-bottom:5px">WHAT'S AN INDICATORS?</p>
              <p class="con3-title2" style="padding-bottom:15px;line-height: inherit;">BitUtopian will collect and sort out some mainstream indicators in traditional stock market, for example, the Bollinger Band, which of course are applicable to the crypto-currency market, to help users to better grasp market changes. 1) When the upper, middle and lower trajectories of the Bollinger Band go upward at the same time, obviously there are features showing strong stock price, the stock price will continue to rise in the short term and investors should resolutely hold stocks for price rise or buy in on the dips. 2) When the upper, middle and lower trajectories of the Bollinger Band go downward at the same time, obviously there are features showing weak stock price, the stock price will continue to fall in the short term and investors should resolutely hold out or sell on rallies.
              </p>
              <a href="/indicators">
                <Button type="warning" ghost>NOW LET'S LEARN</Button>
              </a>
            </Col>
            <Col span="2" style="color: #fff">.</Col>
            <Col span="12" class="center">
              <TVChart studies="BB@tv-basicstudies" height="348" theme="dark" containerId="tradingview_9ada4"></TVChart>
            </Col>
          </Row>
        </div>
      </div>
      <div v-else class="content3">
        <div class="con-con3">
          <Row>
            <Col span="10">
              <p class="con3-title">什么是指标?</p>
              <p class="con3-title2">
                BitUtopian将会整理一些主流的传统股票市场指标，当然这些也同样适用于加密货币市场，帮助用户更好的掌握市场变化规律。如布林带，1）当布林线的上、中、下轨线同时向上运行时，表明股价强势特征非常明显，股价短期内将继续上涨，投资者应坚决持股待涨或逢低买入。2）当布林线的上、中、下轨线同时向下运行时，表明股价的弱势特征非常明显，股价短期内将继续下跌，投资者应坚决持币观望或逢高卖出。
              </p>
              <a href="indicators.html">
                <Button type="warning" ghost>让我们开始学习</Button>
              </a>
            </Col>
            <Col span="2" style="color: #fff">.
            </Col>
            <Col span="12" >
              <TVChart studies="BB@tv-basicstudies" height="348" theme="dark" containerId="tradingview_9ada4"></TVChart>
            </Col>
          </Row>
        </div>
      </div>
      <div v-if="language === 'en'" class="content4">
        <div class="con-con4">
          <p class="con4-title">TRADING VIEW</p>
          <p class="con4-detail">TradingView's crypto-currency market views will be introduced to BitUtopian,<br/> making it a great community of business strategies.
          </p>
          <div class="ul-data">
            <Row :gutter="25">
              <Col span="8">
                <div class="border-style">
                  <p class="p-title">Bitcoin Falling wedge target.</p>
                  <p class="p1">BTCUSD</p>
                  <p class="p2"><img src="../images/img1.png" class="icon-ulimg"></p>
                  <p class="p3">
                    <span class="pname">earnology</span>
                    <span class="right phours">61 views・Jun 26</span>
                  </p>
                  <p class="p4">
                    Bitcoin reached the target of falling wedge. Thank you earnology
                  </p>
                </div>
              </Col>
              <Col span="8">
                <div class="border-style">
                  <p class="p-title">BTC SHORT short term & LONG long term (Monthly/Yearly TF)</p>
                  <p class="p1">BTCUSD</p>
                  <p class="p2"><img src="../images/img2.png" class="icon-ulimg"></p>
                  <p class="p3">
                    <span class="pname">forexsaint</span>
                    <span class="right phours">1023 views・May 15</span>
                  </p>
                  <p class="p4">
                    TF- Multi-W1 or MN BIAS - Bearish ENTRY - 8200 SL - 10400 TP - 2300 (Intermediate TP - 5500(Grade AA), 4300(Gr AAA), 2300-1900(Gr AAA)) RR - 2.9 (B) TF- Multi-MN or YR BIAS - Bullish ENTRY- 2300 SL - 675 TP - 14900...
                  </p>
                </div>
              </Col>
              <Col span="8">
                <div class="border-style">
                  <p class="p-title">BTC 2019 Big Breakout</p>
                  <p class="p1">XBTUSD</p>
                  <p class="p2"><img src="../images/img3.png" class="icon-ulimg"></p>
                  <p class="p3">
                    <span class="pname">cryptovel</span>
                    <span class="right phours">99 views・Mar 28</span>
                  </p>
                  <p class="p4">
                    in this chart i define the BTC big breakout which happen soon in any side, i marked both side hieght how much it goes it breakout done, if price goes up we come in bull trend & if price goes done then we faced last downtrend with bottom.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <a href="https://in.tradingview.com/markets/cryptocurrencies/ideas/" target="_blank"><Button type="warning" ghost>NOW LET'S LEARN</Button></a>
        </div>
      </div>
      <div v-else class="content4">
        <div class="con-con4">
          <p class="con4-title">策略</p>
          <p class="con4-detail">BitUtopian将要接入TradingView的加密货币市场观点，它更会是一个很棒的策略社区。
          </p>
          <div class="ul-data">
            <Row :gutter="25">
              <Col span="8">
                <div class="border-style">
                  <p class="p-title">【分析篇】BTC——疯狂的比特币，贪婪的投资者！何处才是顶？</p>
                  <p class="p1">XBTUSD</p>
                  <p class="p2"><img src="../images/imgcn1.png" class="icon-ulimg"></p>
                  <p class="p3">
                    <span class="pname">LuFan</span>
                    <span class="right phours">612 浏览・6月 26</span>
                  </p>
                  <p class="pcn4">
                    最近的加密货币市场多少有些疯狂，疯狂在于比特币的上涨，让很多人高到不敢买！纷纷屯了主流币，山寨币，前者可能受到市场的共识认可也算可以，后者有些币仍半死不活，偶有作妖。 回看我前期发布的一些观点，我的看法一直都是涨！ 但到了这个阶段我想泼…
                  </p>
                </div>
              </Col>
              <Col span="8">
                <div class="border-style">
                  <p class="p-title">比特幣兌美元(BTCUSD)-大餅動向20190124
                  </p>
                  <p class="p1">BTCUSD</p>
                  <p class="p2"><img src="../images/imgcn2.png" class="icon-ulimg"></p>
                  <p class="p3">
                    <span class="pname">TouFrancis</span>
                    <span class="right phours">1194 浏览・1月 24</span>
                  </p>
                  <p class="pcn4">
                    Hi everyone， 　　一如既往...！我們看結果，然後跟隨，調整繼續往下看結果...其餘的再多的理論都毫無意義...是不是？ TouFrancis語錄- （以上內容若需轉載或部分引用請註明出處） 關於＂進階ＰＡ＂，我所知道並認可的一些重要細節 1.學習從其他交…
                  </p>
                </div>
              </Col>
              <Col span="8">
                <div class="border-style">
                  <p class="p-title">比特币出现2000美元回调，牛市多暴跌</p>
                  <p class="p1">XBTUSD</p>
                  <p class="p2"><img src="../images/imgcn3.png" class="icon-ulimg"></p>
                  <p class="p3">
                    <span class="pname">Pento_Investment</span>
                    <span class="right phours">3037 浏览・6月 27</span>
                  </p>
                  <p class="pcn4">
                    昨天下午在市场冲击13000美元的时候，我在微博上提到了昨天可能会是一个重要的高点。因为市场在加速，甚至超出了对数坐标轴的趋势通道，很显然多头在逼空，昨晚美国时间的行情一度接近1.4万美元，大量空头被迫平仓后，以多头的获利出局而结束本轮…
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <a href="https://cn.tradingview.com/markets/cryptocurrencies/ideas/" target="_blank"><Button type="warning" ghost>让我们开始学习</Button></a>
        </div>
      </div>
      <div v-if="language === 'en'" class="content5">
        <div class="con-con5">
          <p class="con5-title">COMMUNITY</p>
          <Row>
            <Col span="24">
              <a href="https://twitter.com/Baron56410187" target="_blank">
                <img src="../images/bottom1.png">
              </a>
              <a href="http://t.me/BitUtopian" target="_blank">
                <img src="../images/bottom2.png">
              </a>
              <a href="https://www.facebook.com/baron.frank.5220" target="_blank">
                <img src="../images/bottom3.png">
              </a>
              <a href="https://medium.com/@baronfrank" target="_blank">
                <img src="../images/bottom4.png">
              </a>
              <a href="https://github.com/smithbaron/BitUtopian" target="_blank">
                <img src="../images/bottom5.png" style="margin-right: 0;">
              </a>
            </Col>
          </Row>
        </div>
      </div>
      <div v-else class="content5">
        <div class="con-con5">
          <p class="con5-title">社区</p>
          <Row>
            <Col span="24">
              <a href="https://twitter.com/Baron56410187" target="_blank">
                <img src="../images/bottom1.png">
              </a>
              <a href="http://t.me/BitUtopian" target="_blank">
                <img src="../images/bottom2.png">
              </a>
              <a href="https://www.facebook.com/baron.frank.5220" target="_blank">
                <img src="../images/bottom3.png">
              </a>
              <a href="https://medium.com/@baronfrank" target="_blank">
                <img src="../images/bottom4.png">
              </a>
              <a href="https://github.com/smithbaron/BitUtopian" target="_blank">
                <img src="../images/bottom5.png" style="margin-right: 0;">
              </a>
            </Col>
          </Row>
        </div>
      </div>
    </Content>
  </Layout>
</template>

<script>
import { Layout, Row, Col, Button } from 'iview'
import MarketTickers from '../components/MarketTickers'
import TVChart from '../components/TVChart'
import CommonHeader from '../components/CommonHeader'

export default {
  name: 'Home',
  components: {
    Layout,
    Row,
    Col,
    Button,
    CommonHeader,
    TVChart,
    MarketTickers
  },
  data () {
    return {
      theme: 'dark',
      language: 'en',
      isLogin: true
    }
  },
  mounted () {
    const urlParams = this.$route.query
    this.language = urlParams.lang || 'en'
  },
  watch: {
    '$route' (to) {
      const urlParams = to.query
      this.language = urlParams.lang || 'en'
    }
  },
  methods: {
    changeState (state, value) {
      this[state] = value
    }
  }
}
</script>
<style lang="css">
  .content1{
    background-color: #f2f2f2;
    height: 123px;
    width: 100%;
    margin: 0 auto;
  }
  .con-con{
    width: 1130px;
    text-align: center;
    margin: 0 auto;
  }
  .dollar-data{
    font-size: 28px;
    color: #333;
  }
  .time-data{
    color: #9d9d9d;
    font-size: 14px;
  }
  .con-con .ivu-col-span-8{
    padding-top: 30px
  }
  .con-con .ivu-col-span-8:nth-child(1){
    text-align: left;
  }
  .con-con .ivu-col-span-8:nth-child(2){
    text-align: center;
  }
  .con-con .ivu-col-span-8:nth-child(3){
    text-align: right;
  }
  .content2{
    border-bottom: 1px solid #f2f2f2;
    background-color: #fff;
    height: 361px;
    width: 100%;
    margin: 0 auto;
  }
  .new-width{
    width: 900px;
  }
  .con-con2{
    width: 1130px;
    margin: 0 auto;
    padding-top: 25px;
    text-align: center;
  }
  .con-con2 .ivu-col-span-8{
    width: 32.33333333%;
  }
  .con-con2 .ivu-col-span-8:nth-child(2){
    width: 30.33333333%;
    margin-left:2%;
    margin-right:2%;
  }
  .con-con2 .con2-title{
    text-align: center;
    letter-spacing: 1px;
    font-size: 28px;
    padding-bottom: 10px;
    color: #272727;
    font-weight: bold;
  }
  .con-con2 .con2-detail{
    font-size: 14px;
    color: #5b5b5b;
    padding-bottom: 30px;
  }

  .con-con2 .icon-img{

  }
  .con-icon{
    margin: 0 auto;
  }
  .con-icon .icon-p1{
    font-size: 22px;
    color: #333;
    padding-bottom: 15px;
  }
  .con-icon .icon-p2{
    font-size: 14px;
    color: #9d9d9d;
    text-align: center;

  }
  .con-icon .icon-p1 a{
    font-size: 14px;
    color: #6a9ac0;
    padding-bottom: 15px;
  }
  .content3{
    background-color: #fff;
    height: auto;
    width: 100%;
    margin: 0 auto;
    border-bottom: 1px solid #f2f2f2;
  }
  .con-con3{
    width: 1130px;
    margin: 0 auto;
    padding-top: 30px;
    padding-bottom: 30px;
    text-align: left;
  }
  .center{
    text-align: center;
  }
  .content3 img{
    height: 350px;
  }
  .ivu-btn-ghost.ivu-btn-warning{
    font-size: 14px;
    background-color: transparent;
  }
  .con3-title{
    letter-spacing: 1px;
    font-size: 28px;
    color: #272727;
    font-weight: bold;
    padding-bottom: 20px;
  }
  .con3-title2{
    font-size: 14px;
    color: #9d9d9d;
    padding-bottom: 20px;
    line-height: 26px;
  }
  .content4{
    border-bottom: 1px solid #f2f2f2;
    background-color: #fff;
    height: 723px;
    width: 100%;
    margin: 0 auto;
  }

  .new-width{
    width: 900px;
  }
  .con-con4{
    width: 1130px;
    margin: 0 auto;
    padding-top: 20px;
    text-align: center;
  }
  .con-con4 .con4-title{
    text-align: center;
    letter-spacing: 1px;
    font-size: 28px;
    color: #272727;
    font-weight: bold;
    padding-bottom: 5px;
  }
  .con-con4 .con4-detail{
    font-size: 14px;
    color: #5b5b5b;
    padding-bottom: 30px;
  }
  .ul-data .border-style{
    border: 1px solid #ededed;
    box-shadow: #d7d7d7 0px 0px 30px 5px;
    border-radius: 8px;
    padding: 20px;
    text-align: left;
  }
  .content4 .ivu-btn-ghost.ivu-btn-warning{
    margin-top: 30px;
  }
  .content4 .icon-ulimg{
    width: 320px;
    height: 200px;
  }
  .content4 .left{
    float: left;
  }
  .content4 .right{
    float: right;
  }
  .content4 .p-title{
    font-size: 18px;
    color: #333;
    height: 64px;
    padding-bottom: 10px;
  }
  .content4 .p1{
    color: #9d9d9d;
    font-size: 14px;
    padding-bottom: 5px;
  }
  .content4 .p2{
    text-align: center;
    padding-bottom: 10px;
  }
  .content4 .p4{
    text-align: left;
    font-size: 14px;
    color: #9d9d9d;
    height: 115px;
    padding-top: 10px;
  }
  .content4 .pcn4{
    text-align: left;
    font-size: 14px;
    color: #9d9d9d;
    height: 135px;
    padding-top: 10px;
  }
  .content4 .pname{
    font-size: 18px;
    color: #333;
  }
  .content4 .phours{
    color: #9d9d9d;
    font-size: 14px;
  }
  .content5{
    background-color: #f2f2f2;
    height: 147px;
    width: 100%;
    margin: 0 auto;
  }
  .content5 .con-con5{
    width: 1130px;
    margin: 0 auto;
    padding-top: 20px;
    text-align: center;
  }
  .con-con5 .con5-title {
    text-align: center;
    letter-spacing: 1px;
    font-size: 28px;
    color: #272727;
    font-weight: bold;
  }
  .con-con5 .ivu-row{
    padding-top: 20px;

  }
  .con-con5 .ivu-row img{
    margin-right: 40px;
    height: 30px;
  }
  .height50{
    margin-top: 100px;
    color: #fff;
    clear: both;
    width: 100%;
  }
</style>
