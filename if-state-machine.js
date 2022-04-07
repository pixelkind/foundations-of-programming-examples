function startScreen() {
  background(0, 0, 255);
  text("Start", 200, 100);
}

function gameScreen() {
  background(255, 255, 0);
  text("Game", 200, 100);
}

function resultScreen() {
  background(255, 0, 0);
  text("Result", 200, 100);
}

let state = "start";
let gameTimer = 0;

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
    gameTimer = gameTimer + 1;
    if (gameTimer >= 100) {
      gameTimer = 0;
      state = "result";
    }
  } else if (state === "result") {
    resultScreen();
  }
}

function mouseClicked() {
  if (state === "start") {
    state = "game";
  } else if (state === "result") {
    state = "game";
  }
}
