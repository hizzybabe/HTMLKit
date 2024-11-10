---
title: Popup Modal
---

Here’s a "Popup Modal" using HTML, CSS, and JavaScript. This modal appears when a button is clicked, can be closed by clicking outside the modal or pressing the "Esc" key, and includes smooth animations.

### Step 1: HTML Structure

Create an HTML file (`index.html`) for the modal structure.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Popup Modal</title>
  <style>
    body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f5f5f5; }
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); display: none; justify-content: center; align-items: center; opacity: 0; transition: opacity 0.3s ease; }
    .modal-overlay.active { display: flex; opacity: 1; }
    .modal { background-color: white; padding: 20px; border-radius: 10px; width: 80%; max-width: 500px; text-align: center; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); transform: scale(0.8); transition: transform 0.3s ease; }
    .modal.active { transform: scale(1); }
    .modal h2 { margin-top: 0; }
    .modal button { margin-top: 20px; padding: 10px 20px; font-size: 16px; cursor: pointer; border: none; border-radius: 5px; background-color: #4CAF50; color: white; }
    .modal button:hover { background-color: #45a049; }
    .open-modal-button { padding: 10px 20px; font-size: 16px; cursor: pointer; border: none; border-radius: 5px; background-color: #4CAF50; color: white; }
    .open-modal-button:hover { background-color: #45a049; }
  </style>
</head>
<body>
  <button class="open-modal-button" onclick="openModal()">Open Modal</button>

  <div class="modal-overlay" id="modalOverlay">
    <div class="modal">
      <h2>Popup Modal</h2>
      <p>This is a simple popup modal example. You can close it by clicking outside, pressing "Esc," or using the close button below.</p>
      <button onclick="closeModal()">Close</button>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

In this HTML file:
- The `.open-modal-button` opens the modal when clicked.
- The `modal-overlay` contains the actual modal (`modal`) and covers the entire viewport to dim the background.
- The close button inside the modal and clicking outside the modal can both close it.

### Step 2: JavaScript Functionality

Create a JavaScript file (`script.js`) to handle opening and closing the modal, including support for the "Esc" key.

```javascript
const modalOverlay = document.getElementById("modalOverlay");

// Open the modal
function openModal() {
  modalOverlay.classList.add("active");
  document.querySelector(".modal").classList.add("active");
}

// Close the modal
function closeModal() {
  modalOverlay.classList.remove("active");
  document.querySelector(".modal").classList.remove("active");
}

// Close modal when clicking outside of it
modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});

// Close modal when pressing the "Esc" key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});
```

### Explanation of JavaScript Code

1. **Open and Close Modal**:
   - `openModal()` adds the `active` class to both `modalOverlay` and `modal`, making the overlay visible and scaling the modal to full size.
   - `closeModal()` removes the `active` class, hiding the modal and overlay with a smooth fade-out effect.

2. **Click Outside to Close**:
   - Adds an event listener on `modalOverlay` to check if the click target is the overlay itself (not the modal content). If so, `closeModal()` is triggered.

3. **"Esc" Key to Close**:
   - Adds a `keydown` event listener on the document to listen for the "Escape" key, which triggers `closeModal()`.

### Styling (CSS)

The CSS in `index.html`:
- `.modal-overlay` covers the viewport with a dark semi-transparent background.
- `.modal` is centered within the overlay and scales up smoothly with `transform: scale()` and opacity transitions.
- `.modal-overlay.active` and `.modal.active` add visibility and scaling to the modal.

### How to Use the Popup Modal

1. Open `index.html` in your browser.
2. Click "Open Modal" to display the popup modal.
3. Close the modal by:
   - Clicking the "Close" button inside the modal,
   - Clicking outside the modal area, or
   - Pressing the "Esc" key on your keyboard.

This setup provides a smooth user experience with multiple ways to open and close the modal, and uses simple animations for a polished look.