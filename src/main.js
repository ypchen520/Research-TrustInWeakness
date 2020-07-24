import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import CircCntDwnTmr from 'vue-circular-count-down-timer'
Vue.use(CircCntDwnTmr)
//
import vuetify from '@/plugins/vuetify' // path to vuetify export

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')