// 泛型约束1 简单实用 继承属性 关键字 extends
interface Lengthwise {
  length: number
}
// 约束传入的内容符合 接口 Lengthwise 的设置
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}

loggingIdentity({ length: 1 })

// 泛型约束2 继承属性的关键字在传入的属性中 关键字 extends keyof

function getPrototype<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}
let x = { a: 1, b: 2, c: 3, d: 4 }
getPrototype(x, 'a')
// getPrototype(x,'m') //报错

// 3.泛型中使用类型类

function create<T>(c: { new (): T }): T {
  return new c()
}



