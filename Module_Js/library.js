// Exporting a variable and a function from library.js

export let message = "This is the message from library.js"


// Exporting a function from library.js
export let Print_name =(name)=>{
    console.log(`Hello ${name} from library.js`);
}

// Exporting a class from library.js
export class Person{
    constructor(name){
        this.name = name;
    }
    print_name(){
        console.log(`Hello ${this.name} how are you? from library.js`);
    }
}


// Three Function for sum, sub and multiply

 let sum = (a,b)=>{
    return `The sum of ${a} and ${b} is ${a+b}`;
}

let sub = (a,b)=>{
    return `The sub of ${a} and ${b} is ${a-b}`;
}

let multiply = (a,b)=>{
    return `The multiply of ${a} and ${b} is ${a*b}`;
}

export {sum,sub,multiply};
