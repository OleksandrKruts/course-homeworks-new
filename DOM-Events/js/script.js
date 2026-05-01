"use strict";

//Refine the list of albums from the previous task.
//Add a “Delete” button to each LI. Clicking this button should delete the specific album (LI).
//Apply the following approach: event delegation

const linkAPI = "https://jsonplaceholder.typicode.com/albums";

const listAlbum = document.querySelector("#albums"); //ul

listAlbum.onclick = (event) => {
  const isRemoveButton = event.target.classList.contains("delete_btn");
  if (isRemoveButton) {
    const listItem = event.target.closest(".album_title");
    listItem.remove();
  }
};

fetch(linkAPI)
  .then((response) => response.json())
  .then((result) => {
    for (let i = 0; i < result.length; i++) {
      let li = document.createElement("li"); //li
      let deleteButton = document.createElement("button"); //button

      li.append(result[i].title, deleteButton);
      li.classList.add("album_title");

      deleteButton.textContent = "delete";
      deleteButton.classList.add("delete_btn");

      listAlbum.append(li);
    }
  })
  .catch((error) => console.log(error.message));
