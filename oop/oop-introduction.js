class Emoji {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    strokeWeight(2);

    // The background of the emoji
    fill(255, 255, 0);
    ellipse(this.x, this.y, 200);

    // The eyes of the emoji
    fill(255, 255, 255);
    ellipse(this.x - 30, this.y - 20, 40);
    ellipse(this.x + 20, this.y - 30, 60);

    // The pupils of the emoji
    fill(0, 0, 0);
    ellipse(this.x - 20, this.y - 20, 10);
    ellipse(this.x, this.y - 40, 10);

    // The mouth and the teeth of the emoji
    fill(255, 255, 255);
    rect(this.x - 60, this.y + 20, 120, 40, 20);
    line(this.x - 60, this.y + 40, this.x + 60, this.y + 40);
    line(this.x - 40, this.y + 20, this.x - 40, this.y + 60);
    line(this.x - 20, this.y + 20, this.x - 20, this.y + 60);
    line(this.x, this.y + 20, this.x, this.y + 60);
    line(this.x + 20, this.y + 20, this.x + 20, this.y + 60);
    line(this.x + 40, this.y + 20, this.x + 40, this.y + 60);
  }

  update() {
    this.x += 2;
    this.y += 1;
  }
}

let emoji = new Emoji(100, 100);
let anotherEmoji = new Emoji(200, 300);

function draw() {
  clear();
  emoji.draw();
  emoji.update();

  anotherEmoji.draw();
  anotherEmoji.update();
}
