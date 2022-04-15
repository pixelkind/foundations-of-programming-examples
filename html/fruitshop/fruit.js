const fruits = ["🍒", "🍍", "🍓", "🍎", "🍋", "🍇", "🍉", "🥝"];
let fruitListElement;
let shoppingCartElement;
let amountElement;

let shoppingList = [];

function onLoadHandler() {
  fruitListElement = document.getElementById("fruitList");
  shoppingCartElement = document.getElementById("shoppingCart");
  amountElement = document.getElementById("amount");

  for (let fruit of fruits) {
    const fruitElement = document.createElement("div");
    fruitElement.innerText = fruit;
    fruitElement.classList.add("fruit");
    fruitElement.addEventListener("click", () => {
      addFruit(fruit);
    });
    fruitListElement.appendChild(fruitElement);
  }
}

function addFruit(fruit) {
  shoppingList.push(fruit);
  renderShoppingCart();
  updateAmount();
}

function renderShoppingCart() {
  const oldElements = shoppingCartElement.getElementsByTagName("div");
  for (let i = oldElements.length - 1; i >= 0; i--) {
    const element = oldElements[i];
    element.parentNode.removeChild(element);
  }

  for (let fruitIndex in shoppingList) {
    const cartElement = document.createElement("div");

    const spanElement = document.createElement("span");
    spanElement.innerText = shoppingList[fruitIndex];
    cartElement.appendChild(spanElement);

    const button = document.createElement("button");
    button.innerText = "Remove";
    button.addEventListener("click", () => {
      shoppingList.splice(fruitIndex, 1);
      renderShoppingCart();
      updateAmount();
    });
    cartElement.appendChild(button);

    shoppingCartElement.appendChild(cartElement);
  }
}

function updateAmount() {
  amountElement.innerText = "Items: " + shoppingList.length;
}

window.addEventListener("load", onLoadHandler);
