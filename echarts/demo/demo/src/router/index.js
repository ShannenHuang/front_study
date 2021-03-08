import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/dataView'
  },
  {
    path: '/dataView',
    name: 'DataView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/dashbroad/Index.vue')
  },
  // {
  //   path: '/map',
  //   name: 'map',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/dashbroad/mapChart.vue')
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
