const { resolve } = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "built.js",
    path: resolve(__dirname, "build")
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  mode: "development",
  externals: {
    // 拒绝jQuery被打包  在index.html利用cdn的方式引入
    jquery: "jQuery"
  }
};
