// Variables in javasrcipt

// Variabbles are the containers for storing data
// Javasrcipt variables can be declared in 4 ways

// 1) Automatically
// 2) Var
// 3) let
// 4) const

// Let Var and Const
x = 8
y = 90
console.log("The sum of two Numbers is : ",x+y)


var a = 20;
var b = 30;
var a = 100
console.log("The sum of two Numbers is : ",a+b)

let num1 = 100
let num2 = 200
console.log("The sum of two Numbers is : ",num1+num2)


const num3 = 100
// num3 = 890 The const variable cannot be overrided
console.log("The sum of two Numbers is : ",num3+num2)


// In JavaScript, both the keywords var and let are used to declare variables.

// The let keyword was introduced in the later version of JavaScript known as ES6(ES2015). And it's the preferred way to declare variables.



// The const Keyword is fixed which cannot be Redeclared or Reassigned
const pi = 3.14
// pi = 3.15

// The var Keyword is not fixed which can be Redeclared or Reassigned
var name = "Rahul"
var name = "Rahul Kumar"
console.log(name)

// The let Keyword is not fixed which can be Redeclared but not Reassigned
let name1 = "Rahul"
// let name1 = "Rahul Kumar" // This will give an error

// The var keyword is function scoped/Global scoped
// The let keyword is block scoped
// The const keyword is block scoped

// var
function greet() {
  if (true) {
    var naam = "Rahul";
  }
  console.log(naam);
}

greet();


// let

function greet() {
    if(true){
        let naam1 = "Rahul"
    }
    console.log(naam1)
}






