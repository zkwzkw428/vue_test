<template>
  <div class="container">
    <cateGory title="foods">
      <img src="./asset/food.webp" alt="美味鸡腿" width="100%">
    </cateGory>
    <cateGory title="games" :listData="games">
      <ul>
        <li v-for="(item,index) in games" :key="index">{{ item }}</li>
      </ul>
    </cateGory>
    <cateGory title="films" :listData="films">
      <ul>
        <li v-for="(item,index) in films" :key="index">{{ item }}</li>
      </ul>
    </cateGory>
  </div>
</template>  
<script>
import cateGory from './components/cateGory.vue';
export default{
  name: 'App',
  data(){
    return{
      foods:['火锅','烧烤','麻辣小龙虾','牛排'],
      games:['王者荣耀','穿越火线','原神','超级玛丽','天天酷跑'],
      films:['《教父》','《拆弹专家》','《你好，李焕英》','《你好，尚硅谷》']
    }
  },
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
    li{
      list-style: none;
    }
</style>
