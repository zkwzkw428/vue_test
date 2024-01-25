<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addtodo="addTodo"/>
        <MyList :todos="todos"/>
        <MyFooter :todos="todos" :checkAll="checkAll" :clearAllTodos="clearAllTodos"/>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyFooter from './components/MyFooter.vue';
import MyList from './components/MyList.vue';
export default {
  name: 'App',
  data() {
    return {
       todos: [
        { id: '001', title: '吃饭', done: true },
        { id: '002', title: '喝酒', done: false },
        { id: '003', title: '烫头', done: true },
        { id: '004', title: '开车', done: false },
      ]
    }
  },
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  methods: {
    // 添加一个todo
    addTodo(todoObj) {
      this.todos.unshift(todoObj)
    },
    // 勾选或者取消一个todo
    changeChecked(id) {
      this.todos.forEach((todo) => {
        // 遍历数组对象寻找需要更改选择状态的对象，将选择状态置反
        if(todo.id === id){todo.done = !todo.done}
      })
    },
    // 删除一个todo
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    // 选择全部todo
    checkAll(flag) {
      // forEach没有返回值
      this.todos.forEach(todo => {todo.done = flag})
    },
    // 清除所有todo任务
    clearAllTodos() {
      this.todos = this.todos.filter(todo=> !todo.done)
    }
  },
  mounted() {
    this.$bus.$on('changeChecked',this.changeChecked)
    this.$bus.$on('deleteTodo',this.deleteTodo)
  },
  beforeDestroy(){
    this.$bus.$off('changeChecked')
    this.$bus.$off('deleteTodo')
  }
}
</script>

<style>
    /*base*/
   body{
    background: #fff;
   }
   .btn{
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
   }
   .btn-danger{
    color: #fff;
    background-color: #bd362f;
   }
   .btn:focus{
    outline: none;
   }
   .todo-container{
    width: 600px;
    margin: 0 auto;
   }
   .todo-container .todo-wrap{
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
   }
   /*header*/
   
   /*main*/
   
   /*item*/
  
  /*footer*/
</style>
