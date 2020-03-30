const { resolve } = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
// 定义nodejs环境变量:决定使用browserslist的哪个环境 默认是生产环境
process.env.NODE_ENV = "production";

module.exports = {
  // entry:'./src/js/index/js' // 单入口
  entry: {
    // 多入口：有几个入口，最终输出就会有几个bundle
    main: "./src/js/index.js",
    test: "./src/js/test.js"
  },
  output: {
    // [name]文件名
    filename: "js/[name].[contenthash:10].js",
    path: resolve(__dirname, "build")
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
  mode: "production"
};
