class Person {
  protected name: string // protected 受保护的
  constructor(name: string) {
    this.name = name
  }
}

class Employee extends Person {
  private department: string
  constructor(name: string, ziwojieshao: string) {
    super(name)
    this.department = ziwojieshao
  }
  getElevatorPitch() {
    return `my name is ${this.name} and I work in${this.department}`
  }
}

let howard =new Employee('Howard','Sales')
// 可以调用方法
console.log(howard.getElevatorPitch());
// 不能读取父级受保护的变量
console.log(howard.name);

