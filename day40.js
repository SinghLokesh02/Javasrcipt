// Ways to Create Javascript Objects


/*

JavaScript objects are fundamental building blocks that serve as containers to organize and store related data and functionality. They are essential for representing real-world entities and concepts within your code.

Key characteristics:

Collection of properties and methods:
Properties: Key-value pairs that hold data associated with the object. These values can be of any data type, including numbers, strings, arrays, other objects, or functions.
Methods: Functions that are defined within the object and act upon its data, providing specific behaviors or actions that the object can perform.

*/

// 1. Object Literal

let bioData = {
  myName: "Lokesh",
  myAge: 21,
  getData: function () {
    console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
  },
  "Full Name": "Lokesh Singh",
};

// Ways to Access Object Properties

// i. Dot Notation
bioData.getData();

// ii. Square Bracket Notation
console.log(bioData["Full Name"]);

// 3. Object Destructuring -> While accessing the object properties we can use object destructuring and it is a new way to access the object properties. It is a new way introduced in ES6. But while accessing the variable name should be same as the object property name.

/*
Wrong Way because the variable name is not same as the object property name

let { x, y } = bioData;
console.log(x);
console.log(y);

*/

// Correct Way because the variable name is same as the object property name

let { myName, myAge } = bioData; //✅
console.log(myName);
console.log(myAge);


// 2. New Keyword/Constructor

let bioData2 = new Object();
bioData2.myName = "Sonali";
bioData2.myAge = 23;
bioData2.getData = function () {
  console.log(`My name is ${bioData2.myName} and my age is ${bioData2.myAge}`);
};
bioData2["Full Name"] = "Sonali Singh";

// Ways to Access Object Properties
bioData2.getData();
console.log(bioData2["Full Name"]);


// 3. Object.create() method
let bioData3 = Object.create({});
bioData3.myName = "Rahul";
bioData3.myAge = 24;
bioData3.getData = function () {
  console.log(`My name is ${bioData3.myName} and my age is ${bioData3.myAge}`);
};
bioData3["Full Name"] = "Rahul Singh";

// Ways to Access Object Properties
bioData3.getData();

// 4. Class Keyword

class bioData4 {
  constructor() {
    this.myName = "Diwakar";
    this.myAge = 21;
    this["Full Name"] = "Diwakar Singh";
  }
  getData() {
    console.log(`My name is ${this.myName} and my age is ${this.myAge}`);
  }
}

let obj = new bioData4();

// Ways to Access Object Properties
obj.getData();
console.log(obj["Full Name"]);


