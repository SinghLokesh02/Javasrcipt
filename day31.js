// This settimeout function will run after 2 seconds

let settimeout = setTimeout(() => {
  console.log("Hey I am running after 2 seconds by settimeout");
}, 2000);

// To clear the settimeout function
clearTimeout(settimeout);

// This setinterval function will run after every 1 seconds

let setinterval = setInterval(() => {
  console.log("hey I am running after every 1 second by setinterval");
}, 1000);


// Stop the setinterval function after 5 seconds
setTimeout(()=>{
    clearInterval(setinterval);
},6000);


// To clear the setinterval function
clearInterval(setinterval);