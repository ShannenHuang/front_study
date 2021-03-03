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
      <Echarts
        id="map"
        width="100%"
        height="500px"
        :options="options"
      />
      <!-- <MapChart
        id="map"
        width="100%"
        height="500px"
        :options="temp"
      /> -->
    </div>

  </div>
</template>

<script>
import MarqueeTips from 'vue-marquee-tips'
import Echarts from '@/components/Echarts.vue'
// import MapChart from './mapChart.vue'
export default {
  components: {
    MarqueeTips,
    Echarts,
    // MapChart
  },
  data () {
    return {
      options: {
        geo: {
          map: 'china',
          label: {
            normal: {
              show: true,
              textStyle: {
                color: 'rgba(0,0,0,0.4)'
              }
            }
          },
          itemStyle: {
            normal: {
              borderColor: 'rgba(0, 0, 0, 0.2)'
            },
            emphasis: {
              areaColor: null,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        },
        series: [
          {
            name: 'categoryA',
            type: 'map',
            // roam: true, // 是否可缩放
            // zoom: 1.1, // 缩放比例
            geoIndex: 0,
            tooltip: { show: false },
            data: [
              { name: '北京', value: this.randomValue() },
              // 这里就是很多数据
            ]
          }
        ],

        title: {
          text: '全国车辆碰撞次数统计',
          x: 'center',
          textStyle: {
            color: '#fff'
          }
        },
        //是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）。
        visualMap: {
          min: 0, //最小值
          max: 600, //最大值
          calculable: true, //是否显示拖拽用的手柄（手柄能拖拽调整选中范围）。
          inRange: {
            color: ['#4cb0dd', '#2d79ad', '#265da0'] //颜色
          },
          textStyle: {
            color: '#fff'
          },
          left: '3%',
          bottom: '10%'
        },
        // 提示框，鼠标移入
        tooltip: {
          show: true, //鼠标移入是否触发数据
          trigger: 'item', //出发方式
          formatter: `<div style='text-align:center'>碰撞次数：55<div/>`,
        },
        toolbox: {
          feature: {
            dataView: {
              show: false,
              readOnly: true
            },
            magicType: {
              show: false,
              type: ['line', 'bar']
            },
            restore: {
              show: false
            },
            saveAsImage: {
              show: true,
              name: '地图',
              pixelRatio: 2
            }
          },
          iconStyle: {
            normal: {
              borderColor: '#41A7DE'
            }
          },
          itemSize: 15,
          top: 20,
          right: 22
        },
      },
    }
  },
  methods: {
    randomValue () {
      return Math.round(Math.random() * 1000)
    }
  },
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