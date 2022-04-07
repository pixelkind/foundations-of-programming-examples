const size = 30;
const length = 10;

background(128, 128, 128);
// noStroke();

for (let x = 0; x < length; x++) {
  for (let y = 0; y < length; y++) {
    if (y % 2 === 0) {
      if (x % 2 === 0) {
        fill(0, 0, 0);
      } else {
        fill(255, 255, 255);
      }
    } else {
      if (x % 2 === 0) {
        fill(255, 255, 255);
      } else {
        fill(0, 0, 0);
      }
    }

    rect(x * size, y * size, size, size);
  }
}
