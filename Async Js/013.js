// Fetch -> This method is used to make network requests. And It always returns a Promise.
let image = document.querySelector("img");

const URL = "https://api.github.com/users/";
const userName = "ramesh9256";
fetch(URL + userName)
  .then((response) => {
    if (response.ok === true) {
      return response.json();
    } else {
      console.log("Galat  ho Gya");
    }
  })
  .then((data) => {
    console.log(data);

    const imgurl = data.avatar_url;
    image.src = imgurl;
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {});



/*
API LINK
1. GitHub -> https://api.github.com/users/

2. Random Joke -> https://official-joke-api.appspot.com/random_joke

3. Hindi Random Joke Api -> "https://hindi-jokes-api.onrender.com/jokes?api_key=55a0f8dd6ea42a06fd49e909c6f3"

4. Random User Api ->https://jsonplaceholder.typicode.com/users

5. Single Data Api -> https://jsonplaceholder.typicode.com/todos/1
*/