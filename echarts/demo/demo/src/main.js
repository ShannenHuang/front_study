import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'

Vue.use(dataV)

// 屏幕自适应
import '@/common/flexible.js'
//清除默认样式
import '../src/assets/style/reset.css'
// 全局引入echarts
import * as echarts from "echarts"
Vue.prototype.$echarts = echarts
// 引入echarts-wordcloud
import 'echarts-wordcloud'
// 引入中国地图
import china from '@/assets/china.json'
echarts.registerMap('china', china)

// 引入插件countTo
import CountTo from 'vue-count-to'
// 挂载
Vue.component('CountTo', CountTo)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
