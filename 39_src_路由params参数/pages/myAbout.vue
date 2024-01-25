<template>
  <div>
    <h2>这是About的内容</h2>
    <router-link active-class="active" to="/About/list">List内容</router-link>
    <router-link active-class="active" to="/About/message">message内容</router-link>
    <hr>
    <router-view></router-view>
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