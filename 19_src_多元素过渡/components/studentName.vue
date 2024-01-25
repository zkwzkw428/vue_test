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
            name:'张三',
            isShow:true,
        }
    },
}
</script>

<style>
    h1{
        background-color: orange;
    }
    .v-enter-active{
        animation: moveAmn 1s linear;
    }
    .v-leave-active{
        animation: moveAmn 1s linear reverse;
    }
    /* .hello-enter-active{
        animation: moveAmn 0.5s linear;
    }
    .hello-leave-active{
        animation: moveAmn 0.5s linear reverse;
    } */
    @keyframes moveAmn{
        from{
          transform: translateX(-100%);
        }
        to{
            transform: translateX(0);
        }
    }
</style>