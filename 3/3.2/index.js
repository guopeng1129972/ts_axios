var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
var first = [1, 2];
var second = [3, 4];
var bothPlus = __spreadArrays([0], first, second, [5]);
console.log(bothPlus); //[0,1,2,3,4,5] 浅拷贝过程
var defaults = {
    food: 'noods',
    price: '$12',
    ambiance: 'noisy'
};
var search = __assign(__assign({}, defaults), { food: 'rich' });
var search2 = __assign({ food: 'rich' }, defaults);
console.log(search); //{ food: 'rich', price: '$12', ambiance: 'noisy' }
console.log(search2); // { food: 'noods', price: '$12', ambiance: 'noisy' } //被写回去了
function createSquare(config) {
    var newSquare = { color: 'red', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'black', width: 1000 });
console.log(mySquare);
console.warn('只读属性');
var p1 = { x: 10, y: 3 };
// p1.x = 2 // 报错 不能修改
var a = [1, 2, 3, 4, 5];
var ro = a;
var mySearch;
mySearch = function (str, sub) {
    var result = str.search(sub);
    return result > -1;
};
console.warn('可索引的类型');
var myArray;
myArray = ['bob', 'coc', 'dod'];
var myStr = myArray[0];
console.log('myStr', myStr);
