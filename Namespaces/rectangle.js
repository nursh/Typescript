"use strict";
var MyMath;
(function (MyMath) {
    function calcArea(width, length) {
        return width * length;
    }
    MyMath.calcArea = calcArea;
})(MyMath || (MyMath = {}));
