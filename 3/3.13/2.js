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
// 继承的进阶用法
// anm称为基类 超类
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log(this.name + " moved " + distance + "m");
    };
    return Animal;
}());
// 派生类 子类
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log('worf worf');
    };
    return Dog;
}(Animal));
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distance) {
        if (distance === void 0) { distance = 5; }
        console.log('Slithering...');
        _super.prototype.move.call(this, distance);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
        // 如果要访问this,需要将super写在前面
    }
    Horse.prototype.move = function (distance) {
        if (distance === void 0) { distance = 100; }
        console.log('Galloping...');
        _super.prototype.move.call(this, distance);
    };
    return Horse;
}(Animal));
var sam = new Snake('Sammy');
var tom = new Horse('Tommy');
sam.move();
tom.move(34);
// class Ji extends Animal {
//   constructor(name: string) {
//     super(name)
//   }
//   move(distance: number = 5) {
//     console.log('flying')
//     super.move(distance)
//   }
// }
// class Horse extends Animal {
//   constructor(name: string) {
//     super(name)
//   }
//   move(distance: number = 45) {
//     console.log('gallping')
//     super.move(distance)
//   }
// }
// const sam = new Ji('cai')
// const tom: Animal = new Horse('xu')
// dog.run()
// dog.move(100)
