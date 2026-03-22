// Function Declaration
function greet(name) {
  return "Hello " + name;
}
console.log(greet("Kamarre"));

// Function Expression
const add = function(a, b) {
  return a + b;
};
console.log(add(3, 4));

// Arrow Function
const multiply = (a, b) => a * b;
console.log(multiply(2, 5));

// Parameters & Arguments
function showMessage(message) {
  console.log(message);
}
showMessage("Learning JS!");

// Scope Example
let globalVar = "I am global";

function testScope() {
  let localVar = "I am local";
  console.log(globalVar);
  console.log(localVar);
}
testScope();

// console.log(localVar); ❌ ERROR (local scope)