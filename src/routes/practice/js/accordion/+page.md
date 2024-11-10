---
title: Accordion FAQ Section
---

Here’s how to create an "Accordion FAQ Section" using HTML, CSS, and JavaScript. Each FAQ item can expand or collapse when clicked, displaying the answer. This accordion feature is great for an FAQ section where users can reveal only the questions they are interested in.

### Step 1: HTML Structure

Create an HTML file (`index.html`) for the FAQ accordion.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Accordion FAQ</title>
  <style>
    body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; background-color: #f5f5f5; padding: 20px; }
    .faq-container { width: 600px; }
    .faq-item { background-color: #fff; border-radius: 5px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); margin-bottom: 10px; overflow: hidden; }
    .faq-question { padding: 15px; font-size: 18px; font-weight: bold; background-color: #4CAF50; color: white; cursor: pointer; }
    .faq-answer { padding: 15px; font-size: 16px; background-color: #f9f9f9; color: #333; display: none; }
    .faq-answer.active { display: block; }
  </style>
</head>
<body>
  <div class="faq-container">
    <div class="faq-item">
      <div class="faq-question" onclick="toggleAnswer(this)">What is the purpose of this FAQ section?</div>
      <div class="faq-answer">This section provides answers to commonly asked questions in an accordion format.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question" onclick="toggleAnswer(this)">How does the accordion work?</div>
      <div class="faq-answer">Each question can be clicked to toggle the visibility of the answer.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question" onclick="toggleAnswer(this)">Can I add more questions?</div>
      <div class="faq-answer">Yes, you can easily add more questions by following the structure of the HTML code.</div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

In this HTML file:
- Each FAQ item contains a `.faq-question` (clickable) and `.faq-answer` (hidden by default).
- The `onclick="toggleAnswer(this)"` on each question triggers a function to show or hide the answer.

### Step 2: JavaScript Functionality

Create a JavaScript file (`script.js`) to handle the accordion functionality.

```javascript
function toggleAnswer(questionElement) {
  const answerElement = questionElement.nextElementSibling;

  // Close any open answer
  document.querySelectorAll('.faq-answer').forEach(answer => {
    if (answer !== answerElement) answer.classList.remove('active');
  });

  // Toggle the clicked answer
  answerElement.classList.toggle('active');
}
```

### Explanation of JavaScript Code

1. **Toggle Answer**:
   - `toggleAnswer(questionElement)` finds the `faq-answer` element immediately after the clicked question.
   - It first closes any other open answers by removing the `active` class from other `.faq-answer` elements.
   - Finally, it toggles the visibility of the clicked answer by adding or removing the `active` class.

### Styling (CSS)

The CSS in `index.html`:
- Adds styles for `.faq-container`, `.faq-item`, and `.faq-question`.
- `.faq-answer` is hidden by default, but displayed when the `active` class is added.

### How to Use the Accordion FAQ Section

1. Open `index.html` in your browser.
2. Click on each question to expand or collapse the answer.
3. Only one answer can be open at a time.