<template>
  <div class="container">
    <cateGory title="foods">
      <img slot="center" src="./asset/food.webp" alt="美味鸡腿" width="100%">
      <h4 slot="footer">只喜欢吃鸡腿</h4>
    </cateGory>
    <cateGory title="games" :listData="games">
      <ul slot="center">
        <li v-for="(item,index) in games" :key="index">{{ item }}</li>
      </ul>
     <div slot="footer" >
      <a href="#">点我开始游戏</a>
      <a href="#">点我开始游戏</a>
     </div>
    </cateGory>
    <cateGory title="films" :listData="films">
      <ul slot="center">
        <li v-for="(item,index) in films" :key="index">{{ item }}</li>
      </ul>
      <template  v-slot:footer>
        <div>
          <a href="">经典</a>
          <a href="">热门</a>
          <a href="">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
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
