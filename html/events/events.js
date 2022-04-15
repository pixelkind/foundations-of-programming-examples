function onLoadHandler() {
  const headlineElement = document.querySelector("h1");
  headlineElement.addEventListener("click", onClickHandler);
}

function onClickHandler() {
  console.log("Headline was clicked!");
}

window.addEventListener("load", onLoadHandler);
