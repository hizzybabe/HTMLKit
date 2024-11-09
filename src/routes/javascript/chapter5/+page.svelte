<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
  let showCode = true;
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
        on:click={() => showCode = !showCode}
      >
        {showCode ? 'Show Code' : 'Show Preview'}
      </button>

      {#if showCode}
      <pre><code>let heading = document.getElementById("profile-name");
heading.textContent = "John Doe"; // Changes the text content

let profilePic = document.querySelector(".profile-pic");
profilePic.style.borderRadius = "50%"; // Adds a circular style to the image</code></pre>
      {/if}
    </div>
  </div>

  <!-- Continue with the rest of the content following the same pattern -->

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
</style>