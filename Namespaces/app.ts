// importing namespaces
/// <reference path="circle.ts" />
/// <reference path="rectangle.ts" />

// namespaces in namespaces
import Circle = MyMath.Circle;

console.log(MyMath.calcArea(10, 10));
console.log(Circle.calcCircumference(7));


