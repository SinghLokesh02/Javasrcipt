// Javascript Object Part 2

// 1. Object.keys()
// 2. Object.values()
// 3. Object.entries()
// 4. Object.assign()
// 5. Object.freeze
// 6. Object.seal
// 7. Object.getPrototypeOf
// 8. Object.setPrototypeOf
// 9. Object.hasOwnProperty

const person = {
  name: "John Snow",
  age: 30,
  hobbies: ["reading", "games", "coding"],
  greet: function () {
    console.log("Hello there");
  },
};
const person1 = {
  "Full name": "Lokesh Singh",
  age: 21,
  hobbies: ["Playing", "Coding", "Roaming"],
  greet: function () {
    console.log(`Hello there my hobby is ${this.hobbies[1]}`);
  },
};

// 1. Object.keys()
console.log(Object.keys(person)); // ["name", "age", "hobbies", "greet"]

// 2. Object.values()
console.log(Object.values(person)); // ["John", 30, ["reading", "games", "coding"], ƒ]

// 3. Object.entries()
console.log("The Entries are:");
console.log(Object.entries(person));

// 4. Object.assign()
// Syntax -> Object.assign(target, source1, source2, /* …, */ sourceN)
let obj3 = Object.assign({}, person, person1);
console.log(obj3["hobbies"][1]);

// Or We can use spread Operator
const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "d", 5: "e", 6: "f" };
const obj_demo = { ...obj1, ...obj2 };
console.log("The Object Combined by spread Operator is:");
console.log(obj_demo);

// 5. Object.freeze
Object.freeze(person);
person["name"] = "Arya Stark";
console.log(person["name"]);

// 6. Object.seal -> It will not allow to add new property but we can change the value of existing property
Object.seal(person1);
person1["Full name"] = "Arya Stark";
console.log(person1["Full name"]);

// 7. Object.hasOwnProperty -> It will check whether the property is present in the object or not
console.log(person1.hasOwnProperty("Full name")); // true

// 8. Object.getPrototypeOf -> It will return the prototype of the object
console.log(Object.getPrototypeOf(person1));

