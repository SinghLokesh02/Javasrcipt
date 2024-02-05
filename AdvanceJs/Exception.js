// Execption Handling in JavaScript

// Syntax

/*
try {
    // code
} catch (error) {
    // code  
} finally {
    // code
}
*/

// Example 1

try {
  console.log("Start of try runs");
  unicycle;
  console.log("End of try runs -- never reached");
} catch (err) {
  console.log(err.name); // this will print Type of Error
  console.log(err.message); // this will print Error Message
  //   console.log(err.stack); // this will print Error Stack
} finally {
  console.log("This is always run");
  console.log("...cleanup goes here");
}
/*
ErrorName                     Message
ReferenceError                	An illegal reference has occurred
TypeError                       A type error has occurred
RangeError                      A range error has occurred
SyntaxError                     A syntax error has occurred
URIError                        An error in encodeURI() has occurred
EvalError                       An error has occurred in the eval() function
*/

// Example 2

var func = function () {
  try {
    num = 34;
    if(num%2 === 0){
        return "Even";
    }
    else{
        return "Odd";
    }
  } catch (e) {
    return "Something went wrong";
  } finally {
    console.log("Finally always runs");
  }
};

console.log(func()); // 1




// Example 3

// Custom Error

var func = function () {
    try {
        num = 35;
        if(num%2 === 0){
            return "Even";
        }
        else{
            throw new Error("Number is Odd");
        }
    } catch (e) {
        return e.message;
    } finally {
        console.log("Finally always runs");
    }
    }

    console.log(func()); // Number is Odd



// Example 4

// Exception Handling in Asynchronous Code

var func = function () {
    setTimeout(function () {
        try {
            num = 35;
            if(num%2 === 0){
                return "Even";
            }
            else{
                throw new Error("Number is Odd");
            }
        } catch (e) {
            console.log(e.message);
        } finally {
            console.log("Finally always runs");
        }
    }, 1000);
    }

    func(); // Number is Odd