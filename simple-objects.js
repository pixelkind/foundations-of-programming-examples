let position = { x: 100, y: 100 };

let user = {
  name: "Garrit",
  role: "Teacher",
  school: "Jönköping University",
};

console.log(user.school);

function draw() {
  clear();
  ellipse(position.x, position.y, 40);
  position.x = position.x + 1;
  position.y = position.y + 2;
}
