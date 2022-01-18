import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import newYear2022 from './new-year-2022'

Vue.use(VueRouter)

const routes = [
  ...newYear2022,
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
