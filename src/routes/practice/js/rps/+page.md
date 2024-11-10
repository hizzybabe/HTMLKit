---
title: Rock, Paper, Scissors
---

Here’s a simple "Rock, Paper, Scissors" game using HTML, CSS, and JavaScript. In this game, the player can choose between rock, paper, or scissors, and the computer randomly selects one as well. The game then displays the winner.

### Step 1: HTML Structure

Create an HTML file (`index.html`) to define the structure of the Rock, Paper, Scissors game.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rock Paper Scissors</title>
  <style>
    body { display: flex; justify-content: center; align-items: center; height: 100vh; font-family: Arial, sans-serif; margin: 0; background-color: #f5f5f5; }
    .game-container { text-align: center; }
    .choices { margin: 20px 0; }
    .button { padding: 10px 20px; font-size: 18px; margin: 5px; cursor: pointer; background-color: #4CAF50; color: white; border: none; border-radius: 5px; }
    .button:hover { background-color: #45a049; }
    #result { font-size: 24px; margin-top: 20px; color: #333; }
  </style>
</head>
<body>
  <div class="game-container">
    <h2>Rock Paper Scissors</h2>
    <div class="choices">
      <button class="button" onclick="playGame('rock')">Rock</button>
      <button class="button" onclick="playGame('paper')">Paper</button>
      <button class="button" onclick="playGame('scissors')">Scissors</button>
    </div>
    <div id="result">Choose Rock, Paper, or Scissors!</div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

In this HTML file:
- We have three buttons for the player to select rock, paper, or scissors.
- A `<div id="result">` to display the outcome of each round.

### Step 2: JavaScript Functionality

Create a JavaScript file (`script.js`) to handle the game logic.

```javascript
function playGame(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = `You win! ${playerChoice} beats ${computerChoice}.`;
  } else {
    result = `You lose! ${computerChoice} beats ${playerChoice}.`;
  }

  document.getElementById("result").innerText = result;
}
```

### Explanation of JavaScript Code

1. **Player and Computer Choices**: The `playGame(playerChoice)` function takes the player's choice as an argument, then generates a random choice for the computer from the `choices` array.
2. **Determining the Winner**:
   - If both choices are the same, it’s a tie.
   - Winning and losing conditions are checked for each possible outcome, updating the result message accordingly.
3. **Displaying the Result**: The result of each round (win, lose, or tie) is displayed in the `result` element.

### Styling (CSS)

In the `<style>` section of `index.html`:
- Buttons and result text are styled for clarity and user-friendliness.
- The game layout is centered on the screen with a simple and clean design.

### How to Play Rock, Paper, Scissors

1. Open `index.html` in your browser.
2. Click one of the buttons to select Rock, Paper, or Scissors.
3. The game will display whether you won, lost, or tied against the computer's choice.