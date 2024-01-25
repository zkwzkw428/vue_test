<template>
  <div id="root">
    <studentName/>
    <studentName2/>
  </div>
</template>

<script>
import studentName from './components/studentName.vue';
import studentName2 from './components/studentName2.vue';
export default {
  name: 'App',
  components: {
    studentName,
    studentName2,
  },
}
</script>

<style>

</style>
