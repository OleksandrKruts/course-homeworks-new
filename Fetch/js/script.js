"use strict";

//Use `fetch` to make a request to the API
//https://jsonplaceholder.typicode.com/users - retrieve a list of users
//After receiving the result, find the user (using array methods) who works at “Johns Group”
//Data retrieval must be implemented using either the `.then/.catch` syntax or the `async/await` syntax

const linkAPI = "https://jsonplaceholder.typicode.com/users";

const getUser = async () => {
  try {
    const response = await fetch(linkAPI);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    let user;

    while (!user) {
      let companyName = prompt("Enter company name:");

      if (companyName === null) {
        console.log("User canceled");
        return;
      }

      if (!companyName.trim()) {
        alert("Empty input. Try again.");
        continue;
      }

      user = data.find(
        ({ company: { name } }) =>
          name.toLowerCase() === companyName.toLowerCase(),
      );

      if (!user) {
        alert("Company not found. Try again.");
      }
    }

    console.log(user);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

getUser();
