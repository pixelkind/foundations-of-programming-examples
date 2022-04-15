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
    fruitElement.addEventListener("click", addToShoppingList);
    fruitElement.addEventListener("click", () => {
      console.log("This is in the arrow function");
      console.log(this);
    });
    fruitListElement.appendChild(fruitElement);
  }
}

function addToShoppingList() {
  console.log(this);
  shoppingList.push(this.innerText);

  const cartElement = document.createElement("div");

  const spanElement = document.createElement("span");
  spanElement.innerText = this.innerText;
  cartElement.appendChild(spanElement);

  const button = document.createElement("button");
  button.innerText = "Remove";
  button.addEventListener("click", removeElement);
  button.addEventListener("click", () => {
    console.log("This is in the arrow function");
    console.log(this);
  });
  cartElement.appendChild(button);

  shoppingCartElement.appendChild(cartElement);

  updateAmount();
}

function removeElement() {
  console.log(this);
  const element = this.parentNode;

  const fruitElement = element.querySelector("span");
  const emoji = fruitElement.innerText;
  const emojiIndex = shoppingList.indexOf(emoji);
  shoppingList.splice(emojiIndex, 1);

  element.parentNode.removeChild(element);
  updateAmount();
}

function updateAmount() {
  amountElement.innerText = "Items: " + shoppingList.length;
}

window.addEventListener("load", onLoadHandler);
