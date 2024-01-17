// String Literals

const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';

// Without template strings (es5)
console.log(name + ' is ' + age + ' years old, and he is a ' + job + ' from ' + city);

// With template strings (es6)
console.log(`${name} is ${age} years old, and he is a ${job} from ${city}`);

console.log(`My name is ${name} ans I am ${job}`);