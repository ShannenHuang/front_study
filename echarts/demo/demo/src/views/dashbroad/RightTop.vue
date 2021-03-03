<template>
  <div>
    <dv-border-box-1>
      <div class="main">
        <div class="title">区块链信息</div>
        <div class="content">
          <div class="content-top">
            <div
              v-for="(item,index) in data"
              :key="index"
            >
              <span
                class="title"
                :style="{left:item.tleft,top:item.ttop}"
              >{{ item.title }}</span>
              <countTo
                class="count"
                :startVal='item.num/2'
                :endVal='item.num'
                :duration='2000'
                :style="{left:item.numleft,top:item.numtop}"
              ></countTo>
            </div>
          </div>
          <dv-capsule-chart
            class="content-bottom"
            :config="config"
          />
        </div>
      </div>
    </dv-border-box-1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      config: {
        data: [
          {
            name: '轻微事故',
            value: 1677
          },
          {
            name: '一般事故',
            value: 1237
          },
          {
            name: '较大事故',
            value: 634
          },
          {
            name: '重大事故',
            value: 456
          },
          {
            name: '特别重大事故',
            value: 274
          },
        ],
        colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
        unit: '次',
        showValue: true
      },
      data: [
        {
          title: '区块高度',
          num: 1066,
          tleft: '100px',
          ttop: '55px',
          numleft: '110px',
          numtop: '100px'
        }, {
          title: '智能合约数',
          num: 5267,
          tleft: '320px',
          ttop: '55px',
          numleft: '340px',
          numtop: '100px'
        }, {
          title: '业务记账总数',
          num: 26750,
          tleft: '100px',
          ttop: '180px',
          numleft: '340px',
          numtop: '180px'
        }

      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.main {
  height: 540px;
  margin-bottom: 20px;
  .title {
    text-align: center;
    font-weight: bolder;
    font-size: 20px;
  }
  .content {
    // background-color: gray;
    .content-top {
      height: 260px;
      position: relative;
      .title {
        color: mediumpurple;
        position: absolute;
        font-size: 26px;
      }
      .count {
        position: absolute;
        font-size: 25px;
      }
    }
    .content-bottom {
      width: 500px;
      height: 200px;
      margin: 0 20px;
    }
  }
}
</style>