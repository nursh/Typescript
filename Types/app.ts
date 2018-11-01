// string
let name = "Max";

// number
let age: number = 30;

// nullable values -> assign null or use it as a type
let eat: null | string = null;
eat = "yes";

// boolean
let hasHobbies: boolean = true;

// any: back to javascript world
let random: any = "condiments";
random = 27;
random = true;

// arrays with types -> type[]
let nums: number[] = [1, 2, 3, 4];

// tuples: arrays with specific types
let address: [string, number] = ["Accra Street", 30];

// enum; setting a variable from a particular list
enum Color {
  Red = "Red",
  Green = "Green",
  Blue = "Blue"
}

let red: Color = Color.Red;
console.log(red);

// any
let car: any = "Audi";
console.log(car);
car = {
  brand: "Audi",
  series: "Q5"
};
console.log(car);

// never -> for code you shouldn't be executing
function neverReturn(): never {
  throw new Error("Never ever leave me");
}

// Function types

function returnName(): string {
  return name;
}
console.log(returnName());

function sayHello(): void {
  console.log("Hello Audi");
}

function add(x: number = 5, y: number = 10): number {
  return x + y;
}
console.log(add(15, 20));

// Defining functions as types
let foo: (a: number, b: number) => number;
foo = add;
console.log(foo(20, 30));

// Objects
let user: { name: string; age: number } = {
  name: "Monkey boy",
  age: 23
};

// Complex types
let complex: { data: number[]; output: (all: boolean) => number[] } = {
  data: [1, 2, 3, 4, 5],
  output: function(all: boolean): number[] {
    return this.data;
  }
};

// Custom types
type Complex = { data: number[]; output: (all: boolean) => number[] };

let complex2: Complex = {
  data: [100, 200, 300],
  output: function(all: boolean): number[] {
    return this.data;
  }
};

// Union Types -> defining various possible types for a variable
let ticketNo: number | string = 2938;
ticketNo = "2938";

// check types
let randy = "randy";
if (typeof randy == "string") {
  console.log("Playing with fire");
}
