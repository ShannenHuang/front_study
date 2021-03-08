<template>
  <div>
    <Echarts
      ref="map"
      width="100%"
      height="500px"
      :options="options"
    />
    <div class="label">
      <span @click="labelClick (labelData[0].code)">{{ labelData[0].name }}</span>
      <span
        v-if="labelData[1]"
        @click="labelClick (labelData[1].code)"
      >>{{ labelData[1].name }}</span>
      <span
        v-if="labelData[2]"
        @click="labelClick (labelData[2].code)"
      >>{{ labelData[2].name }}</span>
      <span v-if="labelData[3]">>{{ labelData[3].name }}</span>
    </div>
  </div>
</template>

<script>
import Echarts from '@/components/Echarts.vue'
export default {
  components: {
    Echarts,
  },
  data () {
    return {
      options: {},
      geoJsonData: null,
      labelData: [
        {
          name: '全国',
          level: 'china',
          code: 100000
        }
      ]
    }
  },
  methods: {
    getMapData (Json) {
      const mapData = Json.map(item => {
        return ({
          name: item.properties.name,
          value: Math.round(Math.random() * 1000),
          level: item.properties.level,
          adcode: item.properties.adcode
        })
      })
      const mapJson = {}
      // geoJson必须这种格式
      mapJson.features = Json
      this.initEcharts(mapData, mapJson)
    },
    getGeoJson (adcode) {
      AMapUI.loadUI(['geo/DistrictExplorer'], DistrictExplorer => {
        var districtExplorer = new DistrictExplorer()
        districtExplorer.loadAreaNode(adcode, (error, areaNode) => {
          if (error) {
            console.error(error)
            return
          }
          let Json = areaNode.getSubFeatures()
          //如果到下钻到县，就有个逻辑判断，因为高德获取不了县的geoJson，只能从市里面去取县的geoJson
          //所以这个要加个判断
          //方法有很多，1.比如每次都把获取的geoJson存起来，高德的获取的geoJson为空时，就说明获取到了县
          //或者高德没数据，就从之前存的那个里面去取
          if (Json.length > 0) {
            this.geoJsonData = Json
          } else {
            Json = this.geoJsonData.filter((item) => {
              if (item.properties.adcode === adcode) {
                return item
              }
            })
            if (Json.length === 0) return // 取不到数据了
          }
          console.log(Json)
          //获取地图数据
          this.getMapData(Json)
        })
      })
    },
    initEcharts (mapData, mapJson) {
      this.$echarts.registerMap('chinaMap', mapJson)
      // console.log("44444444")
      // console.log(mapJson)
      this.options = {
        series: {
          type: 'map',
          map: 'chinaMap',  // 中国地图
          roam: true, // 是否开启鼠标缩放和平移漫游
          zoom: 1.2, // 当前视角的缩放比例（地图的放大比例）
          label: {
            show: true,
            position: 'inside',
            color: '#fff'
          },
          itemStyle: { // 地图区域的多边形 图形样式。
            normal: {
              show: true,
              areaColor: '#2E98CA',
              borderColor: 'rgb(185, 220, 227)',
              borderWidth: '1'
            },
            borderColor: 'rgba(0, 0, 0, 0.2)',
            // emphasis: { // 高亮状态下的多边形和标签样式
            //   shadowBlur: 20,
            //   shadowColor: 'rgba(0, 0, 0, 0.5)'
            // }
          },
          data: mapData
        },
        tooltip: { // 提示框
          show: true,
          trigger: 'item',
          formatter (params) {
            return "<div style='text-align:center'>" +
              params.name +
              ':<br />碰撞次数：' +
              parseInt(params.value) +
              '</div>'
          }
        },
        visualMap: {
          type: 'continuous', // 连续型
          min: 0,
          max: 1000,
          //   seriesIndex: [0],
          calculable: 'true',// 是否显示拖拽用的手柄
          // realtime: 'true', // 拖拽时，是否实时更新。
          // text: [1000, 0], // 上下的文字
          top: 300,
          left: 40,
          color: ['#00BFFF', '#00F5FF', '#BBFFFF'],
          textStyle: {
            color: '#fff'
          },
          indicatorStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: 'red' // 0% 处的颜色
              }, {
                offset: 1, color: 'blue' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            }
          }
        },
        title: {
          show: true,
          text: this.labelData[this.labelData.length - 1].name + '车辆碰撞次数统计',
          textStyle: {
            color: '#fff',
            fontWeight: 'normal',
          },
          x: 'center',
          y: 'top',
        },
        toolbox: {
          show: 'true',
          itemSize: 15,
          right: 30,
          botttom: 30,
          feature: {
            saveAsImage: {
              show: true,
              title: '下载',
              name: '',// 保存的文件名称，默认使用 title.text 作为名称。

            }
          }
        }
      }
      let mapEcharts = this.$refs.map.chart
      console.log(mapEcharts)
      mapEcharts.off('click')
      mapEcharts.on('click', this.mapClick)
    },
    mapClick (params) {
      // console.log(params.data.adcode)
      if (this.labelData[this.labelData.length - 1].code === params.data.adcode) {
        return
      } else {
        this.labelData.push({
          name: params.data.name,
          level: params.data.level,
          code: params.data.adcode
        })
      }
      this.getGeoJson(params.data.adcode)
    },
    labelClick (code) {
      // 最小区域code
      if (code === this.labelData[this.labelData.length - 1].code) {
        return
      } else {
        this.labelData.pop()
        this.getGeoJson(code)
      }
    }
  },
  created () {
    this.getGeoJson(100000)
  }
}
</script>

<style lang="scss" scoped>
.label {
  position: absolute;
  cursor: pointer;
  left: 600px;
  top: 140px;
  font-size: 15px;
}
</style>