---
title: Password Generator
---

Here’s a "Password Generator" app using HTML, CSS, and JavaScript. This generator allows users to specify the length of the password and choose to include uppercase letters, lowercase letters, numbers, and special characters.

### Step 1: HTML Structure

Create an HTML file (`index.html`) to define the structure of the password generator.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Generator</title>
  <style>
    body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f5f5f5; }
    .generator-container { text-align: center; background-color: #333; color: white; padding: 20px; border-radius: 10px; width: 300px; }
    .generator-container input[type="number"], .generator-container input[type="checkbox"] { margin: 10px; }
    .password-display { font-size: 18px; margin-top: 20px; padding: 10px; background-color: #444; border-radius: 5px; color: #FFD700; }
    button { padding: 10px 20px; font-size: 16px; cursor: pointer; border: none; border-radius: 5px; background-color: #4CAF50; color: white; margin-top: 10px; }
    button:hover { background-color: #45a049; }
  </style>
</head>
<body>
  <div class="generator-container">
    <h2>Password Generator</h2>
    <div>
      <label>Password Length:</label>
      <input type="number" id="length" min="4" max="20" value="12">
    </div>
    <div>
      <label><input type="checkbox" id="uppercase" checked> Uppercase</label>
      <label><input type="checkbox" id="lowercase" checked> Lowercase</label>
      <label><input type="checkbox" id="numbers" checked> Numbers</label>
      <label><input type="checkbox" id="symbols" checked> Symbols</label>
    </div>
    <button onclick="generatePassword()">Generate Password</button>
    <div class="password-display" id="password">Your Password</div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

In this HTML file:
- The password length and options for including uppercase letters, lowercase letters, numbers, and symbols are displayed as checkboxes.
- The "Generate Password" button calls the `generatePassword()` function to create a new password.
- The generated password is displayed in `password-display`.

### Step 2: JavaScript Functionality

Create a JavaScript file (`script.js`) to handle password generation based on user-selected criteria.

```javascript
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

function generatePassword() {
  const length = parseInt(document.getElementById("length").value);
  const includeUppercase = document.getElementById("uppercase").checked;
  const includeLowercase = document.getElementById("lowercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
    document.getElementById("password").innerText = "Please select at least one character type!";
    return;
  }

  let availableChars = "";
  if (includeUppercase) availableChars += uppercaseChars;
  if (includeLowercase) availableChars += lowercaseChars;
  if (includeNumbers) availableChars += numberChars;
  if (includeSymbols) availableChars += symbolChars;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars[randomIndex];
  }

  document.getElementById("password").innerText = password;
}
```

### Explanation of JavaScript Code

1. **Character Sets**:
   - `uppercaseChars`, `lowercaseChars`, `numberChars`, and `symbolChars` contain possible characters for each category.

2. **Password Generation Logic**:
   - `generatePassword()` retrieves user preferences and ensures at least one character type is selected.
   - Builds a string `availableChars` based on selected options.
   - Generates a random password of specified length by selecting random characters from `availableChars`.

3. **Display the Password**:
   - Updates `password` with the generated password, or displays an error if no options are selected.

### Styling (CSS)

The CSS in `index.html`:
- Centers the app, applies padding, and colors the password display area for better visibility.

### How to Use the Password Generator

1. Open `index.html` in your browser.
2. Select password length and character options.
3. Click "Generate Password" to create a password based on the selected options.
4. The generated password appears in the display area.