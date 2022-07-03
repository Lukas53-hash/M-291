
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

export const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  }, {
    path: '/about',
    name: 'about',

    component: () =>
        import('../views/About.vue')
  },{
    path: '/message',
    name: 'message',
    component: () =>
        import('../views/Kontakt.vue'),

    props: true
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
