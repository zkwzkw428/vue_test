<template>
    <div class="demo">
        <h1>{{msg}}</h1>
        <h2>学生姓名:{{name}}</h2>
    </div>
</template>

<script>
export default{
    name: "StudentName",
    data() {
        return {
            name:'张三',
            msg: "欢迎学习Vue",
        }
    },
}
</script>

<style>
    .demo{
    background-color:orange;
}
</style>>
