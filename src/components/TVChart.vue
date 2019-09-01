<template>
    <div class="tradingview-widget-container">
        <div class="TVChartContainer" :id="containerId"></div>
        <div class="tradingview-widget-copyright"></div>
    </div>
</template>
<script>
export default {
  name: 'TVChartContainer',
  props: ['height', 'containerId', 'studies', 'theme'],
  mounted () {
    var _TVjsApi = new TradingView.widget(
      {
        'width': '100%',
        'height': this.height || '348',
        'symbol': 'BINANCE:BTCUSDT',
        'interval': 'D',
        'timezone': 'Etc/UTC',
        'theme': this.theme || 'dark',
        'style': '1',
        'locale': 'en',
        'toolbar_bg': '#f1f3f6',
        'enable_publishing': false,
        'withdateranges': true,
        'hide_side_toolbar': false,
        'allow_symbol_change': true,

        'save_image': false,
        'studies': [
          this.studies
        ],
        'container_id': this.containerId
      }
    )
  }
}
</script>

<style lang="scss" scoped>
</style>
