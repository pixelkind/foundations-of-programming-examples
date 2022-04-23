function finishedLoadingHandler(event) {
  const request = event.target;
  const response = request.response;
  const restaurants = response.restaurants;

  for (let restaurant of restaurants) {
    console.log(restaurant.name);
  }
}

function loadData() {
  const request = new XMLHttpRequest();
  request.responseType = "json";

  const url =
    "https://pixelkind.github.io/ju-iOS-Development-2021/FoodGuide/restaurants.json";
  const method = "GET";
  request.open(method, url);
  request.addEventListener("load", finishedLoadingHandler);
  request.send();
}

function loadHandler() {
  loadData();
}
window.addEventListener("load", loadHandler);
