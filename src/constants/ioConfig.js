export const wsUrl = {
  Huobi: 'wss://api.huobi.pro/ws'
}

export const requestK = {
  req: 'market.bchusdt.kline.1min',
  id: 'requestK',
  from: Math.round(new Date().getTime() / 1000) - 3600,
  to: Math.round(new Date().getTime() / 1000)
}

export const subTickers = { // 订阅数据
  sub: 'market.tickers',
  id: 'subTickers'
}

export const subKline = { // 订阅数据
  sub: 'market.bchusdt.kline.1min',
  id: 'id1'
}
