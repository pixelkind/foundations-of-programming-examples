/*
 * This is my emoji
 * Foundations of Programming
 * Jönköping University
 */
function emoji(x, y, sentence) {
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

  // Speechbubble
  beginShape();
  vertex(x + 150, y - 120);
  vertex(x + 50, y - 120);
  bezierVertex(x, y - 120, x, y - 180, x + 50, y - 180);
  vertex(x + 240, y - 180);
  bezierVertex(x + 290, y - 180, x + 290, y - 120, x + 240, y - 120);
  vertex(x + 180, y - 120);
  vertex(x + 140, y - 80);
  endShape(CLOSE);

  fill(0, 0, 0);
  textSize(22);
  text(sentence, x + 35, y - 140);
}

function mouseClicked() {
  background(255, 255, 255);
  let sentence = "Hello World";
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    sentence = "I love pizza!";
  } else if (randomNumber === 1) {
    sentence = "I love kanelbullar";
  } else if (randomNumber === 2) {
    sentence = "I love pasta!";
  }
  emoji(200, 200, sentence);
}
