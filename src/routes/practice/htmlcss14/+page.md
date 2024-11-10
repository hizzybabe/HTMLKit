---
title: Simple Portfolio Grid
---

Here’s a simple tutorial to create a portfolio grid layout using HTML and CSS. This gallery-style portfolio will showcase project thumbnails in a responsive grid layout. We’ll use CSS grid for the layout and add hover effects like opacity changes and image zoom.

---

### 1. **Set Up Your Files**

You’ll need:
1. **index.html** — for the HTML structure of the portfolio grid.
2. **style.css** — for styling the grid and hover effects.

---

### 2. **HTML Code (`index.html`)**

Here’s the HTML structure for the portfolio grid layout.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Grid</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="portfolio-header">
        <h1>My Portfolio</h1>
        <p>Explore some of my recent projects.</p>
    </header>

    <section class="portfolio-grid">
        <div class="portfolio-item">
            <img src="project1.jpg" alt="Project 1">
            <div class="overlay">Project 1</div>
        </div>
        <div class="portfolio-item">
            <img src="project2.jpg" alt="Project 2">
            <div class="overlay">Project 2</div>
        </div>
        <div class="portfolio-item">
            <img src="project3.jpg" alt="Project 3">
            <div class="overlay">Project 3</div>
        </div>
        <div class="portfolio-item">
            <img src="project4.jpg" alt="Project 4">
            <div class="overlay">Project 4</div>
        </div>
        <div class="portfolio-item">
            <img src="project5.jpg" alt="Project 5">
            <div class="overlay">Project 5</div>
        </div>
        <div class="portfolio-item">
            <img src="project6.jpg" alt="Project 6">
            <div class="overlay">Project 6</div>
        </div>
        <!-- Add more items as needed -->
    </section>
</body>
</html>
```

Replace `project1.jpg`, `project2.jpg`, etc., with the actual paths to your project images.

---

### 3. **CSS Code (`style.css`)**

Create a `style.css` file in the same directory as `index.html` and add the following CSS code for styling the portfolio grid.

```css
/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
}

.portfolio-header {
    text-align: center;
    margin-bottom: 2rem;
}

.portfolio-header h1 {
    font-size: 2.5rem;
    color: #333;
}

.portfolio-header p {
    color: #666;
    font-size: 1.2rem;
}

.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    width: 100%;
    max-width: 1000px;
    padding: 1rem;
}

.portfolio-item {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    cursor: pointer;
}

.portfolio-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.portfolio-item .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    font-size: 1.2rem;
    opacity: 0;
    transition: opacity 0.3s ease;
}

/* Hover Effects */
.portfolio-item:hover img {
    transform: scale(1.1);
    opacity: 0.8;
}

.portfolio-item:hover .overlay {
    opacity: 1;
}

/* Responsive Design */
@media (max-width: 500px) {
    .portfolio-header h1 {
        font-size: 2rem;
    }

    .portfolio-header p {
        font-size: 1rem;
    }
}
```

---

### 4. **Explanation of the Code**

- **HTML Structure**:
  - **Portfolio Header**: Includes the title and subtitle for the portfolio.
  - **Portfolio Grid Section**: Contains individual `portfolio-item` elements, each with an image and an overlay showing the project name.

- **CSS Styling**:
  - **Grid Layout**: The `.portfolio-grid` uses CSS grid to create a flexible, responsive layout. `auto-fit` and `minmax(200px, 1fr)` ensure the grid adjusts based on screen size.
  - **Hover Effects**:
    - **Image Zoom and Opacity**: On hover, images slightly zoom (`scale(1.1)`) and reduce opacity (`opacity: 0.8`).
    - **Overlay Effect**: The overlay is initially hidden (opacity `0`), and fades in on hover to display the project title.
  - **Responsive Design**: Adjusts the header font size on small screens.

### 5. **Customization**

- **Change Colors**: Modify the colors in CSS to match your theme or brand.
- **Adjust Grid Gap and Column Sizes**: Change the `gap` and `grid-template-columns` in `.portfolio-grid` to control spacing and layout.
- **Add Links**: Wrap each `portfolio-item` in an anchor (`<a>`) tag if you want each item to link to a separate project page.

### 6. **Preview Your Portfolio Grid**

Open `index.html` in your web browser to view the portfolio grid in action. Resize the browser window to see the responsive behavior.

---

This setup creates a clean, modern portfolio grid with hover effects and responsive design.