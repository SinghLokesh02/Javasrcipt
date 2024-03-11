// Filter method -> It is used to create a new array with all elements that pass the test implemented by the provided function.

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.


// Ques - 1) Filter Out the Odd Element
const arr = [1, 2, 3, 4, 5, 6, 7];

const isEven = (n) => {
  return n % 2;
};
let Oddarr = arr.filter(isEven);
console.log(Oddarr);




// Ques - 2) Filter Out the Even Element

let evenArr = arr.filter((elem) => elem % 2 === 0);
console.log(evenArr);




// Filter out Prime
let primeArr = arr.filter((element) => {
  if (element <= 1) return false;
  for (let i = 2; i < element; i++) {
    if (element % i === 0) return false;
  }
  return true;
});

console.log(primeArr);




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

// Example - 3 ) Given an array of objects, print the name of each and every object of the array who is having age 23.

const new_arr = data.filter((elem)=> elem.age == 23)
console.log(new_arr);