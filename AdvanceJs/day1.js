// Yahoo Baba Js Advance 22 Videos

// Video Number 1

// Let var and const

// var -> function scope or global scope and it can be redeclare and reassign
var name = "Yahoo Baba";
var name = 20; // redeclare

name = 89 // reassign
console.log(name);


// Example of Global Scope



function add() {
    if(true) {
        var a = 10;
        console.log(a);
    }
     
    console.log("This is Accessing the other block variables : "+a);
}
 
add();


// let -> block scope and it can't be redeclare but can be reassign
let variable = "Yahoo Baba";
// let variable = 20;  redeclare -> error
variable = 89 // reassign
console.log(variable);


// const -> block scope and it can't be redeclare and reassign
const naam = "Yahoo Baba";
// const naam = 20;  redeclare -> error
// naam = 89 // reassign -> error

console.log(naam);
