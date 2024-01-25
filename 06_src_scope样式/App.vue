<template>
  <div>
    <h1 class="demo"></h1>
    <StudentName name="刘梅123344" :age="20" sex="女" class="test"/>
    <StudentName name="张三123123" :age="19" sex="男"/>
  </div>
</template>

<script>
import StudentName from './components/StudentName.vue'
export default {
  name: 'App',
  components: { StudentName },
  data() {
    return {
      msg:"欢迎学习Vue"
    }
  },
}
</script>

<style lang="less" scoped>
    .demo{
        background-color: pink;
            .test{
              color: red;
            }
    }
</style>
