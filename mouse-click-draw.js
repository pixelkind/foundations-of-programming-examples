let lastX = width / 2;
let lastY = height / 2;

function mouseClicked() {
  line(lastX, lastY, mouseX, mouseY);

  lastX = mouseX;
  lastY = mouseY;
}
