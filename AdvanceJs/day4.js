// Rest Operator

let myFunc = function () {
    let sum = 0;
    for (i of arguments){
        sum += i;
    }
    console.log(`The sum of all the numbers is ${sum}`);
};

// Here the arguments is working properly.
myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);




// But if we try to use the arguments in the arrow function then it will give us an error.
 
let myFunc2 = () => {
    let sum = 0;
    for (i of arguments){
        sum += i;
    }
    console.log(`The sum of all the numbers is ${sum}`);
};

myFunc2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);



// And when we call the arguments with string and numbers then it will give us an error.
let myFunc3 = () => {
    let sum = 0;
    for (i of arguments){
        sum += i;
    }
    console.log(`The sum of all the numbers is ${sum}`);
};

myFunc3('Hello', 'World',1, 2, 3, 4, 5, 6, 7, 8, 9, 10);




// So to solve this problem we use the rest operator.

let myFunc4 = (name1,name2,...args) => {
    let sum = 0;
    for (i of args){
        sum += i;
    }
    console.log(`The sum of all the numbers is ${sum}`);
    console.log(`Hello ${name1} and ${name2}`);
}

myFunc4('John','Doe',1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

