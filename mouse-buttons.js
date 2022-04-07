let size = 10;

function mouseClicked() {
  size = size + 10;
}

function draw() {
  ellipse(width / 2, height / 2, size);
}
