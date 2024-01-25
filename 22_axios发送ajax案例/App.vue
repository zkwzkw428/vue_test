<template>
  <div id="root">
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
    <div></div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  methods: {
    getStudents(){
      axios.get('http://localhost:8080/atguigu/student').then(
        response=>{
          console.log('请求成功',response.data);
        },
        error=>{
          console.log('请求失败了',error.message);
        }
      )
    }
  },
    getCars(){
        axios.get('http://localhost:8080/demo/car').then(
          response=>{
            console.log('请求成功',response.data);
          },
          error=>{
            console.log('请求失败了',error.message);
          }
        )
      }
}
</script>

<style>
    
</style>
