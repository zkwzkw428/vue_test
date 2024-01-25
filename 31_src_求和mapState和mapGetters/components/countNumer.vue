<template>
  <div>
    <h2>当前求和为:{{ sum }}</h2>
    <h2>当前数字放大十倍:{{ bigSum }}</h2>
    <h2>学校：{{ school }}</h2>
    <h2>科目：{{ subject }}</h2>
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前为奇数才加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
// 引入mapState函数用来同时编写多个计算属性
import { mapState,mapGetters } from 'vuex'
export default {
    name:'countNumber',
    data(){
        return{
            n:1,
        }
    },
    methods: {
        increment(){
            this.$store.commit('add',this.n)
        },
        decrement(){
            this.$store.commit('decrease',this.n)
        },
        incrementOdd(){
            this.$store.dispatch('addOdd',this.n)
        },
        incrementWait(){
            this.$store.dispatch('addWait',this.n)
        }
    },
    computed:{
        // 一般的计算属性写法
        // sum(){
        //     return this.$store.sum
        // },
        // bigSum(){
        //     return this.$store.$getters.bigSum
        // },
        // school(){
        //     return this.$store.school
        // },
        // subject(){
        //     return this.$store.subject
        // }
        /*********************/
        // 引入mapState的计算属性写法
        // ...将对象当中的每一个键值对进行解析放入computed对象当中
        ...mapState({sum:'sum',school:'school',subject:'subject'}),
        ...mapGetters({bigSum:'bigSum'}),
        /*************************/
        // 如果计算属性返回值依赖的数据与state当中的数据名字一致，则可以采用数组的简写方式
        // ...mapState(['sum','school','subject']),
        // ...mapGetters(['bigSum'])
    }
}
</script>

<style>

</style>