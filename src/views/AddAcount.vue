<template>
  <Layout ref="addAccount" class="add-account ivu-menu-dark">
    <Header class="account-header">
      <CommonHeader :language="language" :changeState="changeState" :isLogin="isLogin"></CommonHeader>
    </Header>
    <Content class="account-content">
      <div class="account-close">
        <img src="@/images/u4614.png" />
      </div>
      <div class="account-inner">
        <div class="account-title">
          <div>
            <span>{{language === 'en' ? 'Add an exchange account' : '添加交易所账户'}}</span>
          </div>
        </div>
        <div class="account-form">
          <div class="form-item select">
            <div class="item-content">
              <Select v-model="form.select">
                <Option :value="1">first</Option>
                <Option :value="2">second</Option>
              </Select>
            </div>
            <div class="item-line"></div>
          </div>
          <div class="form-item api-key">
            <div class="item-content">
              <input type="text" v-model="form.apiKey" placeholder="API key" />
            </div>
            <div class="item-line">
              <img src="@/images/u409.png" />
              <span class="line-text">
                See the case
                Deposit with
              </span>
              <span class="line-link">binance.com</span>
            </div>
          </div>
          <div class="form-item api-secret">
            <div class="item-content">
              <input type="text" v-model="form.apiSecret" placeholder="API secret" />
            </div>
            <div class="item-line">
              <span>Like API key</span>
            </div>
          </div>
          <div class="form-item account-remark">
            <div class="item-content">
              <input
                type="text"
                v-model="form.remark"
                :placeholder="language === 'en' ? 'Remarks for this account' : '该账号备注'"
              />
            </div>
            <div class="item-line"></div>
          </div>
          <div class="form-item ip">
            <div class="item-content">
              <input
                type="text"
                v-model="form.ip"
                :placeholder="language === 'en' ? 'ip (required)' : '必填'"
              />
            </div>
            <div class="item-line"></div>
          </div>
          <div class="form-item password">
            <div class="item-content">
              <input
                type="text"
                v-model="form.password"
                :placeholder="language === 'en' ? 'Set a separate payment password' : '设置独立支付密码'"
              />
            </div>
            <div class="item-line"></div>
          </div>
          <div class="form-item form-btn">
            <img src="@/images/u5297.png" />
            <div class="btn-text">{{language === 'en' ? 'add' : '添加'}}</div>
          </div>
        </div>
      </div>
    </Content>
  </Layout>
</template>
<script>
import { Layout, Header, Content, Select, Option } from 'iview'
import CommonHeader from '@/components/CommonHeader'
import CryptoJS from 'crypto-js'
import pako from 'pako'
// import Socket from '@/helper/ioService'
export default {
  name: 'AddAccount',
  components: {
    Layout,
    Header,
    Content,
    Select,
    Option,
    CommonHeader
  },
  data () {
    return {
      language: 'en',
      isLogin: false,
      form: {
        select: '',
        apiKey: '',
        apiSecret: '',
        remark: '',
        ip: '',
        password: ''
      },
      Socket: null
    }
  },
  mounted () {
    this.$refs['addAccount'].$el.style.height = window.innerHeight + 'px'
    this.connect()
  },
  methods: {
    changeState (state, value) {
      this[state] = value
    },
    handleData (blob) {},
    getSign (data) {
      let secret = '45bf703c9c81423fc932a074c660ed9a184929e4'
      let sdic = Object.keys(data).sort() // sort in ascending
      let dataTmp = {}
      for (let ki in sdic) {
        dataTmp[sdic[ki]] = data[sdic[ki]]
      }
      return CryptoJS.HmacMD5(
        JSON.stringify(dataTmp),
        String(secret)
      ).toString()
    },
    subscribe (ws) {
      let pairs = ['BIX_BTC', 'BIX_USDT', 'BIX_ETH', 'BIX_OTHER']
      // sub login
      let data = {
        event: 'addChannel',
        channel: 'bibox_sub_spot_BIX_BTC_kline_day',
        apikey: '3028f7f8f7da581261cba2947f804df470bf81b5'
      };
      let sign = this.getSign(data)
      data.sign = sign
      ws.send(JSON.stringify(data))
    },
    ping (ws) {
      let now = new Date().getTime()
      ws.send(JSON.stringify({ ping: now }))
    },
    pong(ws, msg) {
      ws.send(JSON.stringify({ pong: msg }))
    },
    connect () {
      this.Socket = new WebSocket('wss://push.bibox.com')
      this.Socket.onopen = event => {
        this.subscribe(this.Socket)
        this.ping(this.Socket)
      };
      this.Socket.onmessage = event => {
        let msg = JSON.parse(event.data)

        if (msg.ping) {
          this.pong(this.Socket, msg.ping)
          return
        } else if (msg.pong) {
          console.log('pong', msg.pong)
          return
        }

        if (msg[0]) {
          this.handleData(msg[0])
        } else {
          console.error('msg err: ', msg)
        }
      }
      this.Socket.onclose = event => {
        console.log(event, 'close')
      }
    }
  }
}
</script>
<style lang="scss">
.add-account {
  width: 100%;
  .account-header {
    height: 50px;
  }
  .account-content {
    position: relative;
    width: 100%;
    .account-inner {
      width: 40%;
      margin: 0 auto;
    }
    .account-title {
      position: relative;
      display: flex;
      font-size: 26px;
      color: #ccc;
      justify-content: center;
      margin-bottom: 20px;
    }
    .account-form {
      background: white;
      padding: 40px 30px;
      .form-item {
        margin-bottom: 10px;
      }
      input {
        border: none;
        outline: none;
        width: 100%;
        height: 34px;
      }
      input::placeholder {
        font-size: 16px;
      }
      .ivu-select-placeholder {
        font-size: 16px;
        color: #999;
        padding: 0px;
      }
      .ivu-select-selection {
        border: none;
      }
      .ivu-input:focus {
        border: none;
      }
      .item-line {
        padding: 5px 0px;
        border-top: 1px solid #ccc;
        text-align: right;
        color: #999;
        height: 30px;
        font-size: 14px;
        /*color: #ff9900;*/
        img {
          height: 14px;
          width: 14px;
          vertical-align: middle;
        }
        .line-link {
          color: #ff6600;
          cursor: pointer;
          text-decoration: underline;
        }
      }
      .form-btn {
        position: relative;
        img {
          width: 100%;
          height: 40px;
        }
        .btn-text {
          position: absolute;
          top: 0;
          left: 0;
          height: 40px;
          width: 100%;
          text-align: center;
          line-height: 40px;
          color: white;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
        }
      }
    }
    .account-close {
      position: absolute;
      right: calc(1% + 20px);
      top: 15px;
      img {
        height: 30px;
        width: 30px;
        vertical-align: middle;
        cursor: pointer;
      }
    }
  }
}
</style>
