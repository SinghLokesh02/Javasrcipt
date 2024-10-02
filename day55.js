// Computed properties of Objects ->

let key1 = "name";
let key2 = "age";
let key3 = "address";

let value1 = "Lokesh Singh";
let value2 = 22;
let value3 = "House Number 112, Ambedkar Nagar, Delhi";

// Create a Object Using Above keys and values Variable

// Method - 1

let obj = {
  [key1]: value1,
  [key2]: value2,
  [key3]: value3,
};

console.log(obj);

// Method - 3

let objFromkeys = {};
objFromkeys[key1] = value1;
objFromkeys[key2] = value2;
objFromkeys[key3] = value3;

console.log(objFromkeys);

// Spread Operator in Objects

// Spread String/Array in Objects -> In this case keys will be element Index and Values will be that element
const alpha = { ..."abcd", ans: "Yes" };
let numberArray = [12, 34, 45, 56, 67];
const numbers = { ...numberArray };
console.log(alpha);
console.log(numbers);
