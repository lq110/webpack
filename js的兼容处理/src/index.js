// js兼容问题

// import "@babel/polyfill"; // 代码中引入所有兼容即可使用

const add = (x, y) => {
  return x + y;
};
new Promise(resolve => {
  setTimeout(() => {
    console.log("定时器完了！");
    resolve("成功了");
  }, 1000);
});
console.log(add(2, 5));
