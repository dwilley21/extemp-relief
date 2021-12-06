import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import FAQ from '../views/FAQ.vue'
import About from '../views/About.vue'
import Shop from '../views/Shop.vue'
import Testimonials from '../views/Testimonials.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: FAQ
  },
  {
    path: '/Testimonials',
    name: 'Testimonials',
    component: Testimonials
  },
  {
    path: '/Shop',
    name: 'Shop',
    component: Shop
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
