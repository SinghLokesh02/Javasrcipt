// Array Destructing in Advance Way

// 1. Array destricting of less Items
const Names = ["John","David","Anthony","Lokesh","Aniket","Diwakar","Vimal"]
const [name1,name2,name3] = Names
console.log("The Names are : ");
console.log(name1,name2,name3);


// 2. Skip some values while Destructing
const [first,,third] = Names
console.log("\n\nThe First and Third Names are : ");
console.log(first,third);


// 3. Assign Default Values while Destructing
const [,,name4="Default 1",name5 = "Default Name3",name6,name7="Vimal"] = Names
console.log("\n\nThe Default Values are : ");
console.log(name4,name5,name6,name7);


// 4. Destructing of Nested Array
const nestedArray = ["John","David","Anthony",["Lokesh","Aniket","Diwakar"]]
const [name8,name9,name10,[name11,name12,name13]] = nestedArray
console.log("\n\nThe Nested Array Values are : ");
console.log(name8,name9,name10,name11,name12,name13);


// 5. get the last value of Array
const [last,secondlast] = Names.reverse()
console.log("\n\nThe Last and Second Last Values are : ");
console.log(last,secondlast);


// 6. Destructing of Rest Items

const [firstItem,...restItems] = Names
console.log("\n\nThe First and Rest Items are : ");
console.log(firstItem,restItems);


// Note. Swapping of Two Values
let a = 10;
let b = 20;
[a,b] = [b,a]
console.log("\n\nThe Swapped Values are : ");
console.log(a,b);


