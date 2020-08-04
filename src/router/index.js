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
    path: process.env.NODE_ENV === 'production' ? '/TrashSelector/' : '/',
    name: 'Home',
    component: Home
  },
  {
    path: process.env.NODE_ENV === 'production' ? '/TrashSelector/consent' : '/consent',
    name: 'Consent',
    component: Consent
  },
  {
    path: process.env.NODE_ENV === 'production' ? '/TrashSelector/tutorial' : '/tutorial',
    name: 'Tutorial',
    component: Tutorial
  },
  {
    path: process.env.NODE_ENV === 'production' ? '/TrashSelector/analysis' : '/analysis',
    name: 'Analysis',
    component: Analysis// alternative- lazy loading will load components only when requested by user: () => import( '../views/Analysis.vue')
  },
  {
    path: process.env.NODE_ENV === 'production' ? '/TrashSelector/survey' : '/survey',
    name: 'Survey',
    component: Survey
  },
  {
    path: process.env.NODE_ENV === 'production' ? '/TrashSelector/debrief' : '/debrief',
    name: 'Debrief',
    component: Debrief
  },
  {
    // TODO: 404 leads here too
    path: process.env.NODE_ENV === 'production' ? '/TrashSelector/cancel' : '/cancel',
    name: 'Cancel',
    component: Cancel
  }
]

const router = new VueRouter({
  mode: "history", //Just to remove the '#' in URL
  // base: '/TrashSelector/', //needed when building for server
  routes
})

export default router
