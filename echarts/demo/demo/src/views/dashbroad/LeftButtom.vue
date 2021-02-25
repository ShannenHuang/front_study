<template>
  <div class="leftButtom">
    <dv-border-box-1>
      <span class="title">最新车辆碰撞事故信息</span>
      <dv-scroll-board
        :config="config"
        class="showBroad"
      />
    </dv-border-box-1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      config: {
        // waitTime: 100000,
        header: ['拉线名称', '机型', '计划', '达成', '达成率', '当前状态'],
        data: [
          [
            'ta10901',
            'R17',
            '3260',
            '960',
            '29%',
            '<span style="color:#f00;">异常</span>'
          ],
          [
            'ta10902',
            'R18',
            '345',
            '1200',
            '348%',
            '<span style="color:#0f0;">正常</span>'
          ],
          [
            'ta10903',
            'R19',
            '1186',
            '1927',
            '162%',
            '<span style="color:#0f0;">正常</span>'
          ],
          [
            'ta10904',
            'R20',
            '2837',
            '2927',
            '103%',
            '<span style="color:#0f0;">正常</span>'
          ],
          [
            'ta10905',
            'R21',
            '2717',
            '2508',
            '92%',
            '<span style="color:#f00;">异常</span>'
          ],
          [
            'ta10906',
            'R22',
            '6362',
            '5281',
            '83%',
            '<span style="color:#f00;">异常</span>'
          ],
          [
            'ta10907',
            'R23',
            '5100',
            '1688',
            '162%',
            '<span style="color:#0f0;">正常</span>'
          ],
          [
            'ta10908',
            'R24',
            '2673',
            '1771',
            '56%',
            '<span style="color:#0f0;">正常</span>'
          ],
          [
            'ta10909',
            'R25',
            '4160',
            '360',
            '71%',
            '<span style="color:#f00;">异常</span>'
          ],
          [
            'ta10910',
            'R26',
            '3227',
            '387',
            '89%',
            '<span style="color:#0f0;">正常</span>'
          ]
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.leftButtom {
  height: 300px;
  position: relative;
  text-align: center;
  font-size: 18px;
  .title {
    font-weight: bolder;
  }
  .showBroad {
    width: 500px;
    height: 250px;
    position: absolute;
    left: 20px;
    top: 30px;
  }
}
</style>