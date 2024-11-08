<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
  let showCode = true;
</script>

<div class="container mx-auto px-4 py-8">
  <h1>Chapter 4: Colors, Backgrounds, & Gradients</h1>
  
  <div class="chapter-intro">
    <p>In this chapter, we'll explore how to add visual appeal to your webpages using color, background images, and gradients. These styling elements help create dynamic and engaging designs.</p>
    
    <div class="chapter-details">
      <p><strong>Duration:</strong> Approximately 2 hours</p>
      <p><strong>Goal:</strong> Learn to apply colors, background images, and gradients to style a hero section.</p>
    </div>
  </div>

  <hr/>

  <h2>Theory</h2>

  <h3>4.1 Color Theory for the Web</h3>
  <p>Colors on the web are represented in different formats. Understanding these formats will help you choose and apply colors effectively.</p>

  <div class="concept-block">
    <h4>RGB Format</h4>
    <p>Colors are defined by Red, Green, and Blue values ranging from 0 to 255.</p>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>body &lbrace;
    color: rgb(255, 0, 0);  /* Pure red */
    background-color: rgb(240, 248, 255);  /* Light blue */
&rbrace;</code></pre>
    </div>
  </div>

  <div class="concept-block">
    <h4>HEX Format</h4>
    <p>Hexadecimal format uses a six-character code to represent RGB values.</p>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>.header &lbrace;
    color: #FF0000;  /* Pure red */
    background-color: #333333;  /* Dark gray */
&rbrace;</code></pre>
    </div>
  </div>

  <div class="concept-block">
    <h4>HSL Format</h4>
    <p>HSL (Hue, Saturation, Lightness) offers an intuitive way to pick colors.</p>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>.button &lbrace;
    background-color: hsl(0, 100%, 50%);  /* Pure red */
    color: hsl(0, 0%, 100%);  /* White */
&rbrace;</code></pre>
    </div>
  </div>

  <h3>4.2 Background Images and Repeat Properties</h3>
  <p>Background images can add depth to your designs. You can control how images are displayed and repeated with CSS.</p>

  <div class="concept-block">
    <h4>Basic Background Properties</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>.hero &lbrace;
    background-image: url('hero.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
&rbrace;</code></pre>
    </div>
  </div>

  <h3>4.3 Creating Gradients</h3>
  <p>Gradients are smooth transitions between colors, useful for adding depth and texture without images.</p>

  <div class="concept-block">
    <h4>Linear Gradients</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>.gradient-bg &lbrace;
    background: linear-gradient(to right, #ff7e5f, #feb47b);
&rbrace;</code></pre>
    </div>
  </div>

  <div class="concept-block">
    <h4>Radial Gradients</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>.radial-bg &lbrace;
    background: radial-gradient(circle, #ff7e5f, #feb47b);
&rbrace;</code></pre>
    </div>
  </div>

  <hr/>

  <h2 class="workshop-title">Practice Workshop: Designing a Hero Section</h2>
  <div class="workshop-container">
    <h3 class="task">Task: Create an engaging hero section with background images and gradients</h3>

    <h4>Step 1: Set Up Your Files</h4>
    <ul>
      <li>Create a new HTML file named <code>hero.html</code></li>
      <li>Create a CSS file named <code>hero.css</code></li>
      <li>Link the CSS file in your HTML:
        <pre><code>&lt;link rel="stylesheet" href="hero.css"&gt;</code></pre>
      </li>
    </ul>

    <h4>Step 2: HTML Structure</h4>
    <pre><code>&lt;div class="hero"&gt;
    &lt;h1&gt;Welcome to Our Website&lt;/h1&gt;
    &lt;p&gt;Discover amazing content and join our community.&lt;/p&gt;
    &lt;button class="cta"&gt;Get Started&lt;/button&gt;
&lt;/div&gt;</code></pre>

    <h4>Step 3: Basic Hero Styling</h4>
    <pre><code>.hero &lbrace;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.7)
    ),
    url('hero.jpg');
    background-size: cover;
    background-position: center;
    text-align: center;
&rbrace;</code></pre>

    <h4>Step 4: Call-to-Action Button</h4>
    <pre><code>.cta &lbrace;
    padding: 10px 20px;
    background-color: #ff7e5f;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
&rbrace;

.cta:hover &lbrace;
    background-color: #feb47b;
&rbrace;</code></pre>

    <h3>Deliverables</h3>
    <ul>
      <li><strong>HTML File</strong>: Complete hero.html with proper structure</li>
      <li><strong>CSS File</strong>: Styled hero.css implementing colors, backgrounds, and gradients</li>
      <li><strong>Screenshot</strong>: Final hero section with gradient overlay and styled button</li>
    </ul>
  </div>

  <ChapterNavigation 
    prevHref="/HTMLKit/css/chapter3" 
    nextHref="/HTMLKit/css/chapter5"
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