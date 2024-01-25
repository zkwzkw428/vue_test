<template>
  <div>
    <SchoolName/>
    <SchoolName/>
    <SchoolName ref="sch" id="sch"/>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDOM"></button>
  </div>
</template>

<script>
import SchoolName from './components/SchoolName'
export default {
  name: 'App',
  components: { SchoolName },
  data() {
    return {
      msg:"欢迎学习Vue"
    }
  },
  methods: {
    showDOM() {
      console.log(this.$refs.sch);
      console.log(document.getElementById("sch"));
    }
  }
}
</script>

<style>

</style>
