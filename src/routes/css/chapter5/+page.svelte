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
    <p>Responsive web design ensures that your website looks great on all devices. The three main principles are:</p>
    
    <ul>
      <li><strong>Fluid Grids</strong>: Use relative units like percentages to create flexible layouts.</li>
      <li><strong>Flexible Images</strong>: Adjust image sizes to fit within their containers.</li>
      <li><strong>Media Queries</strong>: Apply CSS rules based on device characteristics.</li>
    </ul>
  </div>

  <h3>5.2 Using Media Queries for Different Screen Sizes</h3>
  <div class="concept-block">
    <p>Media queries allow you to apply different styles based on screen characteristics:</p>

    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>@media (max-width: 768px) &lbrace;
    .gallery-item &lbrace;
        width: 48%;
    &rbrace;
&rbrace;

@media (max-width: 480px) &lbrace;
    .gallery-item &lbrace;
        width: 100%;
    &rbrace;
&rbrace;</code></pre>
    </div>
  </div>

  <h3>5.3 Introduction to Flexible Units</h3>
  <div class="concept-block">
    <p>Flexible units create scalable designs:</p>
    <ul>
      <li><strong>%</strong>: Relative to parent element's size</li>
      <li><strong>em</strong>: Relative to parent's font size</li>
      <li><strong>rem</strong>: Relative to root element's font size</li>
      <li><strong>vw/vh</strong>: Relative to viewport dimensions</li>
    </ul>

    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>.container &lbrace;
    width: 80%;
    font-size: 1.2rem;
    padding: 2em;
    height: 50vh;
&rbrace;</code></pre>
    </div>
  </div>

  <h2 class="workshop-title">Practice Workshop: Making the Gallery Responsive</h2>
  <div class="workshop-container">
    <h3 class="task">Task: Update the photo gallery to be responsive</h3>
    
    <!-- Workshop content here -->
  </div>

  <ChapterNavigation 
    prevHref="/HTMLKit/css/chapter4" 
    nextHref="/HTMLKit/css/chapter6"
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