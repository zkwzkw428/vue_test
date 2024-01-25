<template>
  <div class="demo">
    <h1>学校名称：{{name}}</h1>
    <h1>学校地址：{{ address }}</h1>
  </div>
</template>

<script>
import PubSub from 'pubsub-js';
export default {
    name:'MySchool',
    data(){
        return {
            name:'尚硅谷',
            address:'北京-昌平'
        }
    },
    methods: {
        subCallback(msgName,data){
            console.log(msgName+'消息被订阅了,数据是'+ data);
        }
    },
    mounted() {
        // this.$bus.$on('hello',(data)=>{
        //     console.log('我是School组件,收到了数据', data);
        // })
        // this.pid = PubSub.subscribe('hello',function(msgName,data){
        //     console.log(msgName+'消息被订阅了,数据是'+ data);
            // console.log(msgName,data);
            // this.pid = PubSub.subscribe('hello',function(msgName,data){
            // console.log(msgName+'消息被订阅了,数据是'+ data);
            // console.log(this);
            this.pid =PubSub.subscribe('hello',this.subCallback)
    },
    beforeDestroy(){
        // this.$bus.$off('hello')
        // 取消订阅消息
        PubSub.unsubscribe(this.pid)
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