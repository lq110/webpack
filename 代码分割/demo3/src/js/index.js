function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}
/*
通过js代码，让某个文件被单独打包成一个chunk
import动态导入语法：能将某个文件单独打包
webpackChunkName:'test'  通过注释给文件第一打包后的名字
*/
import(/*webpackChunkName:'test'*/ "./test")
  //  eslint-disable-next-line
  .then(({ mul }) => {
    console.log("文件加载成功");
    // eslint-disable-next-line
    console.log(mul(2, 3));
  })
  // eslint-disable-next-line
  .catch(() => console.log("文件加载失败"));
// eslint-disable-next-line
console.log(sum(1, 2, 3, 4));
