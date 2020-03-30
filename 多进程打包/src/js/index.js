import '../css/index.less';
import { mul } from './test';

function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}
// eslint-disable-next-line
console.log(sum(1, 2, 3, 4));
// eslint-disable-next-line
console.log(mul(2, 3));
/*
1.eslint不认识 window、navigator全局变量
解决需要修改package.json 中eslintConfig配置
    "eslintConfig": {
    "extends": "airbnb-base",
    "env": {
      "browser": true// 支持浏览器全局变量
    }
  },

  2.sw代码必须运行在服务上
   方式一--> nodejs
   方式二--> npm i serve -g
      serve -s build 启动服务器，将build目录下的所有资源作为静态资源暴露出去
*/
// 注册 serviceWorker
// 处理兼容性问题
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(() => {
        // eslint-disable-next-line
        console.log("sw注册成功了~");
      })
      .catch(() => {
        // eslint-disable-next-line
        console.log("sw注册失败了~");
      });
  });
}
