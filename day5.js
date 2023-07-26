// Introduction of Loops in Javasrcipt
// For loop in Js
console.log("Printing the Numbers Using For Loop");
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// While loop in Js
console.log("\n\nPrinting the Numbers Using While Loop\n\n");
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

// Do while loop in Js
console.log("\n\nPrinting the Numbers Using do While Loop\n\n");
let num = 0;
do {
  console.log(num);
  num++;
} while (num <= 10);


// Break and Continue in Js
console.log("\n\nPrinting the Numbers Using Break and Continue\n\n");
for (let x = 0; x <= 100; x++) {
  console.log(x);
  if (x == 7) break;
}


console.log("\n\n");
for (let x = 0; x <= 5; x++) {
  if (x == 3) continue;
  console.log(x);
}



// Nested Loops in Js
console.log("\n\nPrinting the Numbers Using Nested Loops\n\n");
for (let i = 0; i <= 10; i++) {
  for (let j = 0; j <= 10; j++) {
    console.log(i, j);
  }
}


