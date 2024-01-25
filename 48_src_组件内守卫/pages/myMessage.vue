<template>
    <div>
        <span>我是message</span>
    </div>
</template>

<script>
export default {
    name:'myMessage',
    beforeDestroy(){
        console.log('message组件即将被销毁');
    }
}
</script>

<style scoped>
    div{
        text-align: left;
    }
</style>