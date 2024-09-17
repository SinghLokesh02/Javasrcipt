// Some and Every Methods

// *** Every Method *** -> It will check every element of array and return true if all elements satisfy the condition

// Example 1 - Check Every Element of Array is Even or not
let arr = [12, 2, 32, 4, 52];
let checkEven = (num) => num % 2 == 0;
const ans = arr.every(checkEven);
console.log(ans);

// Example 2 - check all the strings in array are having length greater than 4

let names = ["Lokesh", "Mukesh", "Surrender", "Diwakar", "Ritik"];
let Checklength = names.every((element) => element.length > 5);
console.log(Checklength);

// Example 3 - Check all the numbers in the Array are Prime or Not

let numberArray = [23, 2, 3];
let Prime = (num) => {
  if (num < 2) return 0;
  for (i = 2; i < num; i++) {
    if (num % i == 0) return 0;
  }
  return 1;
};

let checkNumberPrime = numberArray.every(Prime);
console.log(checkNumberPrime);


// *** Some Method *** -> It will check every element of array and return true if any one element satisfy the condition

// Example 1 - Check is there is any string in the Names list which is Palindrome

let nameList = ["Nayan", "ritik", "Lokesh", "Aniket", "Diwakar"];
let checkAnyPalindrome = nameList.some((element) => {
  const lower = element.toLowerCase();
  const reverseString = lower.split("").reverse().join("");
  return lower === reverseString;
});
console.log(
  `Is there is any palindrome in the Name Array : ${checkAnyPalindrome}`
);




// Example 2 - Is there is any value in the List which is Falsy
const values = [1, 23, 4, "Amit", "Shivangini", null];
let checkFalsy = (num) => Boolean(num) == false;
const ansOfCheckFalsy = values.some(checkFalsy);
console.log(`Is there is any Falsy Value in the Array : ${ansOfCheckFalsy}`);
