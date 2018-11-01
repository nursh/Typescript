"use strict";
function greet(person) {
    console.log(person.firstName);
}
function changeFirstName(person) {
    person.firstName = "Anna";
}
var max = {
    firstName: "Max",
    hobbies: ["cooking", "skydiving", "surfing"],
    greet: function (lastName) {
        console.log("My name is " + this.firstName + " " + lastName);
    }
};
greet(max);
changeFirstName(max);
greet(max);
max.greet("Steele");
var Person = /** @class */ (function () {
    function Person() {
        this.firstName = "";
    }
    Person.prototype.greet = function (lastName) {
        console.log("Hello, " + this.firstName + " " + lastName);
    };
    return Person;
}());
var Anna = new Person();
Anna.firstName = "Anna";
Anna.greet("Wunderbar");
var addNums = function (x, y) {
    return x + y;
};
console.log(addNums(10, 10));
var oldPerson = {
    firstName: 'Miss Courtney',
    age: 87,
    greet: function (lastName) {
        console.log("Hello " + this.firstName + ", I am " + this.age);
    }
};
console.log(oldPerson);
