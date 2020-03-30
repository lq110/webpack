/*
 webpack.config.js  webpack的配置文件
  作用：当运行webpack指令时，会加载里面的配置

  所有构建工具都是基于nodejs平台运行的~模块化默认采用commonjs.
  node找包原则同一级找不到，到上一级找 所以可以将包下载到项目的上一级则多个项目共用可以
*/
// src里是项目用的是es6模块语言
// webpack.config.js 构建工具是基于nodejs所以用的是commonjs



const { resolve } = require("path");// 为了避免出错写绝对路径 resolve用来拼接绝对路径的方法
module.exports = {
  // webpack配置
  // 入口起点
  entry: "./src/index.js",
  //输出
  output: {
    // 输出的文件名
    filename: "built.js",
    // 输出路径 为了避免出错写绝对路径
    // __dirname  nodejs的变量，代表当前文件目录的绝对路径
    path: resolve(__dirname, "build")
  },
  // loader的配置
  module: {
    rules: [
      // 详细loader配置
      // 不同文件必须配置不同loader处理
      {
        // 匹配哪些文件
        // css文件
        test: /\.css$/,
        // 使用哪些loader进行处理
        use: [
          // use数组中loader执行顺序：从下到上、依次执行
          // 创建style标签，将js中的样式资源插入进行，添加到head中生效
          "style-loader",
          // 将css文件变成commonjs模块加载js中，里面内容是样式字符串
          "css-loader"
        ]
      },
      {
        // less文件
        // 下载less-loader和less包
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          //将less文件编译成css文件
          "less-loader"
        ]
      },
      {
        // sass文件
        // 下载sass-loader和sass包
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          //将less文件编译成css文件
          "sass-loader"
        ]
      }
    ]
  },
  // plugins的配置
  plugins: [
    // 详细plugins的配置
  ],
  // 模式
  mode: "development" // 开发模式  用做测试
  // mode: "production"  // 生产模式  用作上线
};
