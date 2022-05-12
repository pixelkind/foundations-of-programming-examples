import Button from "./button.js";
import BlueButton from "./blueButton.js";

function setup() {
  createCanvas(500, 500);
}
window.setup = setup;

const myButton = new Button(100, 100, 160, 40, "Hello");
const worldButton = new BlueButton(100, 300, 260, 60, "World");

function draw() {
  background(255, 255, 255);
  if (mouseIsPressed) {
    if (myButton.hitTest(mouseX, mouseY)) {
      background(255, 0, 0);
    } else if (worldButton.hitTest(mouseX, mouseY)) {
      background(0, 255, 0);
    }
  }
  myButton.draw();
  worldButton.draw();
}
window.draw = draw;
