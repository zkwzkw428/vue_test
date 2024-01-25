<template>
  <div class="test">
    <h1>学生姓名:{{ name }}</h1>
    <h1>学生年龄:{{ sex }}</h1>
    <button @click="sendStudentName">把学生姓名给School组件</button>
  </div>
</template>

<script>
import PubSub from 'pubsub-js';
export default {
    name:'MyStudent',
    data(){
        return {
            name:'张三',
            sex:'男',
        }
    },
    methods: {
        sendStudentName(){
            // this.$bus.$emit('hello',this.name)
            // 发布消息
            PubSub.publish('hello',666)
        }
    },

}
</script>

<style>
    .test{
        width: 400px;
        height: 200px;
        background-color: purple;
    }
</style>