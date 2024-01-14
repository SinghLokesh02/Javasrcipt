// Rest and Spread Operator in Javasrcipt

// Rest Operator

function sum(a, b, c, ...other) {
  console.log(other);
  console.log(other - [1]);
  console.log(arguments);
  console.log("The Sum of three Number is : ", a + b + c);
}

sum(10, 20, 30, 2, 45, 67, 54, 34);

// Spread Operator
// Example - 1
let arr = [21.23, 43, 45, 6, 76, 78, 43, 21];

let arr2 = [...arr]
console.log(arr2);


// Example - 2

let names = ["Sonali Dubey","Lokesh Singh","Diwakar Singh","Ritik Srivastav","Aniket Shivhare"]


function Print_names(name1,name2,name3){
    console.log(name1);
    console.log(name2);
    console.log(name3);
}

// Way 1 to Print
Print_names(names[0],names[1],names[2])

// Way 2 to Print
Print_names(...names)
