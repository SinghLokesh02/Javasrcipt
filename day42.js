// Ways to Clone a Array

// Method - 1
console.log("Method - 1")
const arr1 = ["Item1","Item2","Item3"]
const arr2 = ["Item1","Item2","Item3"]

console.log(arr1);
console.log(arr2);


// Method - 2
console.log("\n\nMethod - 2")
const myArr1 = [1,2,3,4]
const myArr2 = myArr1.slice(0)
console.log(myArr1);
console.log(myArr2);



// Method - 3
console.log("\n\nMethod 3")
const Myfruits = ["Apple","Banana","Mango"]
const copyFruits = [].concat(Myfruits)
console.log(Myfruits);
console.log(copyFruits);



// Method - 4
console.log("\n\nMethod - 4")
const names = ["Lokesh","Sonali","Diwakar","Aniket","Ritik"]
const copy = [...names]
console.log(names);
console.log(copy);


// Add Some more items while Concatination of Array

console.log("\n\n Add Some more items while Concatination of Array \n");


// Method - 1
console.log("Method - 1");

const spliced = myArr1.slice(0).concat("Hello","Hi","Bye","Bye")
console.log(spliced);


// Method - 2
console.log("\n\nMethod - 2");
const fruitsWithMoreItems = [].concat(Myfruits,"Chickoo","WaterMelong","Coconut")
console.log(fruitsWithMoreItems);


// Method - 3
const spreaded = [...names, "Vimal", "Akash","Dheeraj"]
console.log(spreaded);

