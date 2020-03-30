/*
 index.js:webpack入口起点文件
 1.运行指令
 开发环境：webpack ./src/index.js -o ./build/built.js --mode=development
      // webpack 会以 ./src/index.js入口文件开始打包,打包后输出到 ./build/built.js 整体打包环境，是开发环境
      结果
      Hash: 723e67d5d95941b50fa4 是唯一的id 可以用作文件名
      Version: webpack 4.42.0     webpack版本
      Time: 130ms                  时间
      Built at: 2020-03-03 18:39:54  打包的具体时间

      Asset (输出资源)      Size      Chunks(属于代码块)     Chunk Names
      built.js             4.15 KiB    main  [emitted]       main
      Entrypoint main = built.js
      [./src/index.js](参与打包的文件) 365 bytes(文件大小) {main} [built]

      生产环境：webpack ./src/index.js -o ./build/built.js --mode=production
      // webpack 会以 ./src/index.js入口文件开始打包,打包后输出到 ./build/built.js 整体打包环境，是生产环境

*/
// 入口文件 index.js
import data from "./data.json"; // 引入json文件
// import "./index.css"; // 引入样式文件
console.log(data);
function add(x, y) {
  return x + y;
}
console.log(add(1, 2));
