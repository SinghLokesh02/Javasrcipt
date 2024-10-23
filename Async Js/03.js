console.log("Script Start");

const id = setTimeout(() => {
    console.log("I am inside SetTimeout");
}, 1000);

for(let i = 0; i < 100; i++) {
    console.log("Hello ....");
}

console.log(`The id of setTimeout is ${id}`);
console.log("Clear the timeout");

clearTimeout(id);
console.log("Script End");