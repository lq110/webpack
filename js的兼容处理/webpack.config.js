const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "js/built.js",
    path: resolve(__dirname, "build")
  },
  module: {
    rules: [
      /*
      js兼容性处理：babel-loader @babel/core @babel/preset-env 下载三个包
      1.js基本js兼容性处理--> @babel/preset-env
      问题：只能转换基本语法，如promise不能转化
      2.全部js兼容性处理 --> @babel/polyfill
      问题：我只要解决部分兼容问题，但是将所有兼容性代码全部引入，体积太大了~
      3.需要做兼容性处理的就做：按需加载  -->core.js
      */
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除第三方库
        loader: "babel-loader",
        options: {
          presets: [  // 预设：指示babel做怎样的兼容性处理
            [
              "@babel/preset-env",
              {
                useBuiltIns: "usage", // 按需加载
                corejs: {// 指定core-js版本
                  version: 3
                },
                targets: {// 指定具体兼容性做到哪个版本浏览器
                  chrome: "60",
                  firefox: "60",
                  ie: "9",
                  safari: "10",
                  edge: "17"
                }
              }
            ]
          ]
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  mode: "development"
};
