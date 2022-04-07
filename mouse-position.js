let lastX = 0;
let lastY = 0;

function draw() {
  strokeWeight(8);
  stroke((mouseX / width) * 255, 0, (mouseY / height) * 255);
  line(lastX, lastY, mouseX, mouseY);

  lastX = mouseX;
  lastY = mouseY;
}
