<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';

  let showCode = true;
  let showCode1 = true;
  let showCode2 = true;
</script>

<div class="container mx-auto px-4 py-8">
  <h1>Chapter 3: Working with Arrays & Objects</h1>
  
  <div class="chapter-intro">
    <p>In this chapter, we'll explore two essential JavaScript data structures: arrays and objects. Arrays allow you to store lists of values, while objects organize data with key-value pairs. We'll also introduce JSON, a data format widely used for transmitting data in web applications.</p>
    
    <div class="chapter-details">
      <p><strong>Duration:</strong> Approximately 2 hours</p>
      <p><strong>Goal:</strong> Understand and manipulate arrays and objects in JavaScript, and apply these skills in a To-Do List app.</p>
    </div>
  </div>

  <hr/>

  <h2>Theory</h2>

  <h3>3.1 Understanding and Manipulating Arrays</h3>
  <p>Arrays are used to store collections of data in JavaScript. Each item in an array has an index, starting from 0, and you can use various methods to manipulate array contents.</p>

  <div class="concept-block">
    <h4>Array Syntax and Methods</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <button 
        class="toggle-btn mb-2 px-2 py-1 text-sm text-white rounded"
        style="background-color: rgb(59 130 246) !important"
        on:click={() => showCode = !showCode}
      >
        {showCode ? 'Show Preview' : 'Show Code'}
      </button>
      
      {#if showCode}
      <pre><code>let colors = ["red", "green", "blue"];

// Common Array Methods
let tasks = ["Do laundry", "Write code"];
tasks.push("Read a book");     // Adds to end
tasks.splice(1, 1);           // Removes item at index 1
tasks.forEach(task => console.log(task));</code></pre>
      {:else}
      <div class="preview-content">
        <p>Output in console:</p>
        <p>Do laundry</p>
        <p>Read a book</p>
      </div>
      {/if}
    </div>
  </div>

  <h3>3.2 Working with Objects</h3>
  <p>Objects store data as key-value pairs, allowing you to organize related data under a single entity.</p>

  <div class="concept-block">
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <button 
        class="toggle-btn mb-2 px-2 py-1 text-sm text-white rounded"
        style="background-color: rgb(59 130 246) !important"
        on:click={() => showCode1 = !showCode1}
      >
        {showCode1 ? 'Show Preview' : 'Show Code'}
      </button>
      
      {#if showCode1}
      <pre><code>let task = {
  text: "Do laundry",
  done: false
};

// Accessing properties
console.log(task.text);      // Using dot notation
console.log(task["done"]);   // Using bracket notation

// Modifying properties
task.done = true;</code></pre>
      {:else}
      <div class="preview-content">
        <p>Console output:</p>
        <p>"Do laundry"</p>
        <p>false</p>
      </div>
      {/if}
    </div>
  </div>

  <!-- Continue with workshop section -->
  <h2 class="workshop-title">Practice Workshop: "To-Do List App"</h2>
  <div class="workshop-container">
    <h3 class="task">Task: Create a basic To-Do List application using arrays and objects</h3>
    
    <!-- Rest of the workshop content -->
    <!-- ... -->
  </div>

  <ChapterNavigation 
    prevHref="/HTMLKit/javascript/chapter2" 
    nextHref="/HTMLKit/javascript/chapter4"
  />
</div>

<style>
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

  .concept-block {
    margin-bottom: 2rem;
  }

  .workshop-container {
    padding: 1rem;
    background-color: #f8f9fa;
  }

  .code-preview {
    margin: 1rem 0;
  }
  
  .preview-content {
    padding: 1rem;
    background: white;
    border-radius: 4px;
  }
</style>
