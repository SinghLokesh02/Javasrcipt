// Callbacks in Synchronous Programming

// 1. Create a Callback function that first checks the given 2 parameters are number. If they are numbers then they should be added otherwise some error message will be displayed.

function addTwoNumbers(num1,num2,onSuccess,onFailure){
    if(typeof num1 === 'number' && typeof num2 === 'number') {
         onSuccess(num1,num2);
    }
    else{
        onFailure();
    }
}

function onSuccess(num1,num2){
    console.log('The sum of '+num1+' and '+num2+' is '+(num1+num2));
}

function onFailure(){
    console.log('Invalid input. Please provide two numbers.');
    console.log("Please provide two numbers only");
}

addTwoNumbers(23,89,onSuccess,onFailure);