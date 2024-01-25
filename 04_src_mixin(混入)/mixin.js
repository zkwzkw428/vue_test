export const hunhe = {
    data() {
        return {
            // 以原data数据为主
            x: 100,
            y:99
        }
    },
    methods: {
        showName() {
            alert(this.name)
        }
    },
    mounted() {
        console.log("我是混入对象")
    },
}
export const hunhe2 = {
    mounted() {
        console.log("你好啊，欢迎学习");
    },
}