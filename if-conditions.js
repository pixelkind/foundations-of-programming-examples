function draw() {
  if (mouseX === 200) {
    background(255, 0, 0);
  } else if (mouseX < 400) {
    background(0, 0, 255);
  } else {
    background(0, 255, 0);
  }
}
