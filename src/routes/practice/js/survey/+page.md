---
title: Survey Form
---

Here’s a simple "Survey Form" using HTML and CSS. This form allows users to fill out survey details, including name, email, age, feedback, and satisfaction rating. The form includes various input types to make it easy for users to provide their answers.

### Step 1: HTML Structure

Create an HTML file (`index.html`) for the survey form structure.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Survey Form</title>
  <style>
    body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; background-color: #f5f5f5; }
    .form-container { width: 100%; max-width: 500px; padding: 20px; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); }
    h2 { text-align: center; color: #333; }
    label { display: block; margin: 10px 0 5px; font-size: 16px; color: #333; }
    input[type="text"], input[type="email"], input[type="number"], textarea, select { width: 100%; padding: 10px; margin-top: 5px; border: 1px solid #ccc; border-radius: 5px; font-size: 16px; }
    input[type="radio"], input[type="checkbox"] { margin-right: 5px; }
    .submit-button { width: 100%; padding: 10px; margin-top: 20px; background-color: #4CAF50; color: white; font-size: 16px; border: none; border-radius: 5px; cursor: pointer; }
    .submit-button:hover { background-color: #45a049; }
  </style>
</head>
<body>
  <div class="form-container">
    <h2>Survey Form</h2>
    <form id="surveyForm">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>

      <label for="age">Age:</label>
      <input type="number" id="age" name="age" min="18" max="100" required>

      <label for="satisfaction">How satisfied are you with our service?</label>
      <select id="satisfaction" name="satisfaction" required>
        <option value="">Select an option</option>
        <option value="very-satisfied">Very Satisfied</option>
        <option value="satisfied">Satisfied</option>
        <option value="neutral">Neutral</option>
        <option value="dissatisfied">Dissatisfied</option>
        <option value="very-dissatisfied">Very Dissatisfied</option>
      </select>

      <label>Would you recommend us to others?</label>
      <input type="radio" id="recommendYes" name="recommend" value="yes" required>
      <label for="recommendYes" style="display: inline;">Yes</label>
      <input type="radio" id="recommendNo" name="recommend" value="no" required>
      <label for="recommendNo" style="display: inline;">No</label>

      <label for="feedback">Additional Feedback:</label>
      <textarea id="feedback" name="feedback" rows="4" placeholder="Write your feedback here..."></textarea>

      <button type="submit" class="submit-button">Submit</button>
    </form>
  </div>

  <script>
    document.getElementById("surveyForm").addEventListener("submit", function(event) {
      event.preventDefault();
      alert("Thank you for submitting the survey!");
      this.reset(); // Clear the form
    });
  </script>
</body>
</html>
```

### Explanation of HTML Structure

1. **Form Elements**:
   - **Name, Email, Age**: Basic input fields for user details.
   - **Satisfaction**: A dropdown to choose the level of satisfaction with the service.
   - **Recommend**: Radio buttons for "Yes" or "No" to ask if the user would recommend the service.
   - **Feedback**: A `textarea` for additional comments or suggestions.

2. **Form Submission**:
   - An inline `<script>` listens for the form `submit` event to show a "Thank you" message and prevent the page from reloading (for demonstration purposes).

### Styling (CSS)

The CSS in `index.html`:
- Centers the form on the page, styles input fields, buttons, and labels for a clean, user-friendly layout.
- Adds a `submit-button` style that changes color when hovered.

### How to Use the Survey Form

1. Open `index.html` in your browser.
2. Fill in the survey fields, and click "Submit."
3. Upon submission, a "Thank you" alert will pop up, and the form will reset for a new entry. 

This setup can be enhanced further with backend integration to save survey responses.