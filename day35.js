// Immidiately Invoked Function Expression (IIFE)

(function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
})()

/*
Syntax of IIFE :

(function(){ 
  // Do something;
})();
*/

// Normal Function

function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();


// Anonymous Function 
// It is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name.

// Anonymous Function Syntax

// function() {
//    Do something;
// }

// Anonymous Function Example

var show = function () {
    console.log("Anonymous Function");
}
show();

// Anonymous Function Example with IIFE

(function () {
    console.log("Anonymous Function with IIFE");
})();


// Difference between Normal and Anonymous Function

// Normal Function
// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();

// Anonymous Function
// (function () {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();

// Example 2: In this example, we pass arguments to the anonymous function.


    var greet = function (platform) { 
        console.log("Welcome to ", platform); 
    }; 
      
    greet("GeeksforGeeks!"); 