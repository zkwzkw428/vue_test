<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addtodo="addTodo"/>
        <MyList :todos="todos" :changeChecked="changeChecked" :handleDelete="deleteTodo"/>
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
      todos:JSON.parse(localStorage.getItem('todos')) || [],
    }
  },
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  methods: {
    addTodo(todoObj) {
      this.todos.unshift(todoObj)
    },
    changeChecked(id) {
      this.todos.forEach((todo) => {
        // 遍历数组对象寻找需要更改选择状态的对象，将选择状态置反
        if(todo.id === id){todo.done = !todo.done}
      })
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    checkAll(flag) {
      // forEach没有返回值
      this.todos.forEach(todo => {todo.done = flag})
    },
    // 清除所有任务
    clearAllTodos() {
      this.todos = this.todos.filter(todo=> !todo.done)
    }
  },
  watch:{
    todos:{
      deep:true,
      handler(value){
        localStorage.setItem('todos',JSON.stringify(value))
      }
    }
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
