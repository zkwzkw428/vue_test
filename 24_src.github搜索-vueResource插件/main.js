import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue_resource'

Vue.config.productionTip = false
// 安装插件,多了$http方法
Vue.use(vueResource)
new Vue({
  el:"#app",
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
  }
})
