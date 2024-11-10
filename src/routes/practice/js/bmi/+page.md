---
title: BMI Calculator
---

Here’s a "BMI Calculator" that allows users to input their height and weight, calculates the Body Mass Index (BMI), and displays a message about their weight category. This app also includes input validation.

### Step 1: HTML Structure

Create an HTML file (`index.html`) to define the structure of the BMI calculator.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BMI Calculator</title>
  <style>
    body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f5f5f5; }
    .calculator-container { text-align: center; background-color: #333; color: white; padding: 20px; border-radius: 10px; width: 300px; }
    .calculator-container input { padding: 10px; font-size: 16px; margin: 5px 0; width: 100%; border: 1px solid #ccc; border-radius: 5px; }
    .result { font-size: 18px; margin-top: 15px; }
    .button { padding: 10px; font-size: 16px; cursor: pointer; border: none; border-radius: 5px; background-color: #4CAF50; color: white; width: 100%; margin-top: 10px; }
    .button:hover { background-color: #45a049; }
    .error { color: red; font-size: 14px; margin-top: 10px; }
  </style>
</head>
<body>
  <div class="calculator-container">
    <h2>BMI Calculator</h2>
    <input type="number" id="weight" placeholder="Weight in kg" min="1">
    <input type="number" id="height" placeholder="Height in cm" min="1">
    <button class="button" onclick="calculateBMI()">Calculate BMI</button>
    <div id="result" class="result"></div>
    <p id="errorMessage" class="error"></p>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

In this HTML file:
- Input fields for weight (in kilograms) and height (in centimeters).
- A "Calculate BMI" button that triggers the `calculateBMI()` function.
- `result` displays the calculated BMI and category, and `errorMessage` displays input validation errors.

### Step 2: JavaScript Functionality

Create a JavaScript file (`script.js`) to handle BMI calculation and input validation.

```javascript
function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const errorMessage = document.getElementById("errorMessage");
  const resultDisplay = document.getElementById("result");

  // Input validation
  if (isNaN(weight) || weight <= 0 || isNaN(height) || height <= 0) {
    errorMessage.innerText = "Please enter valid weight and height values.";
    resultDisplay.innerText = "";
    return;
  }

  errorMessage.innerText = ""; // Clear any previous error message

  // Calculate BMI
  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  // Determine weight category
  let category;
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 24.9) {
    category = "Normal weight";
  } else if (bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obesity";
  }

  // Display result
  resultDisplay.innerText = `Your BMI is ${bmi} (${category}).`;
}
```

### Explanation of JavaScript Code

1. **Input Validation**:
   - Checks if the weight and height are valid numbers greater than zero.
   - Displays an error message in `errorMessage` if the inputs are invalid and clears previous results.

2. **BMI Calculation**:
   - Converts height to meters, calculates BMI using `weight / (height in meters)^2`, and rounds it to two decimal places.

3. **Weight Category**:
   - Determines the user’s weight category based on BMI value:
     - Underweight: BMI < 18.5
     - Normal weight: 18.5 ≤ BMI < 24.9
     - Overweight: 25 ≤ BMI < 29.9
     - Obesity: BMI ≥ 30

4. **Display Result**:
   - Updates `resultDisplay` with the calculated BMI and weight category.

### Styling (CSS)

The CSS in `index.html`:
- Styles the input fields, button, and result display.
- Adds an error message style in red to indicate input errors.

### How to Use the BMI Calculator

1. Open `index.html` in your browser.
2. Enter your weight in kilograms and height in centimeters.
3. Click "Calculate BMI" to view the calculated BMI and weight category.
4. If inputs are invalid, an error message will be displayed.