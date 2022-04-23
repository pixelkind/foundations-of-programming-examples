function setBackgroundColor() {
  const value = localStorage.color;
  if (value !== undefined) {
    const bodyElement = document.querySelector("body");
    bodyElement.style = "background-color: " + value + ";";
  }
}

function loadHandler() {
  setBackgroundColor();
}
window.addEventListener("load", loadHandler);
window.addEventListener("storage", setBackgroundColor);
