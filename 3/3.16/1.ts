// 抽象类
abstract class Animal {
  abstract makeSound(): void //抽象方法 不能直接实现，通常会在派生类中去实现 可以通过修饰词修饰 private ...
  move(): void {
    console.log('roaming the earth...')
  }
}

// 抽象一个（ Department ）部门的类
// 属性 name
// 方法 printName 输出 name
// 抽象一个 printMeeting 方法 在派生类中实现
// 创建一个 AccountingDepartment 派生类 继承 Department
// 在 AccountingDepartment 中实现printMeeting
// 在 AccountingDepartment 中实现一个成员方法 gentarateReports 生成报告
// 定义一个抽象类 通过派生类实现
// 调用派生类方法

abstract class Department {
  name: string
  constructor(name: string) {
    this.name = name
  }
  printName(): void {
    console.log(`this Department name is${this.name}`)
  }
  abstract printMeeting(): void
}

class AccountingDepartment extends Department {
  constructor() {
    super('Accounting ad Auditing')
  }
  printMeeting(): void {
    console.log(`meeting`)
  }
  gentarateReports(): void {
    console.log(`print repots`)
  }
}

let department: Department
department = new AccountingDepartment()
department.printName()
department.printMeeting()
// 虽然 department 是通过 AccountingDepartment 实例化的 ，但是类型是 Department 不具备 gentarateReports的方法
// department.gentarateReports() //报错
