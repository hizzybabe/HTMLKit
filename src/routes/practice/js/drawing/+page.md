---
title: Simple Drawing App
---

Here’s a simple "Drawing App" using HTML, CSS, and JavaScript. This app uses the HTML `<canvas>` element to draw, with options to change the brush color and size, and a button to clear the canvas.

### Step 1: HTML Structure

Create an HTML file (`index.html`) to define the structure of the drawing app.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple Drawing App</title>
  <style>
    body { font-family: Arial, sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; background-color: #f5f5f5; }
    .controls { display: flex; gap: 10px; margin-bottom: 10px; }
    #canvas { border: 2px solid #333; background-color: #fff; cursor: crosshair; }
    .button { padding: 10px; font-size: 16px; cursor: pointer; background-color: #4CAF50; color: white; border: none; border-radius: 5px; }
    .button:hover { background-color: #45a049; }
  </style>
</head>
<body>
  <div class="controls">
    <label>Brush Color: <input type="color" id="colorPicker" value="#000000"></label>
    <label>Brush Size: <input type="range" id="brushSize" min="1" max="20" value="5"></label>
    <button class="button" onclick="clearCanvas()">Clear</button>
  </div>
  <canvas id="canvas" width="600" height="400"></canvas>

  <script src="script.js"></script>
</body>
</html>
```

In this HTML file:
- The `canvas` element is used for drawing.
- Controls include a color picker for brush color, a range slider for brush size, and a "Clear" button.

### Step 2: JavaScript Functionality

Create a JavaScript file (`script.js`) to handle drawing on the canvas and interacting with the controls.

```javascript
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const colorPicker = document.getElementById("colorPicker");
const brushSize = document.getElementById("brushSize");

let painting = false;

function startPosition(e) {
  painting = true;
  draw(e); // Start drawing immediately when mouse is pressed
}

function endPosition() {
  painting = false;
  ctx.beginPath(); // Reset the path to prevent lines from connecting
}

function draw(e) {
  if (!painting) return;

  ctx.lineWidth = brushSize.value;
  ctx.lineCap = "round";
  ctx.strokeStyle = colorPicker.value;

  // Get mouse position relative to the canvas
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  ctx.lineTo(x, y); // Draw a line to the current position
  ctx.stroke();
  ctx.beginPath(); // Start a new path
  ctx.moveTo(x, y); // Move to the current position
}

// Clear the canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Event listeners
canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", endPosition);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseleave", endPosition);
```

### Explanation of JavaScript Code

1. **Variables**:
   - `painting`: A boolean to track if the mouse is pressed and drawing is active.
   - `ctx`: The 2D context of the canvas for drawing.

2. **Drawing Functions**:
   - `startPosition(e)`: Sets `painting` to true and starts drawing.
   - `endPosition()`: Stops drawing by setting `painting` to false and resetting the path.
   - `draw(e)`: Draws lines on the canvas using `ctx.lineTo()` while the mouse is moving and `painting` is true.
     - `ctx.lineWidth` is set to the brush size, `ctx.strokeStyle` is set to the selected color, and `ctx.lineCap` is set to "round" for smooth edges.

3. **Clear Canvas**:
   - `clearCanvas()`: Clears the canvas by resetting the entire area with `ctx.clearRect()`.

4. **Event Listeners**:
   - `mousedown`, `mouseup`, and `mousemove` on the canvas control the start, end, and drawing actions. `mouseleave` stops drawing if the mouse leaves the canvas area.

### Styling (CSS)

The CSS in `index.html`:
- Centers the app on the screen and styles the canvas border.
- Styles the controls and buttons for a clean, user-friendly interface.

### How to Use the Drawing App

1. Open `index.html` in your browser.
2. Select a brush color and size.
3. Click and drag on the canvas to start drawing.
4. Click "Clear" to erase the canvas.