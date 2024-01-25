<template>
  <div class="row">
    <div class="card" v-for="user in info.users" :key="user.login">
        <a :href="user.html_url" target="_blank">
            <img :src="user.avatar_url" style="width: 100px;">
        </a>
        <p class="card-text">{{ user.login }}</p>
    </div>
    <h2 v-show="info.isfirst">欢迎使用!!!</h2>
    <h2 v-show="info.isLoading">正在加载当中....</h2>
    <h2 v-show="info.errMsg">{{ info.errMsg }}</h2>
  </div>
</template>

<script>
export default {
    name:'myList',
    data(){
        return{
          info:{
            isfirst:true,
            isLoading:false,
            errMsg:'',
            users:[]
          }
        }
    },
    mounted() {
        this.$bus.$on('updataListData',dataObj=>{
            // 将获取的数据备份到myList
            // 相同属性用后面的新值，不同属性值不变
            this.info = {...this.info,...dataObj}
        })
    },
}
</script>

<style>
    .album{
        min-height: 50rem;
        padding-top: 3rem;
        padding-bottom: 3rem;
        background-color: #f7f7f7;
    }
    .card{
        float: left;
        width: 33.33%;
        padding: .75rem;
        margin-bottom: 2rem;
        border: 1px solid #efefef;
        text-align: center;
    }
    .card>img{
        margin-bottom: .75rem;
        border-radius: 100px;
    }
    .card-text{
        font-size: 85%;
    }
</style>