"use strict";

//1. Make an API request (using fetch) - https://jsonplaceholder.typicode.com/users/1
//The successful result must be stored in localStorage.
//When the page reloads, check if the data is in localStorage; if it is, display it; if not, make a new API request.

const linkAPI = "https://jsonplaceholder.typicode.com/users/1";

const user = localStorage.getItem("userData");

if (user) {
  console.log(JSON.parse(user));
} else {
  fetch(linkAPI)
    .then((response) => response.json())
    .then((result) => {
      localStorage.setItem("userData", JSON.stringify(result));
      console.log(result);
    })
    .catch((error) => console.log("error", error));
}
