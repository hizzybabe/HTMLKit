---
title: Coming Soon Page
---

Here’s a simple tutorial to create a "Coming Soon" page with HTML and CSS. This page will include a countdown timer (as static text), an email signup form, and a background image or gradient. The design will be responsive, with centered content and clean typography.

---

### 1. **Set Up Your Files**

You’ll need:
1. **index.html** — for the HTML structure of the "Coming Soon" page.
2. **style.css** — for styling the page.

---

### 2. **HTML Code (`index.html`)**

Here’s the HTML structure for the "Coming Soon" page.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coming Soon</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="coming-soon-container">
        <h1>We're Launching Soon!</h1>
        <p class="countdown">Launching in 30 Days, 12 Hours, 15 Minutes</p>
        
        <p>Sign up to be notified when we launch:</p>
        <form action="submit-email.php" method="post" class="signup-form">
            <input type="email" name="email" placeholder="Enter your email" required>
            <button type="submit">Notify Me</button>
        </form>
    </div>
</body>
</html>
```

Replace `"submit-email.php"` in the form’s `action` attribute with the URL or server script that will handle the form submission.

---

### 3. **CSS Code (`style.css`)**

Create a `style.css` file in the same directory as `index.html` and add the following CSS to style the "Coming Soon" page.

```css
/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    color: #fff;
    background: linear-gradient(135deg, #4A90E2, #50C9C3);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.coming-soon-container {
    text-align: center;
    max-width: 500px;
    padding: 2rem;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.countdown {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 2rem;
}

.signup-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.signup-form input[type="email"] {
    padding: 0.8rem;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    outline: none;
}

.signup-form button {
    padding: 0.8rem;
    font-size: 1rem;
    color: #fff;
    background-color: #333;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.signup-form button:hover {
    background-color: #555;
}

/* Responsive Typography */
@media (max-width: 500px) {
    h1 {
        font-size: 2rem;
    }
    
    .countdown {
        font-size: 1rem;
    }
}
```

---

### 4. **Explanation of the Code**

- **HTML Structure**:
  - **Header**: Contains the main title, “We’re Launching Soon!”.
  - **Countdown**: Static text with a countdown timer (without JavaScript) indicating the launch time.
  - **Signup Form**: A form to collect email addresses for notifications.

- **CSS Styling**:
  - **Background Gradient**: The body background uses a gradient to create a visually appealing background.
  - **Container Styling**: The `.coming-soon-container` is centered with text-align and uses padding, rounded corners, and a semi-transparent background to improve readability.
  - **Typography and Input Styling**: Font sizes are responsive, and inputs have rounded borders, no outlines, and a hover effect for the button.
  - **Responsive Design**: Font sizes adjust based on screen width for readability on smaller screens.

### 5. **Customization**

- **Change Colors and Fonts**: Adjust gradient colors and font-family in CSS to match your brand or style.
- **Add Background Image**: Replace the gradient with a background image by adding `background-image: url('background.jpg');` in the `body` selector.
- **Adjust Countdown Text**: Update the countdown text to match your launch timeline.

### 6. **Preview Your "Coming Soon" Page**

Open `index.html` in your web browser to view the "Coming Soon" page. Resize the window to see the responsive design in action.

---

This setup provides a clean and functional "Coming Soon" page with a countdown, signup form, and responsive layout.