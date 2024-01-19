// Arrow functions -> this are the functions introduced in ES6 and they are also called as fat arrow functions.

// Normal Functions

function sum(a, b) {
  console.log(a + b);
}
sum(1, 3);

// Function Expression

const sum_Expression = function (a, b) {
  console.log(`The sum of Number is ${a + b}`);
};

sum_Expression(11, 23);

// Arrow function Method - 1
let sum_Arrow = (a, b) => `The sum of ${a} and ${b} is ${a + b}`;
console.log(sum_Arrow(1, 3));

// Arrow function Method - 2
let sum_Arrow2 = (a, b) => {
  console.log(`The sum of ${a} and ${b} is ${a + b}`);
};

sum_Arrow2(1, 356);
