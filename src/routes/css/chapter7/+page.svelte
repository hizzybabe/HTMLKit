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
  <p>CSS frameworks offer pre-built styles and components to speed up development.
    They provide a consistent, modern design and make it easier to create responsive layouts.</p>

    <p>- **Bootstrap**:<br/> - Known for its grid system and extensive component library.<br/> - Provides ready-to-use components like navbars, buttons, modals, and forms.<br/> - Syntax example:<br/> ```html<br/> &lt;div class="container"&gt;<br/> &lt;div class="row"&gt;<br/> &lt;div class="col-md-6"&gt;Half width&lt;/div&gt;<br/> &lt;div class="col-md-6"&gt;Half width&lt;/div&gt;<br/> &lt;/div&gt;<br/> &lt;/div&gt;<br/> ```</p>

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

    <p>- **Tailwind CSS**:<br/> - A utility-first framework that provides low-level classes for layout, color, spacing, and typography.<br/> - Allows for custom styles by combining multiple utility classes.<br/> - Syntax example:<br/> ```html<br/> &lt;div class="flex flex-col items-center justify-center min-h-screen bg-blue-500"&gt;<br/> &lt;h1 class="text-4xl font-bold text-white"&gt;Hello, World!&lt;/h1&gt;<br/> &lt;/div&gt;<br/> ```</p>

    <h4>Tailwind CSS Example</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>&lt;div class="flex flex-col items-center justify-center min-h-screen bg-blue-500"&gt;
    &lt;h1 class="text-4xl font-bold text-white"&gt;Hello, World!&lt;/h1&gt;
&lt;/div&gt;</code></pre>
    </div>
  </div>

  <p>Both frameworks offer customization options and are widely used in modern web development to create responsive, visually appealing websites quickly.</p>

  <h3>7.3 CSS Best Practices</h3>
  <div class="concept-block">
    <h4>BEM Naming Convention</h4>

    <p>- **Use Consistent Naming Conventions**: Naming conventions like BEM (Block, Element, Modifier) make it easier to understand relationships between elements.<br/> - Example: `.button--primary`, `.card__title`, `.navbar__link`</p>

    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>.block &#123;&#125;
.block__element &#123;&#125;
.block--modifier &#123;&#125;</code></pre>
    </div>
  </div>

  <p>- **Organize CSS Using Comments and Sections**: Separate sections of your CSS for layout, typography, colors, and components, and use comments to label each section.</p>
<p>- **Avoid Deep Nesting**: Too much nesting makes CSS harder to read and maintain. Keep nesting to two or three levels.</p>
<p>- **Optimize CSS for Performance**:<br/> - Minify CSS files for faster loading times.<br/> - Use classes over IDs for styling.<br/> - Limit the use of universal selectors (`*`) and deeply nested selectors.</p>
<p>- **Leverage Variables and Mixins**: Reuse common values with variables, and create mixins for repetitive code.</p>
<p>---</p>

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