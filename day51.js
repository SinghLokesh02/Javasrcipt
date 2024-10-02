// __proto__ or [[prototype]]  JavaScript
// The Object.create() creates an object from an existing object. In other words, it creates a new object and sets the [[Prototype]] of this object to the object passed as the first argument. The [[Prototype]] is the internal property of an object that points to its prototype object.

let obj1 = {
  firstName: "Ved Parkash",
  lastName: "Singh",
  age: 53,
  address: "House Number 112, Ambedkar Nagar, Delhi",
  religion:"hindu"
};

// Creating Obj2 from Obj1
let obj2 = Object.create(obj1);
obj2.name = "Lokesh Singh";
obj2.age = 22;

// Creating Obj3 from Obj2
let obj3 = Object.create(obj2);
obj3.name = "Amit vikram";
obj3.age = 19;

console.log(obj3.name + " " + obj3.lastName); // Amit vikram Singh

 
 



 