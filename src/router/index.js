import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/analysis',
    name: 'Analysis',
    component: () => import(/* webpackChunkName: "analysis" */ '../views/Analysis.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
