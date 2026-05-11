export default function createDeleteButton() {
  const button = document.createElement("button");
  button.textContent = "delete";
  button.classList.add("delete-btn");

  return button;
}
