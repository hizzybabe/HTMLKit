---
title: Digital Business Card
---

Here’s a simple tutorial to create a modern, responsive digital business card with HTML and CSS. This card will include your profile picture, contact information, and social media links. The design will be clean and minimalist, with responsive styling to ensure it looks good on both desktop and mobile devices.

---

### 1. **Set Up Your Files**

You’ll need:
1. **index.html** — for the HTML structure of the business card.
2. **style.css** — for styling the card.

---

### 2. **HTML Code (`index.html`)**

Here’s the HTML structure for the digital business card.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Business Card</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="business-card">
        <img src="profile.jpg" alt="Profile Image" class="profile-image">
        
        <div class="card-content">
            <h1>John Doe</h1>
            <p>Web Developer | Designer</p>
            
            <div class="contact-info">
                <p><strong>Email:</strong> johndoe@example.com</p>
                <p><strong>Phone:</strong> +123 456 7890</p>
                <p><strong>Location:</strong> City, Country</p>
            </div>

            <div class="social-links">
                <a href="#" class="social-icon">LinkedIn</a>
                <a href="#" class="social-icon">GitHub</a>
                <a href="#" class="social-icon">Twitter</a>
            </div>
        </div>
    </div>
</body>
</html>
```

Replace `profile.jpg` with the path to your actual profile image, and update the contact information and social media links accordingly.

---

### 3. **CSS Code (`style.css`)**

Create a `style.css` file in the same directory as `index.html` and add the following CSS code for styling.

```css
/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f5f5f5;
    font-family: Arial, sans-serif;
}

.business-card {
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 350px;
    text-align: center;
    transition: transform 0.3s ease;
}

.business-card:hover {
    transform: translateY(-5px);
}

.profile-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card-content {
    padding: 1.5rem;
}

.card-content h1 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 0.5rem;
}

.card-content p {
    color: #777;
    font-size: 1rem;
    margin-bottom: 1rem;
}

.contact-info p {
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 0.3rem;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1.5rem;
}

.social-icon {
    text-decoration: none;
    color: #fff;
    background-color: #333;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    font-size: 0.9rem;
    transition: background-color 0.3s;
}

.social-icon:hover {
    background-color: #555;
}

/* Responsive Design */
@media (max-width: 400px) {
    .business-card {
        width: 90%;
    }
}
```

---

### 4. **Explanation of the Code**

- **HTML Structure**:
  - **Profile Image**: An image at the top of the card gives a personal touch.
  - **Card Content**: Includes the person’s name, title, and contact information.
  - **Social Links**: A row of buttons that link to social media profiles.

- **CSS Styling**:
  - **Card Layout and Hover Effect**: The `.business-card` has rounded corners, a subtle shadow, and a slight lift effect on hover.
  - **Typography**: Uses clean font sizes and colors for readability.
  - **Social Links Styling**: Buttons with a dark background color that change on hover for interactivity.
  - **Responsive Design**: When viewed on screens narrower than 400px, the card shrinks to fit the screen.

### 5. **Customization**

- **Change Colors and Fonts**: Modify the color values in CSS to match your style or brand.
- **Add Icons to Social Links**: Use icon libraries like Font Awesome to add social media icons inside the `.social-icon` links.
- **Adjust Layout for Different Screen Sizes**: Update the `@media` query to include larger breakpoints if desired.

### 6. **Preview Your Digital Business Card**

Open `index.html` in your web browser to view the business card. Test the responsiveness by resizing the browser window or viewing it on a mobile device.

---

This setup provides a professional and stylish digital business card that’s easy to adapt for different industries or personal brands.