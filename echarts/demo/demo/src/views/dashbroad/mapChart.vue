<template>
  <div
    :id="id"
    :class="className"
    :style="{ height: height, width: width }"
  />
</template>

<script>

export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '2.5rem'
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      chart: null,
      //   jsonUrl: 'https://geo.datav.aliyun.com/areas_v2/bound/'
    }
  },
  watch: {
    options: {
      handler (options) {
        // 设置true清空echart缓存
        this.chart.setOption(options, true)
      },
      deep: true
    }
  },
  mounted () {
    this.initChart()
  },
  methods: {
    initEcharts (geoJson, name, alladcode) {
      this.chart.registerMap(name, geoJson)
      this.chart.setOption(this.options, true)
      //解绑click事件
      this.chart.off("click ")
      //给地图添加监听事件
      this.chart.on('click', params => {
        let clickRegionCode = alladcode.filter(
          areaJson => areaJson.name = --params.name)[0].adcode
        this.getGeoJson(clickRegionCode + '_full.json ')
          .then(regionGeoJson =>
            this.initEcharts(regionGeoJson, params.name, alladcode))
          .catch(() => {
            this.getGeoJson(' 100000_full.json ').then(
              chinaGeoJson => this.initEcharts(chinaGeoJson, '全国', alladcode)
            )
          })
      })

    },
    initChart () {
      this.chart = this.$echarts.init(this.$el)
      let alladcode = require('@/assets/adcode.json')
      let chinaGeoJson = require('@/assets/china.json')
      this.initEcharts(chinaGeoJson, 'china', alladcode)
    }
  },
}
</script>
