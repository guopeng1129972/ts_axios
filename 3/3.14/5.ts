class Person {
  // 参数属性 就是给参数设定属性的定义方式
  constructor(readonly name: string) {
  // constructor(provide name: string) {
  // constructor(public name: string) {
  // constructor(protected name: string) {
    this.name = name
  }
}

let john = new Person('Join')
// 只读属性 无法分配到 "name" ，因为它是只读属性。ts(2540)
john.name = '123'
