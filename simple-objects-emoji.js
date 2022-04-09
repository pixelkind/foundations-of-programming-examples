function emoji(settings) {
  strokeWeight(2);

  // The background of the emoji
  fill(255, 255, 0);
  ellipse(settings.x, settings.y, 200);

  // The eyes of the emoji
  fill(255, 255, 255);
  ellipse(settings.x - 30, settings.y - 20, 40);
  ellipse(settings.x + 20, settings.y - 30, 60);

  // The pupils of the emoji
  fill(0, 0, 0);
  ellipse(settings.x - 20, settings.y - 20, 10);
  ellipse(settings.x, settings.y - 40, 10);

  // The mouth and the teeth of the emoji
  fill(255, 255, 255);
  rect(settings.x - 60, settings.y + 20, 120, 40, 20);
  line(settings.x - 60, settings.y + 40, settings.x + 60, settings.y + 40);
  line(settings.x - 40, settings.y + 20, settings.x - 40, settings.y + 60);
  line(settings.x - 20, settings.y + 20, settings.x - 20, settings.y + 60);
  line(settings.x, settings.y + 20, settings.x, settings.y + 60);
  line(settings.x + 20, settings.y + 20, settings.x + 20, settings.y + 60);
  line(settings.x + 40, settings.y + 20, settings.x + 40, settings.y + 60);

  // Speechbubble
  beginShape();
  vertex(settings.x + 150, settings.y - 120);
  vertex(settings.x + 50, settings.y - 120);
  bezierVertex(
    settings.x,
    settings.y - 120,
    settings.x,
    settings.y - 180,
    settings.x + 50,
    settings.y - 180
  );
  vertex(settings.x + 240, settings.y - 180);
  bezierVertex(
    settings.x + 290,
    settings.y - 180,
    settings.x + 290,
    settings.y - 120,
    settings.x + 240,
    settings.y - 120
  );
  vertex(settings.x + 180, settings.y - 120);
  vertex(settings.x + 140, settings.y - 80);
  endShape(CLOSE);

  fill(0, 0, 0);
  textSize(22);
  text(settings.sentence, settings.x + 35, settings.y - 140);
}

let emoji1 = {
  x: 100,
  y: 200,
  sentence: "Hello I am #1",
};
let emoji2 = {
  x: 300,
  y: 300,
  sentence: "I am #2",
};

function draw() {
  background(255, 255, 255);

  emoji(emoji1);
  emoji(emoji2);

  emoji1.x += 2;
  emoji2.x += 1;
}
