<template>
  <div class="demo">
    <my-Banner></my-Banner>
    <li>
      <router-link to="/About" active-class="active">About</router-link>
      <router-link to="/Home" active-class="active">Home</router-link>
    </li>
    <li><router-view></router-view></li>
  </div>
</template>

<script>
import myBanner from './components/myBanner.vue'
export default {
  name: 'App',
  components: {
    myBanner,
  },
}
</script>

<style scoped>
  .demo{
    width: 600px;
    height: 700px;
    margin: 0 auto;
    text-align: center;
  }
  li{
    list-style: none;
    float: left;
    margin-left: 100px;
  }
  a{
    text-decoration: none;
    display: block;
    margin: 4px 0;
    padding: 15px;
  }
  .active{
    background-color: skyblue;
    color:white;
  }
</style>
