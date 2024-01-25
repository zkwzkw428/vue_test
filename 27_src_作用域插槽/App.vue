<template>
  <div class="container">
    <cateGory title="食物">
      <template scope="{games}">
       <ul>
        <li v-for="(g,index) in games" :key="index">{{ g }}</li>
       </ul>
      </template>
    </cateGory>
    <cateGory title="游戏">
      <template scope="{games}">
        <ol>
          <li v-for="(g,index) in games" :key="index">{{ g }}</li>
        </ol>
      </template>
    </cateGory>
    <cateGory title="电影">
      <template scope="{games}">
       <h4 v-for="(g,index) in games" :key="index">{{ g }}</h4>
      </template>
    </cateGory>
  </div>
</template>  
<script>
import cateGory from './components/cateGory.vue';
export default{
  name: 'App',
  components:{
   cateGory,
  }
}
</script>

<style>
    .container{
      display: flex;
      justify-content: space-around;
    }
</style>
