interface Point {
  x: number
  y: number
}

// 都可以实现
// class Point {
//   x: number
//   y: number
// }

interface Print3D extends Point {
  z: number
}

let print3D: Print3D = { x: 1, y: 2, z: 3 }
