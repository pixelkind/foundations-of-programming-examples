const sides = ["head", "tail"];
let gamesPlayed = 0;
let gamesWon = 0;

function play(side) {
  gamesPlayed += 1;
  const randomNumber = Math.floor(Math.random() * sides.length);
  if (sides[randomNumber] === side) {
    gamesWon += 1;
  }

  const resultElement = document.getElementById("result");
  resultElement.innerText = "Result: " + sides[randomNumber];

  updateValues();
}

function updateValues() {
  const playedElement = document.getElementById("gamesPlayed");
  playedElement.innerText = "Games played: " + gamesPlayed;
  const wonElement = document.getElementById("gamesWon");
  wonElement.innerText = "Games won: " + gamesWon;
  const percentageElement = document.getElementById("percentage");
  percentageElement.innerText =
    "Percentage: " + Math.round((gamesWon / gamesPlayed) * 100) + "%";
}

function saveHighscore() {
  const nameElement = document.getElementById("name");
  let highscore = {
    name: nameElement.value,
    score: Math.round((gamesWon / gamesPlayed) * 100),
  };

  if (localStorage.highscore === undefined) {
    localStorage.highscore = JSON.stringify([]);
  }
  let highscoreArray = JSON.parse(localStorage.highscore);
  highscoreArray.push(highscore);
  localStorage.highscore = JSON.stringify(highscoreArray);

  displayHighscore();

  gamesPlayed = 0;
  gamesWon = 0;
  const resultElement = document.getElementById("result");
  resultElement.innerText = "Result: None";
  updateValues();
}

function displayHighscore() {
  if (localStorage.highscore !== undefined) {
    let highscoreArray = JSON.parse(localStorage.highscore);
    highscoreArray.sort(function (a, b) {
      return b.score - a.score;
    });

    const highscoreElement = document.getElementById("highscore");
    highscoreElement.innerText = "";
    for (let score of highscoreArray) {
      const item = document.createElement("li");
      item.innerText = score.name + ": " + score.score;
      highscoreElement.appendChild(item);
    }
  }
}

function loadHandler() {
  const headButton = document.getElementById("headButton");
  headButton.addEventListener("click", function () {
    play("head");
  });
  const tailButton = document.getElementById("tailButton");
  tailButton.addEventListener("click", function () {
    play("tail");
  });
  const saveButton = document.getElementById("save");
  saveButton.addEventListener("click", function () {
    saveHighscore();
  });
  displayHighscore();
}
window.addEventListener("load", loadHandler);
