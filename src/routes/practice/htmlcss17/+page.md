---
title: User Profile Page
---

Here’s a simple tutorial to create a user profile page with HTML and CSS. This page will feature a profile picture, bio, contact information, and social media links. The design will use a card-like layout with rounded images, borders, and flexbox to align the content.

---

### 1. **Set Up Your Files**

You’ll need:
1. **index.html** — for the HTML structure of the profile page.
2. **style.css** — for styling the profile layout.

---

### 2. **HTML Code (`index.html`)**

Here’s the HTML structure for the user profile page.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Profile</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="profile-card">
        <div class="profile-header">
            <img src="profile.jpg" alt="Profile Picture" class="profile-picture">
            <h1 class="username">John Doe</h1>
            <p class="bio">Web Developer & Designer passionate about creating beautiful and functional web experiences.</p>
        </div>

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
</body>
</html>
```

Replace `profile.jpg` with the actual path to the user’s profile image, and update the contact and social media information.

---

### 3. **CSS Code (`style.css`)**

Create a `style.css` file in the same directory as `index.html` and add the following CSS code to style the profile page.

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
    background-color: #f4f4f9;
    font-family: Arial, sans-serif;
}

.profile-card {
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    max-width: 400px;
    text-align: center;
}

.profile-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.5rem;
}

.profile-picture {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 3px solid #4CAF50;
    object-fit: cover;
    margin-bottom: 1rem;
}

.username {
    font-size: 1.8rem;
    color: #333;
}

.bio {
    color: #777;
    font-size: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
}

.contact-info {
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 1.5rem;
}

.contact-info p {
    margin-bottom: 0.5rem;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
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
```

---

### 4. **Explanation of the Code**

- **HTML Structure**:
  - **Profile Card Container**: The `.profile-card` div wraps all the content, including the header, contact info, and social links.
  - **Profile Header**: Contains the profile picture, name, and bio, and is centered using flexbox.
  - **Contact Info**: Displays the email, phone, and location details.
  - **Social Links**: Links to social media profiles with styled buttons.

- **CSS Styling**:
  - **Card Layout**: The `.profile-card` has rounded corners, a subtle shadow, and padding for a card-like effect.
  - **Rounded Profile Image**: The `.profile-picture` has a circular border with padding for a polished look.
  - **Social Links Styling**: Each social link has a button-style appearance with hover effects.
  - **Flexbox for Alignment**: Flexbox is used to center elements and add spacing in both the profile header and social links sections.

### 5. **Customization**

- **Change Colors and Fonts**: Modify the color values in CSS to fit the user’s or brand’s style.
- **Adjust Widths and Heights**: Change the `max-width` of `.profile-card` or the `width` of `.profile-picture` to make the card wider or narrower.
- **Add Additional Fields**: Add elements such as "Skills" or "Experience" by creating additional sections in HTML and styling them in CSS.

### 6. **Preview Your Profile Page**

Open `index.html` in your web browser to view the user profile page. Adjust styles in `style.css` to further customize the layout and design.

---

This layout creates a clean, professional profile page with a modern look and responsive design. Let me know if you'd like to add icons, animations, or additional customization options!