<template>
    <div class="demo">
        <h1>{{msg}}</h1>
        <h2>学生姓名:{{name | mySilce()}}</h2>
        <h2>学生年龄:{{age}}</h2>
        <h2>性别:{{sex}}</h2>
        <input type="text" v-fbind:value="name">
    </div>
</template>

<script>
export default{
    name: "StudentName",
    data() {
        return {
            msg: "欢迎学习Vue",
        }
    },
    props: ["name", "age", "sex"],
}
</script>

<style>
.demo{
    background-color:orange;
}
</style>