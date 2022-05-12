class Button {
  constructor(x, y, width, height, text, callback) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = text;
    this.callback = callback;
  }

  draw() {
    push();
    translate(this.x, this.y);
    stroke("#4d4d4d");
    strokeWeight(4);
    fill("#cccccc");
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

  mouseClicked() {
    if (this.hitTest(mouseX, mouseY)) {
      this.callback();
    }
  }
}

const myButton = new Button(100, 100, 160, 40, "Hello", () => {
  console.log("Hello was clicked");
});
const worldButton = new Button(100, 300, 260, 60, "World", () => {
  console.log("World was clicked");
});

function draw() {
  background(255, 255, 255);
  myButton.draw();
  worldButton.draw();
}

function mouseClicked() {
  myButton.mouseClicked();
  worldButton.mouseClicked();
}
