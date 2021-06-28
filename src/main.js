import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import vuetify from './plugins/vuetify'
import store from './store'
import css from './assets/css/style.css'

Vue.config.productionTip = false
Vue.use(axios)
export const eventEmitter = new Vue()

new Vue({
  router,
  store,
  vuetify,
  css,
  render: h => h(App)
}).$mount('#app')
