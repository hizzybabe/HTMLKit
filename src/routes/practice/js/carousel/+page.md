---
title: Image Carousel
---

Here’s a "Image Carousel" app using HTML, CSS, and JavaScript. This carousel features "Next" and "Previous" buttons to navigate between images, autoplay functionality with a pause/play toggle, and smooth transitions between images.

### Step 1: HTML Structure

Create an HTML file (`index.html`) to define the structure of the image carousel.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Image Carousel</title>
  <style>
    body { display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f5f5f5; font-family: Arial, sans-serif; }
    .carousel { position: relative; width: 80%; max-width: 600px; overflow: hidden; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); }
    .carousel img { width: 100%; display: none; transition: opacity 0.5s ease-in-out; }
    .carousel img.active { display: block; opacity: 1; }
    .buttons { position: absolute; top: 50%; width: 100%; display: flex; justify-content: space-between; transform: translateY(-50%); }
    .buttons button { background-color: rgba(0, 0, 0, 0.5); color: white; border: none; padding: 10px; cursor: pointer; font-size: 18px; border-radius: 5px; }
    .buttons button:hover { background-color: rgba(0, 0, 0, 0.7); }
    .controls { display: flex; justify-content: center; margin-top: 10px; }
    .controls button { margin: 0 5px; padding: 10px 20px; font-size: 16px; cursor: pointer; background-color: #4CAF50; color: white; border: none; border-radius: 5px; }
    .controls button:hover { background-color: #45a049; }
  </style>
</head>
<body>
  <div class="carousel">
    <img src="image1.jpg" alt="Image 1" class="active">
    <img src="image2.jpg" alt="Image 2">
    <img src="image3.jpg" alt="Image 3">
    <img src="image4.jpg" alt="Image 4">
    <div class="buttons">
      <button onclick="prevImage()">&#10094; Previous</button>
      <button onclick="nextImage()">Next &#10095;</button>
    </div>
  </div>
  <div class="controls">
    <button onclick="toggleAutoplay()">Pause</button>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

In this HTML file:
- The carousel contains images that can be navigated with "Previous" and "Next" buttons.
- The `active` class indicates the currently visible image.
- A "Pause" button in `controls` toggles autoplay.

> **Note**: Replace `image1.jpg`, `image2.jpg`, etc., with your own images, or add them to a folder in your project directory.

### Step 2: JavaScript Functionality

Create a JavaScript file (`script.js`) to handle image navigation, autoplay, and toggling play/pause functionality.

```javascript
let currentIndex = 0;
let autoplayInterval;
let isAutoplaying = true;

const images = document.querySelectorAll(".carousel img");
const playPauseButton = document.querySelector(".controls button");

function showImage(index) {
  images.forEach((img, i) => img.classList.toggle("active", i === index));
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function startAutoplay() {
  autoplayInterval = setInterval(nextImage, 3000);
  isAutoplaying = true;
  playPauseButton.innerText = "Pause";
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
  isAutoplaying = false;
  playPauseButton.innerText = "Play";
}

function toggleAutoplay() {
  if (isAutoplaying) {
    stopAutoplay();
  } else {
    startAutoplay();
  }
}

// Start autoplay on page load
startAutoplay();
```

### Explanation of JavaScript Code

1. **Image Navigation**:
   - `showImage(index)`: Sets the `active` class only on the image at `index` to display it.
   - `nextImage()`: Increments `currentIndex` and wraps around to show the next image.
   - `prevImage()`: Decrements `currentIndex` and wraps around to show the previous image.

2. **Autoplay Functionality**:
   - `startAutoplay()`: Starts an interval to change the image every 3 seconds, updates the button text to "Pause," and sets `isAutoplaying` to true.
   - `stopAutoplay()`: Stops the autoplay interval, updates the button text to "Play," and sets `isAutoplaying` to false.
   - `toggleAutoplay()`: Toggles between `startAutoplay()` and `stopAutoplay()` based on the current `isAutoplaying` state.

3. **Initialize Autoplay**:
   - `startAutoplay()` is called on page load to start the carousel automatically.

### Styling (CSS)

The CSS in `index.html`:
- Centers and sizes the carousel with a smooth transition between images.
- Styles the navigation and control buttons, including a semi-transparent overlay for the carousel buttons.

### How to Use the Image Carousel

1. Open `index.html` in your browser.
2. Use the "Next" and "Previous" buttons to manually navigate through the images.
3. The carousel will autoplay by default, transitioning between images every 3 seconds.
4. Click "Pause" to stop autoplay, and "Play" to resume it.