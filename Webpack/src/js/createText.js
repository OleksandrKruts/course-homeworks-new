export default function createText(value) {
  const span = document.createElement("span");
  span.textContent = value;

  return span;
}
