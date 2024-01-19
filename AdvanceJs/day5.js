// Spread Operator

let arr1 = [1,2,3,4,5];

let arr2 = [6,7,8,9,10];

// Use of spread operator
let arr3 = [...arr1,...arr2];
console.log(arr3);

// Use of rest operator

let myFunc5 = (...args) => {
    console.log(args);
}

myFunc5(1,2,3,4,5,6,7,8,9,10);


// Use of Spread Operator 2

let Print_name =(a,b,c,d) => {
    console.log(`Hello ${a} ${b} ${c}`);
    console.log(`Hello ${d}`);
}

let naams = ['John','Doe','Smith','Alex','Bob','Alice','Dora'];
Print_name(...naams);