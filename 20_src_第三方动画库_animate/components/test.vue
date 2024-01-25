<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition
        appear=""
        name="animate__animated animate__bounce"
        enter-active-class="animate__swing"
        leave-active-class="animate__backOutUp">
        <h1 v-show="isShow">我是{{ name }}</h1>
        </transition>
    </div>
</template>
 
 <script>
//  引入外部ccc库
 import 'animate.css'
 export default {
     name:'studentName',
     data() {
         return {
             name:['嘉然'],
             isShow:true,
         }
     },
 }
 </script>
 
 <style>
     h1{
         background-color: orange;
     }
 </style>