<template>
  <div>
    <dv-full-screen-container class="bg">
      <!-- <dv-full-screen-container> -->
      <!-- 顶部标题栏 -->
      <div class="d-flex top">
        <div class="left" />
        <div class="center">
          <span class="title">车联网智能监控大屏</span>
        </div>
        <div class="right">
          <span>2021-02-18 10:56:11 星期四</span>
        </div>
      </div>
      <!-- 内容区域 -->
      <div class="d-flex body-box">
        <div class="left">
          <LeftTop />
          <LeftCenter />
          <LeftButtom />
        </div>
        <div class="center">
          <CenterTop />
          <CenterBottom />
        </div>
        <div class="right">
          <RightTop />
          <RightBottom />
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import CenterTop from './CenterTop.vue'
import CenterBottom from './CenterBottom.vue'
import LeftTop from './LeftTop.vue'
import LeftCenter from './LeftCenter.vue'
import LeftButtom from './LeftButtom.vue'
import RightTop from './RightTop.vue'
import RightBottom from './RightBottom.vue'
export default {
  name: 'DataView',
  components: {
    LeftTop,
    LeftCenter,
    LeftButtom,
    RightTop,
    RightBottom,
    CenterBottom,
    CenterTop
  },
}
</script>

<style lang="scss" scoped>
.bg {
  padding: 0.2rem 0.2rem 0 0.2rem;
  background-image: url("../../assets/pageBg.jpg");
  background-position: center center;
  background-size: cover;
  color: white;
}
.d-flex {
  display: flex;
  .left {
    width: 28%;
  }
  .right {
    width: 28%;
    margin-right: 30px;
  }
  .center {
    flex: 1;
  }
}
.top {
  text-align: center;
  font-size: 18px;
  margin-bottom: 20px;
}
</style>