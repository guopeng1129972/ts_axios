class Animal {
  private name: string
  public constructor(name: string) {
    this.name = name
  }
  public move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m`)
  }
}

class Rhino extends Animal {
  constructor() {
    super('Rhino')
  }
}

class Employee {
  private name: string
  constructor(name: string) {
    this.name = name
  }
}

let animal = new Animal('Goat')
let rhino = new Rhino()
let employee = new Employee('Bob')
// 子类赋值给父类是可以的 因为 rhino 是 animal的子类
animal = rhino
// 报错 因为employee不是子类 不兼容 因为name是private的，两个name来源不一样，没有关系
animal = employee
