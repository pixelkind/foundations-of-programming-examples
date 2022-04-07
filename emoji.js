/*
 * This is my emoji
 * Foundations of Programming
 * Jönköping University
 */
const x = 150;
const y = 200;
const s = 1.0;
const sentence = "JavaScript is awesome";

background(255, 255, 255);

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
