function logged(constructorFn: Function) {
  console.log(constructorFn);
}

@logged
class Person {
  constructor() {
    console.log(`I'm the constructor`);
  }
}

// Factory
function logging(log: boolean) {
  return log ? logged : null;
}

// Attach result
@logging(false)
class Car {}

// Advanced
function printable(constructorFn: Function) {
  constructorFn.prototype.print = function() {
    console.log(this);
  };
}

@logging(true)
@printable
class Plant {
  name = "Winter plants";
}

const fern = new Plant();
(<any>fern).print(); // necessary for the plant to use print function

// Method decorator

// Method
function editable(value: boolean) {
  return function(
    target: any,
    propName: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.writable = value;
  };
}

// Function
function overwritable(value: boolean) {
  return function(target: any, propName: string): any {
    const newDescriptor: PropertyDescriptor = {
      writable: value
    };
    return newDescriptor;
  };
}

class Project {
  // Does not allow values to be assigned to the property from any direction
  @overwritable(true)
  projectName: string;

  constructor(name: string) {
    this.projectName = name;
  }

  // Setting editable to false makes it so that the function isn't editable
  @editable(true)
  calcBudget() {
    console.log(`Building project: ${this.projectName}`);
  }
}

const hotel = new Project("Hotel");
hotel.calcBudget();
hotel.calcBudget = function() {
  console.log(`Changed it`);
};
hotel.calcBudget();

// Parameter Decorator

function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log(`Target: ${target}`);
  console.log(`Method Name: ${methodName}`);
  console.log(`Parameter Index: ${paramIndex}`);
}

class Course {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  printStudentNumbers(mode: string, @printInfo printAll: boolean) {
    if (printAll) {
      console.log(10000);
    } else {
      console.log(2000);
    }
  }
}
const course = new Course("Super Course");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);
