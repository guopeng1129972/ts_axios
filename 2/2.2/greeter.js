var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = this.firstName + '' + this.lastName;
    }
    return User;
}());
function greeter(person) {
    return person.firstName + person.lastName;
}
var user = new User('aaa', 'bbb');
console.log(greeter(user));
