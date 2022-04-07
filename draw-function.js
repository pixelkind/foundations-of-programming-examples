let x = 100;
let w = 50;
function draw() {
  clear();
  ellipse(x, 100, 100);
  rect(50, 200, w, 50);

  x = x + 1;
  w = w + 3;
}
