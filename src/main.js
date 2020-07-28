import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
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