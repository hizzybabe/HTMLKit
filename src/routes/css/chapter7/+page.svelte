<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
  let showCode = true;
</script>

<div class="container mx-auto px-4 py-8">
  <h1>Chapter 7: Preprocessors, CSS Frameworks, & Best Practices</h1>
  
  <div class="chapter-intro">
    <p>In this chapter, we'll explore CSS preprocessors, popular CSS frameworks, and best practices for writing efficient, maintainable CSS. You'll get an introduction to Sass/SCSS, learn about frameworks like Bootstrap and Tailwind CSS, and discover how to write better CSS code.</p>
    
    <div class="chapter-details">
      <p><strong>Duration:</strong> Approximately 3 hours</p>
      <p><strong>Goal:</strong> Gain familiarity with CSS preprocessors and frameworks, and learn best practices for creating maintainable, efficient styles.</p>
    </div>
  </div>

  <hr/>

  <h2>Theory</h2>

  <h3>7.1 Introduction to CSS Preprocessors (Sass/SCSS Basics)</h3>
  <p>CSS preprocessors like Sass extend CSS with powerful features that make your code more maintainable and easier to write.</p>

  <div class="concept-block">
    <h4>Variables in Sass</h4>
    <p>Store reusable values (e.g., colors, font sizes).</p>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>// Variables
$primary-color: #3498db;

body &#123;
    color: $primary-color;
&#125;</code></pre>
    </div>

    <h4>Nesting</h4>
    <p>Write CSS in a hierarchical structure.</p>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>// Nesting
.container &#123;
    .header &#123;
        color: #333;
    &#125;
&#125;</code></pre>
    </div>

    <h4>Mixins</h4>
    <p>Define reusable code blocks.</p>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>// Mixins
@mixin border-radius($radius) &#123;
    border-radius: $radius;
&#125;

.box &#123;
    @include border-radius(10px);
&#125;</code></pre>
    </div>

    <h4>Partials and Imports</h4>
    <p>Organize code by splitting it into multiple files and importing them.</p>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>// Importing partials
@import 'variables';
@import 'mixins';</code></pre>
    </div>
  </div>

  <h3>7.2 Overview of Popular CSS Frameworks</h3>
  <p>CSS frameworks provide pre-built components and utilities to speed up development.</p>

  <div class="concept-block">
    <h4>Bootstrap Example</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>&lt;div class="container"&gt;
    &lt;div class="row"&gt;
        &lt;div class="col-md-6"&gt;Half width&lt;/div&gt;
        &lt;div class="col-md-6"&gt;Half width&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <h4>Tailwind CSS Example</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>&lt;div class="flex flex-col items-center justify-center min-h-screen bg-blue-500"&gt;
    &lt;h1 class="text-4xl font-bold text-white"&gt;Hello, World!&lt;/h1&gt;
&lt;/div&gt;</code></pre>
    </div>
  </div>

  <h3>7.3 CSS Best Practices</h3>
  <div class="concept-block">
    <h4>BEM Naming Convention</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>.block &#123;&#125;
.block__element &#123;&#125;
.block--modifier &#123;&#125;</code></pre>
    </div>
  </div>

  <h2 class="workshop-title">Practice Workshop: Final Project - Personal Website Revamp</h2>
  <div class="workshop-container">
    <h3 class="task">Task: Revamp your personal website using advanced CSS techniques</h3>
    
    <h4>Step 1: Project Setup</h4>
    <ul>
      <li>Create a new branch in your project repository</li>
      <li>Set up Sass/SCSS if you're using a preprocessor</li>
      <li>Choose and integrate a CSS framework if desired</li>
    </ul>

    <h4>Step 2: Implementation</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>// Example SCSS structure
@import 'variables';
@import 'mixins';
@import 'layout';
@import 'components';

// Variables
$primary: #3498db;
$secondary: #2ecc71;

// Mixins
@mixin flex-center &#123;
    display: flex;
    align-items: center;
    justify-content: center;
&#125;</code></pre>
    </div>

    <h3>Deliverables</h3>
    <ul>
      <li>Complete website with responsive design</li>
      <li>Organized CSS/SCSS files following best practices</li>
      <li>Documentation of your implementation choices</li>
    </ul>
  </div>

  <ChapterNavigation 
    prevHref="/HTMLKit/css/chapter6" 
    nextHref="/HTMLKit/javascript/chapter1"
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