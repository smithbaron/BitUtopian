// export function loopRequest (method, callback) {
//   const onceFetch = () => {
//     setTimeout(() => {
//       method().then(data => {
//         console.log(data)
//         callback(data)
//         // onceFetch()
//       }).catch((e) => {
//         console.log(e)
//         // onceFetch()
//       })
//     }, 2000)
//   }
//   onceFetch()
// }

// 循环请求接口
export const loopRequest = {
  timer: null,
  type: '',
  onceFetch: function (method, callback) {
    this.timer = setTimeout(() => {
      const type = this.type
      const self = this
      method().then(data => {
        if (type === self.type) {
          callback(data)
          // self.onceFetch(method, callback)
        } else {
          return Promise.reject(data)
        }
      }).catch((e) => {
        console.log(e)
        if (type === self.type) {
          // self.onceFetch(method, callback)
        }
      })
    }, 2000)
  },
  loop: function (method, callback, type) {
    this.timer && clearInterval(this.timer)
    this.type = type
    this.onceFetch(method, callback)
  }
}

// 格式化市场信息
export function formatTickers (data, type) {
  switch (type) {
    case 'OKEx': {
      return data.map(item => {
        const { instrument_id: symbol, last, open_24h: open, low_24h: low, high_24h: high, quote_volume_24h: volume } = item
        const change = tickerChange(open, last)
        return {
          symbol: symbol.replace('-', '/'),
          last: formatE7(last),
          change,
          high: formatE7(high),
          low: formatE7(low),
          volume
        }
      }).sort((prev, next) => {
        const x = prev.symbol.toLowerCase()
        const y = next.symbol.toLowerCase()
        if (x < y) { return -1 }
        if (x > y) { return 1 }
        return 0
      })
    }
    case 'Huobi':
    default: {
      return data.map(item => {
        const { symbol, close, open, low, high, vol } = item
        const change = tickerChange(open, close)
        return {
          symbol: formatSymbol(symbol),
          last: formatE7(close),
          change,
          high: formatE7(high),
          low: formatE7(low),
          volume: vol
        }
      }).sort((prev, next) => {
        const x = prev.symbol.toLowerCase()
        const y = next.symbol.toLowerCase()
        if (x < y) { return -1 }
        if (x > y) { return 1 }
        return 0
      })
    }
  }
}

// 格式化市场信息
export function formatSideTickers (data, type) {
  switch (type) {
    case 'OKEx': {
      return data.map(item => {
        const { instrument_id: symbol, last, open_24h: open } = item
        const change = tickerChange(open, last)
        return {
          pair: symbol.replace('-', '/'),
          price: formatE7(last),
          change
        }
      })
    }
    case 'Huobi':
    default: {
      return data.map(item => {
        const { symbol, close, open } = item
        const change = tickerChange(open, close)
        return {
          pair: formatSymbol(symbol),
          price: formatE7(close),
          change
        }
      })
    }
  }
}

export function connectList (arr1, arr2) {
  const temp = [...arr1]
  for (let i = 0; i < arr2.length; i++) {
    let flag = false
    let change = arr2[i]
    for (let j = 0; j < arr1.length; j++) {
      if (change.pair === arr1[j].pair) {
        flag = true
        temp[j] = change
        break
      }
    }
    if (!flag) {
      temp.push(change)
    }
  }
  return temp
}

export function sortList (arr) {
  return arr.sort((prev, next) => {
    const x = prev.pair.toLowerCase()
    const y = next.pair.toLowerCase()
    if (x < y) { return -1 }
    if (x > y) { return 1 }
    return 0
  })
}

// 计算货币24小时涨跌幅
export function tickerChange (open, close) {
  const num = ((close - open) / open * 100).toFixed(2) + ''
  if (num.slice(0, 1) !== '-') {
    return `+${num}%`
  }
  return `${num}%`
}

// 格式化火币API返回的币种名称
export function formatSymbol (symbol) {
  return symbol.toUpperCase().replace(/(BTC|USDT|ETH|HUSD|HT|TRX|10)$/, '/$1')
}

// e-7转换成字符串
export function formatE7 (num) {
  if ((num + '').indexOf('e-') > -1) {
    return (num * 1000 + '').replace('0.', '0.000')
  }
  return num + ''
}

export function addZero(num) {
  if (num < 10) {
    return `0${num}`
  }
  return num
}