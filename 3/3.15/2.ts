// origin : 原点
// scale 比例
// calculateDistanceFromOrigin() 计算坐标

class Grid {
  static origin = { x: 0, y: 0 } //类的静态属性
  scale: number
  constructor(scale: number) {
    this.scale = scale
  }
  calculateDistanceFromOrigin(point: { x: number; y: number }) {
    let xDist = point.x - Grid.origin.x //访问类的静态属性
    let yDist = point.y - Grid.origin.y
    return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale
  }
}
let grid1 = new Grid(2.0)
console.log(grid1.calculateDistanceFromOrigin({ x: 3, y: 4 }))
