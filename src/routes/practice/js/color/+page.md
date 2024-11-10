---
title: Color Flipper
---

Here’s a simple "Color Flipper" app using HTML, CSS, and JavaScript. This app allows users to click a button to change the background color to a random color. The color code is displayed on the screen.

### Step 1: HTML Structure

Create an HTML file (`index.html`) to define the structure of the color flipper.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Color Flipper</title>
  <style>
    body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; transition: background-color 0.3s ease; }
    .container { text-align: center; padding: 20px; border-radius: 10px; background-color: rgba(255, 255, 255, 0.8); }
    h1 { margin: 0 0 20px; font-size: 24px; }
    #colorCode { font-size: 32px; margin: 10px 0; color: #333; }
    button { padding: 10px 20px; font-size: 18px; cursor: pointer; border: none; border-radius: 5px; background-color: #4CAF50; color: white; }
    button:hover { background-color: #45a049; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Color Flipper</h1>
    <p id="colorCode">#FFFFFF</p>
    <button onclick="changeColor()">Flip Color</button>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

In this HTML file:
- The `colorCode` element displays the current background color’s hex code.
- The "Flip Color" button triggers the `changeColor()` function to switch to a new color.

### Step 2: JavaScript Functionality

Create a JavaScript file (`script.js`) to handle color generation and display.

```javascript
function getRandomColor() {
  const hex = Math.floor(Math.random() * 16777215).toString(16); // Generate a random color hex code
  return `#${hex.padStart(6, "0")}`; // Ensure the hex code is 6 characters long
}

function changeColor() {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
  document.getElementById("colorCode").innerText = newColor;
}
```

### Explanation of JavaScript Code

1. **Generate a Random Hex Color**: 
   - `getRandomColor()` generates a random color by creating a random number, converting it to hex, and formatting it as a six-character color code.

2. **Change Background Color**:
   - `changeColor()` calls `getRandomColor()` to get a new color, applies it as the `backgroundColor` of the `body`, and updates the displayed `colorCode`.

### Styling (CSS)

The CSS in `index.html`:
- Centers the content on the screen.
- Adds padding, color, and hover effects to the button for a polished look.
- Smoothly transitions the background color change with `transition: background-color 0.3s ease`.

### How to Use the Color Flipper

1. Open `index.html` in your browser.
2. Click the "Flip Color" button to change the background color.
3. The hex color code of the current background is displayed below the button.