const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    // 文件名称 (指定目录)
    filename: "js/[name].js",
    // 输出文件目录(将来所有资源输出的公共目录)
    path: resolve(__dirname, "build"),
    // 所有在html引入资源的公共路径-->'imgs/a.jpg' -->'/imgs/a.jpg'
    publicPath: "/",
    // 非入口chunk的名称(通过import引入等)  entry指定的是入口chunk
    chunkFilename: "js/[name]_chunk.js",
    library: ["name"], // 整个库向外暴露的变量名  browser
    // libraryTarget: "window" // 变量名添加到哪个上面global node
    libraryTarget: "commonjs" // 通过commonjs暴露  amd等语法规则
  },
  plugins: [new HtmlWebpackPlugin()],
  mode: "development"
};
