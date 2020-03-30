const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 设置nodejs环境变量 默认是生产环境
// process.env.NOOD_ENV = "development";
module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "js/built.js",
    path: resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          /*
          css兼容处理：postcss --> postcss-loader postcss-preset-env
          */
          // 使用loader的默认配置
          // 'postcss-loader'
          //修改loader的配合
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [
                // postcss 的插件
                require("postcss-preset-env")()
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin(
      // 对输出的css文件重命名
      { filename: "css/built.css" }
    )
  ],
  mode: "development"
};
