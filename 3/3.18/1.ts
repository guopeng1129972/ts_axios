function buildeName(firstName = '默认值', lastName?: string): string {
  if (lastName) {
    return firstName + ' ' + lastName
  } else {
    return firstName
  }
}

let result1 = buildeName('少了')
let result2 = buildeName('多了', '多了', '多了')
let result3 = buildeName('刚', '好')
