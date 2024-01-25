<template>
  <div>
    <StudentName name="刘梅" :age="20" sex="女"/>
    <StudentName name="张三" :age="19" sex="男"/>
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

<style>

</style>
