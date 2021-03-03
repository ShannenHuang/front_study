<template>
  <div class="rightBottom">
    <dv-border-box-1>
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
        series: [
          {
            type: 'wordCloud',
            size: ['80%', '80%'],
            rotationRange: [0, 0],
            textPadding: 0,
            autoSize: { enable: true, minSize: 14 },
            left: 'center',
            top: 'center',
            right: null,
            bottom: null,
            data: [
              { value: 112, name: '仓栅式货车' },
              { value: 231, name: '重型货车' },
              { value: 131, name: '半挂牵引车' },
              { value: 53, name: '公交车' },
              { value: 73, name: '封闭货车' },
              { value: 103, name: '中型客车' },
              { value: 93, name: '大型普通客车' }
            ],
            textStyle: {
              normal: {
                color: function () {
                  return (
                    'rgb(' +
                    [
                      Math.round(Math.random() * 255),
                      Math.round(Math.random() * 255),
                      Math.round(Math.random() * 255)
                    ].join(',') +
                    ')'
                  )
                }
              },
              emphasis: { shadowBlur: 10, shadowColor: '#333' }
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