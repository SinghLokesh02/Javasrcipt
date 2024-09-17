// Spread Operator

// Spread Operator in Array
let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
// Use of spread operator
let arr3 = [...arr1,...arr2];
console.log(arr3);


// Concat two array with more elements using spread operator
let arr4 = [...arr1,...arr2,"Item1","Item2"];
console.log(arr4);


// Spread Operator in Object

// Objects do not store duplicate keys. If you have two objects with the same key, the last key will override the first key.

let obj1 = {name: "John", age: 30};
let obj2 = {name: "Jane", age: 25};
let obj3 = {...obj1,...obj2};
console.log(obj3);


// Normally spread a String in Array and in Object using Spread Operator

// Spread String in Array
let str = "Hello";
let strArr = [...str];
console.log(strArr);

// Spread String in Object
let obj4 = {...str};
console.log(obj4);

// Spread String in Object
let obj5 = {..."abcdefghijklmnopqrstuvwxyz"};
console.log(obj5);



// Note
// Spread Operator is used to spread the elements of an array or object. It is used to copy the elements of an array or object into another array or object. It is used to merge two or more arrays or objects into a single array or object. It is used to spread the elements of a string into an array or object. It is used to spread the elements of an array or object into a string

// Spread Operator work with any Iterable Object like Array, String, Object, Set, Map, etc. It is used to spread the elements of an array or object into another array or object. It is used to merge two or more arrays or objects into a single array or object.  



// Object Destructuring

// Object Destructuring is a new way to access the object properties in JavaScript. It is a new way introduced in ES6. The variable name should be same as the object property name.

const myData = {
    myName: "John Doe",
    age: 30,
    city: "New York",
    friends: ["Jane","David","Tom"],
    "Favourite Food": "Pizza",
    address: {
        street: "123 Main Street",
        city: "New York",
        state: "NY",
        zip: 10001
    }
}

// Object Destructuring in Advance Way
const {myName,city,friends,address} = myData;
console.log(myName,city,friends,address);


// Object Destructuring with Different Variable Names
const {myName:meraNaam,city:sehar} = myData;
console.log(meraNaam,sehar);

// Object Destructuring with Default Values
// const {myName,age,city="Unknown",friends=["Unknown"],address={}} = myData;
// console.log(myName,age,city,friends,address);


// Object Destructuring for Rest Items
const {age,...restData} = myData;
console.log(age,restData);



