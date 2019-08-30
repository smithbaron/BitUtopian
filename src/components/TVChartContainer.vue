<template>
    <div class="TVChart-wrapper">
        <div class="TVChartContainer" id="tv_chart_container"></div>
    </div>
</template>

<script>
import TVjsApi from '../helper/TVjsApi'

export default {
  name: 'TVChartContainer',
  data () {
    return {
      containerId: 'tv_chart_container'
    }
  },
  mounted () {
    var _TVjsApi = new TVjsApi('btcusdt')
    _TVjsApi.init()
  }
}
</script>

<style lang="scss" scoped>
    .TVChart-wrapper{
        display: inline-block;
        width: 60%;
        height: 100%;
        padding: 55px 5px 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .TVChartContainer {
        height: 100%;
    }
</style>
