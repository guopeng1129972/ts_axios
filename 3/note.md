# 3-3 基础类型（注意版本报错问题）

3.1 版本之后，对于元祖元素的越界访问会报错处理

# 3-4 变量声明 - var 声明

var
闭包 变量覆盖 变量提升 循环

# 3-5 变量声明 - let 声明

let
块级作用域 不能提前使用 暂时性死区 不能被重定义
tsc index.ts --target es2015 按照 es2015 编译

# 3-6 变量声明 - const 声明

const
不能重新赋值 可以修改值

# 3-7 变量声明 - 解构

## 数组结构

函数参数解构
剩余元素结构

```js
let [first, ...rest] = [1, 2, 3, 4, 5]
console.log(first) //1
console.log(rest) //剩余内容
```

## 对象结构

尽量不要嵌套太多的结构 太复杂不容易理解

# 3-8 变量声明 - 展开

```js
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
```

# 3-9 接口 - 接口初探

## 固定属性

```js
// 指定接口的类型，需要包含一个类型的值
interface Man {
  name: string;
}
```

# 3-10 接口 - 可选属性+只读属性

```js
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
// 只读属性
interface Point {
  readonly x: number
  readonly y: number
}

let p1: Point = { x: 10, y: 3 }
// p1.x = 2 // 报错 不能修改

let a: number[] = [1, 2, 3, 4, 5]
let ro: ReadonlyArray<number> = a
// ro[0] = 1 //内置的ReadonlyArray属性 不允许修改
```

# 3-11 接口 - 额外属性检查+函数类型+可索引的类型

## 额外属性检查

## 函数类型

```js
let a: number[] = [1, 2, 3, 4, 5]
let ro: ReadonlyArray<number> = a
// ro[0] = 1 //内置的ReadonlyArray属性 不允许修改

interface SearchFunc {
  //定义一个函数接口 参数类型为string string 返回值为boolean
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc
mySearch = function (str, sub) {
  let result = str.search(sub)
  return result > -1
}
```

## 可索引的类型

```js
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray
myArray = ['bob', 'coc', 'dod']
let myStr: string = myArray[0]
console.log('myStr', myStr) //myStr bob
```

可索引的类型的接口 返回值必须和设计的一样

### 只读的可索引的类型

```js
interface ReadonlyStingArray {
  readonly [index:number]:string
}
let myArray:ReadonlyStingArray=['aa','bb']

myArray[1]='cc' //tsc会报错 编译不通过
```

# 3-12 接口 -类类型+继承接口+混合类型+接口继承类

## 类类型

3.12/index.ts

### 静态接口类型

3.12/index1.ts

### 实例接口类型

3.12/index2.ts

### 继承接口

3.12/index3.ts

### 混合类型

3.12/4.ts

### 接口继承类

3.12/5.ts

# 3-13 类 - 基本示例+继承

## 基本示例

3.13/1.ts

## 复杂一点的继承

3.13/2.ts

# 3-14 类 - 公共，私有与受保护修饰符+ readonly 修饰符

## 3.13 的例子相当于默认的 public 声明的方法，例如 3.14/1.ts 就是说不写就是 public

## private 属性 定义 private 的属性 3.14/2.ts

## protected 属性 定义受保护的属性 3.14/3.ts

## readonly 属性 定义只读属性 3.14/4.ts

## 参数属性 就是给参数设定属性的定义方式 3.14/5.ts

# 3-15 类 - 存取器+ 静态属性

## 存取器

tsc 1.ts --target es5

```js
// 原理是通过es5的 defineProperty 的get set 实现代理
Object.defineProperty(Employee.prototype, 'fullName', {
  get: function () {
    console.log('get')
    return this._follNmae
  },
  set: function (newName) {
    if (newName && newName === '1111') {
      this._follNmae = newName
    } else {
      console.log('Error: Unauthorized update of employee!')
    }
  },
  enumerable: true,
  configurable: true,
})
return Employee
```

## 静态属性

通过 static 关键字设置
static origin = { x: 0, y: 0 } //类的静态属性
通过在对象上访问静态属性去引用
let xDist = point.x - Grid.origin.x //访问类的静态属性

# 3-16 类 - 抽象类+ 高级技巧

## 抽象类 抽象方法 3.16/1.ts 3.16/2.ts

1. `抽象类`通常被用于派生类的基类实现，通常不会被实例化 关键字 abstract
2. `抽象方法`不能直接实现，通常会在派生类中去实现 关键字 abstract

## 类类型 3.16/3.ts

// typeof Greeter 取一个 Greeter 的类型，而不是实例一个
// greeterMaker.greet=(){return 3}
//类型“typeof Greeter”上不存在属性“greet” 同理 typeof Greeter 只能改变 Greeter 的静态方法

## 类作为接口使用 3.16/4.ts

可以用 class 替代 interface 实现 ts 是允许这样做的，但是不建议
