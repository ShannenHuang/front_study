<template>
  <div class="leftCenter">
    <dv-border-box-1>
      <div class="user">
        <div
          v-for="(item,index) in showData"
          :key="index"
          class="box"
          :style="{left:item.left}"
        >
          <span class="title">{{ item.title }}</span>
          <img :src="item.img">
          <countTo
            class="count"
            :startVal='item.startVal'
            :endVal='item.endVal'
            :duration='2000'
            :style="{left:item.countleft}"
          ></countTo>
        </div>
      </div>
    </dv-border-box-1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showData: [
        {
          title: '本月新增用户',
          img: require('@/assets/blue-bg.png'),
          startVal: 300,
          endVal: 851,
          left: '80px',
          countleft: '40px'
        }, {
          title: '本月活跃用户',
          img: require('@/assets/green-bg.png'),
          startVal: 2000,
          endVal: 3841,
          left: '320px',
          countleft: '30px'
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.leftCenter {
  margin: 20px 0;
  .user {
    width: 400px;
    height: 200px;
    position: relative;
    .box {
      position: absolute;
      left: 80px;
      top: 40px;
      width: 110px;
      height: 110px;
      // background-image: url("../../assets/blue-bg.png");
      // background-position: center center;
      // background-size: cover;
      .title {
        position: absolute;
        left: 25px;
        top: 30px;
        color: gray;
        font-size: 13px;
      }
      img {
        width: 126px;
      }
      .count {
        position: absolute;
        text-align: center;
        left: 30px;
        top: 80px;
        color: white;
        font-size: 25px;
      }
    }
  }
}
</style>