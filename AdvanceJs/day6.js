// Javasrcipt Object Literals

let name = "John Snow";
let age = 25;

let obj = {
  name: name,
  age: age,
  print: function () {
    console.log(this.name, this.age);
  },
};

console.log(obj);
obj.print();

// ES6 Object Literals

let obj2 = {
  name,
  age,
  print: function () {
    console.log(this.name, this.age);
  },
};

console.log(obj2);
obj2.print();

// Object Literals: Use Variable as property name

let prop1 = "student";
let prop2 = "age";

let obj3 = {
  [prop1 + "name"]: "John Snow",
  [prop2]: 25,
  print: function () {
    console.log(this.studentname, this.age);
  },
};

console.log(obj3);
obj3.print();

// Object Literals : New Function Syntax

let obj4 = {
  name: "John Snow",
  age: 25,
  print(sister1, sister2) {
    console.log(this.name, this.age);
    console.log(`Sisters: ${sister1} ${sister2}`);
  },
};

console.log(obj4);
obj4.print("Sansa Stark", "Arya Stark");

// Function returning Object

function createObj(name, age) {
  let sister = "Sansa Stark and Arya Stark";
  let brother = "Bran Stark";
  return { name, age, sister, brother };
}

console.log(createObj("John Snow", 25));
