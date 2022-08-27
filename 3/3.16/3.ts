// 在2.ts的基础上
// 修改 greeting 为可选参数
// 修改 greet ，添加判断条件 如果不存在 greeting 返回 standarGreeting
// 实例化 greeterMaker 方法 修改 Greeter 的 standarGreeting
// 实例化 新的 Greeter
// 输出 新的 Greeter 的 standarGreeting

class Greeter {
  static standarGreeting = 'Hello,there'
  greeting: string | undefined // 设置 greeting 为可选参数的话 得设置 greeting 可能为 undefined
  constructor(greeting?: string) {
    this.greeting = greeting
  }
  greet() {
    if (this.greeting) {
      return `Hello ${this.greeting}`
    } else {
      return `${Greeter.standarGreeting}`
    }
  }
}

let greeter: Greeter
greeter = new Greeter()
console.log(greeter.greet())
let greeterMaker: typeof Greeter = Greeter 
// typeof Greeter 取一个 Greeter 的类型，而不是实例一个
// greeterMaker.greet=(){return 3} 
//类型“typeof Greeter”上不存在属性“greet” 同理 typeof Greeter 只能改变 Greeter 的静态方法
greeterMaker.standarGreeting = 'Help there'
greeter = new Greeter()
console.log(greeter.greet())
