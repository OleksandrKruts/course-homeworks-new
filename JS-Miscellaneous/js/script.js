"use strict";

//1. Make an API request (using fetch) - https://jsonplaceholder.typicode.com/users/1
//The successful result must be stored in localStorage.
//When the page reloads, check if the data is in localStorage; if it is, display it; if not, make a new API request.

// const linkAPI = "https://jsonplaceholder.typicode.com/users/1";

// const user = localStorage.getItem("userData");

// if (user) {
//   console.log(JSON.parse(user));
// } else {
//   fetch(linkAPI)
//     .then((response) => response.json())
//     .then((result) => {
//       localStorage.setItem("userData", JSON.stringify(result));
//       console.log(result);
//     })
//     .catch((error) => console.log("error", error));
// }

//2. Write a function called `isValidDateFormat(str)` that checks whether a date is in the valid format (YYYY/MM/DD HH:MM)
//The function should not check whether the date is valid (for example, a user could enter the 32nd day of the month)—
// it should specifically check the date format (YYYY/MM/DD HH:MM). To solve this problem, we will use regular expressions.

function isValidDateFormat(str) {
  const regexp = /^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}$/;
  return regexp.test(str);
}

console.log(isValidDateFormat("2012/09/18 12:10")); // true
console.log(isValidDateFormat("12.02.2022 12:10")); // false
