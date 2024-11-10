---
title: Stopwatch
---

Here's a simple stopwatch app using HTML, CSS, and JavaScript. The stopwatch includes Start, Stop, and Reset buttons, displaying the elapsed time in a "minutes:seconds" format.

### Step 1: HTML Structure

Create an HTML file (`index.html`) to define the structure of the stopwatch.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stopwatch</title>
  <style>
    body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f5f5f5; }
    .stopwatch-container { text-align: center; }
    #timeDisplay { font-size: 36px; margin-bottom: 20px; color: #333; }
    button { padding: 10px 20px; margin: 5px; font-size: 16px; cursor: pointer; border: none; border-radius: 5px; }
    #startButton { background-color: #4CAF50; color: white; }
    #stopButton { background-color: #ff6666; color: white; }
    #resetButton { background-color: #333; color: white; }
    button:hover { opacity: 0.9; }
  </style>
</head>
<body>
  <div class="stopwatch-container">
    <h2>Stopwatch</h2>
    <div id="timeDisplay">00:00</div>
    <button id="startButton" onclick="startStopwatch()">Start</button>
    <button id="stopButton" onclick="stopStopwatch()">Stop</button>
    <button id="resetButton" onclick="resetStopwatch()">Reset</button>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

In this HTML file:
- There’s a display (`<div id="timeDisplay">`) to show the elapsed time.
- Buttons for starting, stopping, and resetting the stopwatch.

### Step 2: JavaScript Functionality

Create a JavaScript file (`script.js`) to handle the stopwatch logic.

```javascript
let minutes = 0;
let seconds = 0;
let intervalId = null;

function updateTimeDisplay() {
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");
  document.getElementById("timeDisplay").innerText = `${formattedMinutes}:${formattedSeconds}`;
}

function startStopwatch() {
  if (intervalId) return; // Prevent multiple intervals
  intervalId = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    updateTimeDisplay();
  }, 1000);
}

function stopStopwatch() {
  clearInterval(intervalId);
  intervalId = null;
}

function resetStopwatch() {
  stopStopwatch();
  minutes = 0;
  seconds = 0;
  updateTimeDisplay();
}

// Initialize the display
updateTimeDisplay();
```

### Explanation of JavaScript Code

1. **Time Variables**: `minutes` and `seconds` keep track of the elapsed time.
2. **Update Time Display**: The `updateTimeDisplay()` function formats and displays the time in "minutes:seconds" format, ensuring double-digit format with `padStart`.
3. **Start Stopwatch**: The `startStopwatch()` function starts a new interval (if one isn't already running) to increment `seconds` every second. When seconds reach 60, it resets to 0 and increments `minutes`.
4. **Stop Stopwatch**: The `stopStopwatch()` function clears the interval to stop the stopwatch.
5. **Reset Stopwatch**: The `resetStopwatch()` function stops the interval, resets `minutes` and `seconds` to 0, and updates the display.

### Styling (CSS)

In the `<style>` section of `index.html`:
- Buttons are styled with different background colors for start, stop, and reset.
- The time display is centered and styled for clear visibility.

### How to Use the Stopwatch

1. Open `index.html` in your browser.
2. Click "Start" to begin the timer.
3. Click "Stop" to pause the timer.
4. Click "Reset" to stop and reset the timer to "00:00".