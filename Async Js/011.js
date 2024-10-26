// Promise.resolve()

// Ways 1 to Consume = Store a promise in Variable then consume it
const myPromise = Promise.resolve(5);
myPromise.then(value => console.log(value)).catch(value => console.log(value));

// Ways 2 to Consume =  Directly consume it
Promise.reject("Rejected").then(value => console.log(value)).catch(val => console.log(val));


// Promise Chaining -> .then() method Always returns a Promise so we can use .then method over it.

function myPromise() {
  return new Promise((resolve, reject) => {
    let number = 0;
    setTimeout(() => {
      if (number) resolve("Lokesh");
      else reject("Some Error Occured");
    }, 1000);
  });
}

myPromise()
  .then((value) => {
    console.log(value);
    return value;
  })
  .then((value) => {
    console.log(value, "Singh");
    return value + " Singh";
  })
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
