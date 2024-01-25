<template>
   <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- <transition appear name="hello"> -->
    <transition>
        <h1 v-show="isShow">我是{{ name }}</h1>
    </transition>
   </div>
</template>

<script>
export default {
    name:'studentName',
    data() {
        return {
            name:'陈平安',
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