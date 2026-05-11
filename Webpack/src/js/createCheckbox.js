export default function createCheckbox() {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("check");

  return checkbox;
}
