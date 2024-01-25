<template>
  <div id="root">
    <MySchool></MySchool>
    <MyStudent></MyStudent>
  </div>
</template>

<script>
import MySchool from './components/MySchool.vue';
import MyStudent from './components/MyStudent.vue';
export default {
  name: 'App',
  components: {
    MySchool,
    MyStudent,
  },
}
</script>

<style scoped>
    #root{
      /* padding: 5px 5px; */
      padding: 10px 10px;
      background-color: green;
    }
</style>
 