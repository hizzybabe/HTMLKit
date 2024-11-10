---
title: Random Quote Generator
---

Here’s a simple "Random Quote Generator" using HTML, CSS, and JavaScript. This app will display a random quote each time you click a button. Additionally, it includes a "Tweet" button to share the quote on Twitter. 

You can either use an array of predefined quotes or fetch quotes from a public API.

### Step 1: HTML Structure

Create an HTML file (`index.html`) for the structure of the quote generator.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Random Quote Generator</title>
  <style>
    body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f5f5f5; }
    .quote-container { text-align: center; max-width: 400px; padding: 20px; border-radius: 10px; background-color: #333; color: #fff; }
    #quote { font-size: 20px; margin: 20px 0; }
    #author { font-size: 16px; margin-bottom: 20px; color: #ddd; }
    button { padding: 10px 20px; margin: 5px; font-size: 16px; cursor: pointer; border: none; border-radius: 5px; }
    #new-quote { background-color: #4CAF50; color: white; }
    #tweet-quote { background-color: #1DA1F2; color: white; }
    button:hover { opacity: 0.9; }
  </style>
</head>
<body>
  <div class="quote-container">
    <div id="quote">"Click the button to get a quote!"</div>
    <div id="author">- Author</div>
    <button id="new-quote" onclick="getQuote()">New Quote</button>
    <button id="tweet-quote" onclick="tweetQuote()">Tweet</button>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

In this HTML file:
- We have a container (`quote-container`) to display the quote text and author.
- A "New Quote" button triggers the `getQuote` function to display a new random quote.
- A "Tweet" button triggers the `tweetQuote` function to share the quote on Twitter.

### Step 2: JavaScript Functionality

Create a JavaScript file (`script.js`) to handle quote generation and sharing functionality.

```javascript
const quotes = [
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { text: "Life is what happens when you’re busy making other plans.", author: "John Lennon" },
  { text: "Get busy living or get busy dying.", author: "Stephen King" },
  { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
  { text: "Many of life’s failures are people who did not realize how close they were to success when they gave up.", author: "Thomas A. Edison" },
];

function getQuote() {
  // Choose a random quote from the array
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  // Display the quote and author
  document.getElementById("quote").innerText = `"${randomQuote.text}"`;
  document.getElementById("author").innerText = `- ${randomQuote.author}`;
}

function tweetQuote() {
  const quoteText = document.getElementById("quote").innerText;
  const authorText = document.getElementById("author").innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText)} ${encodeURIComponent(authorText)}`;
  window.open(twitterUrl, "_blank");
}

// Initialize with a quote
getQuote();
```

### Explanation of JavaScript Code

1. **Quotes Array**: The `quotes` array contains several objects, each with a `text` and `author` property.
2. **Getting a Random Quote**: The `getQuote()` function selects a random quote from the array and updates the HTML with the quote text and author.
3. **Tweeting a Quote**: The `tweetQuote()` function constructs a Twitter "intent" URL with the current quote and author. This URL opens in a new tab, allowing the user to share the quote on Twitter.

### Optional: Fetch Quotes from a Public API

If you’d like to fetch quotes from a public API instead, replace the `getQuote()` function with this version:

```javascript
async function getQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    document.getElementById("quote").innerText = `"${data.content}"`;
    document.getElementById("author").innerText = `- ${data.author}`;
  } catch (error) {
    document.getElementById("quote").innerText = "Oops! Could not fetch a new quote.";
    document.getElementById("author").innerText = "";
  }
}
```

In this version:
- The app fetches a random quote from the [Quotable API](https://api.quotable.io/).
- If there’s an error, it displays an error message instead of a new quote.

### Styling (CSS)

The `<style>` section in `index.html` contains simple styling for:
- The quote and author text.
- The buttons for generating a new quote and sharing on Twitter.

### How to Use the Random Quote Generator

1. Open `index.html` in your browser.
2. Click the "New Quote" button to display a random quote.
3. Click the "Tweet" button to share the quote on Twitter.