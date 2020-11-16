import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugin/element.js'
// import 'element-ui/lib/theme-chalk/index.css'
import '../theme/index.css'
import '../src/assets/css/global.less'
import '../src/assets/font/iconfont.css'
Vue.config.productionTip = false

new Vue({
  data: {
    // core中的对话框
    editVisible: false,
    // 显示推文
    isShowSend: true,
  },
  router,
  render: h => h(App)
}).$mount('#app')
