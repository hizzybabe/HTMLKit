<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
  let showCode = true;
</script>

<div class="container mx-auto px-4 py-8">
  <h1>Chapter 5: Responsive Web Design (RWD) & Media Queries</h1>
  
  <div class="chapter-intro">
    <p>In this chapter, you'll learn the principles of responsive web design (RWD) and how to use media queries to create layouts that adapt to different screen sizes. You'll also be introduced to flexible units like %, em, rem, vw, and vh, which allow your designs to adjust seamlessly across various devices.</p>
    
    <div class="chapter-details">
      <p><strong>Duration:</strong> Approximately 2 hours</p>
      <p><strong>Goal:</strong> Learn to create responsive layouts using media queries and flexible units.</p>
    </div>
  </div>

  <hr/>

  <h2>Theory</h2>

  <h3>5.1 Principles of Responsive Web Design</h3>
  <div class="concept-block">
    <p>Responsive Web Design (RWD) ensures that web content looks good and functions well across a range of devices and screen sizes. The core principles of RWD include:</p>
    
    <ul>
      <li><strong>Fluid Layouts</strong>: Use flexible units like percentages instead of fixed pixel values to make layouts adapt to screen width.</li>
      <li><strong>Flexible Images</strong>: Use CSS to resize images and avoid overflowing their containers.</li>
      <li><strong>Media Queries</strong>: CSS rules that apply different styles based on the screen size, device type, or orientation.</li>
    </ul>
  </div>

  <h3>5.2 Using Media Queries for Different Screen Sizes</h3>
  <div class="concept-block">
    <p>Media queries allow you to apply CSS rules based on certain conditions, such as screen width or height. Common breakpoints used in RWD include:</p>
    
    <ul>
      <li><strong>Large screens</strong>: Desktops and larger screens (e.g., <code>min-width: 1200px</code>).</li>
      <li><strong>Medium screens</strong>: Tablets and smaller laptops (e.g., <code>min-width: 768px</code>).</li>
      <li><strong>Small screens</strong>: Mobile devices (e.g., <code>max-width: 767px</code>).</li>
    </ul>

    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>@media (max-width: 767px) &lbrace;
    /* CSS rules for small screens */
&rbrace;</code></pre>
    </div>

    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>/* Default layout */
.gallery-item &lbrace;
    width: 30%;
&rbrace;

/* Small screens */
@media (max-width: 767px) &lbrace;
    .gallery-item &lbrace;
        width: 100%;
    &rbrace;
&rbrace;</code></pre>
    </div>
  </div>

  <!-- Continue with other sections following same pattern -->

  <h2 class="workshop-title">Practice Workshop: Making the Gallery Responsive</h2>
  <div class="workshop-container">
    <!-- Workshop content -->
  </div>

  <ChapterNavigation 
    prevHref="/HTMLKit/html/chapter4" 
    nextHref="/HTMLKit/html/chapter6"
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