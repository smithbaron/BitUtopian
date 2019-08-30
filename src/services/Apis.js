const huoBiUrl = 'https://api.huobi.pro'
const OKExUrl = 'https://www.okex.com/api/spot/v3'

const APIS = {
  huoBiMarket: huoBiUrl + '/market/tickers', // 火币交易所所有交易对的最新 Tickers
  OKExMarket: OKExUrl + '/instruments/ticker', // OKEX交易所所有交易对的最新 Tickers
  huoBiSymbols: OKExUrl + '/v1/common/symbols', // 火币交易所所有交易对
  OKExSymbols: OKExUrl + '/instruments' // OKEX交易所所有交易对
}

export default APIS
