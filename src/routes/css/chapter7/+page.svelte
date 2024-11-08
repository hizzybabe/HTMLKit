<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
  let showCode = true;
</script>

<div class="container mx-auto px-4 py-8">
  <h1>Chapter 7: Preprocessors & Best Practices</h1>
  
  <div class="chapter-intro">
    <p>In this final chapter, we'll explore CSS preprocessors like Sass/SCSS and learn essential best practices for writing maintainable CSS. We'll also look at popular CSS frameworks and how they can enhance your development workflow.</p>
    
    <div class="chapter-details">
      <p><strong>Duration:</strong> Approximately 2-3 hours</p>
      <p><strong>Goal:</strong> Master CSS preprocessors and best practices for efficient, maintainable stylesheets.</p>
    </div>
  </div>

  <hr/>

  <h2>Theory</h2>

  <h3>7.1 Introduction to CSS Preprocessors</h3>
  <div class="concept-block">
    <p>CSS preprocessors extend CSS with additional features:</p>
    
    <h4>Variables in Sass</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>$primary-color: #3498db;
$spacing-unit: 1rem;

.button &lbrace;
    background: $primary-color;
    padding: $spacing-unit;
&rbrace;</code></pre>
    </div>

    <h4>Nesting in Sass</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>.navbar &lbrace;
    background: #fff;
    
    ul &lbrace;
        margin: 0;
        
        li &lbrace;
            display: inline-block;
        &rbrace;
    &rbrace;
&rbrace;</code></pre>
    </div>
  </div>

  <h3>7.2 CSS Best Practices</h3>
  <div class="concept-block">
    <ul>
      <li><strong>Organization</strong>: Group related styles together</li>
      <li><strong>Naming Conventions</strong>: Use consistent, descriptive class names</li>
      <li><strong>Modularity</strong>: Break styles into reusable components</li>
      <li><strong>Performance</strong>: Minimize specificity and avoid deep nesting</li>
    </ul>
  </div>

  <h2 class="workshop-title">Practice Workshop: Final Project</h2>
  <div class="workshop-container">
    <h3 class="task">Task: Create a complete website using preprocessors and best practices</h3>
    
    <!-- Workshop content here -->
  </div>

  <ChapterNavigation 
    prevHref="/HTMLKit/css/chapter6" 
    nextHref="/HTMLKit/css/chapter8"
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