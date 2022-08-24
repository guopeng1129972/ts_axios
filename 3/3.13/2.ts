// 继承的进阶用法
// anm称为基类 超类
class Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m`)
  }
}
// 派生类 子类
class Dog extends Animal {
  bark() {
    console.log('worf worf')
  }
}
class Snake extends Animal {
  constructor(name: string) {
    super(name)
  }
  move(distance: number = 5): void {
    console.log('Slithering...')
    super.move(distance)
  }
}
class Horse extends Animal {
  constructor(name: string) {
    super(name)
    // 如果要访问this,需要将super写在前面
  }
  move(distance: number = 100): void {
    console.log('Galloping...')
    super.move(distance)
  }
}
let sam= new Snake('Sammy')
let tom:Animal=new Horse('Tommy')
sam.move()
tom.move(34)
