function add(a, b) {
  return a + b;
}
// 下一行eslint所有规则都失败 (下一行不进行eslint检查)
// eslint-disable-next-line
console.log(add(2, 5));
