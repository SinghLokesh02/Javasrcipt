// Strict mode in Javasrcipt -> It is used to write a secure code in Javasrcipt
// Syntax -> "use strict"

console.log("Hello Everyone Welcome to the concepts of OOPs");
"use strict";
class Check {
  // Methods
  hello = () => {
    //a = 10;     here we will get the error because we are not declaring the variable with the help of let, var or const because of strict mode

    let a = 10; // here we will not get any error because we are declaring the variable with the help of let, var or const because of strict mode
    console.log("Hello Everyone Welcome");
    console.log(`The value of a is ${a}`);
  };
  Print_name(name) {
    console.log(`My name is : ${name}`);
  }
}

let obj = new Check();
obj.hello();