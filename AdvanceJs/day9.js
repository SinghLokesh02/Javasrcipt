// Javasrcipt OOPs (Object Oriented Programming) Introduced in ES6

// Coding Methodology/style/pattern
// Code more Modular and Reusable
// Well Organized Code
// Easy to Debug
// Best for medium and large website Projects

// Javasrcipt Class and Objects
class Check {
  // Methods
  hello = () => {
    console.log("Hello Everyone Welcome to the concepts of OOPs");
  };
  Print_name(name) {
    console.log(`My name is : ${name}`);
  }
}

let obj = new Check();
obj.hello();
obj.Print_name("Lokesh Singh");

// Types of Methods in Javasrcipt

/*
1) Constructor -> Automatically Called when object is created

constructor(){
    console.log("I'm the constructor of Javasrcipt")
}

2) Prototype -> Same as the above methods used in above class and for calling it first create a obj then call it with 
obj.method_name(params)

hello(){
    console.log("Hello Everyone Welcome to the concepts of OOPs");
}

3) Static -> for calling it no obj is need we can directlt call it with the help of method name

static method_name(){
    console.log("I'm the static method in Javasrcipt")
}
*/

// ****** Constructor ******

class Construct {
  constructor(name, age) {
    console.log(`\nThe name is ${name} and the age is ${age}`);
  }
}

// Creating Objects
let call = new Construct("Lokesh Singh", 21);

// ****** Prototype ******

class Proto {
  check = (name, add) => {
    console.log(`\nThe name is ${name} and the Address is ${add}`);
  };
}

let obj2 = new Proto();
obj2.check("John Snow", "Winterfell");

// ****** Static ******

class Stats {
  static check_static(name, add) {
      console.log("\nThis is Static Method Of javasrcipt");
    console.log(`The name is ${name} and the Address is ${add}`);
  }
}


Stats.check_static("Arya Stark", "Winterfell");
 
