<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
  let showCode = true;
</script>

<div class="container mx-auto px-4 py-8">
  <h1>Chapter 6: Advanced Selectors, Pseudo-Classes, & Pseudo-Elements</h1>
  
  <div class="chapter-intro">
    <p>In this chapter, you'll explore advanced CSS techniques to add interactivity and refine your styling. Advanced selectors allow for targeted styling, while pseudo-classes and pseudo-elements provide dynamic and decorative effects.</p>
    
    <div class="chapter-details">
      <p><strong>Duration:</strong> Approximately 2 hours</p>
      <p><strong>Goal:</strong> Learn to use advanced selectors, pseudo-classes, and pseudo-elements to create interactive and visually appealing designs.</p>
    </div>
  </div>

  <hr/>

  <h2>Theory</h2>

  <h3>6.1 Advanced CSS Selectors</h3>
  <div class="concept-block">
    <p>Advanced selectors allow for more specific targeting of elements, giving you greater control over your styling.</p>

    <h4>Attribute Selector</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>[type="text"] &lbrace;
    border: 1px solid #333;
&rbrace;</code></pre>
    </div>

    <h4>Nth-Child Selector</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>li:nth-child(odd) &lbrace;
    background-color: #f0f0f0;
&rbrace;</code></pre>
    </div>
  </div>

  <h3>6.2 Using Pseudo-Classes for Dynamic Styles</h3>
  <div class="concept-block">
    <p>Pseudo-classes apply styles based on the state or position of an element.</p>

    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>a:hover &lbrace;
    color: red;
&rbrace;

button:active &lbrace;
    background-color: #333;
&rbrace;</code></pre>
    </div>
  </div>

  <!-- Continue with other sections -->

  <h2 class="workshop-title">Practice Workshop: Enhancing Interactivity</h2>
  <div class="workshop-container">
    <h3 class="task">Task: Enhance the personal profile page with interactive elements</h3>
    
    <!-- Workshop content -->
  </div>

  <ChapterNavigation 
    prevHref="/HTMLKit/html/chapter5" 
    nextHref="/HTMLKit/html/chapter7"
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