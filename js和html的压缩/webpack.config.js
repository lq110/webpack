const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "js/built.js",
    path: resolve(__dirname, "build")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {// 压缩html代码
        collapseWhitespace: true, // 移出空格
        removeComments: true // 移出注释
      }
    })
  ],
  mode: "production" // 生产环境会自动压缩js代码
};
