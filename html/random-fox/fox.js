function loadHandler() {
  fetch("https://randomfox.ca/floof/")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      const url = response.image;

      const imgElement = document.createElement("img");
      imgElement.src = url;
      imgElement.addEventListener("load", function () {
        console.log("Image finished loading");
      });

      const bodyElement = document.querySelector("body");
      bodyElement.appendChild(imgElement);
    });
}
window.addEventListener("load", loadHandler);
