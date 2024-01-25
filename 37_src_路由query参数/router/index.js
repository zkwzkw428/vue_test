// 此处为路由核心配置
// 创建整个应用的路由管理者
import Vue from 'vue'
import VueRouter from "vue-router";
import myAbout from '../pages/myAbout.vue'
import myHome from '../pages/myHome.vue'
// 引入二级路由组件
import myList from '../pages/myList.vue'
import myMessage from '../pages/myMessage.vue'
// 引入3级路由组件
import detailMessage from '../pages/detailMessage.vue'
// 应用vueRouter
Vue.use(VueRouter)
export default new VueRouter({
    // 路由规则
    routes:[
        {
            path:'/About',
            component:myAbout,
            children:[
                {
                    path:'list',
                    component:myList,
                    children:[
                        {
                            path:'detaillist',
                            component:detailMessage,
                        }
                    ]
                },
                {
                    path:'message',
                    component:myMessage,
                }
            ]
        },
        {
            path:'/Home',
            component:myHome
        }
    ]
})