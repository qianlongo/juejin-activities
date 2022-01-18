import Vue from 'vue'
import VueRouter from 'vue-router'
import newYear2022Routes from './new-year-2022'

Vue.use(VueRouter)

const routes = [
  ...newYear2022Routes,
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
