<template>
    <div class="tradingview-widget-container">
        <div class="TVChartContainer" id="tradingview_9ada4"></div>
        <div class="tradingview-widget-copyright"></div>
    </div>
</template>
<script>
export default {
  name: 'TVChartContainer',
  mounted () {
    var _TVjsApi = new TradingView.widget(
      {
        'width': '100%',
        'height': '348',
        'symbol': 'BINANCE:BTCUSDT',
        'interval': 'D',
        'timezone': 'Etc/UTC',
        'theme': 'dark',
        'style': '1',
        'locale': 'en',
        'toolbar_bg': '#f1f3f6',
        'enable_publishing': false,
        'save_image': false,
        'studies': [
          'BB@tv-basicstudies'
        ],
        'container_id': 'tradingview_9ada4'
      }
    )
  }
}
</script>

<style lang="scss" scoped>
</style>
