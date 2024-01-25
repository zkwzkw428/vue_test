<template>
    <div>
        <ul>
            <li>
                <!-- 跳转路由并且携带jquery参数 -->
                <!-- <router-link v-for="list in lists" :key="list.id" :to='`/About/list/detaillist?id=${list.id}&title=${list.title}`'>{{ list.title }}</router-link> -->
                <!-- 跳转路由to为对象写法 -->
                <router-link
                 v-for="list in lists" 
                 :key="list.id"
                 :to="{
                    path:'/About/list/detaillist',
                    id:list.id,
                    title:list.title,
                    }">
                </router-link>
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
            lists:[
                {id:'001',title:'吃饭'},
                {id:'002',title:'学习'},
                {id:'003',title:'读书'},
            ]
        }
    }
}
</script>

<style scoped>
    li{
        list-style: none;
        text-align:left;
    }
    a{
        display: block;
        text-decoration: none;
    }
</style>