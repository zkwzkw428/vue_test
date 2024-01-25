<template>
  <div class="demo">
    <h1>学校名称：{{name}}</h1>
    <h1>学校地址：{{ address }}</h1>
  </div>
</template>

<script>
export default {
    name:'MySchool',
    data(){
        return {
            name:'尚硅谷',
            address:'北京-昌平'
        }
    },
    mounted() {
        this.$bus.$on('hello',(data)=>{
            console.log('我是School组件,收到了数据', data);
        })
    },
    beforeDestroy(){
        this.$bus.$off('hello')
    }
}
</script>

<style scoped>
    .demo{
        width: 400px;
        height: 200px;
        background-color: pink;
    }
</style>