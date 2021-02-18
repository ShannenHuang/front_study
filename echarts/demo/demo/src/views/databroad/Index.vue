<template>
  <div>
    <dv-full-screen-container class="bg">
      <div class="head">
        <div class="empty" />
        <div class="center">
          <span class="title">车联网智能监控大屏</span>
        </div>
        <div class="datetime">
          <span>2021-02-18 10:56:11 星期四</span>
        </div>
      </div>
      <div class="body-box">

      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
export default {
  name: 'DataView'
}
</script>

<style lang="scss" scoped>
.bg {
  padding: 0.2rem 0.2rem 0 0.2rem;
  background-image: url("../../assets/pageBg.png");
  background-position: center center;
  background-size: cover;
}
.head {
  display: flex;
  height: 2em;
  line-height: 2em;
  font-size: 18px;
  font-weight: bolder;
  color: white;
  .empty {
    width: 28%;
    background-color: red;
  }
  .center {
    flex: 1;
    text-align: center;
    background-color: green;
  }
  .datetime {
    width: 28%;
    text-align: center;
    // background-color: yellow;
  }
}
</style>