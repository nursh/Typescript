class Person {
  name: string;
  private type: string | null;
  protected age: number = 23;

  // setting public with variable name makes it available to the Person class
  constructor(name: string, public username: string) {
    this.name = name;
    this.type = null;
  }

  printAge(): void {
    console.log(this.age);
  }

  setType(type: string): void {
    this.type = type;
    console.log(this.type);
  }

  private persona(): string {
    return `${this.name} is ${this.age} years old and is a ${this.type}.`;
  }

  printPersona(): void {
    console.log(this.persona());
  }
}

// Inheritance
// Properties always override in the inherited class
class Musty extends Person {
  name = "Musty";

  constructor(username: string) {
    super(name, username);
    this.age = 30;
  }
}

const nur = new Person("Nur", "dollie");
console.log(nur);
nur.setType("Pyschopath");
nur.printPersona();

const musty = new Musty("tsoho");
console.log(musty);

// Getter and Setter methods
class Plant {
  private _species: string = "Africanus";

  get species() {
    return this._species;
  }

  set species(species: string) {
    if (species.length > 3) {
      this._species = species;
    }
  }
}

const plantain = new Plant();
console.log(plantain.species);
plantain.species = "ba";
console.log(plantain.species);
plantain.species = "banana";
console.log(plantain.species);

// Static Properties and Methods
class Helpers {
  static PI: number = 3.14;
  static calcCircumference(diameter: number): void {
    const circumference = this.PI * diameter;
    console.log(
      `The circumference of a circle with diameter ${diameter} is ${circumference}`
    );
  }
}

console.log(`The value of pie is ${Helpers.PI}`);
console.log(Helpers.calcCircumference(5));


// Abstract classes
abstract class Project {
  projectName: string = 'Default';
  budget: number = 1000;

  abstract changeName(name: string): void;

  calcBudget() {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  changeName(name: string): void {
    this.projectName = name;
  }
}

const skillo = new ITProject();
console.log(skillo);
console.log(skillo.changeName('Skillo Project'));
console.log(skillo);
