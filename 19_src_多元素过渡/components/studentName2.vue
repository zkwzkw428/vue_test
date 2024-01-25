<template>
   <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- <transition appear name="hello"> -->
    <transition-group>
        <h1 v-show="isShow" key="1">我是{{ name[0] }}</h1>
        <h1 v-show="isShow" key="2">我是{{ name[1] }}</h1>
    </transition-group>
   </div>
</template>

<script>
export default {
    name:'studentName',
    data() {
        return {
            name:['陈平安','消炎'],
            isShow:true,
        }
    },
}
</script>

<style>
    h1{
        background-color: orange;
    }
    .v-enter-active, .v-leave-active{
       transition: 0.5 linear;
    }
    .v-enter, .v-leave-to{
        transform: translateX(-100%);
    }
    .v-enter-to, .v-leave{
        transform: translateX(0);
    }
    /* .hello-enter-active{
        animation: moveAmn 0.5s linear;
    }
    .hello-leave-active{
        animation: moveAmn 0.5s linear reverse;
    } */
</style>