var MyMath;
(function (MyMath) {
    var Circle;
    (function (Circle) {
        var PI = 3.14;
        function calcCircumference(diameter) {
            return PI * diameter;
        }
        Circle.calcCircumference = calcCircumference;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function calcArea(width, length) {
        return width * length;
    }
    MyMath.calcArea = calcArea;
})(MyMath || (MyMath = {}));
// importing namespaces
/// <reference path="circle.ts" />
/// <reference path="rectangle.ts" />
// namespaces in namespaces
var Circle = MyMath.Circle;
console.log(MyMath.calcArea(10, 10));
console.log(Circle.calcCircumference(7));
