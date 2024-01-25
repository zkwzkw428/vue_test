<template>
  <div>
    <!-- 通过夫组件向子组件传递函数，实现子组件给父组件传递数据 -->
    <MySchool v-on:demo="demo" v-on:getWenLi="getName"></MySchool>
    <!-- 通过自定义事件，实现子组件给父组件传递数据 -->
    <!-- <MySchool v-on:getWenLi="transmitName"></MySchool> -->
     <!-- 通过$ref属性，获取组件实例对象，实现子组件给父组件传递数据 -->
    <!-- <MySchool ref="School"></MySchool> -->
  </div>
</template>

<script>
import MySchool from './components/MySchool.vue';
export default {
  name: 'App',
  components: {MySchool},
  methods: {
    getName(name){
      console.log('我已经收到学校名字'+ name);
    },
    // transmitName(value,...args){
    //   console.log('我已经收到学校名字'+ value);
    //   console.log(args);
    // },
    demo(){
      console.log('我是demo我被执行了');
    },
  },
  // mounted() {
  //  setTimeout(()=>{
  //   this.$refs.School.$once('getWenLi',this.transmitName)
  //  },3000)
  // },
}
</script>

<style>
   
</style>
