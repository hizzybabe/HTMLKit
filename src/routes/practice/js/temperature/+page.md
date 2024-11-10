---
title: Drum Kit
---

Here's a simple "Virtual Drum Kit" using HTML, CSS, and JavaScript. Each key on the keyboard triggers a different drum sound, and animations are added to make the buttons visually responsive.

### Step 1: HTML Structure

Create an HTML file (`index.html`) to define the structure of the drum kit.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Virtual Drum Kit</title>
  <style>
    body { font-family: Arial, sans-serif; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; min-height: 100vh; margin: 0; background-color: #f5f5f5; }
    .drum-kit { display: grid; grid-template-columns: repeat(3, 100px); gap: 20px; }
    .drum-pad { width: 100px; height: 100px; background-color: #333; color: white; display: flex; align-items: center; justify-content: center; font-size: 24px; border-radius: 10px; cursor: pointer; transition: transform 0.1s ease; }
    .drum-pad:active, .drum-pad.pressed { transform: scale(0.9); background-color: #4CAF50; }
  </style>
</head>
<body>
  <div class="drum-kit">
    <div class="drum-pad" data-key="A">A</div>
    <div class="drum-pad" data-key="S">S</div>
    <div class="drum-pad" data-key="D">D</div>
    <div class="drum-pad" data-key="F">F</div>
    <div class="drum-pad" data-key="G">G</div>
    <div class="drum-pad" data-key="H">H</div>
    <div class="drum-pad" data-key="J">J</div>
    <div class="drum-pad" data-key="K">K</div>
    <div class="drum-pad" data-key="L">L</div>
  </div>

  <audio id="soundA" src="sounds/kick.wav"></audio>
  <audio id="soundS" src="sounds/snare.wav"></audio>
  <audio id="soundD" src="sounds/hihat.wav"></audio>
  <audio id="soundF" src="sounds/tom1.wav"></audio>
  <audio id="soundG" src="sounds/tom2.wav"></audio>
  <audio id="soundH" src="sounds/tom3.wav"></audio>
  <audio id="soundJ" src="sounds/crash.wav"></audio>
  <audio id="soundK" src="sounds/ride.wav"></audio>
  <audio id="soundL" src="sounds/clap.wav"></audio>

  <script src="script.js"></script>
</body>
</html>
```

In this HTML file:
- Each `.drum-pad` element represents a drum pad with a specific key (`data-key`).
- `<audio>` elements are loaded with sound files for each key.

> **Note**: Ensure you have a `sounds` folder with the audio files (`kick.wav`, `snare.wav`, etc.) corresponding to each drum pad.

### Step 2: JavaScript Functionality

Create a JavaScript file (`script.js`) to handle keyboard events and play the corresponding drum sounds.

```javascript
// Add event listener for keyboard events
document.addEventListener("keydown", playSound);

function playSound(event) {
  const key = event.key.toUpperCase();
  const audio = document.getElementById(`sound${key}`);
  const pad = document.querySelector(`.drum-pad[data-key="${key}"]`);

  if (!audio) return; // Exit if no audio for the pressed key

  // Play the audio and reset time to allow for consecutive presses
  audio.currentTime = 0;
  audio.play();

  // Add the "pressed" class for animation
  pad.classList.add("pressed");

  // Remove the "pressed" class after animation duration
  setTimeout(() => pad.classList.remove("pressed"), 100);
}
```

### Explanation of JavaScript Code

1. **Event Listener**: An event listener for `keydown` triggers the `playSound()` function when a key is pressed.
2. **Selecting Audio and Pad**: `playSound()` matches the pressed key with the correct audio element (`<audio id="soundX">`) and the corresponding `.drum-pad` element.
3. **Playing the Sound**: If there’s an audio file for the pressed key, it plays the sound from the start (`audio.currentTime = 0`).
4. **Animating the Pad**: Adds the `pressed` class to the drum pad to trigger a visual effect, then removes it after a short delay.

### Styling (CSS)

The CSS in `index.html`:
- Lays out the drum kit in a 3x3 grid.
- Adds an animation to shrink the drum pad on key press with the `.pressed` class.

### Adding Sounds

Make sure to have a `sounds` folder in the same directory as your HTML and JavaScript files. Inside this folder, add sound files for each key (e.g., `kick.wav` for the "A" key, `snare.wav` for the "S" key, and so on). You can use any drum sounds you prefer as long as the file names match the audio `src` attributes.

### How to Use the Drum Kit

1. Open `index.html` in your browser.
2. Press keys (A, S, D, F, G, H, J, K, L) to trigger different drum sounds.
3. Watch the drum pads respond visually with each key press.