// null, undefined and not defined

// null is a value that is assigned to a variable. It means that the variable is empty. It is an assignment value. It can be assigned to a variable as a representation of no value. It is a primitive value. It is one of the primitive values of JavaScript. It is a special keyword that indicates the absence of a value. It is a special value that represents nothingness. It is a special value that represents empty or unknown value. It is a special value that represents nothing or no value. It is a special value that represents the intentional abs

// Not defined -> It means that the variable is not defined in the program. It is a variable that is not declared or initialized. It is a variable that is not declared or assigne

let a;
console.log(a); // undefined
a = 10;
console.log(a); // 10

// Array
let arr = [1, 2, 3, 4];
console.log(arr[3]); // 4
console.log(arr[4]); // undefined

// Object
let obj = {
  name: "Lokesh Singh",
  age: 21,
  college: "Rustam Ji Institute of Technology",
};
console.log(obj.address); // undefined
console.log(obj.name); // Lokesh Singh

// function
function sum1() {}
console.log(sum1()); // undefined

function sum() {
  return 10;
}
console.log(sum()); // 10

// Not Defined
// console.log(not_created); // not_created is not defined

// Null
let b = null;
console.log(b); // null

// undefined
let c;
console.log(c); // undefined


// ******** Null vs Undefined  ********

// Null and undefined both are primitive data type

let x;
let y = null;

console.log(x); // undefined
console.log(y); // null

console.log(typeof x); // undefined
console.log(typeof y); // object

console.log(x == y); // true
console.log(x === y); // false


