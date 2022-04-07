function button(x, y, w, h) {
  noStroke();
  fill(255, 0, 0);
  rect(x, y, w, h);

  fill(255, 255, 255);
  text("Hello", x + w / 2, y + h / 2);
}

let buttonIsClicked = false;

function draw() {
  if (buttonIsClicked) {
    background(0, 255, 0);
  } else {
    background(255, 255, 255);
  }

  button(100, 100, 200, 60);
}

function mousePressed() {
  if (mouseX > 100 && mouseX < 100 + 200 && mouseY > 100 && mouseY < 100 + 60) {
    buttonIsClicked = true;
  }
}

function mouseReleased() {
  buttonIsClicked = false;
}
