// 类的一般实例
class Greeter {
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }
  greet() {
    return 'hello' + this.greeting
  }
}

let greeter = new Greeter('world')
greeter.greet()

// 继承的一般用法
// anm称为基类
class Anm {
  move(distance: number = 0) {
    console.log(`Anm moved${distance}m`)
  }
}

class Dog extends Anm {
  run() {
    console.log('润')
  }
}

const dog = new Dog()
dog.run()
dog.move(100)
