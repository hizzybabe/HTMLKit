<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
  import SolutionChecker from '$lib/components/SolutionChecker.svelte';
  let showCode1 = true;
  let showCode2 = true;
  let showCode3 = true;
</script>

<div class="container mx-auto px-4 py-8">
  <h1>Chapter 4: DOM Manipulation & Events</h1>
  
  <div class="chapter-intro">
    <p>In this chapter, you'll learn about the Document Object Model (DOM), which allows JavaScript to interact with and manipulate HTML elements. You'll explore methods for selecting elements, modifying their properties, and responding to user interactions through events.</p>
    
    <div class="chapter-details">
      <p><strong>Duration:</strong> Approximately 2 hours</p>
      <p><strong>Goal:</strong> Understand the DOM, learn how to select and manipulate elements, and respond to user interactions through events.</p>
    </div>
  </div>

  <hr/>

  <h2>Theory</h2>

  <h3>4.1 Understanding the Document Object Model (DOM)</h3>
  <p>The DOM is a structured representation of an HTML document, where each element is represented as a node that JavaScript can access and manipulate. This allows JavaScript to dynamically modify HTML content, styles, and structure.</p>

  <div class="concept-block">
    <ul>
      <li><strong>DOM Hierarchy</strong>: The document is structured as a tree, with the <code>document</code> object at the top, followed by child elements like <code>&lt;html&gt;</code>, <code>&lt;body&gt;</code>, and all other elements.</li>
      <li><strong>DOM Nodes</strong>: Elements, attributes, and text within HTML are represented as nodes in the DOM, allowing JavaScript to access and update them.</li>
    </ul>
  </div>

  <h3>4.2 Selecting and Manipulating DOM Elements</h3>
  <p>JavaScript provides various methods to select and modify DOM elements:</p>

  <div class="concept-block">
    <h4>Selecting Elements</h4>
    <ul>
      <li><code>document.getElementById("id")</code>: Selects an element by its ID.</li>
      <li><code>document.querySelector(".class")</code>: Selects the first matching element by class or tag.</li>
      <li><code>document.querySelectorAll(".class")</code>: Selects all matching elements by class or tag.</li>
    </ul>

    <h4>Modifying Elements</h4>
    <ul>
      <li><code>element.textContent</code>: Changes the text of an element.</li>
      <li><code>element.style.property</code>: Changes the CSS style of an element.</li>
      <li><code>element.setAttribute("attribute", "value")</code>: Sets an attribute on an element.</li>
      <li><code>element.classList.add("class")</code>: Adds a CSS class to an element.</li>
    </ul>

    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <button 
        class="toggle-btn mb-2 px-2 py-1 text-sm text-white rounded"
        style="background-color: rgb(59 130 246) !important"
        on:click={() => showCode1 = !showCode1}
      >
        {showCode1 ? 'Hide Code' : 'Show Code'}
      </button>

      {#if showCode1}
        <pre><code>{`let heading = document.getElementById("profile-name");
heading.textContent = "John Doe"; // Changes the text content

let profilePic = document.querySelector(".profile-pic");
profilePic.style.borderRadius = "50%"; // Adds a circular style to the image`}</code></pre>
      {/if}
    </div>
  </div>

  <h3>4.3 Handling Events</h3>
  <p>Events are actions or occurrences that happen in the browser, such as clicks, key presses, or mouse movements. JavaScript can listen for these events and execute code in response.</p>

  <div class="concept-block">
    <h4>Common Event Types</h4>
    <ul>
      <li><code>click</code>: Triggered when an element is clicked.</li>
      <li><code>mouseover</code>: Triggered when the mouse pointer is over an element.</li>
      <li><code>keydown</code>: Triggered when a key is pressed down.</li>
      <li><code>submit</code>: Triggered when a form is submitted.</li>
    </ul>

    <h4>Adding Event Listeners</h4>
    <ul>
      <li><code>element.addEventListener("event", function)</code>: Attaches an event handler to an element.</li>
    </ul>

    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <button 
        class="toggle-btn mb-2 px-2 py-1 text-sm text-white rounded"
        style="background-color: rgb(59 130 246) !important"
        on:click={() => showCode2 = !showCode2}
      >
        {showCode2 ? 'Hide Code' : 'Show Code'}
      </button>

      {#if showCode2}
        <pre><code>{`let button = document.querySelector(".submit-btn");
button.addEventListener("click", function() {
  alert("Button clicked!");
});`}</code></pre>
      {/if}
    </div>
  </div>

  <h2 class="workshop-title">Practice Workshop: Interactive Profile Page</h2>
  <div class="workshop-container">
    
    <p>In this workshop, you'll enhance a personal profile page by dynamically updating elements based on user input, adding event listeners for hover effects and button clicks, and creating a dynamic gallery that responds to user interactions.</p>

    <h3>Workshop Tasks</h3>
    
    <h4>1. Set Up Your Files</h4>
    <ul>
      <li>Open your existing profile.html file and create a new JavaScript file named profile.js.</li>
      <li>Link profile.js to profile.html by adding this line in the &lt;head&gt; section:</li>
    </ul>

    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>&lt;script src="profile.js" defer&gt;&lt;/script&gt;</code></pre>
    </div>

    <h4>2. HTML Structure for the Profile Page</h4>
    <p>Add elements that users can interact with, such as a text input for updating a profile name, a button, and an empty gallery section.</p>

    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <button 
        class="toggle-btn mb-2 px-2 py-1 text-sm text-white rounded"
        style="background-color: rgb(59 130 246) !important"
        on:click={() => showCode2 = !showCode2}
      >
        {showCode2 ? 'Hide Code' : 'Show Code'}
      </button>

      {#if showCode2}
        <pre><code>{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Profile Page</title>
</head>
<body>
    <h1 id="profile-name">Your Name</h1>
    <input type="text" id="nameInput" placeholder="Enter your name">
    <button id="update-btn">Update Name</button>
    <div id="gallery" class="gallery">
        <p>Click a button to add images to the gallery:</p>
        <button id="add-img-btn">Add Image</button>
    </div>
</body>
</html>`}</code></pre>
      {/if}
    </div>

    <h4>3. JavaScript Code for Interactive Features</h4>
    <p>In profile.js, add functions to handle user interactions and dynamically update the profile page.</p>

    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <button 
        class="toggle-btn mb-2 px-2 py-1 text-sm text-white rounded"
        style="background-color: rgb(59 130 246) !important"
        on:click={() => showCode3 = !showCode3}
      >
        {showCode3 ? 'Hide Code' : 'Show Code'}
      </button>

      {#if showCode3}
        <pre><code>{`// Function to update profile name
document.getElementById("update-btn").addEventListener("click", function() {
    const nameInput = document.getElementById("nameInput").value;
    const profileName = document.getElementById("profile-name");
    if (nameInput) {
        profileName.textContent = nameInput;
        document.getElementById("nameInput").value = ""; // Clear the input field
    } else {
        alert("Please enter a name!");
    }
});

// Function to add an image to the gallery
document.getElementById("add-img-btn").addEventListener("click", function() {
    const gallery = document.getElementById("gallery");
    const newImage = document.createElement("img");
    newImage.src = "https://via.placeholder.com/150";
    newImage.alt = "Gallery Image";
    newImage.classList.add("gallery-img");
    newImage.style.margin = "5px";
    newImage.style.width = "150px";
    gallery.appendChild(newImage);
});

// Hover effect for images
document.getElementById("gallery").addEventListener("mouseover", function(event) {
    if (event.target.tagName === "IMG") {
        event.target.style.opacity = "0.7";
    }
});

document.getElementById("gallery").addEventListener("mouseout", function(event) {
    if (event.target.tagName === "IMG") {
        event.target.style.opacity = "1";
    }
});`}</code></pre>
      {/if}
    </div>

    <h4>Explanation</h4>
    <ul>
      <li><strong>Update Name</strong>: The update-btn button gets the user's input, updates the profile name heading, and clears the input field.</li>
      <li><strong>Add Image to Gallery</strong>: The add-img-btn button creates a new image element and appends it to the gallery. Each image is styled to have a margin and a fixed width.</li>
      <li><strong>Hover Effect</strong>: mouseover and mouseout events change the opacity of images when the mouse hovers over or leaves them.</li>
    </ul>

    <h4>Testing the Interactive Profile Page</h4>
    <ol>
      <li>Open profile.html in your browser.</li>
      <li>Test entering a new name and clicking "Update Name" to see the profile name change.</li>
      <li>Click "Add Image" to add images to the gallery.</li>
      <li>Hover over each image to see the opacity change.</li>
    </ol>

    <SolutionChecker />
  </div>

  <ChapterNavigation 
    prevHref="/javascript/chapter3" 
    nextHref="/javascript/chapter5"
  />
</div>

<style>
  .concept-block {
    margin-bottom: 2rem;
  }
  
  .chapter-intro {
    background-color: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
    margin-bottom: 2rem;
  }

  .chapter-details {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #dee2e6;
  }

  .code-preview {
    margin: 1rem 0;
  }

  .workshop-container {
    /*  margin-top: 3rem; */
    padding: 2rem;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .tips {
    margin-top: 2rem;
    padding: 1rem;
    background-color: #f8f9fa;
    border-left: 4px solid #0d6efd;
    border-radius: 4px;
  }
</style>