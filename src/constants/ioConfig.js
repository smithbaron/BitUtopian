export const wsUrl = {
  Huobi: 'wss://api.huobi.pro/ws',
  OKEx: 'wss://real.okex.com:8443/ws/v3',
  Bibox: 'wss://push.bibox.com',
  Binance: 'wss://stream.binancefuture.com',
  Gate: 'wss://ws.gate.io/v3/'
}

export const requestK = {
  req: 'market.bchusdt.kline.1min',
  id: 'requestK',
  from: Math.round(new Date().getTime() / 1000) - 3600,
  to: Math.round(new Date().getTime() / 1000)
}

export const subTickers = { // 订阅数据
  Huobi: {
    sub: 'market.tickers',
    id: 'subTickers'
  },
  OKEx: {
    op: 'subscribe',
    args: [`spot/ticker:ETH-USDT`]
  },
  Bibox: {
    event: 'addChannel',
    channel: 'bibox_sub_spot_$pair_kline_$period',
    apiKey: '3028f7f8f7da581261cba2947f804df470bf81b5'
  }
}

export const subKline = { // 订阅数据
  sub: 'market.bchusdt.kline.1min',
  id: 'id1'
}
