// Destructuring of Objects

let obj = {
    name : "Lokesh Singh",
    age : 22,
    college : "Rustam Ji Institute of Technology"
}

// The Variable used for Destructuring have same name as object variable
let {name ,age, college} = obj; // This is right ✅

// Ways to rename the destructuring variable
let {name : n ,age : u, college : c} = obj; // This is right ✅

console.log(n);
console.log(u);
console.log(c);
// If the variable name is not present in the object then it will be undefined

let {naam,umar,collage} = obj; // This contains undefined Variable Name ❌ as array destructuring the name can be as per user Choice
 

console.log(name);
console.log(age);
console.log(college);