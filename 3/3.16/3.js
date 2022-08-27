// 在2.ts的基础上
// 修改 greeting 为可选参数
// 修改 greet ，添加判断条件 如果不存在 greeting 返回 standarGreeting
// 实例化 greeterMaker 方法 修改 Greeter 的 standarGreeting
// 实例化 新的 Greeter
// 输出 新的 Greeter 的 standarGreeting
var Greeter = /** @class */ (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    Greeter.prototype.greet = function () {
        if (this.greeting) {
            return "Hello " + this.greeting;
        }
        else {
            return "" + Greeter.standarGreeting;
        }
    };
    Greeter.standarGreeting = 'Hello,there';
    return Greeter;
}());
var greeter;
greeter = new Greeter();
console.log(greeter.greet());
var greeterMaker = Greeter;
greeterMaker.standarGreeting = 'Help there';
greeter = new Greeter();
console.log(greeter.greet());
