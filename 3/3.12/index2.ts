// 继承接口
interface Shape {
  color: string
}
// 单继承接口
interface Square extends Shape {
  sideLength: number
}

let squre = {} as Square
squre.color = 'blue'
squre.sideLength = 10
