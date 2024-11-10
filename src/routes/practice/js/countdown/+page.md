---
title: Calculator
---

Here's a simple calculator app using HTML, CSS, and JavaScript that allows you to perform basic arithmetic operations: addition, subtraction, multiplication, and division.

### Step 1: HTML Structure

Create an HTML file (`index.html`) to define the structure of the calculator app.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculator</title>
  <style>
    body { display: flex; justify-content: center; align-items: center; height: 100vh; font-family: Arial, sans-serif; margin: 0; background-color: #f5f5f5; }
    .calculator { width: 240px; padding: 20px; background-color: #333; border-radius: 10px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); }
    .display { width: 100%; padding: 15px; font-size: 24px; color: #fff; background-color: #222; text-align: right; border-radius: 5px; margin-bottom: 10px; }
    .buttons { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
    .button { padding: 20px; font-size: 18px; color: white; background-color: #555; border: none; border-radius: 5px; cursor: pointer; }
    .button.operator { background-color: #ff8c00; }
    .button.clear { background-color: #ff4d4d; }
    .button.equal { grid-column: span 4; background-color: #00b894; }
    .button:hover { opacity: 0.9; }
  </style>
</head>
<body>
  <div class="calculator">
    <div id="display" class="display">0</div>
    <div class="buttons">
      <button class="button clear" onclick="clearDisplay()">C</button>
      <button class="button" onclick="appendToDisplay('7')">7</button>
      <button class="button" onclick="appendToDisplay('8')">8</button>
      <button class="button" onclick="appendToDisplay('9')">9</button>
      <button class="button operator" onclick="appendToDisplay('/')">/</button>
      <button class="button" onclick="appendToDisplay('4')">4</button>
      <button class="button" onclick="appendToDisplay('5')">5</button>
      <button class="button" onclick="appendToDisplay('6')">6</button>
      <button class="button operator" onclick="appendToDisplay('*')">*</button>
      <button class="button" onclick="appendToDisplay('1')">1</button>
      <button class="button" onclick="appendToDisplay('2')">2</button>
      <button class="button" onclick="appendToDisplay('3')">3</button>
      <button class="button operator" onclick="appendToDisplay('-')">-</button>
      <button class="button" onclick="appendToDisplay('0')">0</button>
      <button class="button" onclick="appendToDisplay('.')">.</button>
      <button class="button operator" onclick="appendToDisplay('+')">+</button>
      <button class="button equal" onclick="calculate()">=</button>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

In this HTML file:
- We have a calculator display (`<div id="display">`) to show the input and result.
- Calculator buttons for numbers, operators, clear, and equals are arranged in a grid layout.

### Step 2: JavaScript Functionality

Create a JavaScript file (`script.js`) to handle the calculator's operations.

```javascript
const display = document.getElementById("display");

function clearDisplay() {
  display.innerText = "0";
}

function appendToDisplay(value) {
  if (display.innerText === "0" && value !== ".") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = "Error";
  }
}
```

### Explanation of JavaScript Code

1. **Clearing the Display**: The `clearDisplay()` function resets the display to "0".
2. **Appending Values**: The `appendToDisplay(value)` function appends numbers and operators to the display. If the display shows "0", it replaces it with the new value unless it's a decimal point.
3. **Calculating the Result**: The `calculate()` function evaluates the expression in the display. If there’s an error (e.g., invalid input), it displays "Error".

### Styling (CSS)

In the `<style>` section of `index.html`, the buttons and display are styled for a simple and modern look:
- **Display Area**: Styled with a dark background and aligned text.
- **Buttons**: Different colors for operators, numbers, and the clear button.
- **Grid Layout**: Ensures buttons are aligned and organized neatly.

### How to Use the Calculator
1. Open `index.html` in your browser.
2. Enter numbers and operations using the buttons.
3. Press `=` to see the result.
4. Use the `C` button to clear the display and start a new calculation.