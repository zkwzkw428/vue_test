<template>
    <div class="test">
        <h2>学生姓名:{{ name }}</h2>
        <h2>学生年龄:{{ myAge }}</h2>
        <h2>性别:{{ sex }}</h2>
        <button @click="addAge" class="btn">点我年龄加加</button>
        
    </div>
</template>

<script>
export default {
    name: 'StudentName',
    data() {
        return {
            // name: '张三',
            // age: 18,
            // sex:'男'
            // name:'hhy',
            myAge: this.age,
        }
    },  
    // 简单接受值
    // props:['name','age','sex']

    // 接受值的时候加类型限制
    // props: {
    //     name: String,
    //     age: Number,
    //     sex:String,
    // }

    // 接受值限制类型且控制是否为必传项 
    props: {
        name: {
            typeof: String,
            required: true,
        },
        age: {
            typeof: Number,
            default: 18,
        },
        sex: {
            typeof: String,
            default:'男',
        }
    },
    methods: {
        addAge() {
            // 因为年龄由外部传入,尽量不要修改它的值
            this.myAge++
        }
    },
}
</script>

<style>
    .test{
        background-color: green;
    }
    .btn {
        width: 100px;
        height: 30px;
        text-align: center;
    }
</style>