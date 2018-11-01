"use strict";
var double = function (value) { return value * 2; };
console.log(double(10));
var greet = function (name) {
    if (name === void 0) { name = "Max"; }
    return console.log("Hello, " + name);
};
greet();
greet("Anna");
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
var arr = [55, 20];
arr = arr.concat(numbers);
console.log(arr);
var testResults = [1.25, 2.35, 3.45];
var r1 = testResults[0], r2 = testResults[1], r3 = testResults[2];
console.log(r1, r2, r3);
var scientist = {
    name: "Will",
    experience: 12
};
var firstName = scientist.name, experience = scientist.experience;
console.log(firstName, experience);
