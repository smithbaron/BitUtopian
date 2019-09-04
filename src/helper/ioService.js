import pako from 'pako'
import { wsUrl, subTickers } from '../constants/ioConfig'
class IoService {
  constructor () {
    this.SocketObj = {}
    this.validFuns = {}
    this.tickers = []
    this.symbol = 'btcusdt'
  }

  connect (type = 'Huobi', callback) {
    const connectUrl = wsUrl[type]
    const socketK = new WebSocket(connectUrl)
    this.SocketObj.socketK = socketK
    socketK.onopen = () => {
      socketK.send(JSON.stringify(subTickers[type]))
      callback && callback()
    }
    socketK.onmessage = (event) => {
      let blob = event.data
      let reader = new FileReader()
      reader.onload = (e) => {
        let ploydata = new Uint8Array(e.target.result)
        let msg
        if (type === 'Huobi') {
          msg = pako.inflate(ploydata, { to: 'string' })
        } else {
          if (!(typeof ploydata === 'string')) {
            msg = pako.inflateRaw(ploydata, { to: 'string' })
          } else {
            msg = ploydata
          }
        }
        this.handleData(msg)
      }
      reader.readAsArrayBuffer(blob, 'utf-8')
    }
    socketK.onclose = () => {
      console.log('connection closed')
    }
  }

  doClose () {
    this.SocketObj.socketK.close()
  }

  sendSymbolDetail (symbol) {
    if (this.symbol !== symbol) {
      this.SocketObj.socketK.send(JSON.stringify({
        unsub: `market.${this.symbol}.detail`,
        id: 'symbolDetail'
      }))
      this.symbol = symbol
    }
    this.SocketObj.socketK.send(JSON.stringify({
      sub: `market.${this.symbol}.detail`,
      id: 'symbolDetail'
    }))
  }

  sendSymbolDepth (symbol) {
    if (this.symbol !== symbol) {
      this.SocketObj.socketK.send(JSON.stringify({
        unsub: `market.${this.symbol}.depth.step2`,
        id: 'symbolDepth'
      }))
      this.symbol = symbol
    }
    this.SocketObj.socketK.send(JSON.stringify({
      sub: `market.${this.symbol}.depth.step2`,
      id: 'symbolDepth'
    }))
  }

  sendTradeDetail (symbol) {
    if (this.symbol !== symbol) {
      this.SocketObj.socketK.send(JSON.stringify({
        unsub: `market.${this.symbol}.trade.detail`,
        id: 'tradeDetail'
      }))
      this.symbol = symbol
    }
    this.SocketObj.socketK.send(JSON.stringify({
      sub: `market.${this.symbol}.trade.detail`,
      id: 'tradeDetail'
    }))
  }

  handleData (msg) {
    let data = JSON.parse(msg)
    if (data.ping) {
      // 如果是 ping 消息
      this.sendHeartMessage(data.ping)
    } else if (data.status === 'ok' || data.ch) {
      // 响应数据
      this.handleReponseData(data)
    } else {
      console.log(data)
    }
  }

  handleReponseData (response) {
    const { ch, data } = response
    switch (ch) {
      case 'market.tickers':
        this.validFuns.commonSetData('tickers', data)
        break
      case `market.${this.symbol}.detail`:
        this.validFuns.commonSetData('symbolDetail', response.tick)
        break
      case `market.${this.symbol}.depth.step2`:
        this.validFuns.commonSetData('symbolDepth', response.tick)
        break
      case `market.${this.symbol}.trade.detail`:
        this.validFuns.commonSetData('tradeDetail', response.tick.data)
        break
      default:
        console.log('handleReponseData---------------', response)
        break
    }
  }

  sendHeartMessage (ping) {
    this.SocketObj.socketK.send(JSON.stringify({ 'pong': ping }))
  }

  register (option) {
    const emptyFun = new Function()
    const { commonSetData = emptyFun } = option
    this.validFuns = {
      commonSetData
    }
  }
}

const Socket = new IoService()
export default Socket
