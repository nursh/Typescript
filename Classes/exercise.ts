// Exercise 1
class Car {
  name: string;
  acceleration: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  honk() {
    console.log('hoooooooot');
  }

  accelerate(speed: number) {
    this.acceleration += speed;
  }
}

const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);


// Exercise 2
abstract class baseObject {
  width: number;
  length: number;

  constructor(width: number = 0, length: number = 0) {
    this.width = width;
    this.length = length;
  }
}

class Rectangle extends baseObject {
  constructor(width: number, length: number) {
    super(width, length);
  }

  calcSize() {
    return this.width * this.length;
  }
}

const rec = new Rectangle(5, 2);
console.log(rec.calcSize());


// Exercise 3
class person {
  private _firstname: string = "";

  get firstname() {
    return this._firstname;
  }

  set firstname(name: string) {
    if (name.length > 3) this._firstname = name;
  }
}

const max = new person();
max.firstname = 'ma';
console.log(max);
max.firstname = 'maximilian';
console.log(max);