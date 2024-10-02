// this keyword in Js
// this keyword is used to refer to the object that is executing the current function.

// Example 1
let obj1 = {
  name: "John",
  age: 25,
  greet: function () {
    console.log(`Hello, my name is ${this.name} and my age is ${this.age}`);
  },
};

obj1.greet(); // Hello, my name is John and my age is 25

// Example 2
function PrintData() {
  console.log(`Hello, my name is ${this.name} and my age is ${this.age}`);
  console.log(this);
}

let person1 = {
  name: "Brian",
  age: 30,
  about: PrintData,
};
let person2 = {
  name: "John",
  age: 25,
  about: PrintData,
};
let person3 = {
  name: "Moogley",
  age: 12,
  about: PrintData,
};

// person1.about(); // Hello, my name is Brian and my age is 30
// person2.about(); // Hello, my name is John and my age is 25
person3.about(); // Hello, my name is Moogley and my age is 12


// ***** Why this Not Work Properly in Arrow Function *****

let PrintDataArrow = () => {
  console.log(`Hello, my name is ${this.name} and my age is ${this.age}`);
};

let person4 = {
  name: "Brian",
  age: 30,
  about: PrintDataArrow,
};

person4.about(); // Hello, my name is undefined and my age is undefined
// : In this version, PrintData is defined as an arrow function. Arrow functions do not have their own this context. Instead, they inherit this from the surrounding (lexical) context where they are defined. In this case, the surrounding context is the global context, where this is not defined. Therefore, this.name and this.age are undefined.
