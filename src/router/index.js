import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/home', components: Home
}]

const router = new VueRouter({
  routes
})

export default router
