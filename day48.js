// Parameter destructuring


// Normal function which is Taking the Whole Object to Print the data of object
function printData(obj) {
    console.log(`Name: ${obj.name}`);
    console.log(`Age: ${obj.age}`);
    console.log(`Hobbies: ${obj.hobbies}`);
    obj.greet();
    console.log(`Friends: ${obj.friends}`);
}


// Function to print the data of object by parameter destructuring
function printDataByParamsDestructuring({ name, age, hobbies, greet, friends }) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Hobbies: ${hobbies}`);
    greet();
    console.log(`Friends: ${friends}`);
}

// Object
const person = {
    name: "Lokesh Singh",
    age: 30,
    hobbies: ["reading", "games", "coding"],
    greet: () => {
        console.log("Hello there");
    }, 
    friends : ["Aniket", "Diwakar", "ritik"]
}

printDataByParamsDestructuring(person)