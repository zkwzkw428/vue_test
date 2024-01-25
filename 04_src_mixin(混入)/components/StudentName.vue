<template>
    <div class="demo">
        <h1>{{msg}}</h1>
        <h2 @click="showName">学生姓名:{{name}}</h2>
        <h2>学生年龄:{{age}}</h2>
        <h2>性别:{{sex}}</h2>
    </div>
</template>

<script>
import {hunhe,hunhe2} from '../mixin'
export default {
    name: "StudentName",
    data() {
        return {
            msg: "欢迎学习Vue",
            x: 10,
            y:20,
        }
    },
    props: ["name", "age", "sex"],
    mixins: [hunhe, hunhe2],
    mounted() {
        console.log("我不是混入对象配置的");
    },
}
</script>

<style>
.demo{
    background-color:orange;
}
</style>