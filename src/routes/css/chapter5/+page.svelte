<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
  import SolutionChecker from '$lib/components/SolutionChecker.svelte';
  let showCode = true;
</script>

<div class="container mx-auto px-4 py-8">
  <h1>Chapter 5: Responsive Web Design & Media Queries</h1>
  
  <div class="chapter-intro">
    <p>In this chapter, you'll learn the principles of responsive web design (RWD) and how to use media queries to create layouts that adapt to different screen sizes. You'll also be introduced to flexible units like `%`, `em`, `rem`, `vw`, and `vh`, which allow your designs to adjust seamlessly across various devices. By the end of this chapter, you'll be able to make a photo gallery responsive.</p>
    
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

  <h3>5.2 Using Media Queries for Different Screen Sizes</h3>
  <p>Media queries allow you to apply CSS rules based on certain conditions, such as screen width or height. Common breakpoints used in RWD include:</p>

  <div class="concept-block">
    <ul>
      <li><strong>Large screens</strong>: Desktops and larger screens (e.g., `min-width: 1200px`)</li>
      <li><strong>Medium screens</strong>: Tablets and smaller laptops (e.g., `min-width: 768px`)</li>
      <li><strong>Small screens</strong>: Mobile devices (e.g., `max-width: 767px`)</li>
    </ul>
  </div>

  <h3>5.3 Introduction to Flexible Units</h3>
  <p>Flexible units help create responsive designs by adjusting elements based on screen size or user settings.</p>

  <div class="concept-block">
    <h4>Viewport Units</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>.hero &#123;
    width: 50vw;    /* 50% of viewport width */
    height: 50vh;   /* 50% of viewport height */
    padding: 2vh 2vw; /* Responsive padding */
&#125;</code></pre>
    </div>
  </div>

  <h2 class="workshop-title">Practice Workshop: Making the Gallery Responsive</h2>
  <div class="workshop-container">
    <h3 class="task">Task: Update your photo gallery to be responsive across all devices</h3>
    
    <h4>Step 1: Update Gallery Layout</h4>
    <p>1. Set Up Your Files:<br /> - Open your existing `gallery.html` and `gallery.css` files from Chapter 3.</p>
    <p>2. Applying Flexible Units:<br /> - Update the CSS to use flexible units for font sizes, padding, and margins.<br /> - Replace fixed values with relative units like `%`, `em`, `rem`, `vw`, and `vh` where appropriate.<br /></p>
    <p>3. Adding Media Queries for Different Screen Sizes:<br /> - Use media queries to adjust the gallery layout for smaller screens.<br /> - For mobile devices, set the `.gallery-item` width to 100% so images stack vertically.<br /></p>
    <p>4. Adjusting Font Sizes and Spacing:<br /> - Use flexible units for text and spacing to make the design adapt better on smaller screens.<br /> - Set base font sizes in `rem` and use `em` for spacing.<br /></p>
    <p>5. Testing the Responsive Design:<br /> - Open `gallery.html` in a browser and resize the window to test how the layout responds to different screen sizes.<br /> - Ensure that images and text scale smoothly across breakpoints.</p>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>.gallery &#123;
    display: flex;
    flex-wrap: wrap;
    gap: 2%;
&#125;

.gallery-item &#123;
    width: 30%;
    margin: 1vw;
&#125;

.gallery-item img &#123;
    width: 100%;
    height: auto;
&#125;

/* Default layout for larger screens */
.gallery-item &#123;
    width: 30%;
&#125;

/* Medium screens (tablets) */
@media (max-width: 1024px) &#123;
    .gallery-item &#123;
        width: 45%;
    &#125;
&#125;

/* Small screens (mobiles) */
@media (max-width: 767px) &#123;
    .gallery-item &#123;
        width: 100%;
    &#125;
&#125;

.gallery-item p &#123;
    font-size: 1rem;
    padding: 0.5em;
&#125;</code></pre>
    </div>

    <h3>Deliverables</h3>
    <ul>
      <li><strong>Updated Files</strong>: Modified gallery.html and gallery.css with responsive styles</li>
      <li><strong>Screenshots</strong>: Gallery layout at different screen sizes (desktop, tablet, mobile)</li>
    </ul>

    <SolutionChecker />
  </div>

  <ChapterNavigation 
    prevHref="/css/chapter4" 
    nextHref="/css/chapter6" 
  />
</div>