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
// 抽象类
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log('roaming the earth...');
    };
    return Animal;
}());
// 抽象一个（ Department ）部门的类
// 属性 name
// 方法 printName 输出 name
// 抽象一个 printMeeting 方法 在派生类中实现
// 创建一个 AccountingDepartment 派生类 继承 Department
// 在 AccountingDepartment 中实现printMeeting
// 在 AccountingDepartment 中实现一个成员方法 gentarateReports 生成报告
// 定义一个抽象类 通过派生类实现
// 调用派生类方法
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("this Department name is" + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'Accounting ad Auditing') || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("meeting");
    };
    AccountingDepartment.prototype.gentarateReports = function () {
        console.log("print repots");
    };
    return AccountingDepartment;
}(Department));
var department;
department = new AccountingDepartment();
department.printName();
department.printMeeting();
// 虽然 department 是通过 AccountingDepartment 实例化的 ，但是类型是 Department 不具备 gentarateReports的方法
// department.gentarateReports() //报错
