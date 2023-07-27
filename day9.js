// Js Array Methods
let arr1 = [1,2,4,5,6,64,3];

console.log(arr1);

// 1. push() - add element at the end of the array
arr1.push(10);
console.log(arr1);

// 2. pop() - remove element from the end of the array
arr1.pop();
console.log(arr1);

// 3. shift() - remove element from the beginning of the array
arr1.shift();
console.log(arr1);

// 4. unshift() - add element at the beginning of the array
arr1.unshift(10);
console.log(arr1);

// 5. splice() - add or remove element from the array
arr1.splice(1,2);
console.log(arr1);

// 6. slice() - copy the array
let arr2 = arr1.slice();
console.log(arr2);

// 7. concat() - merge two or more arrays
let arr3 = [1,2,3,4,5];
let arr4 = [6,7,8,9,10];
let arr5 = arr3.concat(arr4);
console.log(arr5);

// 8. indexOf() - find the index of the element
console.log(arr5.indexOf(6));
// output: 4

// Convert array into string
console.log(arr5.toString());

// Convert array into string with separator
console.log(arr5.join(" * "));
// output: 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10

// 9. sort() - sort the array
console.log(arr5.sort());

// 10. reverse() - reverse the array
console.log(arr5.reverse());

// 11. forEach() - iterate the array
arr5.forEach(function(element){
    console.log(element);
});

// 12. map() - iterate the array and return the new array
let arr6 = arr5.map(function(element){
    return element * 2;
});


// 13. filter() - filter the array
let arr7 = arr5.filter(function(element){
    return element > 5;
});


// 14. delete() - reduce the array
delete arr5[0];
console.log(arr5);


// 15. reduce() - reduce the array
let arr8 = [1,2,3,4,5];
let sum = arr8.reduce(function(total, element){
    return total + element;
});
console.log(sum);
// Output:
// 15
