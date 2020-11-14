import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugin/element.js'
// import 'element-ui/lib/theme-chalk/index.css'
import '../theme/index.css'
import '../src/assets/css/global.css'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
