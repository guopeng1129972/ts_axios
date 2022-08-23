enum Color {
  Rad = 1, //支持定义索引 也支持自定义索引值，是有一个一一对应的关系，编译出来
  Green,
  Blue,
}
let colorName: string = Color[2] //获取到值的索引，支持双向对应
console.log(colorName)

// any 就是不使用类型，或者说不指定类型 或者说不想在这个时候定义类型
let noType: any = 123
noType = 'abc'
noType = true

// void 类型表示没有任何类型,没有返回值的函数，其返回值类型为 void
// 申明为 void 类型的变量，只能赋予 undefined 和 null
// 一般用于无返回的函数，对于值的声明没什么意义
function warnUser(): void {
  console.log('this is warning message')
}
// null 与 undefined
let u: undefined = undefined
let n: null = null
// let num: number = 3
// num = null
// 编译加严格模式 则会报错
// tsc index.ts -strictNullChecks
// 如果需要这么做，需要使用联合类型
let num: number | null = 3
num = null

// never用于函数不存在返回值，没有返回
// 1.直接抛出错误
function error(err: string): never {
  throw new Error(err)
}
// 2.调用错误的方法
function fail(): never {
  return error('error ')
}
// 3.无限循环的报错处理
function inifiniteLoop(): never {
  while (true) {}
}

// declare
declare function create(o: object | null): void

// create(o:{prop:0})
// create(o:null)
// create(o:42)
// create(o:'string')
// create(o:false)
// create(o:undefined)

// 断言 已知变量的类型，不用ts做判断
let someValue: any = 'this is a string'
// 1.使用断言as关键字，断言为string然后处理
let someValueLen: number = (someValue as string).length
// 2.使用强制转换类型来做
let someValueLen1: number = (<string>someValue).length

let first = [1, 2]
let second = [3, 4]
let bothPlus = [0, ...first, ...second, 5]
console.log(bothPlus) //[0,1,2,3,4,5] 浅拷贝过程

let defaults = {
  food: 'noods',
  price: '$12',
  ambiance: 'noisy',
}
let search = { ...defaults, food: 'rich' }
let search2 = { food: 'rich', ...defaults }
console.log(search) //{ food: 'rich', price: '$12', ambiance: 'noisy' }
console.log(search2) // { food: 'noods', price: '$12', ambiance: 'noisy' } //被写回去了

// 可选属性
interface Square {
  color: string
  area: number
}

interface SquareConfig {
  color?: string
  width?: number
}
function createSquare(config: SquareConfig): Square {
  let newSquare = { color: 'red', area: 100 }
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}

let mySquare = createSquare({ color: 'black', width: 1000 })
console.log(mySquare)

console.warn('只读属性')
interface Point {
  readonly x: number
  readonly y: number
}

let p1: Point = { x: 10, y: 3 }
// p1.x = 2 // 报错 不能修改

let a: number[] = [1, 2, 3, 4, 5]
let ro: ReadonlyArray<number> = a
// ro[0] = 1 //内置的ReadonlyArray属性 不允许修改

interface SearchFunc {
  //定义一个函数接口 参数类型为string string 返回值为boolean
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc
mySearch = function (str, sub) {
  let result = str.search(sub)
  return result > -1
}

console.warn('可索引的类型')
interface StringArray {
  [index: number]: string
}

let myArray: StringArray
myArray = ['bob', 'coc', 'dod']
let myStr: string = myArray[0]
console.log('myStr', myStr) //myStr bob
