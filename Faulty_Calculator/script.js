// Creating a Object
/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/

let num = Math.round(Math.random() * 100);

// Creating object for the calculator
let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

// Creating a prompt to take input from the user
let num1 = prompt("Enter the first number");
let num2 = prompt("Enter the second number");
let op = prompt("Enter the operation you want to perform");

console.log(`The Percentage is ${num}%`);

if (num <= 10) {
    console.log(`The value of num1 is ${num1}`)
    console.log(`The value of num1 is ${num2}`)
    console.log(`The value of Operation is ${op}`)
  exp = num1 + obj[op] + num2;
  console.log(eval(exp));
} else {
    console.log(`The value of num1 is ${num1}`)    
    console.log(`The value of num1 is ${num2}`)    
    console.log(`The value of Operation is ${op}`)    
  exp = num1 + op + num2;
  console.log(eval(exp));
}
