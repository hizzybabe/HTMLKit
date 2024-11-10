---
title: Photo Gallery
---

Here's a simple tutorial for creating a photo gallery using HTML and CSS. This gallery will display images in a grid format and use basic CSS to style and align the images.

---

### 1. **Set Up Your Files**

You’ll need:
1. **index.html** — for the HTML structure.
2. **style.css** — for styling the gallery.

---

### 2. **HTML Code (`index.html`)**

Here’s the HTML code for setting up a photo gallery with a grid layout.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Photo Gallery</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>My Photo Gallery</h1>
        <p>A collection of my favorite photos.</p>
    </header>

    <section id="gallery">
        <div class="gallery-item">
            <img src="image1.jpg" alt="Image 1">
        </div>
        <div class="gallery-item">
            <img src="image2.jpg" alt="Image 2">
        </div>
        <div class="gallery-item">
            <img src="image3.jpg" alt="Image 3">
        </div>
        <div class="gallery-item">
            <img src="image4.jpg" alt="Image 4">
        </div>
        <div class="gallery-item">
            <img src="image5.jpg" alt="Image 5">
        </div>
        <div class="gallery-item">
            <img src="image6.jpg" alt="Image 6">
        </div>
        <!-- Add more images as needed -->
    </section>

    <footer>
        <p>&copy; 2024 My Photo Gallery. All rights reserved.</p>
    </footer>
</body>
</html>
```

Replace `image1.jpg`, `image2.jpg`, etc., with the file paths of your own images.

---

### 3. **CSS Code (`style.css`)**

Create a `style.css` file in the same directory as `index.html` and add the following CSS code to style the photo gallery.

```css
/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    text-align: center;
    padding: 2rem;
}

header {
    margin-bottom: 2rem;
}

header h1 {
    font-size: 2.5rem;
    color: #333;
}

header p {
    font-size: 1.2rem;
    color: #666;
}

#gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
    margin-top: 2rem;
}

.gallery-item {
    overflow: hidden;
    border-radius: 10px;
}

.gallery-item img {
    width: 100%;
    height: auto;
    transition: transform 0.3s ease;
}

.gallery-item img:hover {
    transform: scale(1.1);
}

footer {
    margin-top: 2rem;
    font-size: 0.9rem;
    color: #666;
}
```

---

### 4. **Explanation of the Code**

- **HTML Structure**:
  - **Header**: Contains the title and description of the gallery.
  - **Gallery Section**: The `#gallery` section contains a series of `div` elements, each with an `img` tag inside. Each `div` represents an image in the gallery.

- **CSS Styling**:
  - **Grid Layout**: The `display: grid` and `grid-template-columns` properties in `#gallery` create a responsive grid. `auto-fit` and `minmax` allow the gallery to adjust based on screen size.
  - **Image Hover Effect**: The `transform: scale(1.1)` property in `.gallery-item img:hover` adds a zoom-in effect when hovering over an image.
  - **Rounded Corners**: The `border-radius` property in `.gallery-item` gives each image a rounded corner style.

### 5. **Customization**

- **Change the Grid Gap**: Modify the `gap: 10px;` in `#gallery` to increase or decrease the spacing between images.
- **Adjust the Columns**: You can set `grid-template-columns` to a specific number (like `repeat(3, 1fr)`) if you want a fixed number of columns.

### 6. **Preview Your Photo Gallery**

Open `index.html` in a web browser to see your photo gallery. You can experiment with styles in `style.css` to get your desired look and feel.

---

This setup provides a simple, responsive photo gallery with a hover effect.