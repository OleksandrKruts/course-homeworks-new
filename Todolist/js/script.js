"use strict";

// The page contains a form: a text input field and a button.
// The user can type something into the input field and click the button;
// after that, a row containing the text entered in the input field should appear in the list below.
// After that, the input field in the form should be cleared.
// Add a “Delete” button to each row; clicking it removes the item from the list.
// If the user clicks the “Add” button while the input field is empty, display an error message.
// The error should disappear if the user starts typing in the input field again.

const form = document.forms.todoList;
const { inputText } = form.elements;
const list = document.querySelector("#list");
const errorMessage = document.querySelector(".error-message");

list.onclick = (event) => {
  const isRemoveButton = event.target.classList.contains("delete-btn");
  if (isRemoveButton) {
    const listItem = event.target.closest(".todo-item");
    listItem.remove();
  }
};

form.onsubmit = (event) => {
  event.preventDefault();

  if (inputText.value.trim() === "") {
    inputText.classList.add("error");
    errorMessage.textContent = "Please, enter valid nickname";
    return;
  }

  let li = document.createElement("li"); //li
  let deleteButton = document.createElement("button"); ///button

  li.append(inputText.value, " ", deleteButton);
  li.classList.add("todo-item");

  deleteButton.textContent = "delete";

  deleteButton.classList.add("delete-btn");

  list.append(li);
  inputText.value = "";
  inputText.focus();

  console.log("submit");
};

inputText.oninput = () => {
  const isErrorField = inputText.classList.contains("error");

  if (isErrorField) {
    inputText.classList.remove("error");
    errorMessage.textContent = "";
  }
};
