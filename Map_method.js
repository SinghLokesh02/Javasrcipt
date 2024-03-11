// Map method of Javasrcipt -> It is used to create a new array with the results of calling a provided function on every element in the calling array.

// The map is higher order function in javascript. It is used to iterate over an array and manipulate the elements of an array and return a new array.

// Example - 1 ) Given an arr print the square of each and every element of the array. And it can be used by two different ways

// Method - 1

let arr = [1, 24, 12, 13, 15, 25];

const square = (x) => {
  return x * x;
};
const Squared_Array = arr.map(square);
console.log(Squared_Array);

// Example - 2 ) Given an arr print the binary representation of each and every element of the array. And it can be used by two different ways

// Method - 2

const binary_array = arr.map((elem) => elem.toString(2));

// OR

const binary_array1 = arr.map(function binary(elem) {
  return elem.toString(2);
});

console.log(binary_array);
console.log(binary_array1);



// Json data containing name,surname and age

let data = [
    {
        name: "Rahul",
        surname: "Kumar",
        age: 23,
    },
    {
        name: "Rohit",
        surname: "Kumar",
        age: 24,
    },
    {
        name: "Raj",
        surname: "Kumar",
        age: 25,
    },
    ];

// Example - 3 ) Given an array of objects, print the full name of each and every object of the array.

const Full_name = data.map((elem)=>{
    return elem.name+" "+elem.surname
})

console.log(Full_name);
