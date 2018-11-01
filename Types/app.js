"use strict";
// string
var name = "Max";
// number
var age = 30;
// boolean
var hasHobbies = true;
// any: back to javascript world
var random = "condiments";
random = 27;
random = true;
// arrays with types -> type[]
var nums = [1, 2, 3, 4];
// tuples: arrays with specific types
var address = ["Accra Street", 30];
// enum; setting a variable from a particular list
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));
var red = Color.Red;
console.log(red);
// any
var car = "Audi";
console.log(car);
car = {
    brand: "Audi",
    series: "Q5"
};
console.log(car);
// Function types
function returnName() {
    return name;
}
console.log(returnName());
function sayHello() {
    console.log("Hello Audi");
}
function add(x, y) {
    if (x === void 0) { x = 5; }
    if (y === void 0) { y = 10; }
    return x + y;
}
console.log(add(15, 20));
// Defining functions as types
var foo;
foo = add;
console.log(foo(20, 30));
// Objects
var user = {
    name: "Monkey boy",
    age: 23
};
// Complex types
var complex = {
    data: [1, 2, 3, 4, 5],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 200, 300],
    output: function (all) {
        return this.data;
    }
};
// Union Types -> defining various possible types for a variable
var ticketNo = 2938;
ticketNo = "2938";
// check types
var randy = "randy";
if (typeof randy == "string") {
    console.log("Playing with fire");
}
