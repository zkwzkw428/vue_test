export default{
    install(Vue) {
        // console.log("@@@install",Vue);
        // 定义全局过滤器
        Vue.filter("mySilce", function (value) {
             return value.slice(0,4)
        })
        // 定义全局指令
        Vue.directive("fbind", {
            // 指令与元素成功绑定时
            bind(element, binding) {
                element.value = binding.value
            },
            // 指令所在元素插入页面上时
            inserted(element) {
                element.focus()
            },  
            // 指令所在模版被重新解析时
            update(element,binding) {
                element.value = binding.value
            }
        })
        // 定义混入
        Vue.mixin({
            data() {
                return {
                    hr:111,
                }
            },
        })
        // 原型添加方法
        Vue.prototype.Hello = () => {alert("你好啊")}
    }
}