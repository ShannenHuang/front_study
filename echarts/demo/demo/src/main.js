import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'

Vue.use(dataV)

// 自适应
import '@/common/flexible.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
