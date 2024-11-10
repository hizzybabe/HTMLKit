---
title: Digital Clock
---

Here’s a "Digital Clock" that displays the current time in `HH:MM:SS AM/PM` format. This clock updates every second and optionally shows the date. It also includes day/night themes based on the time.

### Step 1: HTML Structure

Create an HTML file (`index.html`) for the structure of the digital clock.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Digital Clock</title>
  <style>
    body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; transition: background-color 0.3s ease; }
    .clock-container { text-align: center; color: white; padding: 20px; border-radius: 10px; background-color: rgba(0, 0, 0, 0.7); }
    #time { font-size: 48px; margin: 0; }
    #date { font-size: 24px; margin: 0; }
    .day-theme { background-color: #87CEEB; }
    .night-theme { background-color: #2C3E50; }
  </style>
</head>
<body>
  <div class="clock-container">
    <p id="time">00:00:00 AM</p>
    <p id="date">January 1, 1970</p>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

In this HTML file:
- The `clock-container` contains the `time` and `date` displays.
- `#time` shows the current time in `HH:MM:SS AM/PM` format.
- `#date` displays the full date.

### Step 2: JavaScript Functionality

Create a JavaScript file (`script.js`) to handle the time updates, date display, and theme switching.

```javascript
const timeDisplay = document.getElementById("time");
const dateDisplay = document.getElementById("date");

function updateClock() {
  const now = new Date();
  
  // Format time
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  
  hours = hours % 12 || 12; // Convert to 12-hour format and adjust midnight (0) to 12
  
  timeDisplay.innerText = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${ampm}`;
  
  // Format date
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateDisplay.innerText = now.toLocaleDateString(undefined, options);
  
  // Apply day/night theme based on hour
  document.body.className = (now.getHours() >= 6 && now.getHours() < 18) ? 'day-theme' : 'night-theme';
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display clock immediately on page load
updateClock();
```

### Explanation of JavaScript Code

1. **Time Formatting**:
   - `updateClock()` retrieves the current time.
   - Converts `hours` to 12-hour format and pads `minutes` and `seconds` to two digits with `padStart`.
   - Adds `AM` or `PM` based on the hour.

2. **Date Formatting**:
   - Uses `toLocaleDateString` with options to format the date in a readable format (e.g., `Monday, January 1, 1970`).

3. **Day/Night Theme**:
   - Applies `day-theme` if the hour is between 6 AM and 6 PM, otherwise applies `night-theme`.

4. **Clock Update**:
   - `setInterval(updateClock, 1000)` updates the time every second to keep it accurate.

### Styling (CSS)

The CSS in `index.html`:
- Adds styles for `.day-theme` (light blue) and `.night-theme` (dark blue) backgrounds.
- Styles the text color, padding, and alignment for a clean clock interface.

### How to Use the Digital Clock

1. Open `index.html` in your browser.
2. The current time and date will display and update every second.
3. Background theme changes based on day or night.