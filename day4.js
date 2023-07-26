// Conditional Statement In Javasrcipt

// if else Conditionals

// Example 1
let age = prompt("Enter your age : ");
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("No you cannot vote");
}

// Example 2
let marks = prompt("Enter your marks : ");
if (marks >= 90) {
  console.log("You Got grade A");
} else if (marks < 90 && marks >= 75) {
  console.log("You Got grade B");
} else if (marks >= 50 && marks < 75) {
  console.log("You Got grade C");
} else {
  console.log("You are failed");
}

// Example 3
let num = prompt("Enter a number : ");
if (num % 2 == 0) {
  console.log("Number is even");
} else {
  console.log("Number is odd");
}

// Example 4
let num1 = prompt("Enter a number : ");
let num2 = prompt("Enter another number : ");
if (num1 > num2) {
  console.log("Number 1 is greater");
} else if (num1 < num2) {
  console.log("Number 2 is greater");
} else {
  console.log("Both are equal");
}



// Switch Statement
let day = parseInt(prompt("Enter the day : "));
switch (day) {
  case 1:
    console.log("This is monday");
    break;
  case 2:
    console.log("This is Tuesday");
    break;
  case 3:
    console.log("This is Wednesday");
    break;
  case 4:
    console.log("This is Thursday");
    break;
  case 5:
    console.log("This is Friday");
    break;
  case 6:
    console.log("This is Saturday");
    break;
  case 7:
    console.log("This is Sunday");
    break;
  default:
    console.log("Invalid Day");
    break;
}
