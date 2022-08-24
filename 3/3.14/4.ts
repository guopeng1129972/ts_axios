class Person {
  readonly name: string // readonly 只读的
  constructor(name: string) {
    this.name = name
  }
}

let john=new Person('Join')
// 只读属性 无法分配到 "name" ，因为它是只读属性。ts(2540)
john.name='123'

