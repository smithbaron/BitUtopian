<template>
  <Layout class="chart-compare">
    <div class="compare-header"></div>
    <div class="compare-content" v-if="show">
      <div class="chart-item" v-for="(item, index) in symbolCoins" :key="index"
          @click="handleChartItemClick(item, index)" :class="chartItemActive === index ? 'chart-item-active' : ''">
          <div class="item-close" :class="chartItemActive === index ? 'item-close-active' : ''">
            <div class="vertical-line"></div>
            <div class="horizontal-line"></div>
          </div>
          <TVChartContainer :symbol="item.symbol"
                            :exchange="exchange"
                            :language="language"
                            :containerId="item.containerId"
          ></TVChartContainer>
      </div>
    </div>
  </Layout>
</template>
<script>
import { Layout } from 'iview'
import TVChartContainer from '../components/TVChartContainer'
export default {
  name: 'ChartCompare',
  props: {
    symbolCoins: {
      type: Array,
      default: () => []
    },
    exchange: String,
    language: String,
    isManyCycles: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Layout,
    TVChartContainer
  },
  data () {
    return {
      chartItemActive: 1,
      show: true
    }
  },
  watch: {
    isManyCycles () {
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  },
  methods: {
    handleChartItemClick (item, index) {
      this.chartItemActive = index
    }
  }
}
</script>
<style lang="scss">
.chart-compare {
  height: 100%;
  width: 100%;
  background: black;
}
.compare-header {
  height: 38px;
  background: #131722;
}
.compare-content {
  height: calc(100% - 38px);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.chart-item {
  position: relative;
  height: calc(50% - 3px);
  width: calc(50% - 3px);
  border: 1px solid #666;
}
.chart-item:nth-child(1) {
  margin-right: 3px;
  margin-bottom: 3px;
}
.chart-item:nth-child(2) {
  margin-left: 3px;
  margin-bottom: 3px;
}
.chart-item:nth-child(3) {
  margin-top: 3px;
  margin-right: 3px;
}
.chart-item:nth-child(4) {
  margin-top: 3px;
  margin-left: 3px;
}

.chart-item-active {
  border-color: #FF9900;
}
.item-close {
  position: absolute;
  height: 30px;
  width: 30px;
  top: 0px;
  right: 0px;
  background: #666;
}
.item-close-active {
  background: #FF9900;
}
.item-close-active .vertical-line, .item-close-active .horizontal-line {
  background: white !important;
}
.item-close .vertical-line {
  height: 90%;
  width: 1px;
  background: #ccc;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
}
.item-close .horizontal-line {
  height: 90%;
  width: 1px;
  background: #ccc;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
}
</style>
