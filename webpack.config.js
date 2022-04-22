// webpack 配置文件

const path = require('path');  // node.js 的路径模块

module.exports = {
  mode: 'development', // 'development' | 'production'
  // entry: './src/index.js', // 入口文件（简写形式）
  entry: {
    main: './src/index.js'
  },
  output: {
    // 默认输出的文件名称 main.js
    path: path.resolve(__dirname, 'dist'), // 打包后的路径
    // filename: 'bundle.js' // 打包后的文件名
  }
}