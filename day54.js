// const user = {
//   firstName: "Lokesh",
//   lastName: "Singh",
//   age: 25,
//   about: function (hobby, role) {
//     console.log(
//       `My name is ${this.firstName + " " + this.lastName}, hobby is ${hobby}`
//     );
//     console.log(`My Role is ${role}`);
//   },
// };

// const user2 = {
//   firstName: "Aniket",
//   lastName: "Singh",
//   age: 28,
// };

// user.about("Playing", "Coding Trainer");  About Lokesh Singh: I'm 25 years old and live in Delhi, DL, India. I enjoy Reading, Swimming, Cooking.

// user.about.call(user2, "Dancing", "Developer");  About Aniket Singh: I'm 28 years old and live in Mumbai, MH, India. I enjoy Running, Reading, Cooking.


// The Above Code can also be written as 

function about(hobby, role) {
  console.log(
    `My name is ${this.firstName + " " + this.lastName}, hobby is ${hobby}`
  );
  console.log(`My Role is ${role}`);
}

const user = {
  firstName: "Lokesh",
  lastName: "Singh",
  age: 25,
};

const user2 = {
  firstName: "Aniket",
  lastName: "Singh",
  age: 28,
};
//                                 Syntax of Call method
// functionName.call(thisArg, arg1, arg2, arg3, ...)

// about.call(user, "Playing", "Coding Trainer");  About Lokesh Singh: I'm 25 years old and live in Delhi, DL, India. I enjoy Reading, Swimming, Cooking.

// about.call(user2, "Dancing", "Developer");  About Aniket Singh: I'm 28 years old and live in Mumbai, MH, India. I enjoy Running

//                                Syntax of Apply method
// functionName.apply(thisArg, [arg1, arg2, arg3, ...])
// The only difference between call and apply is that call accepts an argument list, while apply accepts a single array of arguments.

// about.apply(user,["Playing","Coding Trainer"])
// about.apply(user2,["Dancing","App Developer"])


//                                  Syntax of Bind method
// functionName.bind(thisArg, arg1, arg2, arg3, ...)
// The bind method is used to create a new function that, when called, has its this keyword set to the provided value.and it returns a new function.

const user1Data = about.bind(user, "Playing", "Coding Trainer");
const user2Data = about.bind(user2, "Dancing", "Developer");
user1Data()
user2Data()

