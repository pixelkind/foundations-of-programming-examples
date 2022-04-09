let lastKeys = [];

function draw() {
  background(255, 255, 255);
  fill(0, 0, 0);
  textSize(60);
  text(lastKeys.join(", "), 40, 100);
}

function keyReleased() {
  lastKeys.unshift(key);

  if (lastKeys.length > 5) {
    lastKeys.pop();
  }
}
