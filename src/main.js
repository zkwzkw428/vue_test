import Vue from 'vue'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import { Button, Input,Row } from 'element-ui';

import App from './App.vue'
Vue.component(Button.name, Button);
Vue.component(Input.name,Input);
Vue.component(Row.name,Row)
// Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
})
