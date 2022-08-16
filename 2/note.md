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
