import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import UserCenter from '../components/core/UserCenter'
import Core from '../components/Core.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', redirect: '/home'
  }, {
    path: '/home',
    component: Home,
    redirect: '/home/center',
    children: [{
      path: 'center', component: Core
    },
    {
      path: 'usercenter', component: UserCenter
    }]
  }]

const router = new VueRouter({
  routes
})

export default router
