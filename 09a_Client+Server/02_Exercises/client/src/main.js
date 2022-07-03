import Vue from 'vue'
//Exercise 01
//??
//??

//Import Bootstrap
import { BootstrapVue } from 'bootstrap-vue'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
