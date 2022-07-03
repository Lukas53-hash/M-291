import Vue from 'vue'

import App from './App-01.vue'
import store from './store/01_marks'




import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
