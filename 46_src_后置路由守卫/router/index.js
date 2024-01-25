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
const router = new VueRouter({
    // 路由规则
    routes:[
        {
            path:'/About',
            component:myAbout,
            meta:{
                title:'About'
            },
            children:[
                {
                    path:'list',
                    component:myList,
                    meta:{
                        isAnth:true,
                        title:'list'
                    },
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
                    meta:{
                        isAnth:true,
                        title:'message'
                    },
                }
            ]
        },
        {
            path:'/Home',
            component:myHome,
            meta:{
                title:'Home'
            }
        }
    ]
})
// 布置全局前置路由守卫
router.beforeEach((to,from,next)=>{
    console.log(from);
        // 判断当前路径,这种方式略显繁琐
        if(to.path ==='/About/list' || to.path === '/About/message'){
            if(localStorage.getItem('school') === 'atguigu'){
                next()
            }else{
                alert('您没有权限查看')
            }
        }else{
            // 跳转路径
            next()
        }
    })
// 布置全局后置路由守卫
router.afterEach((to,from)=>{
    console.log(to,from);
    if(to.meta.title){
        document.title = to.meta.title || 'vue_test'
    }
})
export default router