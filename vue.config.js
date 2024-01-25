const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 开启代理服务器
  // devServer:{
  //   此方式只能配置一个代理地址
  //   proxy:'http://localhost:5500'
  // }
  // devServer:{
  //   proxy:{
  //     '/atguigu':{
  //       target:'http://localhost:5500',
  //       pathRewrite:{'^/atguigu':''},
  //       ws:true, // 用于支持websocket
  //       changeOrigin:true // 用于控制请求头中的host值
  //     },
  //     '/demo':{
  //       target:'http://localhost:5500',
  //       pathRewrite:{'^/demo':''},
  //       ws:true, // 用于支持websocket
  //       changeOrigin:true // 用于控制请求头中的host值
  //     },
  //   }
  // }
})

