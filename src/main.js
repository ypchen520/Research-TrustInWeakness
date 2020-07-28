import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import CircCntDwnTmr from 'vue-circular-count-down-timer'
import ToggleButton from 'vue-js-toggle-button'
Vue.use(CircCntDwnTmr)
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.use(ToggleButton)
Vue.$cookies.config('7d'); //set cookie expire after 7 days
//
import vuetify from '@/plugins/vuetify' // path to vuetify export

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')