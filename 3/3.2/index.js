var Color;
(function (Color) {
    Color[Color["Rad"] = 1] = "Rad";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorName = Color[2]; //获取到值的索引，支持双向对应
console.log(colorName);
// any 就是不使用类型，或者说不指定类型 或者说不想在这个时候定义类型
var noType = 123;
noType = 'abc';
noType = true;
// void 类型表示没有任何类型,没有返回值的函数，其返回值类型为 void
// 申明为 void 类型的变量，只能赋予 undefined 和 null
// 一般用于无返回的函数，对于值的声明没什么意义
function warnUser() {
    console.log('this is warning message');
}
// null 与 undefined
var u = undefined;
var n = null;
// let num: number = 3
// num = null
// 编译加严格模式 则会报错
// tsc index.ts -strictNullChecks
// 如果需要这么做，需要使用联合类型
var num = 3;
num = null;
// never用于函数不存在返回值，没有返回
// 1.直接抛出错误
function error(err) {
    throw new Error(err);
}
// 2.调用错误的方法
function fail() {
    return error('error ');
}
// 3.无限循环的报错处理
function inifiniteLoop() {
    while (true) { }
}
// create(o:{prop:0})
// create(o:null)
// create(o:42)
// create(o:'string')
// create(o:false)
// create(o:undefined)
// 断言 已知变量的类型，不用ts做判断
var someValue = 'this is a string';
// 1.使用断言as关键字，断言为string然后处理
var someValueLen = someValue.length;
// 2.使用强制转换类型来做
var someValueLen1 = someValue.length;
