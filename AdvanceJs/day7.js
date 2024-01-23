// Destructing Array in Javasrcipt

let arr = [
  "John Snow",
  25,
  "Winterfell",
  "Sansa Stark",
  "Arya Stark",
  "Bran Stark",
];

// Previous way to get the values from array
let name = arr[0];
let age = arr[1];
let address = arr[2];
let sister1 = arr[3];
let sister2 = arr[4];
let brother = arr[5];

console.log(sister1, brother);

// Destructing Array in ES6

let Game_of_thrones = [
  "Jon Snow",
  "Joffrey",
  "Ned Stark",
  "Catelyn",
  "Jaime Lannister",
  "Mormount",
];

let [char1, char2, char3, char4, char5] = Game_of_thrones;
console.log(char1);
console.log(char2);
console.log(char3);
console.log(char4);
console.log(char5);


// Nested array Destructuring
console.log("\nThis is Example for Nested Array in Javasrcipt \n\n");
let nestedArr = ["Jon Snow", 25, ["Winterfell", "Sansa Stark", "Arya Stark"]];
let [ch1, ch2, [ch3, ch4, ch5]] = nestedArr;

console.log(ch1);
console.log(ch5);
