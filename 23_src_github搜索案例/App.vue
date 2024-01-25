<template>
   <div class="container">
      <mySection/>
      <myList/>
    </div>
</template>

<script>
import mySection from './components/mySection.vue';
import myList from './components/myList.vue'
export default{
  name: 'App',
  components:{
    mySection,
    myList,
  }
}
</script>

<style>
    
</style>
