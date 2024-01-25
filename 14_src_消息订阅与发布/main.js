import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.prototype.x = {a:1,b:2}
new Vue({
  el:"#app",
  render: h => h(App),
  beforeCreate(){
    // 安装全局事件总线
    Vue.prototype.$bus = this
  }
})
 