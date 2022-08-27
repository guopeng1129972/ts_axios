// 创建一个 Greeter 类
// 实现一个静态属性 standarGreeting
// 实现一个类型为sting 的 greeting 的成员属性，通过 构造函数 赋值
// 实现一个成员方法 greet 返回 greeting
// 创建一个实例 greeter 类型为 Greeter
// 实例化 greeter
// 输出调用 greeter 的 greet 方法

class Greeter {
  static standarGreeting = 'Hello,there'
  greeting: string
  constructor(greeting: string) {
    this.greeting = greeting
  }
  greet() {
    return `Hello ${this.greeting}`
  }
}

let greeter: Greeter
greeter = new Greeter('world')
console.log(greeter.greet())
