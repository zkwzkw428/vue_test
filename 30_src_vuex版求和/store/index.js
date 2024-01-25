// 该文件用于创建vue最为核心的store
// 引入vue
import Vue from "vue";
// 引入Vuex
import Vuex from 'vuex'
Vue.use(Vuex)
// 准备actions--用于响应组件中的动作
const actions = {
    add(context,value){
        console.log("actions中的add方法被调用了");
        context.commit('ADD',value)
    },
    decrease(context,value){
        console.log("actions中的decrease方法被调用了");
        context.commit('DECREASE',value)
    },
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
    }

}
//  准备mutations--用于操作数据(state)
const mutations = {
    ADD(state,value){
        console.log('mutation当中ADD被调用了');
        state.sum += value
    },
    DECREASE(state,value){
        console.log('mutation当中的DECREASE被调用了');
        state.sum -= value
    },
    ADDODD(state,value){
        console.log('mutation当中的ADDODD被调用了');
        state.sum += value
    },
    ADDWAIT(state,value){
        console.log('mutaion当中的ADDWAIT被调用了');
        state.sum += value
    }
}
// 准备stata--用于存储数据
const state =  {
    // 初始数据
    sum:0,
}

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
})