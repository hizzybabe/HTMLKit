<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
  let showCode = true;
</script>

<div class="container mx-auto px-4 py-8">
  <h1>Chapter 6: Advanced Selectors & Pseudo-Classes</h1>
  
  <div class="chapter-intro">
    <p>In this chapter, you'll explore advanced CSS selectors and pseudo-classes to create more sophisticated and interactive styles. These techniques allow for precise targeting of elements and dynamic state-based styling.</p>
    
    <div class="chapter-details">
      <p><strong>Duration:</strong> Approximately 2 hours</p>
      <p><strong>Goal:</strong> Master advanced selectors and pseudo-classes to create interactive, dynamic styles.</p>
    </div>
  </div>

  <hr/>

  <h2>Theory</h2>

  <h3>6.1 Advanced CSS Selectors</h3>
  <div class="concept-block">
    <h4>Attribute Selectors</h4>
    <p>Target elements based on their attributes and values:</p>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>[type="submit"] &lbrace;
    background-color: #007bff;
&rbrace;

[href^="https"] &lbrace;
    color: #0056b3;
&rbrace;</code></pre>
    </div>

    <h4>Combinators</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>/* Direct child selector */
.parent > .child &lbrace;
    margin: 1rem;
&rbrace;

/* Adjacent sibling selector */
h2 + p &lbrace;
    font-size: 1.1em;
&rbrace;</code></pre>
    </div>
  </div>

  <h3>6.2 Pseudo-Classes</h3>
  <div class="concept-block">
    <h4>Interactive States</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>.button &lbrace;
    background: #007bff;
    transition: all 0.3s ease;
&rbrace;

.button:hover &lbrace;
    background: #0056b3;
&rbrace;

.button:active &lbrace;
    transform: scale(0.98);
&rbrace;</code></pre>
    </div>
  </div>

  <h2 class="workshop-title">Practice Workshop: Enhancing Profile Interactivity</h2>
  <div class="workshop-container">
    <h3 class="task">Task: Add interactive elements to your profile page</h3>
    
    <h4>Requirements:</h4>
    <ul>
      <li>Create hover effects for navigation links</li>
      <li>Add focus states for form inputs</li>
      <li>Implement active states for buttons</li>
      <li>Use attribute selectors for specific targeting</li>
    </ul>
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