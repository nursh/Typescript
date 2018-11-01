var MyMap = /** @class */ (function () {
    function MyMap() {
        this.map = [];
    }
    MyMap.prototype.setItem = function (key, item) {
        this.map.push({ key: key, value: item });
    };
    MyMap.prototype.getItem = function (key) {
        var pair = this.map.find(function (pair) { return pair.key === key; });
        return pair.value;
    };
    MyMap.prototype.clear = function () {
        this.map = [];
    };
    MyMap.prototype.printMap = function () {
        this.map.forEach(function (pair) { return console.log(pair); });
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem("apples", 5);
numberMap.setItem("bananas", 10);
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem("name", "Max");
stringMap.setItem("age", "27");
stringMap.printMap();
