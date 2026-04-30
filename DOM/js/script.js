"use strict";

//You need to perform the following steps:
//1. Send a request to the API and retrieve the result - https://jsonplaceholder.typicode.com/albums

//2. As soon as the response is received, generate a list (li tag) of all titles (the title field).
// All elements must be contained within the list with ID="albums"

//3. Add the “album_title” class to each new li element

const linkAPI = "https://jsonplaceholder.typicode.com/albums";

fetch(linkAPI)
  .then((response) => response.json())
  .then((result) => {
    const listAlbum = document.querySelector("#albums"); //ul

    for (let i = 0; i < result.length; i++) {
      let li = document.createElement("li"); //li

      li.textContent = result[i].title;
      li.classList.add("album_title");
      listAlbum.append(li);

      console.log(li);
    }
  })
  .catch((error) => console.log(error.message));
