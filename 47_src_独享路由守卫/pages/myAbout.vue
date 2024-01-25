<template>
  <div>
    <h2>这是About的内容</h2>
    <router-link active-class="active" to="/About/list" replace>List内容</router-link>
    <router-link active-class="active" to="/About/message" replace>message内容</router-link>
    <hr>
   <keep-alive include="myList">
    <router-view></router-view>
   </keep-alive>
  </div>
</template>

<script>
export default {
    name:'myAbout',
}
</script>

<style scoped>
  a{
    display: inline-block;
    padding: 10px;
    background-color: skyblue;
    text-decoration: none;
    margin-left: 5px;
  }
</style>