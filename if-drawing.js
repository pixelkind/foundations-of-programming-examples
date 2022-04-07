let lastMouseX = 0;
let lastMouseY = 0;
let mouseIsActive = false;

function draw() {
  stroke(255, 255, 255);
  strokeWeight(4);
  if (mouseIsPressed) {
    if (mouseIsActive) {
      line(mouseX, mouseY, lastMouseX, lastMouseY);
    }

    lastMouseX = mouseX;
    lastMouseY = mouseY;
    mouseIsActive = true;
  } else {
    mouseIsActive = false;
  }
}
