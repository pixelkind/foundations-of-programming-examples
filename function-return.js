function calculateCenter(position, size) {
  return size / 2 + position;
}

const w = 100;
const h = 300;

fill(255, 0, 255);
rect(100, 100, w, h);

const x = calculateCenter(100, w);
const y = calculateCenter(100, h);

console.log(x);
fill(255, 0, 0);
ellipse(x, y, 50);
