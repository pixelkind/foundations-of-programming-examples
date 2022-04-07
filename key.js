function draw() {
  if (keyIsDown(82)) {
    background(255, 0, 0);
  } else if (keyIsDown(71)) {
    background(0, 255, 0);
  } else if (keyIsDown(66)) {
    background(0, 0, 255);
  } else {
    background(255, 255, 255);
  }
}
