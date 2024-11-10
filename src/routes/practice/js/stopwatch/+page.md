---
title: Memory Game
---

Here’s a simple "Memory Matching Game" using HTML, CSS, and JavaScript. In this game, users flip cards to find matching pairs. The game keeps track of the number of moves and provides feedback on performance based on the moves count.

### Step 1: HTML Structure

Create an HTML file (`index.html`) for the structure of the memory game.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Memory Game</title>
  <style>
    body { font-family: Arial, sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; background-color: #f5f5f5; }
    .game-container { width: 320px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
    .card { width: 70px; height: 70px; background-color: #333; color: white; display: flex; align-items: center; justify-content: center; font-size: 24px; border-radius: 5px; cursor: pointer; transform: rotateY(0deg); transition: transform 0.3s; }
    .flipped { transform: rotateY(180deg); background-color: #4CAF50; color: white; }
    .hidden { visibility: hidden; }
    .scoreboard { margin-top: 20px; font-size: 18px; }
  </style>
</head>
<body>
  <h2>Memory Game</h2>
  <div class="game-container" id="gameBoard"></div>
  <div class="scoreboard">
    <p>Moves: <span id="movesCount">0</span></p>
    <p id="score">Score: ⭐⭐⭐</p>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

In this HTML file:
- The game board (`<div id="gameBoard">`) holds the cards.
- A scoreboard displays the number of moves (`movesCount`) and performance feedback based on moves.

### Step 2: JavaScript Functionality

Create a JavaScript file (`script.js`) to handle the game logic.

```javascript
const symbols = ["🍎", "🍊", "🍋", "🍉", "🍇", "🍓", "🍒", "🥝"];
const cards = [...symbols, ...symbols]; // Duplicate symbols for matching pairs
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;

const gameBoard = document.getElementById("gameBoard");
const movesCount = document.getElementById("movesCount");
const scoreDisplay = document.getElementById("score");

// Shuffle function to randomize cards
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Initialize the game
function initializeGame() {
  shuffle(cards);
  gameBoard.innerHTML = "";
  moves = 0;
  matchedPairs = 0;
  movesCount.innerText = moves;
  scoreDisplay.innerText = "Score: ⭐⭐⭐";
  cards.forEach(symbol => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.dataset.symbol = symbol;
    cardElement.onclick = () => flipCard(cardElement);
    gameBoard.appendChild(cardElement);
  });
}

// Flip a card
function flipCard(card) {
  if (flippedCards.length < 2 && !card.classList.contains("flipped")) {
    card.classList.add("flipped");
    card.innerText = card.dataset.symbol;
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      moves++;
      movesCount.innerText = moves;
      checkForMatch();
    }
  }
}

// Check if two flipped cards match
function checkForMatch() {
  const [card1, card2] = flippedCards;
  if (card1.dataset.symbol === card2.dataset.symbol) {
    card1.classList.add("hidden");
    card2.classList.add("hidden");
    matchedPairs++;
    if (matchedPairs === symbols.length) {
      setTimeout(() => alert(`You won the game in ${moves} moves!`), 500);
    }
  } else {
    setTimeout(() => {
      card1.classList.remove("flipped");
      card1.innerText = "";
      card2.classList.remove("flipped");
      card2.innerText = "";
    }, 1000);
  }
  flippedCards = [];
  updateScore();
}

// Update score based on moves
function updateScore() {
  if (moves <= 12) {
    scoreDisplay.innerText = "Score: ⭐⭐⭐";
  } else if (moves <= 18) {
    scoreDisplay.innerText = "Score: ⭐⭐";
  } else {
    scoreDisplay.innerText = "Score: ⭐";
  }
}

// Start the game
initializeGame();
```

### Explanation of JavaScript Code

1. **Symbols Array**: `symbols` contains unique symbols for the cards. Each symbol is duplicated to form pairs.
2. **Shuffle Function**: The `shuffle()` function randomizes the card order.
3. **Initialize Game**: `initializeGame()` shuffles cards, resets moves and matched pairs, and creates clickable card elements.
4. **Flip Card**: The `flipCard()` function flips a card by showing the symbol, adding it to `flippedCards`. If two cards are flipped, it increments the moves counter and calls `checkForMatch()`.
5. **Check for Match**: The `checkForMatch()` function compares two flipped cards for a match. If matched, they stay flipped; otherwise, they flip back after a delay.
6. **Update Score**: The `updateScore()` function displays a star-based score, based on moves (3 stars for &le; 12 moves, 2 stars for &le; 18 moves, and 1 star for more).
7. **Winning Condition**: Once all pairs are matched, the game alerts the player of their win with the moves count.

### Styling (CSS)

The CSS in `index.html`:
- Displays the cards in a grid layout.
- Includes a `flipped` class for a smooth flip effect.
- Uses `hidden` class to hide matched cards.
- Colors and sizes the game elements for readability and ease of play.

### How to Play the Memory Game

1. Open `index.html` in your browser.
2. Click on two cards to try and match symbols.
3. Continue until all pairs are matched.
4. Track your moves and star score on the scoreboard. The game displays a message when you win.