<template>
  <div>
    <h2>人员列表</h2>
    <input type="text" placeholder="请输入要添加的学生姓名" v-model="name">
    <button @click="addName">添加</button>
    <ul>
        <li v-for="person in personList" :key="person.id">{{ person.name }}</li>
    </ul>
    <h2 style="color:red">count组件当中的数字为:{{ num }}</h2>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
    name:'personList',
    data(){
        return {
            name:''
        }
    },
    methods: {
        addName(){
            const person = {id:nanoid(),name:this.name}
            this.$store.commit('ADD_PERSON',person)
            this.name = ''
        }
    },
    computed:{
        personList(){
            return this.$store.state.personList
        },
        num(){
            return this.$store.state.sum
        },
    }
}
</script>

<style>

</style>