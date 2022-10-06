// # 3-21 泛型 - 泛型类+泛型约束
// 泛型类型
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
var myGenericString = new GenericNumber();
myGenericString.zeroValue = '';
myGenericString.add = function (x, y) {
    return x + y;
};
console.log(myGenericString.add(myGenericNumber.zeroValue, 'test'));
