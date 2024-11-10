---
title: Newsletter Signup Form
---

Here’s a simple HTML and CSS tutorial for creating a newsletter signup form. This form will allow users to enter their email addresses and submit them to sign up for a newsletter.

---

### 1. **Set Up Your Files**

You’ll need:
1. **index.html** — for the HTML structure of the signup form.
2. **style.css** — for styling the form.

---

### 2. **HTML Code (`index.html`)**

Here’s the HTML structure for the newsletter signup form.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Newsletter Signup</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <section class="signup-section">
        <div class="form-container">
            <h2>Subscribe to Our Newsletter</h2>
            <p>Get the latest updates and offers right in your inbox.</p>
            <form action="submit-form.php" method="post" class="signup-form">
                <input type="email" name="email" placeholder="Enter your email" required>
                <button type="submit">Subscribe</button>
            </form>
        </div>
    </section>
</body>
</html>
```

Replace `"submit-form.php"` in the `form` action attribute with the server-side script or URL that will handle the form submission.

---

### 3. **CSS Code (`style.css`)**

Create a `style.css` file in the same directory as `index.html` and add the following CSS code to style the form.

```css
/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.signup-section {
    width: 100%;
    max-width: 400px;
    padding: 2rem;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.form-container h2 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 0.5rem;
}

.form-container p {
    color: #666;
    font-size: 1rem;
    margin-bottom: 1.5rem;
}

.signup-form {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
}

.signup-form input[type="email"] {
    padding: 0.8rem;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.signup-form button {
    padding: 0.8rem;
    font-size: 1rem;
    color: #fff;
    background-color: #4CAF50;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.signup-form button:hover {
    background-color: #388E3C;
}
```

---

### 4. **Explanation of the Code**

- **HTML Structure**:
  - **Signup Section**: The `signup-section` div contains the form title, description, and form.
  - **Form**: The `signup-form` form collects the user’s email with an `input` field and a `Subscribe` button for submission.

- **CSS Styling**:
  - **Form Layout**: Centered and given a max-width of `400px` to keep the form compact.
  - **Button Styling**: The `Subscribe` button has a background color that changes on hover for interactivity.
  - **Input Styling**: The email input field is styled with padding and a subtle border.

### 5. **Customization**

- **Change Colors**: Modify the color values in CSS to match your brand colors.
- **Add More Fields**: If needed, you can add fields (e.g., name) by adding more `input` elements in the HTML.
- **Adjust Spacing**: Modify padding, margin, and gap values in CSS to adjust spacing between elements.

### 6. **Preview Your Signup Form**

Open `index.html` in your web browser to see the signup form. Test how it looks and tweak the styles in `style.css` to customize the design further.

---

This setup gives you a clean and straightforward newsletter signup form. Let me know if you want to add validation, more fields, or extra design elements!