<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <slot name="center">我是插槽，没有指定内容的时候，我会显示</slot>
    <slot name="footer">我是插槽，没有指定内容的时候，我会显示</slot>
  </div>
</template>

<script>
export default {
    name:'cateGory',
    props:['listData','title']
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