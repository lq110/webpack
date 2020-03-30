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
      语法检查：eslint-loader 依赖eslint库
      注意：只检查自己写的源代码，第三方的库是不用检查的

      设置检查规则：
      package.json中eslintConfig中设置！
       "eslintConfig": {
          "extends": "airbnb-base"
        }
      推荐使用
      airbnb--> eslint-config-airbnb-base eslint-plugin-import eslint 三个包
      */
      {
        test: /\.js$/,
        exclude: /node_modules/, //过滤掉node_modules代码 第三方不进行验证
        loader: "eslint-loader",
        options: {
          fix: true // 自动修复代eslint格式
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
