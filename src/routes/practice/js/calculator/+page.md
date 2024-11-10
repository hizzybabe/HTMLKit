---
title: Countdown Timer
---

Here's a simple countdown timer app using HTML, CSS, and JavaScript. You can set a timer, and it will count down to zero, displaying the remaining time in hours, minutes, and seconds.

### Step 1: HTML Structure

Create an HTML file (`index.html`) for the structure of the countdown timer.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Countdown Timer</title>
  <style>
    body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f5f5f5; }
    .timer-container { text-align: center; }
    #countdown { font-size: 36px; margin-bottom: 20px; color: #333; }
    input[type="number"] { padding: 10px; font-size: 16px; width: 80px; margin: 5px; }
    button { padding: 10px 20px; font-size: 16px; cursor: pointer; background-color: #4CAF50; color: white; border: none; border-radius: 5px; }
    button:hover { background-color: #45a049; }
  </style>
</head>
<body>
  <div class="timer-container">
    <h2>Countdown Timer</h2>
    <div id="countdown">00:00:00</div>
    <div>
      <input type="number" id="hours" placeholder="HH" min="0" max="23"> :
      <input type="number" id="minutes" placeholder="MM" min="0" max="59"> :
      <input type="number" id="seconds" placeholder="SS" min="0" max="59">
    </div>
    <button onclick="startTimer()">Start Timer</button>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

In this HTML file:
- There’s a display (`<div id="countdown">`) for the timer countdown.
- Input fields for setting hours, minutes, and seconds.
- A "Start Timer" button that triggers the countdown.

### Step 2: JavaScript Functionality

Create a JavaScript file (`script.js`) to handle the countdown logic.

```javascript
let countdownInterval;

function startTimer() {
  // Get the values from input fields
  const hours = parseInt(document.getElementById("hours").value) || 0;
  const minutes = parseInt(document.getElementById("minutes").value) || 0;
  const seconds = parseInt(document.getElementById("seconds").value) || 0;

  // Calculate total time in seconds
  let totalTime = hours * 3600 + minutes * 60 + seconds;

  // If timer is running, clear it
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  // Update the countdown every second
  countdownInterval = setInterval(() => {
    if (totalTime <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdown").innerText = "00:00:00";
      alert("Time's up!");
      return;
    }

    totalTime--;

    // Calculate hours, minutes, and seconds
    const hrs = Math.floor(totalTime / 3600);
    const mins = Math.floor((totalTime % 3600) / 60);
    const secs = totalTime % 60;

    // Display the countdown
    document.getElementById("countdown").innerText =
      `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }, 1000);
}
```

### Explanation of JavaScript Code

1. **Start Timer Function**: The `startTimer()` function:
   - Gets the hours, minutes, and seconds from the input fields.
   - Converts them into a total time in seconds.
   - Starts the countdown by decrementing `totalTime` every second.

2. **Update Countdown Display**: Every second, the function calculates the remaining hours, minutes, and seconds, updating the countdown display.

3. **End of Countdown**: When the timer reaches zero, it stops and shows "00:00:00", with an alert indicating that time is up.

### Styling (CSS)

The `<style>` section in `index.html` has styling for:
- Centering and organizing elements.
- Styling the input fields and the button to make them user-friendly and visually appealing.

### How to Use the Countdown Timer

1. Open `index.html` in your browser.
2. Enter hours, minutes, and seconds in the input fields.
3. Click the "Start Timer" button to start the countdown. When the countdown reaches zero, an alert will show that time's up.