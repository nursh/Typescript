function echo(data: any) {
  return data;
}

console.log(echo("John"));
console.log(echo(27));
console.log(echo({ name: "Ran", skill: "karate" }));

// Using Generics
// Infers the type of data and provides method support
function betterEcho<T>(data: T) {
  return data;
}

console.log(betterEcho(32));
console.log(betterEcho<string>("Legrange"));
console.log(betterEcho({ name: "Shinichi", skill: "Deduction" }));

// Arrays are generic types by default

const nums: Array<number> = [1, 2, 3];
nums.push(2);
console.log(nums);

// passing generic arrays to functions
function printAll<T>(items: T[]): void {
  items.forEach(item => console.log(item));
}

const fruits: string[] = ["Apples", "Oranges", "Kiwis"];
printAll(fruits);

// Generic Assignment
// A generic function that takes data of type T and return type T
const echo2: <T>(data: T) => T = betterEcho;

console.log(echo2("Living la vida loca"));

// Even more explicit
// echo2<string>("Donkey and Shrek y'all");

// Generic class
// constraint with both number and string
// T could extend U both would have to be the same type
// If U is a number, T would have to be a number
class SimpleMath<T extends number | string, U extends number | string> {
  baseValue: T;
  multiplyValue: U;
  calculate(): number {
    return +this.baseValue * +this.multiplyValue; // The plus casts the type to numbers
  }
}

const simple = new SimpleMath();
simple.baseValue = 10;
simple.multiplyValue = 20;
console.log(simple.calculate());
