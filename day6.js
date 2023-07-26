// Introduction to Function in Javasrcipt
console.log("\n\nJavasrcipt Functions\n\n");

// Function Declaration
function greet() {
  console.log("Hello");
}
greet();



// Function Expression
let greetMe = function () {
  console.log("Hello");
};
greetMe();



// Arrow Function
let greetYou = () => {
  console.log("Hello");
};
greetYou();



// Function with Parameters
function sum(a, b) {
  console.log("\nThe sum of given 2 Number is ", a + b);
}
sum(10, 20);



// Function with Return Statement
function sum1(a, b) {
  return a + b;
}
var result = sum1(5, 6); // Output: The Sum Of Given Two
console.log("\nThe sum of given 2 Number is ", result);



// Function with Default Parameters
function sum2(a, b = 10) {
  return a + b;
}
var result = sum2(5); // Output: The Sum Of Given Two
console.log("\nThe sum of given 2 Number is ", result);



// Function with Rest Parameters
function sum3(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

var result = sum3(5, 6, 7, 8, 9, 10); // Output: The Sum Of Given Numbers
console.log("\nThe sum of given Numbers is : ", result);


// Function with Spread Operator
function sum4(a, b, c, d, e) {
  return a + b + c + d + e;
}
var arr = [1, 2, 3, 4, 5];
var result = sum4(...arr); // Output: The Sum Of Given Numbers
console.log("\nThe sum of given Numbers is : ", result);


// Function with Callback
function greet(callback){
    callback();
}
function greetMe(){
    console.log("\nHello");
}
greet(greetMe);


// Example 1 -> Function for check a number is prime or not
check_prime = (num) => {
  if (num <= 1) return 0;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};

let num=parseInt(prompt("Enter a number : "));
let res=check_prime(num);
if(res){
    console.log("\nGiven number is prime");
}
else{
    console.log("\nGiven number is not prime");
}




// Example 2 -> Function for check a number is palindrome or not
check_palindrome = (num) => {
  let rev = 0;
  let temp = num;
  while (num != 0) {
    rev = rev * 10 + (num % 10);
    num = parseInt(num / 10);
  }
  return rev == temp;
};
let number = parseInt(prompt("Enter a number : "));
let ans = check_palindrome(number);
if (ans) {
  console.log("\nGiven number is palindrome");
} else {
  console.log("\nGiven number is not palindrome");
}
