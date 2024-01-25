<template>
<li>
    <label>
        <input type="checkbox" :checked="todoObj.done" @change="handleChecked(todoObj.id)"/>
        <!-- 以下代码也能够实现改变是否选择状态引起数据的变化,但是不建议使用，因为通过props传递的数据最好是不要改变，即使改变对象里面深层次的属性 -->
        <!-- <input type="checkbox" v-model:="todoObj.done"/> -->
        <span>{{ todoObj.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handlesDelete(todoObj.id)">删除</button>
</li>
</template>

<script>
export default {
  name: 'MyItem',
    // 声明接受todo对象以及改变选择状态的方法
    props: ['todoObj','changeChecked','handleDelete'],
    methods: {
      handleChecked(id) {
        // 通知App组件将对应的todo对象的done取反
        this.changeChecked(id)
      },
      handlesDelete(id) {
        // 获取id删除对应的对象
        // console.log(id);
        if (confirm('是否确实删除该事项?')) {
           this.handleDelete(id)
        }
      },
    },
}
</script>

<style scoped>
li{
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }
  li label{
    float: left;
    cursor: pointer;
  }
  li label li input{
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }
  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }
  li:before{
    content:initial
  }
  li:last-child{
    border-bottom: none;
  }
  /*添加悬浮效果*/
  li:hover button{
    display: block;
  }
</style>