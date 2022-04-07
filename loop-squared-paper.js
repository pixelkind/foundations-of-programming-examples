background(255, 255, 255);

let x = 0;
let y = 0;
const size = 80;

while (x < width) {
  line(x, 0, x, height);
  x = x + size;
}

while (y < height) {
  line(0, y, width, y);
  y = y + size;
}
