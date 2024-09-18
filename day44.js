// Primitive V/s Reference Types in Javascript

console.log("Primitive Types");
let num1 = 78;
let num2 = num1;
console.log(`The Value of num1 Before change is ${num1}`);
console.log(`The Value of num2 Before change is ${num2}`);
num1 += 10
console.log(`The Value of num1 After change is ${num1}`);
console.log(`The Value of num2 After change is ${num2}`);


console.log("\n\nReference Types");

const myArr1 = ["Lokesh","Aniket"]
const myArr2 = myArr1;
console.log("The Value of Arr1 and Arr2 Before change is")
console.log("Array 1 -> ",myArr1);
console.log("Array 2 -> ",myArr2);
myArr1.push("Vimal Kant")
console.log("The Value of Arr1 and Arr2 After change is")
console.log("Array 1 -> ",myArr1);
console.log("Array 2 -> ",myArr2);



