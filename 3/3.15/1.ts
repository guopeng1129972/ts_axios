let passworld = '123456'
class Employee {
  private _follNmae: string
  get fullName(): string {
    console.log('get')
    return this._follNmae
  }
  set fullName(newName: string) {
    if (newName && newName === '1111') {
      this._follNmae = newName
    } else {
      console.log('Error: Unauthorized update of employee!')
    }
  }
}

let employee = new Employee()
console.log(employee.fullName) //走 get
employee.fullName = 'lao7' //设置失败

// tsc 1.ts --target es5
