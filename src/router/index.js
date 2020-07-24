import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Analysis from '../views/Analysis.vue'
import End from '../views/End.vue'

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
    component: Analysis// alternative: run anonymous function () => import( '../views/Analysis.vue')
  },
  {
    path: '/survey',
    name: 'End',
    component: End
  }
]

const router = new VueRouter({
  mode: "history", //Just to remove the '#' in URL
  routes
})

export default router
