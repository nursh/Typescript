function Greeter(greeting: String) {
  this.greeting = greeting;
}

Greeter.prototype.greet = function() {
  return `Hello, ${this.greeting}`;
};

const greeter = new Greeter("world");
const button = document.createElement("button");
button.textContent = "Say Hello";
button.onclick = function() {
  alert(greeter.greet());
};
document.body.appendChild(button);
