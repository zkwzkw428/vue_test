<template>
  <div>
   <h2>Vue Router Demo</h2>
   <button @click="forward">前进</button>
   <button @click="back">后退</button>
  </div>
</template>

<script>
export default {
    name:'myBanner',
    methods:{
      forward(){
        this.$router.back()
      },
      back(){
        this.$router.forward()
      }
    }
}
</script>

<style scoped>
 
</style>