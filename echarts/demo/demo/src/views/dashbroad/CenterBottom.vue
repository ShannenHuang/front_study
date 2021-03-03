<template>
  <div>
    <dv-border-box-1>
      <div class="main">
        <div class="title">当月监控区域内的车辆碰撞次数</div>
        <Echart
          id="bottomChart"
          :options="options"
          height="3.75rem"
          width="7.25rem"
        />
      </div>
    </dv-border-box-1>

  </div>
</template>

<script>
import Echart from '@/components/Echarts.vue'

export default {
  components: {
    Echart
  },
  props: {
    cdata: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      options: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        xAxis: {
          data: [
            '2020-11-16',
            '2020-11-22',
            '2020-11-28',
            '2020-12-04',
            '2020-12-10'
          ],
          axisLine: {
            lineStyle: {
              color: 'white',
              width: 1
            },
          },

        },
        yAxis: {
          splitLine: { show: false },   //去除网格线
          type: 'value',
          axisLine: {
            show: false,
            lineStyle: {
              // 设置y轴颜色
              color: 'white'
            }

          }
        },
        series: [
          {
            type: 'line',
            data: [2339, 1899, 2118, 1790, 3265],
            areaStyle: {
              color: ['rgba(40, 75, 154, 0.6)', 'rgba(46, 91, 180, 0.1)']
            },
            label: {
              show: true
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  height: 300px;
  position: relative;
  text-align: center;
  font-size: 18px;
  .title {
    font-weight: bolder;
  }
  #bottomChart {
    width: 500px;
    height: 250px;
    position: absolute;
    left: 125px;
    top: 14px;
  }
}
</style>
