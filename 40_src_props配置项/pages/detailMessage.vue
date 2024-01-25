<template>
  <ul>
    <!-- <li>消息id:{{ $route.query.id }}</li>
    <li>消息内容:{{ $route.query.title }}</li> -->
    <li>消息id:{{ id }}</li>
    <li>消息内容:{{ title }}</li>
    <!-- <li>a:{{ a }}</li>
    <li>b:{{ b }}</li> -->
  </ul>
</template>

<script>
export default {
    name:'detailMessage',
    mounted(){
        // console.log(this.$route);
        console.log(this.$route);
    },
    // props:['a','b']
    props:['id','title']
}
</script>

<style scoped>
    ul li{
        list-style: none;
        text-align: left;
    }
</style>