<template>
    <div id="myChart" :style="{width: '100%', height: '100%'}"></div>
</template>

<script>
import echarts from 'echarts'
import { commonText } from '../constants/textContents'
import { formatSidePrice } from '../helper/util'

export default {
  name: 'EChartsDepth',
  props: ['symbolDepth', 'symbol', 'language'],
  data () {
    return {
      formatSidePrice,
      commonText
    }
  },
  mounted () {
    this.drawLine()
  },
  watch: {
    symbolDepth (symbolDepth) {
      let bidsToatl = 0
      let asksToatl = 0
      if (!symbolDepth.bids) return
      const bids = symbolDepth.bids.map(item => {
        bidsToatl += item[1]
        return [item[0], bidsToatl]
      }).reverse()
      const asks = symbolDepth.asks.map(item => {
        asksToatl += item[1]
        return [item[0], asksToatl]
      })
      this.drawLine(bids, asks)
    }
  },
  methods: {
    drawLine (bids, asks) {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart'))
      const self = this
      const priceName = this.commonText['price'][this.language]
      const amountName = this.commonText['amount'][this.language]
      // 绘制图表
      myChart.setOption({
        animation: false,
        tooltip: {
          trigger: 'axis',
          confine: true,
          showContent: false,
          axisPointer: {
            lineStyle: {
              color: 'rgba(0, 0, 0, 0)'
            }
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisTick: {
            lineStyle: { color: '#ccc' }
          },
          axisLine: {
            lineStyle: { color: '#ccc' }
          },
          axisLabel: {
            color: '#ccc',
            showMinLabel: false,
            formatter: function (val) {
              return `${self.formatSidePrice(val)} ${self.symbol.split('/')[1]}`
            }
          }
        },
        yAxis: [
          {
            type: 'value',
            position: 'right',
            splitNumber: 4,
            axisTick: {
              lineStyle: { color: '#ccc' },
              inside: true
            },
            axisLabel: {
              color: '#ccc',
              inside: true,
              showMinLabel: false
            },
            axisLine: {
              lineStyle: { color: '#ccc' }
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            data: bids,
            type: 'line',
            symbol: 'circle',
            showSymbol: false,
            symbolSize: 10,
            itemStyle: {
              color: 'blue',
              borderColor: 'yellow',
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              shadowBlur: 10
            },
            label: {
              show: true,
              position: 'right',
              distance: 10,
              padding: 10,
              fontSize: 12,
              color: '#fff',
              backgroundColor: 'rgba(0, 0, 0, .6)',
              formatter: function (params) {
                return [
                  `${priceName} ：{a|${self.formatSidePrice(params.data[0])} ${self.symbol.split('/')[1]}}`,
                  `${amountName} ：{a|${self.formatSidePrice(params.data[1])}}`
                ].join('\n')
              },
              rich: {
                a: {
                  color: '#fff',
                  fontSize: '12',
                  fontWeight: 'bold',
                  lineHeight: '20'
                }
              }
            },
            lineStyle: {
              color: '#26A79A'
            },
            areaStyle: {
              color: '#26A79A',
              opacity: 0.5
            }
          },
          {
            data: asks,
            type: 'line',
            symbol: 'circle',
            showSymbol: false,
            symbolSize: 10,
            itemStyle: {
              color: 'blue',
              borderColor: 'yellow',
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              shadowBlur: 10
            },
            label: {
              show: true,
              position: 'left',
              distance: 10,
              padding: 10,
              fontSize: 12,
              color: '#fff',
              backgroundColor: 'rgba(0, 0, 0, .6)',
              formatter: function (params) {
                return [
                  `${priceName} ：{a|${self.formatSidePrice(params.data[0])} ${self.symbol.split('/')[1]}}`,
                  `${amountName} ：{a|${self.formatSidePrice(params.data[1])}}`
                ].join('\n')
              },
              rich: {
                a: {
                  color: '#fff',
                  fontSize: '12',
                  fontWeight: 'bold',
                  lineHeight: '20'
                }
              }
            },
            lineStyle: {
              color: '#EF534F'
            },
            areaStyle: {
              color: '#EF534F',
              opacity: 0.5
            }
          }
        ],
        grid: {
          x: 40,
          y: 40,
          x2: 40,
          y2: 40
        }
      })
    }
  }
}
</script>
