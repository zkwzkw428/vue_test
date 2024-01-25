// 此处为路由核心配置
// 创建整个应用的路由管理者
import Vue from 'vue'
import VueRouter from "vue-router";
import myAbout from '../pages/myAbout.vue'
import myHome from '../pages/myHome.vue'
// 应用vueRouter
Vue.use(VueRouter)
export default new VueRouter({
    // 路由规则
    routes:[
        {
            path:'/About',
            component:myAbout,
        },
        {
            path:'/Home',
            component:myHome
        }
    ]
})