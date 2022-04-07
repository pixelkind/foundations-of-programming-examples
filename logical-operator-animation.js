function emoji(x, y) {
  strokeWeight(2);

  // The background of the emoji
  fill(255, 255, 0);
  ellipse(x, y, 200);

  // The eyes of the emoji
  fill(255, 255, 255);
  ellipse(x - 30, y - 20, 40);
  ellipse(x + 20, y - 30, 60);

  // The pupils of the emoji
  fill(0, 0, 0);
  ellipse(x - 20, y - 20, 10);
  ellipse(x, y - 40, 10);

  // The mouth and the teeth of the emoji
  fill(255, 255, 255);
  rect(x - 60, y + 20, 120, 40, 20);
  line(x - 60, y + 40, x + 60, y + 40);
  line(x - 40, y + 20, x - 40, y + 60);
  line(x - 20, y + 20, x - 20, y + 60);
  line(x, y + 20, x, y + 60);
  line(x + 20, y + 20, x + 20, y + 60);
  line(x + 40, y + 20, x + 40, y + 60);
}

let x = 100;
let speed = 5;

function draw() {
  background(255, 255, 255);
  emoji(x, 150);

  x = x + speed;
  if (x > 300 || x < 100) {
    speed = speed * -1;
    console.log("Bounce...");
  }
}
