import Vue from 'vue'
import App from './App.vue'
// 引入vuerouter
Vue.config.productionTip = false
// 引入路由配置
import router from './router/index.js'
new Vue({
  el:'#app',
  render: h => h(App),
  router,
})
