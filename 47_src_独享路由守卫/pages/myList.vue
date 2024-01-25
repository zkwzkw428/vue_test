<template>
    <div>
        <ul>
            <li :style={opacity}>欢迎学习vue</li>
            <li v-for="list in lists" :key="list.id">
                <!-- 跳转路由并且携带jquery参数 -->
                <router-link :to='`/About/list/detaillist?id=${list.id}&title=${list.title}`'>{{ list.title }}</router-link>
                <input type="text">
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'myList',
    data(){
        return {
            opacity:1,
            lists:[
                {id:'001',title:'吃饭'},
                {id:'002',title:'学习'},
                {id:'003',title:'读书'},
            ]
        }
    },
    methods:{
        pushShow(list){
            this.$router.push({
                path:'/About/list/detaillist',
                query:{
                    id:list.id,
                    title:list.title
                },
            })
        },
        replaceShow(list){
            this.$router.replace({
                path:'/About/list/detaillist',
                query:{
                    id:list.id,
                    title:list.title
                },
            })
        }
    },
    // mounted(){
    //     // 挂载时开启定时器
    //     this.timer = setInterval(() => {
    //         this.opacity -= 0.01
    //         if(this.opacity <= 0) this.opacity = 1
    //     }, 16);
    // },
    // 路由组件独有的生命周期钩子
    activated(){
        // 组件激活时调用
        console.log('组件激活了');
        this.timer = setInterval(() => {
            this.opacity -= 0.01
            if(this.opacity <= 0) this.opacity = 1
        }, 16);
    },
    deactivated(){
        // 组件失活调用
        console.log('组件失活了');
        clearInterval(this.timer)
    },
    beforeDestroy(){
        console.log('myList组件即将被销毁');
    }
}
</script>

<style scoped>
    li{
        list-style: none;
        text-align:left;
    }
    a{
        text-decoration: none;
    }
</style>