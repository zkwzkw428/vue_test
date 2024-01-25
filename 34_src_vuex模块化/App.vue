<template>
  <div>
    <countNubmer></countNubmer>
    <peronList></peronList>
  </div>
</template>

<script>
import countNubmer from './components/countNumber.vue'
import peronList from './components/peronList.vue';
export default {
  name: 'App',
  components: {
   countNubmer,
   peronList,
  },
  mounted() {
    // console.log(this);
  },
}
</script>

<style>

</style>
