import "core-js/modules/es.object.to-string";
import "core-js/modules/es.promise";

import "../css/iconfont.css";
import "../css/index.less";
/* eslint no-new:0 */
/* eslint-disable no-new */
new Promise(resolve => {
  setTimeout(() => {
    console.log("定时器完了！");
    resolve("成功了");
  }, 1000);
});

const add = (a, b) => a + b;

console.log(add(5, 10));
