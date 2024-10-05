// Array Search Methods in JavaScript

// Array of 10 Objects having name age and city properties
const users = [
  { name: "John", age: 34, city: "Chicago" },
  { name: "Amy", age: 20, city: "New York" },
  { name: "Camila", age: 25, city: "Los Angeles" },
  { name: "David", age: 30, city: "Chicago" },
  { name: "Eva", age: 35, city: "New York" },
  { name: "John", age: 40, city: "Los Angeles" },
  { name: "Amy", age: 45, city: "Chicago" },
  { name: "Camila", age: 50, city: "New York" },
  { name: "David", age: 55, city: "Los Angeles" },
  { name: "Eva", age: 60, city: "Chicago" }
];

// *** ✅✅✅ Higher Order Functions for search ✅✅✅***

// 1. Find Method
// Find Method will return the first element that satisfies the condition
let userWithCityChicago = users.find(element => element.city === 'Chicago')
console.log("User Data is ->",userWithCityChicago);

// 2. FindIndex Method
// FindIndex Method will return the index of first element that satisfies the condition
let userIndexWithCityChicago = users.findIndex(element => element.city === 'Chicago')
console.log("User Data Index is ->",userIndexWithCityChicago);


// 3. findLastIndex()
// findLastIndex Method will return the index of last element that satisfies the condition
let userLastIndexWithCityChicago = users.findLastIndex(element => element.city === 'Chicago')
console.log("User Data Last Index is ->",userLastIndexWithCityChicago);


// 4. findLast()
// findLast Method will return the last element that satisfies the condition
let userLastWithCityChicago = users.findLast(element => element.city === 'Chicago')
console.log("User Data Last is ->",userLastWithCityChicago);

// 5. filter()
// filter Method will return the all elements that satisfies the condition
let usersWithCityChicago = users.filter(element => element.city === 'Chicago')
console.log("Users Data is ->",usersWithCityChicago);


// *** 👇👇👇 Normal Search Methods ✅✅✅

// Normal array of 10 string elements
const fruits = ['apple', 'banana', 'mango', 'orange', 'apple', 'banana', 'mango', 'orange', 'apple', 'banana'];

// 1️⃣. includes()
// includes Method will return true if the element is present in the array
let isApplePresent = fruits.includes('apple')
console.log("Apple is Present ->",isApplePresent);


// 2️⃣ indexOf()
// indexOf Method will return the index of first element that satisfies the condition
let mangoIndex = fruits.indexOf('mango')
console.log("Mango Index is ->",mangoIndex);


// 3️⃣. lastIndexOf()
// lastIndexOf Method will return the index of last element that satisfies the condition
let mangoLastIndex = fruits.lastIndexOf('mango')
console.log("Mango Last Index is ->",mangoLastIndex);
 
 