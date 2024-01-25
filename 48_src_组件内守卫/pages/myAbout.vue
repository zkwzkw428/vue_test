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
      // 组件内守卫
      beforeRouteEnter (to,from,next) {
        console.log(from);
        // 判断权限
        if(to.meta.isAnth){
            if(localStorage.getItem('school') === 'atguigu'){
                next()
            }else{
                alert('您没有权限查看')
            }
        }else{
            // 跳转路径
            next()
        }
    },
    beforeRouteLeave(to,from,next){
      console.log('app----beforeRouteLeave',to,from);
      next()
    }
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