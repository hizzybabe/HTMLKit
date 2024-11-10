---
title: Event Invitation Page
---

Creating an event invitation page with HTML and CSS is a great way to present details like the date, location, and RSVP form all in one place. This example will set up a one-page site with a wedding theme, but you can adjust the colors and typography to fit any event.

---

### 1. **Set Up Your Files**

You’ll need:
1. **index.html** — for the HTML content of the invitation page.
2. **style.css** — for styling the page.

---

### 2. **HTML Code (`index.html`)**

Here’s the HTML structure for the event invitation page.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wedding Invitation</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Event Header -->
    <header class="event-header">
        <h1>You're Invited to Our Wedding!</h1>
        <p>Join us as we celebrate our special day</p>
    </header>

    <!-- Event Details Section -->
    <section class="event-details">
        <h2>Event Details</h2>
        <p><strong>Date:</strong> Saturday, December 10, 2024</p>
        <p><strong>Time:</strong> 4:00 PM</p>
        <p><strong>Location:</strong> Sunflower Gardens, 1234 Flower Rd, City, State</p>
    </section>

    <!-- Image Gallery Section -->
    <section class="gallery">
        <h2>Gallery</h2>
        <div class="gallery-grid">
            <img src="image1.jpg" alt="Gallery Image 1">
            <img src="image2.jpg" alt="Gallery Image 2">
            <img src="image3.jpg" alt="Gallery Image 3">
            <img src="image4.jpg" alt="Gallery Image 4">
        </div>
    </section>

    <!-- RSVP Form Section -->
    <section class="rsvp-section">
        <h2>RSVP</h2>
        <form action="submit-rsvp.php" method="post" class="rsvp-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="attendance">Will you be attending?</label>
            <select id="attendance" name="attendance" required>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>

            <button type="submit">Submit RSVP</button>
        </form>
    </section>

    <!-- Footer Section -->
    <footer>
        <p>We can't wait to celebrate with you!</p>
        <p>&copy; 2024 Wedding Invitation</p>
    </footer>
</body>
</html>
```

Replace `image1.jpg`, `image2.jpg`, etc., with the paths to actual images you want to use in the gallery.

---

### 3. **CSS Code (`style.css`)**

Create a `style.css` file in the same directory as `index.html` and add the following CSS to style the invitation page.

```css
/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Georgia', serif;
    background-color: #fdf5e6;
    color: #333;
    line-height: 1.6;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
}

.event-header {
    text-align: center;
    padding: 2rem;
    background-color: #ffe4e1;
    width: 100%;
    max-width: 800px;
    border-radius: 10px;
    margin-bottom: 2rem;
}

.event-header h1 {
    font-size: 2.5rem;
    color: #b03060;
}

.event-header p {
    font-size: 1.2rem;
    color: #666;
}

.event-details, .rsvp-section, .gallery {
    background-color: #fff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
    width: 100%;
    max-width: 800px;
    text-align: center;
}

.event-details h2, .rsvp-section h2, .gallery h2 {
    font-size: 2rem;
    color: #b03060;
    margin-bottom: 1rem;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
}

.gallery-grid img {
    width: 100%;
    height: auto;
    border-radius: 5px;
}

.rsvp-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 400px;
    margin: auto;
}

.rsvp-form label {
    font-weight: bold;
    color: #555;
}

.rsvp-form input, .rsvp-form select, .rsvp-form button {
    padding: 0.8rem;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.rsvp-form button {
    background-color: #b03060;
    color: white;
    cursor: pointer;
    border: none;
    transition: background-color 0.3s;
}

.rsvp-form button:hover {
    background-color: #8b1c3b;
}

footer {
    text-align: center;
    font-size: 0.9rem;
    color: #666;
    padding: 1rem;
}
```

---

### 4. **Explanation of the Code**

- **HTML Structure**:
  - **Header**: Includes the event title and a subtitle.
  - **Event Details Section**: Displays the date, time, and location of the event.
  - **Gallery Section**: A simple grid of images representing the event or venue.
  - **RSVP Section**: Contains a form for guests to RSVP, including name, email, and attendance options.
  - **Footer**: A closing message and copyright notice.

- **CSS Styling**:
  - **Color Scheme**: Uses soft pinks, creams, and elegant colors to create a wedding-like theme.
  - **Box Shadows and Borders**: Applied to each section for depth and separation.
  - **Typography**: Uses serif fonts to convey elegance, and font sizes are adjusted for readability.
  - **Gallery Grid**: CSS grid is used to create a responsive image gallery layout.

### 5. **Customization**

- **Change Colors and Fonts**: Adjust colors in CSS to match the event’s theme, such as using brighter colors for a conference or softer tones for a baby shower.
- **Add More Fields to RSVP**: Add extra fields if needed (e.g., number of guests) by adding more input elements to the form in HTML.
- **Adjust Gallery Layout**: Change the number of columns in `.gallery-grid` to fit your images or layout preference.

### 6. **Preview Your Invitation Page**

Open `index.html` in your web browser to see the event invitation page. Adjust styles in `style.css` as desired to enhance the look and feel.

---

This setup provides a clean, welcoming invitation page with sections for all necessary details.