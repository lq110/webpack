console.log("index.js文件被加载了");

document.getElementById("btn").onclick = function() {
  // 懒加载 利用代码分割的思路进行js文件 懒加载
  // 预加载 webpackPrefetch:true ：会在使用之前，提前加载js文件
  // 正常加载可以认为是并行加载(同一时间加载多个文件)
  // 预加载 prefetch:等其他资源加载完毕，浏览器空闲了，再偷偷加载资源
  import(/* webpackChunkName:'test' , webpackPrefetch:true*/ "./test").then(
    ({ mul }) => {
      console.log(mul(4, 5));
    }
  );
};
