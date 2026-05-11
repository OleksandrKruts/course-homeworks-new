"use strict";

import createCheckbox from "./createCheckbox";
import createText from "./createText";
import createDeleteButton from "./createDeleteButton";
import createTodoItem from "./createTodoItem";

const style = require("../style.css");

const form = document.forms.todoList;
const { inputText } = form.elements;
const list = document.querySelector("#list");
const errorMessage = document.querySelector(".error-message");

list.onclick = (event) => {
  const target = event.target;

  // DELETE
  if (target.classList.contains("delete-btn")) {
    target.closest(".todo-item").remove();

    return;
  }

  // CHECKBOX
  if (target.classList.contains("check")) {
    const li = target.closest(".todo-item");

    li.classList.toggle("completed", target.checked);
  }
};

form.onsubmit = (event) => {
  event.preventDefault();

  if (inputText.value.trim() === "") {
    inputText.classList.add("error");
    errorMessage.textContent = "Please, enter valid nickname";
    return;
  }

  let li = createTodoItem(inputText.value);

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
