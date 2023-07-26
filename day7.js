// Complete string in Javasrcipt

// String
let name = "Lokesh"; // String Declaration + Initialization
let surname = " Singh";
console.log(name); //printing the String


// String Concatenation
console.log(name + surname);


// Print any index Character Using indexing of the string
console.log(name[0]);


// Print all the character using for of loop
for (let char of name) {
  console.log(char);
}



// Print all Character using for in loop
for (let char in surname) {
  console.log(surname[char]);
}


// String Methods of Javasrcipt

// 1. length Method
console.log("The length of name is : ",name.length);

// 2. toUpperCase Method
console.log(name.toUpperCase());

// 3. toLowerCase Method
console.log(name.toLowerCase());

// 4. trim Method
console.log(name.trim());

// 5. includes Method
console.log(name.includes("Lokesh"));

// 6. startsWith Method
console.log(name.startsWith("L"));

// 7. endsWith Method
console.log(name.endsWith("h"));

// 8. charAt Method
console.log(name.charAt(0));

// 9. charCodeAt Method
console.log(name.charCodeAt(0));

// 10. indexOf Method
console.log(name.indexOf("e"));

// 11. lastIndexOf Method
console.log(name.lastIndexOf("e"));

// 12. replace Method
console.log(name.replace("Lokesh","Lokesh Singh"));

// 13. split Method
console.log(name.split(""));

// 14. substring Method
console.log(name.substring(0,3));

// 15. substr Method
console.log(name.substr(0,3));

// 16. concat Method
console.log(name.concat(surname));

// 17. repeat Method
console.log(name.repeat(3));

// 18. match Method
console.log(name.match("Lokesh"));

// 19. search Method
console.log(name.search("es"));

// 20. slice Method
console.log(name.slice(0,3));

// 21. valueOf Method
console.log(name.valueOf());

// 22. toString Method
console.log(name.toString());

