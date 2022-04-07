background(255, 255, 255);
noStroke();

fill(255, 255, 0);
ellipse(150, 150, 200);

// fill(0, 0, 0);
// ellipse(120, 140, 30, 50);
// ellipse(180, 140, 30, 50);

// fill(255, 255, 0);
// ellipse(120, 155, 30, 50);
// ellipse(180, 155, 30, 50);

fill(0, 0, 0);
beginShape();
vertex(105, 140);
bezierVertex(105, 100, 135, 100, 135, 140);
bezierVertex(135, 120, 105, 120, 105, 140);
endShape();

beginShape();
vertex(165, 140);
bezierVertex(165, 100, 195, 100, 195, 140);
bezierVertex(195, 120, 165, 120, 165, 140);
endShape();

// ellipse(105, 100, 10);
// ellipse(135, 100, 10);
// stroke(0, 0, 0);
// line(105, 140, 105, 100);
// line(135, 140, 135, 100);

arc(150, 180, 80, 40, 0, PI);

fill(173, 216, 230);
beginShape();
vertex(210, 60);
bezierVertex(160, 130, 260, 130, 210, 60);
endShape();
