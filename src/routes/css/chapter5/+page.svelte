<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
  let showCode = true;
</script>

<div class="container mx-auto px-4 py-8">
  <h1>Chapter 5: Responsive Web Design & Media Queries</h1>
  
  <div class="chapter-intro">
    <p>In this chapter, you'll learn the principles of responsive web design (RWD) and how to use media queries to create layouts that adapt to different screen sizes. You'll also be introduced to flexible units that allow your designs to adjust seamlessly across various devices.</p>
    
    <div class="chapter-details">
      <p><strong>Duration:</strong> Approximately 2 hours</p>
      <p><strong>Goal:</strong> Learn to create responsive layouts using media queries and flexible units.</p>
    </div>
  </div>

  <hr/>

  <h2>Theory</h2>

  <h3>5.1 Principles of Responsive Web Design</h3>
  <p>Responsive Web Design (RWD) ensures that web content looks good and functions well across a range of devices and screen sizes. The core principles include:</p>

  <div class="concept-block">
    <ul>
      <li><strong>Fluid Layouts</strong>: Use flexible units like percentages instead of fixed pixel values</li>
      <li><strong>Flexible Images</strong>: Use CSS to resize images and avoid overflowing containers</li>
      <li><strong>Media Queries</strong>: CSS rules that apply different styles based on screen size</li>
    </ul>
  </div>

  <h3>5.2 Using Media Queries</h3>
  <p>Media queries allow you to apply CSS rules based on certain conditions, such as screen width or height.</p>

  <div class="concept-block">
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>/* Default layout */
.gallery-item &#123;
    width: 30%;
&#125;

/* Small screens */
@media (max-width: 767px) &#123;
    .gallery-item &#123;
        width: 100%;
    &#125;
&#125;</code></pre>
    </div>
  </div>

  <h3>5.3 Introduction to Flexible Units</h3>
  <p>Flexible units help create responsive designs by adjusting elements based on screen size or user settings.</p>

  <div class="concept-block">
    <h4>Percentage (%)</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>.container &#123;
    width: 80%;  /* Relative to parent */
&#125;</code></pre>
    </div>

    <h4>em and rem Units</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>.text &#123;
    font-size: 1.2em;   /* Relative to parent font size */
    margin: 1.5rem;     /* Relative to root font size */
&#125;</code></pre>
    </div>

    <h4>Viewport Units</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>.hero &#123;
    height: 50vh;    /* 50% of viewport height */
    width: 100vw;    /* 100% of viewport width */
&#125;</code></pre>
    </div>
  </div>

  <h2 class="workshop-title">Practice Workshop: Making the Gallery Responsive</h2>
  <div class="workshop-container">
    <h3 class="task">Task: Update your photo gallery to be responsive across all devices</h3>
    
    <h4>Step 1: Update Gallery Layout</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>.gallery &#123;
    display: flex;
    flex-wrap: wrap;
    gap: 2%;
&#125;

.gallery-item &#123;
    width: 30%;
    margin-bottom: 2rem;
&#125;

@media (max-width: 768px) &#123;
    .gallery-item &#123;
        width: 48%;
    &#125;
&#125;

@media (max-width: 480px) &#123;
    .gallery-item &#123;
        width: 100%;
    &#125;
&#125;</code></pre>
    </div>

    <h3>Deliverables</h3>
    <ul>
      <li><strong>Updated Files</strong>: Modified gallery.html and gallery.css with responsive styles</li>
      <li><strong>Screenshots</strong>: Gallery layout at different screen sizes (desktop, tablet, mobile)</li>
    </ul>
  </div>

  <ChapterNavigation 
    prevHref="/HTMLKit/css/chapter4" 
    nextHref="/HTMLKit/css/chapter6" 
  />
</div>