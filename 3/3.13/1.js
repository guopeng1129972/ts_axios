var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 类的一般实例
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'hello' + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter('world');
greeter.greet();
// 继承的一般用法
var Anm = /** @class */ (function () {
    function Anm() {
    }
    Anm.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log("Anm moved" + distance + "m");
    };
    return Anm;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.run = function () {
        console.log('润');
    };
    return Dog;
}(Anm));
var dog = new Dog();
dog.run();
dog.move(100);
