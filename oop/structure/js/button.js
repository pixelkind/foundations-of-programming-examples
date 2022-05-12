export default class Button {
  constructor(x, y, width, height, text) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = text;
    this.backgroundColor = "#cccccc";
  }

  draw() {
    push();
    translate(this.x, this.y);
    stroke("#4d4d4d");
    strokeWeight(4);
    fill(this.backgroundColor);
    rect(0, 0, this.width, this.height, this.height / 2);
    // define text
    noStroke();
    fill("#4d4d4d");
    textSize(this.height / 2);
    textAlign(CENTER);
    text(this.text, 0, this.height / 4, this.width);
    pop();
  }

  hitTest(x, y) {
    return (
      x > this.x &&
      x < this.x + this.width &&
      y > this.y &&
      y < this.y + this.height
    );
  }
}
