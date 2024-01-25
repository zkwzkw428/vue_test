<template>
    <div>
        <ul>
            <li v-for="list in lists" :key="list.id"><a>{{ list.title }}</a></li>
        </ul>
        <hr>
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