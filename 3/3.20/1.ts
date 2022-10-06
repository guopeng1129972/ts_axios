// 1.泛型定义 指定传出参数与传入参数一致
function identity<T>(arg: T): T {
  return arg
}

// 2.泛型定义 指定为数组泛型 因为可能访问[]的属性length
function identityArray<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}

// 3.泛型类型 指定一个变量myIdentity的类型，是范型T T是 identity

let myIdentity: <T>(arg: T) => T = identity
// 3.2 对象字变量的写法
let myIdentity2: { <T>(arg: T): T } = identity

// 4.泛型接口
interface GenericIdentityFn<T> {
  (arg: T): T
}
let myIdentity3: GenericIdentityFn<number> = identity
