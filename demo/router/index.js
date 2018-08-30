import Vue from 'vue'
import VueRouter from 'vue-router'

import Info from '../pages/info.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/info/:id?',
    component: Info
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
