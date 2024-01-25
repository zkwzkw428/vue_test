<template>
    <div>
        <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" v-model="keywords"/>&nbsp;
          <button @click="getUsers">Search</button>
        </div>
      </section>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'mySection',
    data(){
      return{
        keywords:'',
      }
    },
    methods: {
      getUsers(){
        // 请求前更新数据
        this.$bus.$emit('updataListData',{isfirst:false, isLoading:true,errMsg:'',users:[]})
        axios.get(`https://api.github.com/search/users?q=${this.keywords}`).then(
          response=>{
            console.log('请求成功',response.data);
            // 将获取的用户数据发给myList
            // console.log(response.data.items);
            this.$bus.$emit('updataListData',{isLoading:false,errMsg:'',users:response.data.items})
          },
          error=>{
            console.log('请求失败',error.message);
            this.$bus.$emit('updataListData',{isLoading:false,errMsg:error.message,users:[]})
          }
        )
      }
    },
}
</script>

<style>

</style>