// 1. Write a Proogram to reverse each word of a string
// Input: "Welcome to the world of JavaScript"
// Output: "emocleW ot eht dlrow fo tpircSavaJ"

let s = "Welcome to the world of JavaScript";
let ans = (s.split(" ").map(element => element.split('').reverse().join(""))).join(" ")
console.log(ans);


// 2. Check if a string is a palindrome
let str = "madam";
let isPalindrome = str === str.split("").reverse().join("");
console.log(isPalindrome);


// 3. Program to reverse a given Number
let num = 89908;
let reversedNumber = +(String(num).split("").reverse().join(""));
console.log(reversedNumber);


// 4. Add all elements of Array
let arr = [1,2,3,4,5,6]
let sumofAllArrayElements = arr.reduce((acc,cur)=> acc += cur)
console.log(sumofAllArrayElements);



// 5. Capitalize the first letter of each word in a string
let myStr = "welcome to the world of javascript";
let capitalizeString = (myStr.split(" ").map(element => element.charAt(0).toLocaleUpperCase() + element.substring(1))).join(" ")
console.log(capitalizeString);



// 6. Add the same element to the array 1 times
// input: [1,2,3,4,5]
// output: [1,2,3,4,5,1,2,3,4,5]
let myArr = [1,2,3,4,5];
let double = myArr.concat(myArr)
console.log(double);


// 7. Write a Code to get first n elements of the Array
let n = 3;
let firstNElements = myArr.slice(0,n);
console.log(firstNElements);


// 8. Write a Code to get last n elements of the Array
let last = 4;
let lastNElements = myArr.slice(myArr.length-4)
console.log(lastNElements);


// 9. Union of two Arrays (Remove Duplicates)
let arr1 = [1,2,3,4,5];
let arr2 = [3,4,5,6,7];
let newArr = [...new Set(Object.values({...arr1.concat(arr2)}))]
console.log("Union of 2 Array is : ",newArr);



// 10. Most Frequent Element in an Array
let arr3 = [1,2,3,4,5,1,2,3,1,2]
let Every = Math.max(...[...new Set(arr3)].map(element => arr3.reduce((acc,cur)=> cur === element ? acc+1:acc,0)))
console.log("Maximum Frequeny ->",Every);


// 11. Get the file extension from the filename
let filename = "index.pdf.pdf";
let fileExtensionName = filename.substring(filename.lastIndexOf(".")+1)
console.log(fileExtensionName);

