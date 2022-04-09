function randomElement(array) {
  // let randomIndex = Math.random() * array.length;
  // randomIndex = Math.floor(randomIndex);
  // return array[randomIndex];
  return array[Math.floor(Math.random() * array.length)];
}

const animals = ["🐻", "🐹", "🦁", "🐰", "🐵", "🐶"];

function mouseClicked() {
  background(255, 255, 255);
  textSize(60);
  const randomAnimal = randomElement(animals);
  text(randomAnimal, 20, 100);
}
