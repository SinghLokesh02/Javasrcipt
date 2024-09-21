// Function Returning Function -> In JavaScript, a function can return another function. This is a powerful feature that enables higher-order functions and techniques like closures.

// Example - 1

let Minus = (a,b) => a - b;
let Sum = (a,b) =>{
    console.log(`The sum of ${a} and ${b} is ${a+b}`)
    console.log(`The Difference of ${a} and ${b} is ${Minus(a,b)}`)
}
Sum(12,2)


// Example - 2

const Factorial = (num) => {
    let factorial = 1;
    for (let index = 1; index <= num; index++) {
        factorial *= index
    }
    console.log(factorial);
}

const sumOfDigits = num =>{
    let n = num;
    let ans = 0;
    while (num != 0) {
        ans = ans + num%10;
        num = parseInt(num / 10)
    }
    console.log(`The sum of Digis of ${num} is -> ${ans}`);
    return Factorial;
}

let factorial = sumOfDigits(5)
factorial(6)



// Example - 3

let myfunc = () => {
    let hello = () => {
        return "Hello World";
    }
    return hello
}

let ans = myfunc();
let s = ans()
console.log(s);


