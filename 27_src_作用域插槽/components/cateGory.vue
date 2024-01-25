<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <slot :games="games"></slot>
  </div>
</template>

<script>
export default {
    name:'cateGory',
    data(){
      return{
        foods:['火锅','烧烤','麻辣小龙虾','牛排'],
        games:['王者荣耀','穿越火线','原神','超级玛丽','天天酷跑'],
        films:['《教父》','《拆弹专家》','《你好，李焕英》','《你好，尚硅谷》']
    }
  },
  props:['title','type']
}
</script>

<style>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    h3{
        text-align: center;
        background-color: orange;
    }
</style>