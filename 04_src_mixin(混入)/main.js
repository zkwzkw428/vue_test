import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// import { hunhe, hunhe2 } from './mixin'
// 全局混合
// Vue.mixin(hunhe)
// Vue.mixin(hunhe2)
new Vue({
  el:"#app",
  render: h => h(App),
})
