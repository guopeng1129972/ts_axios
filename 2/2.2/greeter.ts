class User {
  fullName: string //深拷贝数据
  firstName: string //深拷贝数据
  lastName: string //深拷贝数据
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = this.firstName + '' + this.lastName
  }
}
interface Person {
  firstName: string
  lastName: string
}

function greeter(person: Person) {
  return person.firstName + person.lastName
}
let user = new User('aaa', 'bbb')
console.log(greeter(user))
