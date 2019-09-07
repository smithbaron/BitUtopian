<template>
    <div id="tv_chart_container"></div>
</template>

<script>
import TVjsApi from '../helper/TVjsApi'

export default {
  name: 'TVChartContainer',
  props: ['exchange', 'language', 'symbol'],
  data () {
    return {
      TVjsApi: null
    }
  },
  mounted () {
    const config = {
      exchange: this.exchange,
      symbol: this.symbol.replace('/', '').toLocaleLowerCase(),
      locale: this.language
    }
    this.TVjsApi = new TVjsApi(config)
    this.TVjsApi.init()
  },
  watch: {
    symbol (symbol) {
      if (symbol) {
        this.TVjsApi.symbol = symbol.replace('/', '').toLocaleLowerCase()
        this.TVjsApi.widgets.chart().setSymbol(symbol.replace('/', '').toLocaleLowerCase());
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
