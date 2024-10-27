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
