// Promise Basics Code -1

// How to create a new promise

const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("This Async task is Completed");
    resolve("Done");
  }, 1000);
});

// This .done is directly connected to resolve
promiseOne.then(function () {
  console.log("The work is done");
});

// Promise 2

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("This code will run after 5 seconds");
    resolve();
  }, 1000);
})
  .then(function () {
    console.log("The promise is resolved");
  })
  .catch(function () {
    console.log("Some error Occured");
  });

//   Promoise - 3(data transfer from promise to then with the help of resolve)
const promisethree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "Lokesh Singh", id: 25 });
  }, 2000);
});

promisethree.then(function (user) {
  console.log(user.username);
});

// promise - 4 (Handling of Errors)
const promisefour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let err = false;
    if (!err) {
      resolve({ username: "Lokesh Singh", id: 25 });
    } else {
      reject("error Occured");
    }
  }, 2000);
});

promisefour
  .then(function (user) {
    console.log(user.id);
  })
  .then(function (user) {
    console.log(user.name);
  })
  .catch(function () {
    console.log("Some error Occured");
  })
  .finally(() => console.log("The promise is resolved or Rejected"));

//  Promise using Async and await

const PrmoiseFive = new Promise(function (resolve, reject) {
  let err = true;
  setTimeout(() => {
    if (!err) {
      resolve({ username: "sonali kumari", pass: "sonali@123" });
    } else {
      reject("ERROR in handling");
    }
  }, 2000);
});

async function consumePromiseFive() {
  try {
    let response = await PrmoiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// Fetch data from a Api

// async function Fetch_all_data(){
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json()
//     console.log(data.userId);

// }

// Fetch_all_data()

// fetch Directly
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
