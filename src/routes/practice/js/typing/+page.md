---
title: Typing Speed Test
---

Here’s a simple "Typing Speed Test" using HTML, CSS, and JavaScript. This test allows users to type a randomly generated paragraph, measures the time taken, calculates the Words Per Minute (WPM), and highlights typing errors in real-time.

### Step 1: HTML Structure

Create an HTML file (`index.html`) to define the structure of the typing test.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Typing Speed Test</title>
  <style>
    body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f5f5f5; }
    .test-container { width: 600px; padding: 20px; text-align: center; background-color: #333; color: white; border-radius: 10px; }
    #quoteDisplay { font-size: 18px; line-height: 1.5; margin: 20px 0; background-color: #444; padding: 15px; border-radius: 5px; color: white; }
    #quoteInput { width: 100%; padding: 10px; font-size: 16px; border: none; border-radius: 5px; margin-top: 10px; }
    .button { padding: 10px 20px; margin-top: 20px; font-size: 16px; cursor: pointer; border: none; border-radius: 5px; background-color: #4CAF50; color: white; }
    .button:hover { opacity: 0.9; }
    .error { color: red; }
    .scoreboard { margin-top: 20px; font-size: 18px; }
  </style>
</head>
<body>
  <div class="test-container">
    <h2>Typing Speed Test</h2>
    <div id="quoteDisplay">Click "Start Test" to begin!</div>
    <textarea id="quoteInput" rows="4" disabled placeholder="Type here..." oninput="checkInput()"></textarea>
    <button class="button" onclick="startTest()">Start Test</button>
    <div class="scoreboard">
      <p id="timer">Time: 0s</p>
      <p id="wpm">WPM: 0</p>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

In this HTML file:
- `quoteDisplay` shows the paragraph to type.
- `quoteInput` is a text area where the user types.
- "Start Test" button triggers the typing test.
- `scoreboard` displays the time and WPM.

### Step 2: JavaScript Functionality

Create a JavaScript file (`script.js`) to handle the typing test logic.

```javascript
const quotes = [
  "The quick brown fox jumps over the lazy dog.",
  "Typing speed tests measure your words per minute.",
  "Practice makes perfect in typing tests.",
  "Consistent practice improves typing speed and accuracy.",
  "This is a simple typing test to calculate your WPM."
];

let startTime, timerInterval;
let currentQuote = "";
let typedWords = 0;

const quoteDisplay = document.getElementById("quoteDisplay");
const quoteInput = document.getElementById("quoteInput");
const timerDisplay = document.getElementById("timer");
const wpmDisplay = document.getElementById("wpm");

// Function to get a random quote
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Start the typing test
function startTest() {
  currentQuote = getRandomQuote();
  quoteDisplay.innerHTML = "";
  currentQuote.split("").forEach(char => {
    const charSpan = document.createElement("span");
    charSpan.innerText = char;
    quoteDisplay.appendChild(charSpan);
  });
  
  quoteInput.value = "";
  quoteInput.disabled = false;
  quoteInput.focus();

  typedWords = 0;
  startTime = new Date();
  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);
  timerDisplay.innerText = "Time: 0s";
  wpmDisplay.innerText = "WPM: 0";
}

// Check input as the user types
function checkInput() {
  const quoteArray = quoteDisplay.querySelectorAll("span");
  const inputArray = quoteInput.value.split("");
  
  let correct = true;
  quoteArray.forEach((charSpan, index) => {
    const char = inputArray[index];
    if (char == null) {
      charSpan.classList.remove("correct", "error");
      correct = false;
    } else if (char === charSpan.innerText) {
      charSpan.classList.add("correct");
      charSpan.classList.remove("error");
    } else {
      charSpan.classList.add("error");
      charSpan.classList.remove("correct");
      correct = false;
    }
  });

  if (correct && inputArray.length === quoteArray.length) {
    clearInterval(timerInterval);
    calculateWPM();
  }
}

// Update timer every second
function updateTimer() {
  const timeElapsed = Math.floor((new Date() - startTime) / 1000);
  timerDisplay.innerText = `Time: ${timeElapsed}s`;
}

// Calculate Words Per Minute (WPM)
function calculateWPM() {
  const timeElapsed = (new Date() - startTime) / 1000 / 60; // time in minutes
  const wordCount = currentQuote.split(" ").length;
  const wpm = Math.round(wordCount / timeElapsed);
  wpmDisplay.innerText = `WPM: ${wpm}`;
}
```

### Explanation of JavaScript Code

1. **Quotes Array**: `quotes` contains sample paragraphs for the typing test.
2. **Random Quote Selection**: `getRandomQuote()` chooses a random quote from the array.
3. **Starting the Test**: `startTest()` resets the timer, fetches a new random quote, displays it, and enables typing.
4. **Checking Typing Input**: `checkInput()` compares each character of `quoteInput` with `quoteDisplay` in real-time. Correctly typed characters are highlighted, and incorrect ones are marked in red.
5. **Updating the Timer**: `updateTimer()` tracks and displays elapsed time in seconds.
6. **Calculating WPM**: `calculateWPM()` computes WPM by dividing the word count by the time elapsed (in minutes) when the user finishes typing the quote.

### Styling (CSS)

The CSS in `index.html`:
- Highlights correct and incorrect typed characters in `checkInput()`.
- Formats the timer and WPM display for easy readability.

### How to Use the Typing Speed Test

1. Open `index.html` in your browser.
2. Click "Start Test" to begin.
3. Type the displayed text. Correct characters will appear normally; incorrect characters will be highlighted in red.
4. When finished, your Words Per Minute (WPM) score will be displayed.

This setup measures typing speed while giving feedback on accuracy in real-time, making it great for practice.