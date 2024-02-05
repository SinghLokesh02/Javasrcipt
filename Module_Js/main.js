import { Print_name, message, Person as p } from "./library.js";


console.log("Hello World");

console.log(message);

Print_name("Saurabh");

let p1 = new p("Sonali");
p1.print_name();

// Using all the function from library.js
import * as all from "./library.js";

console.log(all.sum(10, 20));
console.log(all.sub(10, 20));
console.log(all.multiply(10, 20));