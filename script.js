const colorBox = document.getElementById("colorBox");
const colorOptions = document.getElementById("colorOption");
const gameStatus = document.getElementById("gameStatus");
const scoreDisplay = document.getElementById("score");
const newGameButton = document.getElementById("newGameButton");

let score = 0;
let targetColor = "";

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function startGame() {
  gameStatus.textContent = "";
  colorOptions.innerHTML = "";
  score = 0;
  scoreDisplay.textContent = score;

  generateNewRound();
  }

  function generateNewRound() {
    const colors = [];
  for (let i = 0; i < 6; i++) {
    colors.push(getRandomColor());
  }

  targetColor = colors[Math.floor(Math.random() * colors.length)];
  colorBox.style.backgroundColor = targetColor;
  colorOptions.innerHTML = "";

  colors.forEach(color => {
    const button = document.createElement("button");
    button.classList.add("colorOption");
    button.style.backgroundColor = color;
    button.setAttribute("data-testid", "colorOption");

    button.addEventListener("click", () => checkGuess(color));

    colorOptions.appendChild(button);
  });
}

function checkGuess(selectedColor) {
  if (selectedColor === targetColor) {
    gameStatus.textContent = "Correct you are a genius!";
    gameStatus.style.color = "green";
    score++;
    scoreDisplay.textContent = score;
    
    generateNewRound();
  } else {
    gameStatus.textContent = "Wrong! Try again.";
    gameStatus.style.color = "red"
  }
}

newGameButton.addEventListener("click", startGame);

startGame();
