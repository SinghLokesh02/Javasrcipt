// Find Method in Js -> It will return the first element which satisfy the condition


// Example - 1
let arr = ["Lokesh", "ram", "Aniket", "Ritik", "Diwakar"];
let checkStringLength = (s) => s.charAt(0) == "D";
const ans = arr.find(checkStringLength);
console.log(ans);


// Example - 2

const users = [
  { id: 1, name: "Lokesh", age: 23 },
  { id: 2, name: "Aniket", age: 24 },
  { id: 3, name: "Ritik", age: 25 },
  { id: 4, name: "Diwakar", age: 26 },
];

// Storing all the details of user with id 3
// const name = users.find((user) => user.id === 3)

// Storing only the name of user with id 3 with the help of Destructuring
const { name } = users.find((user) => user.id === 3);
console.log("The Name of User with id 3  -> ", name);
