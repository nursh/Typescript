"use strict";
function echo(data) {
    return data;
}
console.log(echo("John"));
console.log(echo(27));
console.log(echo({ name: "Ran", skill: "karate" }));
// Using Generics
// Infers the type of data and provides method support
function betterEcho(data) {
    return data;
}
console.log(betterEcho(32));
console.log(betterEcho("Legrange"));
console.log(betterEcho({ name: "Shinichi", skill: "Deduction" }));
// Arrays are generic types by default
var nums = [1, 2, 3];
nums.push(2);
console.log(nums);
// passing generic arrays to functions
function printAll(items) {
    items.forEach(function (item) { return console.log(item); });
}
var fruits = ["Apples", "Oranges", "Kiwis"];
printAll(fruits);
// Generic Assignment
// A generic function that takes data of type T and return type T
var echo2 = betterEcho;
console.log(echo2("Living la vida loca"));
// Even more explicit
// echo2<string>("Donkey and Shrek y'all");
// Generic class
// constraint with both number and string
// T could extend U both would have to be the same type
// If U is a number, T would have to be a number
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue; // The plus casts the type to numbers
    };
    return SimpleMath;
}());
var simple = new SimpleMath();
simple.baseValue = 10;
simple.multiplyValue = 20;
console.log(simple.calculate());
