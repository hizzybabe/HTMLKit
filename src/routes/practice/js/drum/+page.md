---
title: Temperature Converter
---

Here's a simple "Temperature Converter" app using HTML, CSS, and JavaScript. This converter allows users to enter a temperature in Celsius, Fahrenheit, or Kelvin, and it will dynamically display the converted values in the other units. It also includes validation for incorrect inputs.

### Step 1: HTML Structure

Create an HTML file (`index.html`) for the structure of the temperature converter.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Temperature Converter</title>
  <style>
    body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f5f5f5; }
    .converter-container { width: 300px; text-align: center; background-color: #333; color: white; padding: 20px; border-radius: 10px; }
    h2 { margin-bottom: 20px; }
    .input-group { margin-bottom: 15px; }
    label { display: block; margin-bottom: 5px; font-size: 16px; }
    input[type="number"] { width: 100%; padding: 10px; font-size: 16px; border-radius: 5px; border: none; }
    .result { font-size: 18px; margin-top: 10px; }
    .error { color: red; font-size: 14px; margin-top: 10px; }
  </style>
</head>
<body>
  <div class="converter-container">
    <h2>Temperature Converter</h2>
    <div class="input-group">
      <label for="celsius">Celsius (°C)</label>
      <input type="number" id="celsius" placeholder="Enter Celsius" oninput="convertFromCelsius()">
    </div>
    <div class="input-group">
      <label for="fahrenheit">Fahrenheit (°F)</label>
      <input type="number" id="fahrenheit" placeholder="Enter Fahrenheit" oninput="convertFromFahrenheit()">
    </div>
    <div class="input-group">
      <label for="kelvin">Kelvin (K)</label>
      <input type="number" id="kelvin" placeholder="Enter Kelvin" oninput="convertFromKelvin()">
    </div>
    <p id="errorMessage" class="error"></p>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

In this HTML file:
- There are input fields for Celsius, Fahrenheit, and Kelvin with `oninput` events to dynamically handle conversions.
- An error message (`errorMessage`) is displayed for invalid input.

### Step 2: JavaScript Functionality

Create a JavaScript file (`script.js`) to handle the temperature conversions and input validation.

```javascript
const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");
const errorMessage = document.getElementById("errorMessage");

function clearInputs() {
  celsiusInput.value = "";
  fahrenheitInput.value = "";
  kelvinInput.value = "";
}

// Conversion from Celsius
function convertFromCelsius() {
  const celsius = parseFloat(celsiusInput.value);
  if (isNaN(celsius)) {
    showError("Please enter a valid Celsius temperature.");
    clearInputs();
    return;
  }
  hideError();
  fahrenheitInput.value = (celsius * 9/5 + 32).toFixed(2);
  kelvinInput.value = (celsius + 273.15).toFixed(2);
}

// Conversion from Fahrenheit
function convertFromFahrenheit() {
  const fahrenheit = parseFloat(fahrenheitInput.value);
  if (isNaN(fahrenheit)) {
    showError("Please enter a valid Fahrenheit temperature.");
    clearInputs();
    return;
  }
  hideError();
  celsiusInput.value = ((fahrenheit - 32) * 5/9).toFixed(2);
  kelvinInput.value = ((fahrenheit - 32) * 5/9 + 273.15).toFixed(2);
}

// Conversion from Kelvin
function convertFromKelvin() {
  const kelvin = parseFloat(kelvinInput.value);
  if (isNaN(kelvin) || kelvin < 0) {
    showError("Please enter a valid Kelvin temperature (0 or above).");
    clearInputs();
    return;
  }
  hideError();
  celsiusInput.value = (kelvin - 273.15).toFixed(2);
  fahrenheitInput.value = ((kelvin - 273.15) * 9/5 + 32).toFixed(2);
}

function showError(message) {
  errorMessage.innerText = message;
}

function hideError() {
  errorMessage.innerText = "";
}
```

### Explanation of JavaScript Code

1. **Input Elements and Error Message**: `celsiusInput`, `fahrenheitInput`, and `kelvinInput` refer to the input fields, while `errorMessage` displays validation errors.
2. **Clear Inputs**: The `clearInputs()` function clears all input fields to reset the form.
3. **Convert from Celsius**: The `convertFromCelsius()` function converts Celsius to Fahrenheit and Kelvin when the user types in the Celsius input field. It displays an error if the input is invalid.
4. **Convert from Fahrenheit**: The `convertFromFahrenheit()` function converts Fahrenheit to Celsius and Kelvin.
5. **Convert from Kelvin**: The `convertFromKelvin()` function converts Kelvin to Celsius and Fahrenheit. It checks if Kelvin is below absolute zero and displays an error if so.
6. **Error Handling**: The `showError(message)` function displays an error, and `hideError()` clears it.

### Styling (CSS)

The CSS in `index.html`:
- Styles the input fields and labels.
- Adds error message styling with `.error` class for visibility when input is invalid.

### How to Use the Temperature Converter

1. Open `index.html` in your browser.
2. Enter a temperature in one of the fields (Celsius, Fahrenheit, or Kelvin).
3. The other two fields update automatically to show the converted values.
4. If the input is invalid, an error message will be displayed.