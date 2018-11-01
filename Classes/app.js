"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    // setting public with variable name makes it available to the Person class
    function Person(name, username) {
        this.username = username;
        this.age = 23;
        this.name = name;
        this.type = null;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    Person.prototype.persona = function () {
        return this.name + " is " + this.age + " years old and is a " + this.type + ".";
    };
    Person.prototype.printPersona = function () {
        console.log(this.persona());
    };
    return Person;
}());
// Inheritance
// Properties always override in the inherited class
var Musty = /** @class */ (function (_super) {
    __extends(Musty, _super);
    function Musty(username) {
        var _this = _super.call(this, name, username) || this;
        _this.name = "Musty";
        _this.age = 30;
        return _this;
    }
    return Musty;
}(Person));
var nur = new Person("Nur", "dollie");
console.log(nur);
nur.setType("Pyschopath");
nur.printPersona();
var musty = new Musty("tsoho");
console.log(musty);
// Getter and Setter methods
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Africanus";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (species) {
            if (species.length > 3) {
                this._species = species;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plantain = new Plant();
console.log(plantain.species);
plantain.species = "ba";
console.log(plantain.species);
plantain.species = "banana";
console.log(plantain.species);
// Static Properties and Methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        var circumference = this.PI * diameter;
        console.log("The circumference of a circle with diameter " + diameter + " is " + circumference);
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log("The value of pie is " + Helpers.PI);
console.log(Helpers.calcCircumference(5));
// Abstract classes
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = 'Default';
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var skillo = new ITProject();
console.log(skillo);
console.log(skillo.changeName('Skillo Project'));
console.log(skillo);
