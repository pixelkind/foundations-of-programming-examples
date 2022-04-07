/*
 * This is my emoji
 * Foundations of Programming
 * Jönköping University
 */
background(255, 255, 255);

function emoji(x, y, s) {
  strokeWeight(2 * s);

  // The background of the emoji
  fill(255, 255, 0);
  ellipse(x, y, 200 * s);

  // The eyes of the emoji
  fill(255, 255, 255);
  ellipse(x - 30 * s, y - 20 * s, 40 * s);
  ellipse(x + 20 * s, y - 30 * s, 60 * s);

  // The pupils of the emoji
  fill(0, 0, 0);
  ellipse(x - 20 * s, y - 20 * s, 10 * s);
  ellipse(x, y - 40 * s, 10 * s);

  // The mouth and the teeth of the emoji
  fill(255, 255, 255);
  rect(x - 60 * s, y + 20 * s, 120 * s, 40 * s, 20 * s);
  line(x - 60 * s, y + 40 * s, x + 60 * s, y + 40 * s);
  line(x - 40 * s, y + 20 * s, x - 40 * s, y + 60 * s);
  line(x - 20 * s, y + 20 * s, x - 20 * s, y + 60 * s);
  line(x, y + 20 * s, x, y + 60 * s);
  line(x + 20 * s, y + 20 * s, x + 20 * s, y + 60 * s);
  line(x + 40 * s, y + 20 * s, x + 40 * s, y + 60 * s);
}

emoji(150, 150, 1.0);
emoji(280, 100, 0.6);
emoji(270, 190, 0.5);
