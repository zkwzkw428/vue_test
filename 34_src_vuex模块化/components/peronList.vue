<template>
  <div>
    <h2>人员列表</h2>
    <input type="text" placeholder="请输入要添加的学生姓名" v-model="name">
    <button @click="addName">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addServerPeson">从网络上添加一个人</button>
    <ul>
        <li v-for="person in personList" :key="person.id">{{ person.name }}</li>
    </ul>
    <h2 style="color:red">count组件当中的数字为:{{ sum }}</h2>
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
            this.$store.commit('aboutPerson/ADD_PERSON',person)
            this.name = ''
        },
        addWang(){
            const person = {id:nanoid(),name:this.name}
            this.$store.dispatch('aboutPerson/addPersonWang',person)
            this.name = ''
        },
        addServerPeson(){
            this.$store.dispatch('aboutPerson/addPersonServer')
        }
    },
    computed:{
        personList(){
            return this.$store.state.aboutPerson.personList
        },
        sum(){
            return this.$store.state.aboutCount.sum
        },
        fristName(){
            return this.$store.getters['aboutPerson/fristName']
        }
    }
}
</script>

<style>

</style>