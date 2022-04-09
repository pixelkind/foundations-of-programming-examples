let animals = ["🐶", "🐰", "🐱", "🐵", "🦁"];

function draw() {
  background(255, 255, 255);
  textSize(60);
  let y = 60;
  for (let animal of animals) {
    text(animal, 20, y);
    y = y + 70;
  }
}
