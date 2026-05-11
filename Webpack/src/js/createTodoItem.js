import createCheckbox from "./createCheckbox";
import createText from "./createText";
import createDeleteButton from "./createDeleteButton";

export default function createTodoItem(value) {
  const li = document.createElement("li");
  li.classList.add("todo-item");

  const checkbox = createCheckbox();
  const text = createText(value);
  const button = createDeleteButton();

  li.append(checkbox, text, button);

  return li;
}
