// function loadDuck() {
//   fetch("https://randomfox.ca/floof/")
//     .then((response) => response.json())
//     .then((response) => {
//       const json = response;
//       console.log(json);
//       const duckUrl = json.image;

//       const imgElement = document.createElement("img");
//       imgElement.src = duckUrl;

//       const bodyElement = document.querySelector("body");
//       bodyElement.appendChild(imgElement);
//     });
// }

// https://api.thecatapi.com/v1/images/search
function finishedLoadingHandler(event) {
  const finishedRequest = event.target;
  const response = finishedRequest.response;
  const duckUrl = response.image;

  const imgElement = document.createElement("img");
  imgElement.src = duckUrl;
  imgElement.addEventListener("load", function () {
    console.log("Image finished loading");
  });

  const bodyElement = document.querySelector("body");
  bodyElement.appendChild(imgElement);
}
function loadDuck() {
  const url = "https://randomfox.ca/floof/";
  const method = "GET";

  const duckRequest = new XMLHttpRequest();
  duckRequest.responseType = "json";
  duckRequest.open(method, url);
  duckRequest.addEventListener("load", finishedLoadingHandler);
  duckRequest.send();
}

window.addEventListener("load", function () {
  loadDuck();
});
