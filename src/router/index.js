import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Consent from '../views/Consent.vue'
import Tutorial from '../views/Tutorial.vue'
import Analysis from '../views/Analysis.vue'
import Survey from '../views/Survey.vue'
import Debrief from '../views/Debrief.vue'
import Cancel from '../views/Cancel.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/consent',
    name: 'consent',
    component: Consent
  },
  {
    path: '/tutorial',
    name: 'Tutorial',
    component: Tutorial
  },
  {
    path: '/analysis',
    name: 'Analysis',
    component: Analysis// alternative: run anonymous function () => import( '../views/Analysis.vue')
  },
  {
    path: '/survey',
    name: 'Survey',
    component: Survey
  },
  {
    path: '/debrief',
    name: 'Debrief',
    component: Debrief
  },
  {
    path:'/cancel',
    name: 'Cancel',
    component: Cancel
  }
]

const router = new VueRouter({
  mode: "history", //Just to remove the '#' in URL
  routes
})

export default router
