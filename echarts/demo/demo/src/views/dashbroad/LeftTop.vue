<template>
  <div class="leftTop">
    <dv-border-box-1>
      <span class="title">车联网区域碰撞事故分布</span>
      <Echarts
        id="accident-distribution"
        width="100%"
        height="300px"
        :options="options"
      />
    </dv-border-box-1>
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
      options: {
        color: [
          'rgba(55,162,218, 0.7)',
          'rgba(50,197,233,0.7)',
          'rgba(159,230,184,0.7)',
          'rgba(255,219,92,0.7)',
          'rgba(255,159,127,0.7)',
          'rgba(251,114,147,0.7)',
          'rgba(231,188,243,0.7)',
          'rgba(131,120,234,0.7)'
        ],
        series: [
          {
            type: 'pie',
            roseType: true,
            insideLabel: {
              show: true
            },
            data: [
              { value: 19.33, name: '东北19.33%' },
              { value: 20.2, name: '华北20.2%' },
              { value: 16.45, name: '华中16.45%' },
              { value: 22.6, name: '西南22.6%' },
              { value: 8.7, name: '西北8.7%' },
              { value: 12.72, name: '华东12.72%' }
            ],
            itemStyle: {
              normal: {
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.leftTop {
  text-align: center;
  font-size: 18px;
  .title {
    font-weight: bolder;
  }
}
</style>