// 该文件用于创建vue最为核心的store
// 引入vue
import Vue from "vue";
// 引入Vuex
import Vuex from 'vuex'
import { nanoid } from 'nanoid'
import axios from "axios";
Vue.use(Vuex)

// 模块化管理数据状态
const countAbout = {
    // 设置命名空间
    namespaced:true,
    // 准备actions--用于响应组件中的动作
    actions:{
    addOdd(context,value){
        console.log("actions中的addOdd方法被调用了");
        if(context.state.sum % 2){
            context.commit('ADDODD',value)
        }
    },
    addWait(context,value){
        console.log("action中的addWait方法被调用了");
        setTimeout(()=>{
            context.commit('ADDWAIT',value)
        },500)
    },

    },
    //  准备mutations--用于操作数据(state)
    mutations:{
        ADD(state,value){
            console.log('mutation当中ADD被调用了');
            state.sum += value
        },
        DECREASE(state,value){
            console.log('mutation当中的DECREASE被调用了');
            if(state.sum - value <=0){
            state.sum = 0
            }else{
            state.sum -= value
            }
        },
        ADDODD(state,value){
            console.log('mutation当中的ADDODD被调用了');
            state.sum += value
        },
        ADDWAIT(state,value){
            console.log('mutaion当中的ADDWAIT被调用了');
            state.sum += value
        },
    },
    // 准备getters
    getters:{
        bigSum(state){  
            return state.sum * 10
        },
    },
// 准备stata--用于存储数据
    state:{
        // 初始数据
        sum:0,
        school:'尚硅谷',
        subject:'前端',
    }
}
const personAbout = {
    // 设置命名空间
    namespaced:true,
    actions:{
        addPersonWang(context,value){
            if(value.name.indexOf('王') === 0){
                context.commit('ADD_PERSON',value)
            }else{
                alert('添加的人必须姓王')
            }
        },
        addPersonServer(context){
            axios.get('http://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_PERSON',{id:nanoid(),name:response.data})
                    // console.log(response.data);
                },
                error => {
                    console.log(error.message);
                }
            )
        },
    },
    mutations:{
        ADD_PERSON(state,value){
            console.log('mutaion当中的ADD_PERSON被调用了');
            console.log(value);
            state.personList.unshift(value)
        },
    },
    getters:{
        fristName(state){
            return state.personList[0].name
        }
    },
    state:{
        personList:[
            {id:nanoid(),name:'张三'}
        ]
    }
}

// 创建并暴露store
export default new Vuex.Store({
   modules:{
    aboutCount:countAbout,
    aboutPerson:personAbout,
   }
})