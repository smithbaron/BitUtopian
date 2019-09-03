<template>
    <div id="myChart" :style="{width: '637px', height: '427px'}"></div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'EChartsDepth',
  props: ['symbolDepth'],
  data () {
    return {
      step: 5
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
          axisLabel: {
            showMinLabel: false,
            formatter: function (val) {
              return '￥' + val
            }
          }
        },
        yAxis: [
          {
            type: 'value',
            position: 'right',
            splitNumber: 4,
            axisTick: {
              inside: true
            },
            axisLabel: {
              inside: true,
              showMinLabel: false
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
                return [`价格 ：{a|￥${params.data[0]}}`, `总量 ：{a|${Math.round(params.data[1])}}`].join('\n')
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
              color: '#008c00'
            },
            areaStyle: {
              color: 'green',
              opacity: 0.2
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
                return [`价格 ：{a|￥${params.data[0]}}`, `总量 ：{a|${Math.round(params.data[1])}}`].join('\n')
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
              color: '#ee3523'
            },
            areaStyle: {
              color: 'red',
              opacity: 0.2
            }
          }
        ]
      })
    }
  }
}
</script>
