# 前面的没啥 主要是安装 ts

# 2-2 编写第一个 TypeScript 程序

1. 写了一个 简单的类型 主要介绍了 一下 `interface`，`interface` 主要就是声明了一个类型 类似于`string`这种
2. 定义方法的时候，需要声明参数的类型是什么
3. es6 定义类的时候，再声明一下变量，相当于深拷贝了一份数据

# 3-1 基础类型（上）

## 基础类型有哪些？（这里指的是 ts 的类型声明）

```ts
// 1.布尔值
let isOK: boolean = 1
// 2.数字 用各种进制表示20
let decLiteral: number = 20 // 10进制
let hexLiteral: number = 0x14 //16进制
let binaryLiteral: number = 0b10100 //2进制
let octalLiteral: number = 0o24 //8进制
// 3.字符串 单引号，双引号，模板字符串都可以用
let name: string = 'guopeng'
let age: string = '100'
let sentence = `hello,my age is ${age}`
// 4.数组
let list: number[] = [1, 2, 3] //定义一个数组，初始3个值为1,2,3，可以扩展别的内容[1,2,3,'str']
let list2: Array<number> = [1, 2, 3] //定义一个数组，初始3个值为1,2,3，扩展值只能为number
// 5.元祖 Tuple
let x: [string, number]
x = ['str', 123] //x[0]='str' x[1]=123,
// 访问越界元素x[6]，必须符合两者的共同类型，比如x[6].toString(),不然会编辑器会提示报错x[6]=true
```

# 3-2 基础类型（下）

```ts
// 6.枚举
enum Color {
  Rad = 1, //支持定义索引 也支持自定义索引值，是有一个一一对应的关系，编译出来
  Green,
  Blue,
}
let colorName: string = Color[2] //获取到值的索引，支持双向对应
console.log(colorName)

//7.any
// any 就是不使用类型，或者说不指定类型 或者说不想在这个时候定义类型
let noType: any = 123
noType = 'abc'
noType = true
//8.void
// void 类型表示没有任何类型,没有返回值的函数，其返回值类型为 void
// 申明为 void 类型的变量，只能赋予 undefined 和 null
// 一般用于无返回的函数，对于值的声明没什么意义
function warnUser(): void {
  console.log('this is warning message')
}
//9.null 和 undefined
let u: undefined = undefined
let n: null = null
// let num: number = 3
// num = null
// 编译加严格模式 则会报错
// tsc index.ts -strictNullChecks
// 如果需要这么做，需要使用联合类型
let num: number | null = 3
num = null
//10.never
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
//11.object
// declare 声明
declare function create(o: object | null): void

// create(o:{prop:0})
// create(o:null)
// create(o:42)
// create(o:'string')
// create(o:false)
// create(o:undefined)
// 12.类型断言
// 断言 已知变量的类型，不用ts做判断
let someValue: any = 'this is a string'
// 1.使用断言as关键字，断言为string然后处理
let someValueLen: number = (someValue as string).length
// 2.使用强制转换类型来做
let someValueLen1: number = (<string>someValue).length
```
