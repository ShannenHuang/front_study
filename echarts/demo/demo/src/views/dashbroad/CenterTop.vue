<template>
  <div>
    <div class="centerTop">
      <dv-decoration-5 style="height: 0.5rem;" />
      <div
        class="marquee-wrap"
        style="width: 10rem;"
      >
        <MarqueeTips
          content="最新交易信息： 交易ID- t34q23drasdfa213  <span style='margin-left: 15px;'>交易时间-2020:12:10</span>"
          :speed="8"
        />
      </div>
      <!-- <Echarts
        id="map"
        width="100%"
        height="500px"
        :options="options"
      /> -->
      <MapEcharts />
    </div>

  </div>
</template>

<script>
import MapEcharts from './mapEcharts.vue'
import MarqueeTips from 'vue-marquee-tips'
// import Echarts from '@/components/Echarts.vue'
// import MapChart from './mapChart.vue'
// import getGeoJson from '@/api/map.js'
export default {
  components: {
    MarqueeTips,
    MapEcharts
    // Echarts,
    // MapChart
  },
  data () {
    return {
      options: {},
      geoJsonData: {},
      // cdata: {
      //   data: {}
      // }
    }
  },
  // methods: {
  //   getMapData (Json) {
  //     const mapData = Json.map(item => {
  //       return ({
  //         name: item.properties.name,
  //         value: Math.round(Math.random() * 1000),
  //         level: item.properties.level,
  //         cityCode: item.properties.adcode
  //       })
  //     })
  //     const mapJson = {}
  //     // geoJson必须这种格式
  //     mapJson.features = mapData
  //     console.log(mapJson)
  //     this.initEcharts(mapData, mapJson)
  //   },
  //   getGeoJson (adcode) {
  //     AMapUI.loadUI(['geo/DistrictExplorer'], DistrictExplorer => {
  //       var districtExplorer = new DistrictExplorer()
  //       districtExplorer.loadAreaNode(adcode, (error, areaNode) => {
  //         if (error) {
  //           console.error(error)
  //           return
  //         }
  //         let Json = areaNode.getSubFeatures()
  //         //如果到下钻到县，就有个逻辑判断，因为高德获取不了县的geoJson，只能从市里面去取县的geoJson
  //         //所以这个要加个判断
  //         //方法有很多，1.比如每次都把获取的geoJson存起来，高德的获取的geoJson为空时，就说明获取到了县
  //         //或者高德没数据，就从之前存的那个里面去取
  //         console.log(Json)
  //         //获取地图数据
  //         this.getMapData(Json)
  //       })
  //     })
  //   },
  //   initEcharts (mapData, mapJson) {
  //     this.$echarts.registerMap('chinaMap', mapJson)
  //     this.options = {
  //       series: {
  //         type: 'map',
  //         map: 'chinaMap',  // 中国地图
  //         roam: true, // 是否开启鼠标缩放和平移漫游
  //         zoom: 1.2, // 当前视角的缩放比例（地图的放大比例）
  //         label: {
  //           show: true,
  //           position: 'inside',
  //           color: '#fff'
  //         },
  //         itemStyle: { // 地图区域的多边形 图形样式。
  //           normal: {
  //             show: true,
  //             areaColor: '#2E98CA',
  //             borderColor: 'rgb(185, 220, 227)',
  //             borderWidth: '1'
  //           },
  //           borderColor: 'rgba(0, 0, 0, 0.2)',
  //           // emphasis: { // 高亮状态下的多边形和标签样式
  //           //   shadowBlur: 20,
  //           //   shadowColor: 'rgba(0, 0, 0, 0.5)'
  //           // }
  //         },
  //         data: mapData
  //       },
  //       tooltip: { // 提示框
  //         show: true,
  //         trigger: 'item',
  //         // formatter (params) {
  //         //   return params.data
  //         // }
  //       },
  //       visualMap: {
  //         type: 'continuous', // 连续型
  //         min: 0,
  //         max: 1000,
  //         // calculable: 'true',// 是否显示拖拽用的手柄
  //         // realtime: 'true', // 拖拽时，是否实时更新。
  //         // text: [1000, 0], // 上下的文字
  //         top: 300,
  //         left: 40,
  //         color: ['#00BFFF', '#00F5FF', '#BBFFFF'],
  //         textStyle: {
  //           color: '#fff'
  //         },
  //         indicatorStyle: {
  //           color: {
  //             type: 'linear',
  //             x: 0,
  //             y: 0,
  //             x2: 0,
  //             y2: 1,
  //             colorStops: [{
  //               offset: 0, color: 'red' // 0% 处的颜色
  //             }, {
  //               offset: 1, color: 'blue' // 100% 处的颜色
  //             }],
  //             global: false // 缺省为 false
  //           }
  //         }
  //       },
  //       title: {
  //         show: true,
  //         text: '全国车辆碰撞次数统计',
  //         textStyle: {
  //           color: '#fff',
  //           fontWeight: 'normal',
  //         },
  //         // textalign: 'center',
  //         left: '35%'
  //       },
  //       toolbox: {
  //         show: 'true',
  //         itemSize: 15,
  //         right: 30,
  //         botttom: 30,
  //         feature: {
  //           saveAsImage: {
  //             show: true,
  //             title: '下载',
  //             name: '',// 保存的文件名称，默认使用 title.text 作为名称。

  //           }
  //         }
  //       }
  //     }

  //   }

  // },
  // created () {
  //   console.log("----------111111111111--------------")
  //   this.getGeoJson(100000)
  // }
}
</script>

<style lang="scss" scoped>
.centerTop {
  height: 540px;
  margin-bottom: 20px;
  //   border: 5px solid red;
  .marquee-wrap {
    font-size: 18px;
    line-height: 20px;
  }
}
</style>