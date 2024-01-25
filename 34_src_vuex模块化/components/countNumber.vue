<template>
  <div>
    <h2>当前求和为:{{ sum }}</h2>
    <h2>当前数字放大十倍:{{ bigSum }}</h2>
    <h2 style="color:red">person组件当中的学生人数是:{{ personList.length }}</h2>
    <h2>学校：{{ school }}</h2>
    <h2>科目：{{ subject }}</h2>
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前为奇数才加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
// 引入mapState函数用来同时编写多个计算属性
import { mapState,mapGetters,mapActions,mapMutations} from 'vuex'
export default {
    name:'countNumber',
    data(){
        return{
            n:1,
        }
    },
    methods: {
         // 自动生成dispatch方法
        ...mapActions('aboutCount',{incrementOdd:'addOdd',incrementWait:'addWait'}),
        // 自动生成commit方法与mutation进行对话
        ...mapMutations('aboutCount',{increment:'ADD',decrement:'DECREASE'})
    },
    computed:{
        // ...将对象当中的每一个键值对进行解析放入computed对象当中
        ...mapState('aboutCount',{sum:'sum',school:'school',subject:'subject'}),
        ...mapState('aboutPerson',{personList:'personList'}),
        ...mapGetters('aboutCount',{bigSum:'bigSum'}),
        /*************************/
        // 如果计算属性返回值依赖的数据与state当中的数据名字一致，则可以采用数组的简写方式
        // ...mapState(['sum','school','subject']),
        // ...mapGetters(['bigSum'])    
    }
}
</script>

<style>

</style>