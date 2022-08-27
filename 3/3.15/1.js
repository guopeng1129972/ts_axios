var passworld = '123456';
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            console.log('get');
            return this._follNmae;
        },
        set: function (newName) {
            if (newName && newName === '1111') {
                this._follNmae = newName;
            }
            else {
                console.log('Error: Unauthorized update of employee!');
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
console.log(employee.fullName);
employee.fullName = 'lao7';
// tsc 1.ts --target es5
