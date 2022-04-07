function roundedRandom(min, max) {
  let number = Math.random() * (max - min) + min;
  number = Math.floor(number);
  return number;
}

function mouseClicked() {
  let x = roundedRandom(200, 300);
  let y = roundedRandom(200, 300);

  background(255, 255, 255);
  fill(255, 0, 0);
  rect(x, y, 100, 100);
}
