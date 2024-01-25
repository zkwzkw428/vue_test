<template>
    <div>
        <h1>我的学校是:{{ name }}</h1>
        <h1>目前的数字是:{{ num }}</h1>
        <button @click="num++">点我num加1</button>
        <!-- <button @click="sendName">发送学校名字</button> -->
        <button @click="diyFunction">点击触发自定义事件</button>
        <button @click="unbind">点我解绑事件</button>
        <button @click="death">点我销毁组件</button>
    </div>
</template>

<script>
export default {
    name: 'MySchool',
    data(){
       return {
        name:'尚硅谷',
        address:'北京-昌平',
        num:1,
       }
    },
    props:['receiveName'],
    methods: {
        sendName(){
            this.receiveName(this.name)
        },
        transmitName(){
            this.$emit('getWenLi',this.name,666,111)
            // this.$emit('demo')
        },
        diyFunction(){
            this.$emit('getWenLi',this.name)
        },
        unbind(){
            // this.$off('getWenLi')
            // this.$off(['getWenLi','demo'])
            this.$off()
        },
        death(){
            this.$destroy()
        }
    },
}
</script>

<style>
</style>