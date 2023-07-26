// Introduction of Arrays in Javasrcipt
console.log("\n\nWelcome to the topic \"Arrays\"\n\n")


let arr = [1,2,3,4,5,6,7,8];
console.log(arr); // Printing all the Elements of the array



console.log(arr[0]); // Printing the first element of the array
// using index 0 (starts from zero)



console.log(arr.length); // Printing the length of the array



console.log(arr[arr.length-1]); // Printing the last element of the array



// Printing all the elements of the array using for loop
for(let elements of arr){
    console.log(elements);
}



// Printing all the elements of the array using for in loop
console.log("\nPrinting array elements using for-in loop\n")
for(let elements in arr){
    console.log(arr[elements]);
}



// Printing all the elements of the array using forEach loop
console.log("\nPrinting array elements using forEach loop\n")
arr.forEach((element)=>{
    console.log(element);
})




