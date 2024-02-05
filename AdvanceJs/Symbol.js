// Symbol is a primitive data type that was introduced in ES6. It is used to create unique identifiers for objects.

// Symbols are guaranteed to be unique. Even if we create many symbols with the same description, they are different values.

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2); // false

// Symbols don’t auto-convert to a string

let id = Symbol("id");
console.log(id); // Symbol(id)

console.log(id.toString()); // Symbol(id)

// Hidden properties

let age = Symbol("age");
let user = {
  name: "John",
  [age]: 30,
  sister: "sansa Stark",
};

console.log(user[age]); // 30

// Symbols in a literal
let uni = Symbol("id");

let user2 = {
  name: "John",
  [uni]: 123,
  sister: "Sansa Stark, Arya Stark",
  brother: "Robb Stark, Bran Stark",
  place: "Winterfell",
};

// Symbols are skipped by for…in
for (x in user2) {
  console.log(x);
}
