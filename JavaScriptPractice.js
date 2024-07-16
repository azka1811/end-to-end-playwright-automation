// Constants
const PI = 3.14;
const GREETINGS = "Hello";

// Global variable
let globalVariable = "I am a global variable";

// Function declaration
function greet(name) {
  return `${GREETINGS}, ${name}!`;
}

// Function expression
const double = function(num) {
  return num * 2;
};

// Arrow function
const triple = (num) => {
  return num * 3;
};

// Immediately Invoked Function Expression (IIFE)
(function() {
  console.log("This is an IIFE");
})();

// Recursive function
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Template literal
const name = "Alice";
const greeting = greet(name);

// Array of objects
const students = [
  { name: "John", age: 20 },
  { name: "Jane", age: 22 },
  { name: "Bob", age: 21 }
];

// Sort students by age
students.sort((a, b) => a.age - b.age);

// Output the results
console.log("PI:", PI);
console.log("Global variable:", globalVariable);
console.log("Greeting:", greeting);
console.log("Double of 5:", double(5));
console.log("Triple of 5:", triple(5));
console.log("Factorial of 5:", factorial(5));
console.log("Sorted students:", students);
