// 继承接口
interface Shape {
  color: string
}
interface PenStorke {
  penWidth: number
}

// 多继承接口
interface Square extends Shape, PenStorke {
  sideLength: number
}

let squre = {} as Square
squre.color = 'blue'
squre.sideLength = 10
squre.penWidth = 5.0
