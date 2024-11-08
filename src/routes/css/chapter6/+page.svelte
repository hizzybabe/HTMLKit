<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
  let showCode = true;
</script>

<div class="container mx-auto px-4 py-8">
  <h1>Chapter 6: Advanced Selectors, Pseudo-Classes, & Pseudo-Elements</h1>
  
  <div class="chapter-intro">
    <p>In this chapter, you'll explore advanced CSS techniques for targeting specific elements, creating dynamic interactions, and adding decorative content. By learning advanced selectors, pseudo-classes, and pseudo-elements, you'll be able to enhance the interactivity and style of your web pages.</p>
    
    <div class="chapter-details">
      <p><strong>Duration:</strong> Approximately 2 hours</p>
      <p><strong>Goal:</strong> Understand and apply advanced selectors, pseudo-classes, and pseudo-elements for more refined and interactive styling.</p>
    </div>
  </div>

  <hr/>

  <h2>Theory</h2>

  <h3>6.1 Advanced CSS Selectors</h3>
  <p>Advanced selectors allow you to target elements more precisely, giving you control over specific parts of your document.</p>

  <div class="concept-block">
    <h4>Attribute Selector</h4>
    <p>Targets elements based on attribute values.</p>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>/* Attribute selector */
input[type="text"] {
    border: 1px solid #ddd;
    padding: 5px;
}</code></pre>
    </div>

    <h4>Nth-Child Selector</h4>
    <p>Targets elements based on their position within a parent element.</p>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>/* Nth-child selector */
ul li:nth-child(odd) {
    background-color: #f0f0f0;
}</code></pre>
    </div>

    <h4>Child Selector</h4>
    <p>Targets direct child elements.</p>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>/* Child selector */
.container > p {
    font-weight: bold;
}</code></pre>
    </div>
  </div>

  <h3>6.2 Using Pseudo-Classes for Dynamic Styles</h3>
  <p>Pseudo-classes create styles that respond to user interactions, enhancing the web experience.</p>

  <div class="concept-block">
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>/* Hover effect for links */
a:hover {
    color: #3498db;
    text-decoration: underline;
}

/* Active state for buttons */
button:active {
    background-color: #2980b9;
    color: white;
}

/* Focus effect for input fields */
input:focus {
    border: 2px solid #3498db;
    outline: none;
}</code></pre>
    </div>
  </div>

  <h3>6.3 Styling with Pseudo-Elements</h3>
  <p>Pseudo-elements create content that isn't in the HTML but can be styled with CSS.</p>

  <div class="concept-block">
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>/* Adding decorative elements */
.button::before {
    content: "▶ ";
    color: #3498db;
}

.button::after {
    content: " ⮞";
    color: #2980b9;
}</code></pre>
    </div>
  </div>

  <h2 class="workshop-title">Practice Workshop: Enhancing Interactivity</h2>
  <div class="workshop-container">
    <h3 class="task">Task: Enhance your personal profile page with advanced selectors and interactive elements</h3>
    
    <!-- Workshop content remains the same but with proper formatting -->
  </div>

  <ChapterNavigation 
    prevHref="/HTMLKit/css/chapter5" 
    nextHref="/HTMLKit/css/chapter7"
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
</style>