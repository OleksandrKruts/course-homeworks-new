"use strict";

const form = document.forms.todoList;
const { inputText } = form.elements;
const list = document.querySelector("#list");
const errorMessage = document.querySelector(".error-message");

function createCheckbox() {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("check");

  return checkbox;
}

function createText(value) {
  const span = document.createElement("span");
  span.textContent = value;

  return span;
}

function createDeleteButton() {
  const button = document.createElement("button");
  button.textContent = "delete";
  button.classList.add("delete-btn");

  return button;
}

function createTodoItem(value) {
  const li = document.createElement("li");
  li.classList.add("todo-item");

  const checkbox = createCheckbox();
  const text = createText(value);
  const button = createDeleteButton();

  li.append(checkbox, text, button);

  return li;
}

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
