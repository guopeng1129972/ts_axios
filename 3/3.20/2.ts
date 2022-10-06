// # 3-21 泛型 - 泛型类+泛型约束
// 泛型类型

class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x, y) {
  return x + y
}

let myGenericString = new GenericNumber<string>()
myGenericString.zeroValue = ''
myGenericString.add = function (x, y) {
  return x + y
}

console.log(myGenericString.add(myGenericNumber.zeroValue, 'test'))
