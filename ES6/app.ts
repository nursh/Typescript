const double = (value: number): number => value * 2;
console.log(double(10));

const greet = (name: string = "Max"): void => console.log(`Hello, ${name}`);
greet();
greet("Anna");

const numbers: number[] = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

let arr: number[] = [55, 20];
arr = [...arr, ...numbers];
console.log(arr);

const testResults: number[] = [1.25, 2.35, 3.45];
const [r1, r2, r3] = testResults;
console.log(r1, r2, r3);

const scientist: { name: string, experience: number } = {
  name: "Will",
  experience: 12
};
const { name: firstName, experience } = scientist;
console.log(firstName, experience);
