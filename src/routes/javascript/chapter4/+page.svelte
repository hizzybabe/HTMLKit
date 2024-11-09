<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
  let showCode1 = true;
  let showCode2 = true;
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
        <pre><code>let heading = document.getElementById("profile-name");
heading.textContent = "John Doe"; // Changes the text content

let profilePic = document.querySelector(".profile-pic");
profilePic.style.borderRadius = "50%"; // Adds a circular style to the image</code></pre>
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
        <pre><code>let button = document.querySelector(".submit-btn");
button.addEventListener("click", function() {
  alert("Button clicked!");
});</code></pre>
      {/if}
    </div>
  </div>

  <div class="workshop-container">
    <h2>Workshop: Interactive Form Validation</h2>
    
    <div class="chapter-intro">
      <p>In this workshop, you'll create a registration form with real-time validation using DOM manipulation and event handling.</p>
    </div>

    <h3>Requirements</h3>
    <ul>
      <li>Create a registration form with the following fields:</li>
      <ul>
        <li>Username (must be at least 4 characters)</li>
        <li>Email (must be a valid email format)</li>
        <li>Password (must be at least 8 characters with numbers and letters)</li>
        <li>Confirm Password (must match password)</li>
      </ul>
      <li>Add real-time validation as users type</li>
      <li>Show success/error messages below each field</li>
      <li>Enable/disable submit button based on form validity</li>
    </ul>

    <h3>Step-by-Step Guide</h3>
    <ol>
      <li>Create the HTML structure:
        <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
          <pre><code>&lt;form id="registrationForm"&gt;
  &lt;div class="form-group"&gt;
    &lt;label for="username"&gt;Username:&lt;/label&gt;
    &lt;input type="text" id="username" required&gt;
    &lt;div class="error-message"&gt;&lt;/div&gt;
  &lt;/div&gt;
  // Add other form fields similarly
  &lt;button type="submit" disabled&gt;Register&lt;/button&gt;
&lt;/form&gt;</code></pre>
        </div>
      </li>
      <li>Add event listeners for input validation</li>
      <li>Implement validation functions</li>
      <li>Update UI based on validation results</li>
    </ol>

    <h3>Deliverables</h3>
    <ul>
      <li>Complete HTML file with form structure</li>
      <li>JavaScript file with validation logic</li>
      <li>Working form with real-time validation</li>
      <li>CSS styling for success/error states</li>
      <li>Documentation of your validation rules</li>
    </ul>

    <div class="tips">
      <h4>Tips</h4>
      <ul>
        <li>Use <code>input</code> event for real-time validation</li>
        <li>Create reusable validation functions</li>
        <li>Use CSS classes to show validation states</li>
        <li>Consider using regular expressions for email validation</li>
      </ul>
    </div>
  </div>

  <ChapterNavigation 
    prevHref="/HTMLKit/javascript/chapter3" 
    nextHref="/HTMLKit/javascript/chapter5"
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
    margin-top: 3rem;
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