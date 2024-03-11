// Reduce method is used to reduce the array to a single value. It takes a callback function and an initial value as an argument. The callback function takes two arguments, the first argument is the accumulator and the second argument is the current value. The initial value is the initial value of the accumulator. The callback function returns the value of the accumulator. The reduce method returns the value of the accumulator.

// Ques - 1) Sum of all the elements of the array
let arr = [-1, -2, 3, 4, 5, 6, 7];
let sum = arr.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum);

// Ques - 2) Find the maximum element of the array
let max = arr.reduce((acc, curr) => {
  return Math.max(acc, curr);
}, 0);

console.log(max);

// Ques - 3) Find the minimum element of the array

let min = arr.reduce((acc, curr) => {
  return Math.min(acc, curr);
}, 0);

console.log(min);
