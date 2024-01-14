// Hoisting in Javascript

// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).


// Example 1
console.log(x);
var x = 10;


// The Internal working of the above code
var x;
console.log(x);
x = 10;


// Example 2
hello();

function hello() {
  console.log("Hello World");
}




/*
Hoisting can work with function declarations and variable declarations. specially with var keyword but not with let and const keyword.
*/