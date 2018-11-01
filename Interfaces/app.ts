interface NamedPerson {
  firstName: string;
  age?: number; // Age is optional property

  // If you don't know the name of properties that could be assigned to interface
  // it musn't be named propName but could be anything
  // array notation means any number of properties
  [propName: string]: any;
  greet(lastName: string): void;
}

function greet(person: NamedPerson): void {
  console.log(person.firstName);
}

function changeFirstName(person: NamedPerson): void {
  person.firstName = "Anna";
}

const max: NamedPerson = {
  firstName: "Max",
  hobbies: ["cooking", "skydiving", "surfing"],
  greet(lastName: string): void {
    console.log(`My name is ${this.firstName} ${lastName}`);
  }
};

greet(max);
changeFirstName(max);
greet(max);
max.greet("Steele");

class Person implements NamedPerson {
  firstName: string = "";

  greet(lastName: string): void {
    console.log(`Hello, ${this.firstName} ${lastName}`);
  }
}

const Anna = new Person();
Anna.firstName = "Anna";
Anna.greet("Wunderbar");

// Interfaces for Functions

interface DoubleFunction {
  (x: number, y: number): number;
}

const addNums: DoubleFunction = (x: number, y: number): number => {
  return x + y;
}

console.log(addNums(10, 10));


// Interface Inheritance
interface AgedPerson extends NamedPerson {
  age: number;
}

const oldPerson: AgedPerson = {
  firstName: 'Miss Courtney',
  age: 87,
  greet(lastName: string): void {
    console.log(`Hello ${this.firstName}, I am ${this.age}`);
  }
}

console.log(oldPerson);