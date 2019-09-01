<template>
  <Layout>
    <Header>
      <CommonHeader :language="language" :changeState="changeState"></CommonHeader>
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
      <div class="content2" style="height: 385px;">
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
      <div class="content3">
        <div class="con-con3">
          <Row>
            <Col span="10">
              <p class="con3-title" style="padding-bottom:5px">WHAT'S AN INDICATORS?</p>
              <p class="con3-title2" style="padding-bottom:15px;line-height: inherit;">BitUtopian will collect and sort out some mainstream indicators in traditional stock market, for example, the Bollinger Band, which of course are applicable to the crypto-currency market, to help users to better grasp market changes. 1) When the upper, middle and lower trajectories of the Bollinger Band go upward at the same time, obviously there are features showing strong stock price, the stock price will continue to rise in the short term and investors should resolutely hold stocks for price rise or buy in on the dips. 2) When the upper, middle and lower trajectories of the Bollinger Band go downward at the same time, obviously there are features showing weak stock price, the stock price will continue to fall in the short term and investors should resolutely hold out or sell on rallies.
              </p>
              <a href="indicators.html">
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
      <div class="content4">
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
      <div class="content5">
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
      isLogin: false
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
