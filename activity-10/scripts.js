/******************************
 PART A: localStorage Demo
******************************/
console.log("=== localStorage Demo ===");

localStorage.setItem("demoString", "Hello World");
console.log(localStorage.getItem("demoString"));

localStorage.setItem("demoNumber", 42);
console.log(localStorage.getItem("demoNumber"));

const obj = { name: "TicTacToe", level: "beginner" };
localStorage.setItem("demoObject", JSON.stringify(obj));
console.log(JSON.parse(localStorage.getItem("demoObject")));

localStorage.removeItem("demoNumber");

/******************************
 PART B: Game State
******************************/
let gameState = {
  board: ["", "", "", "", "", "", "", "", ""],
  currentPlayer: "X",
  status: "playing",
  winner: null,
  winningCombo: []
};

const winningCombos = [
  [0,1,2],[3,4,5],[6,7,8], // rows
  [0,3,6],[1,4,7],[2,5,8], // columns
  [0,4,8],[2,4,6]          // diagonals
];

/******************************
 PART C: localStorage Functions
******************************/
function saveGameState() {
  localStorage.setItem("tictactoe-game-state", JSON.stringify(gameState));
}

function loadGameState() {
  const saved = localStorage.getItem("tictactoe-game-state");
  if (saved) {
    gameState = JSON.parse(saved);
  }
}

/******************************
 PART D: Game Logic
******************************/
function checkWinner() {
  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (
      gameState.board[a] &&
      gameState.board[a] === gameState.board[b] &&
      gameState.board[a] === gameState.board[c]
    ) {
      gameState.status = "won";
      gameState.winner = gameState.currentPlayer;
      gameState.winningCombo = combo;
      return true;
    }
  }
  return false;
}

function checkDraw() {
  return gameState.board.every(cell => cell !== "") && !checkWinner();
}

function switchPlayer() {
  gameState.currentPlayer = gameState.currentPlayer === "X" ? "O" : "X";
}

function makeMove(index) {
  console.log("Cell clicked:", index);

  if (gameState.board[index] !== "" || gameState.status !== "playing") return;

  gameState.board[index] = gameState.currentPlayer;

  if (checkWinner()) {
    gameState.status = "won";
  } else if (checkDraw()) {
    gameState.status = "draw";
  } else {
    switchPlayer();
  }

  saveGameState();
  updateUI();
}

/******************************
 UI FUNCTIONS
******************************/
function updateUI() {
  const cells = document.querySelectorAll(".cell");

  cells.forEach((cell, index) => {
    cell.textContent = gameState.board[index];
    cell.classList.remove("x", "o", "winning");

    if (gameState.board[index] === "X") cell.classList.add("x");
    if (gameState.board[index] === "O") cell.classList.add("o");
  });

  const statusEl = document.getElementById("status");

  if (gameState.status === "won") {
    statusEl.textContent = `Player ${gameState.winner} wins!`;
  } else if (gameState.status === "draw") {
    statusEl.textContent = "It's a draw!";
  } else {
    statusEl.textContent = `Current Player: ${gameState.currentPlayer}`;
  }

  // highlight winning combo
  if (gameState.winningCombo.length) {
    gameState.winningCombo.forEach(i => {
      cells[i].classList.add("winning");
    });
  }
}

function initGame() {
  loadGameState();
  updateUI();
}

/******************************
 EVENT LISTENERS
******************************/
document.querySelectorAll(".cell").forEach(cell => {
  cell.addEventListener("click", () => {
    makeMove(Number(cell.dataset.index));
  });
});

document.getElementById("newGameBtn").addEventListener("click", () => {
  localStorage.removeItem("tictactoe-game-state");

  gameState = {
    board: ["", "", "", "", "", "", "", "", ""],
    currentPlayer: "X",
    status: "playing",
    winner: null,
    winningCombo: []
  };

  updateUI();
});

/******************************
 INIT APP
******************************/
initGame();