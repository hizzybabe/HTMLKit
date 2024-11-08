<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
  let showCode = true;
</script>

<div class="container mx-auto px-4 py-8">
  <h1>Chapter 7: Preprocessors & Best Practices</h1>
  
  <div class="chapter-intro">
    <p>In this final chapter, we'll introduce CSS preprocessors like Sass/SCSS and explore popular CSS frameworks such as Bootstrap and Tailwind CSS. These tools can enhance your styling workflow, improve maintainability, and speed up development.</p>
    
    <div class="chapter-details">
      <p><strong>Duration:</strong> Approximately 2-3 hours</p>
      <p><strong>Goal:</strong> Understand the basics of CSS preprocessors, learn about CSS frameworks, and apply best practices to create an efficient and maintainable final project.</p>
    </div>
  </div>

  <hr/>

  <h2>Theory</h2>

  <h3>7.1 Introduction to CSS Preprocessors (Sass/SCSS Basics)</h3>
  <div class="concept-block">
    <p>CSS preprocessors like Sass provide advanced features that aren't available in plain CSS, such as variables, nesting, and mixins.</p>

    <h4>Sass/SCSS Basics</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>$primary-color: #3498db;

body &lbrace;
    color: $primary-color;
&rbrace;</code></pre>
    </div>

    <h4>Nesting Example</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>.navbar &lbrace;
    background: $primary-color;

    a &lbrace;
        color: white;
        &:hover &lbrace;
            color: darken($primary-color, 10%);
        &rbrace;
    &rbrace;
&rbrace;</code></pre>
    </div>
  </div>

  <!-- Continue with other sections following same pattern -->

  <h2 class="workshop-title">Practice Workshop: Final Project - Personal Website Revamp</h2>
  <div class="workshop-container">
    <h3 class="task">Task: Create a polished, responsive, and accessible website</h3>
    
    <!-- Workshop content -->
  </div>

  <ChapterNavigation 
    prevHref="/HTMLKit/html/chapter6" 
    nextHref="/HTMLKit/html/chapter8"
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