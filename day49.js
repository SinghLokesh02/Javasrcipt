// Callback function - In JavaScript, a callback function is a function that is passed as an argument to another function, and is executed after the first function completes.


// Example - 1
let Sum = (a,b) => {
    console.log(`The sum of ${a} and ${b} is -> ${a + b}`)
}

let printValues = (num1,num2,callback) =>{
    console.log(`The Values of a is -> ${num1} `)
    console.log(`The Values of b is -> ${num2} `)
    callback(num1,num2)
}

printValues(23,34,Sum)



// Example - 2

function greet(name, callback) {
    console.log('Hello, ' + name + '!');
    callback();
  }
  
  function sayGoodbye() {
    console.log('Goodbye!');
  }
  
  greet('John', sayGoodbye); 


//   Example - 3

function sayGoodMorning(name,Callback){
    console.log(`Hello ${name}, Good Morning 🌄🌅`);
    Callback(name)
}
function sayGoodAfternoon(name){
    console.log(`Hello ${name}, Good Afternoon ☀️🌇`);
    sayGoodAEvening(name)
}
function sayGoodAEvening(name){
    console.log(`Hello ${name}, Good Evening 🌃🌆`);
}

sayGoodMorning("Lokesh",sayGoodAfternoon);