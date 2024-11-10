<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
  import SolutionChecker from '$lib/components/SolutionChecker.svelte';
  let showCode = true;
</script>

<div class="container mx-auto px-4 py-8">
  <h1>Chapter 3: Layout & Display Properties</h1>
  
  <div class="chapter-intro">
    <p>In this chapter, we'll explore CSS layout properties that allow you to control the arrangement of elements on your page. By understanding display properties, positioning, and floats, you'll gain the skills to build complex layouts.</p>
    
    <div class="chapter-details">
      <p><strong>Duration:</strong> Approximately 2 hours</p>
      <p><strong>Goal:</strong> Learn to use display and positioning properties for layout control and apply these concepts to create a photo gallery.</p>
    </div>
  </div>

  <hr/>

  <h2>Theory</h2>

  <h3>3.1 Understanding Display Properties</h3>
  <p>CSS display properties define how an element should be displayed on the page. There are three common values you'll use often:</p>

  <div class="concept-block">
    <h4>Block</h4>
    <ul>
      <li>Elements with <code>display: block;</code> take up the full width of their container, stacking vertically.</li>
      <li>Examples: <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>.</li>
    </ul>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>.block-element &lbrace;
    display: block;
    width: 100%;
&rbrace;</code></pre>
    </div>
  </div>

  <div class="concept-block">
    <h4>Inline</h4>
    <ul>
      <li>Elements with <code>display: inline;</code> only take up as much space as their content.</li>
      <li>Examples: <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;img&gt;</code>.</li>
    </ul>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>.inline-element &lbrace;
    display: inline;
&rbrace;</code></pre>
    </div>
  </div>

  <div class="concept-block">
    <h4>Inline-block</h4>
    <ul>
      <li>Elements with <code>display: inline-block;</code> behave like inline elements but allow width/height adjustments.</li>
      <li>Useful for creating grid-like layouts.</li>
    </ul>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>.inline-block-element &lbrace;
    display: inline-block;
    width: 30%;
    margin: 5px;
&rbrace;</code></pre>
    </div>
  </div>

  <h3>3.2 Positioning Elements</h3>
  <p>CSS positioning allows you to control the exact placement of elements within their containers:</p>

  <div class="concept-block">
    <h4>Static</h4>
    <p>Default positioning, where elements are placed in the normal document flow.</p>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>.static-element &lbrace;
    position: static;
&rbrace;</code></pre>
    </div>
  </div>

  <div class="concept-block">
    <h4>Relative</h4>
    <p>Positions the element relative to its original position while remaining in the document flow.</p>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>.relative-element &lbrace;
    position: relative;
    top: 10px;
&rbrace;</code></pre>
    </div>
  </div>

  <div class="concept-block">
    <h4>Absolute</h4>
    <p>Positions the element relative to its closest positioned ancestor.</p>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>.absolute-element &lbrace;
    position: absolute;
    top: 0;
    left: 0;
&rbrace;</code></pre>
    </div>
  </div>

  <div class="concept-block">
    <h4>Fixed</h4>
    <p>Positions the element relative to the viewport, staying in place during scrolling.</p>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>.fixed-element &lbrace;
    position: fixed;
    bottom: 0;
&rbrace;</code></pre>
    </div>
  </div>

  <h3>3.3 Introduction to Float and Clear</h3>
  <p>The float property allows elements to "float" next to each other horizontally:</p>

  <div class="concept-block">
    <h4>Float</h4>
    <p>Moves an element to the left or right, allowing other elements to wrap around it.</p>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>.float-left &lbrace;
    float: left;
&rbrace;</code></pre>
    </div>
  </div>

  <div class="concept-block">
    <h4>Clear</h4>
    <p>Prevents elements from floating next to a floated element.</p>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>.clear-both &lbrace;
    clear: both;
&rbrace;</code></pre>
    </div>
  </div>

  <hr/>

  <h2 class="workshop-title">Practice Workshop: Building a Simple Gallery</h2>
  <div class="workshop-container">
    <h3 class="task">Task: Create a responsive photo gallery using CSS layout properties</h3>

    <h4>Step 1: Set Up Your Files</h4>
    <ul>
      <li>Create a new HTML file named <code>gallery.html</code></li>
      <li>Create a new CSS file named <code>gallery.css</code></li>
      <li>Link the CSS file in your HTML:
        <pre><code>&lt;link rel="stylesheet" href="gallery.css"&gt;</code></pre>
      </li>
    </ul>

    <h4>Step 2: HTML Structure</h4>
    <pre><code>&lt;div class="gallery"&gt;
    &lt;div class="gallery-item"&gt;
        &lt;img src="image1.jpg" alt="Gallery Image 1"&gt;
        &lt;div class="caption"&gt;Image 1&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="gallery-item"&gt;
        &lt;img src="image2.jpg" alt="Gallery Image 2"&gt;
        &lt;div class="caption"&gt;Image 2&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>

    <h4>Step 3: Basic Gallery Layout</h4>
    <pre><code>.gallery &lbrace;
    text-align: center;
&rbrace;

.gallery-item &lbrace;
    display: inline-block;
    width: 30%;
    margin: 5px;
    position: relative;
&rbrace;

.gallery-item img &lbrace;
    width: 100%;
    display: block;
&rbrace;</code></pre>

    <h4>Step 4: Caption Styling</h4>
    <pre><code>.caption &lbrace;
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 5px;
&rbrace;</code></pre>

    <h4>Step 5: Responsive Design</h4>
    <pre><code>@media (max-width: 600px) &lbrace;
    .gallery-item &lbrace;
        width: 100%;
        float: none;
    &rbrace;
&rbrace;</code></pre>

    <h3>Deliverables</h3>
    <ul>
      <li><strong>HTML File</strong>: Complete gallery.html with proper structure</li>
      <li><strong>CSS File</strong>: Styled gallery.css implementing all layout properties</li>
      <li><strong>Screenshots</strong>: Desktop and mobile views of your gallery</li>
    </ul>

    <SolutionChecker />
  </div>

  <ChapterNavigation 
    prevHref="/css/chapter2" 
    nextHref="/css/chapter4"
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