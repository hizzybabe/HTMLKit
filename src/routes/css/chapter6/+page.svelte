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
[type="text"] &#123;
    background-color: #f0f0f0;
&#125;</code></pre>
    </div>

    <h4>Descendant and Child Selectors</h4>
    <p>Target elements based on their relationship in the DOM.</p>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>/* Descendant selector */
.container p &#123;
    color: gray;
&#125;

/* Child selector */
.container > p &#123;
    font-weight: bold;
&#125;</code></pre>
    </div>
  </div>

  <h3>6.2 Using Pseudo-Classes for Dynamic Styles</h3>
  <p>Pseudo-classes create styles that respond to user interactions:</p>
  <ul>
    <li><strong>:hover</strong>: Applies styles when an element is hovered over</li>
    <li><strong>:active</strong>: Styles an element when it's actively clicked</li>
    <li><strong>:focus</strong>: Applies styles when an element is focused</li>
  </ul>

  <div class="concept-block">
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>/* Hover effect for links */
a:hover &#123;
    color: #3498db;
    text-decoration: underline;
&#125;

/* Active state for buttons */
button:active &#123;
    background-color: #2980b9;
    color: white;
&#125;

/* Focus effect for input fields */
input:focus &#123;
    border: 2px solid #3498db;
    outline: none;
&#125;</code></pre>
    </div>
  </div>

  <h3>6.3 Styling with Pseudo-Elements</h3>
  <p>Pseudo-elements create content that isn't in the HTML but can be styled with CSS. Common pseudo-elements are <code>::before</code> and <code>::after</code>.</p>

  <div class="concept-block">
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>/* Adding decorative lines */
h1::before &#123;
    content: "";
    display: block;
    width: 50px;
    height: 2px;
    background-color: #3498db;
    margin-bottom: 10px;
&#125;</code></pre>
    </div>
  </div>

  <h2 class="workshop-title">Practice Workshop: Enhancing Interactivity</h2>
  <div class="workshop-container">
    <h3 class="task">Task: Enhance your personal profile page with advanced selectors and interactive elements</h3>
    
    <div class="concept-block">
      <h4>1. Set Up Your Files</h4>
      <p>Open your existing <code>profile.html</code> and <code>profile.css</code> files.</p>

      <h4>2. Applying Advanced Selectors</h4>
      <p>Use attribute selectors and nth-child selectors to style specific elements:</p>
      <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
        <pre><code>/* Style only the text inputs */
input[type="text"] &#123;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    padding: 8px;
&#125;

/* Alternate background color for list items */
ul li:nth-child(odd) &#123;
    background-color: #f0f0f0;
&#125;</code></pre>
      </div>

      <h4>3. Adding Interactivity with Pseudo-Classes</h4>
      <p>Create hover effects and active states:</p>
      <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
        <pre><code>.cta-button:hover &#123;
    background-color: #3498db;
    color: white;
&#125;

.cta-button:active &#123;
    background-color: #2980b9;
&#125;</code></pre>
      </div>

      <h4>4. Styling with Pseudo-Elements</h4>
      <p>Add decorative elements using ::before and ::after:</p>
      <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
        <pre><code>/* Decorative border for headings */
h2::before &#123;
    content: " ";
    display: block;
    width: 40px;
    height: 3px;
    background-color: #3498db;
    margin-bottom: 8px;
&#125;

/* Add icon to button */
.cta-button::before &#123;
    content: "👉 ";
    color: #ff6347;
&#125;</code></pre>
      </div>

      <h4>5. Testing Requirements</h4>
      <ul>
        <li>Test all hover and active states</li>
        <li>Verify pseudo-elements display correctly</li>
        <li>Check responsive behavior</li>
      </ul>

      <h4>Deliverables</h4>
      <ul>
        <li>Updated profile.html and profile.css files</li>
        <li>Interactive screenshot or video showing the enhancements</li>
      </ul>
    </div>
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