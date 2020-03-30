const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/js/index.js", // 单入口 开发中单页面应用比较多
  output: { // [name]文件名
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
  /*
   1.可以将node_modules中代码单独打包一个chunk最终输出
   2.自动分析多入口chunk中，有没有公共的文件，如果有会打包成单独一个chunk
  */
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  mode: "production"
};
