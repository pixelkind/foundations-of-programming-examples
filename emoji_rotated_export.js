function setup() {
  createCanvas(400, 400);
  // background(255, 255, 255);
}

function draw() {
  strokeWeight(2);

  push();
  translate(200, 200);
  // rotate(0.2);
  scale(1.9);

  // The background of the emoji
  fill(255, 255, 0);
  ellipse(0, 0, 200);

  push();
  // rotate(-0.5);
  // The eyes of the emoji
  fill(255, 255, 255);
  ellipse(-30, -20, 40);
  ellipse(20, -30, 60);

  // The pupils of the emoji
  fill(0, 0, 0);
  ellipse(-20, -20, 10);
  ellipse(0, -40, 10);
  pop();

  push();
  // scale(0.4);

  // The mouth and the teeth of the emoji
  fill(255, 255, 255);
  rect(-60, 20, 120, 40, 20);
  line(-60, 40, 60, 40);
  line(-40, 20, -40, 60);
  line(-20, 20, -20, 60);
  line(0, 20, 0, 60);
  line(20, 20, 20, 60);
  line(40, 20, 40, 60);

  pop();

  pop();
}
