function clickHandler() {
  const inputElement = document.getElementById("colorInput");
  const value = inputElement.value;

  if (value !== "" && value[0] === "#") {
    const bodyElement = document.querySelector("body");
    bodyElement.style = "background-color: " + value + ";";
    localStorage.color = value;
    inputElement.value = "";
  }
}

function setBackgroundColor() {
  const value = localStorage.color;
  if (value !== undefined) {
    const bodyElement = document.querySelector("body");
    bodyElement.style = "background-color: " + value + ";";
  }
}

function loadHandler() {
  const button = document.getElementById("setColorButton");
  button.addEventListener("click", clickHandler);
  setBackgroundColor();
}
window.addEventListener("load", loadHandler);
