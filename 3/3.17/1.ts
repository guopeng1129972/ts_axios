function add(x: number, y: number): number {
  return x + y
}

const addNum: (baseValue: number, increment: number) => number = function (x: number, y: number): number {
  return x + y
}
// 存在 类型推断 可以简写为
let myaddNum = function (x: number, y: number): number {
  return x + y
}
// 存在 类型推断 可以简写2为
const addNum2: (baseValue: number, increment: number) => number = function (x, y) {
  return x + y
}
