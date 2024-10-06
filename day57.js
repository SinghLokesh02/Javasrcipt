// Iterate Over the Object 

let person = {
  name: "Lokesh Singh",
  age: 30,
  hobbies: ["reading", "games", "coding"],
  greet: () => {
    console.log("Hello there");
  },
  friends: ["Aniket", "Diwakar", "ritik"],
};

// Iterate Over Objects

// 1. Using for...in loop
// We can iterate over objects using for...in loop. but we can't use . operator to access the object properties. We have to use [] operator to access the object properties.

console.log("\n\nUsing for..in Loop\n");
for (data in person) {
  console.log(`${data} -> ${person[data]}`);
}

// 2. Using Object.keys() method
// Object.keys() method is used to get the keys of an object. It returns an array of keys of an object.We can use any array method to iterate over the keys of an object. because it returns an array.

console.log("\n\nUsing Object.keys() method\n");

Object.keys(person).forEach((key) => {
  console.log(`${key} -> ${person[key]}`);
});

// 3. Using Object.entries() method
// Object.entries() method is used to get the keys and values of an object. It returns an array of arrays. Each inner array contains two elements. The first element is the key and the second element is the value of the object.

console.log("\n\nUsing Object.entries() method\n");

Object.entries(person).forEach(([key, value]) => {
  console.log(`${key} -> ${value}`);
});

// 4. Using Object.values() method
// Object.values() method is used to get the values of an object. It returns an array of values of an object. We can use any array method to iterate over the values of an object. because it returns an array.In this case, we can't get the keys of an object.

console.log("\n\nUsing Object.values() method\n");

Object.values(person).forEach((value) => {
  console.log(value);
});
