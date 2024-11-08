<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
  let showCode = true;
</script>

<div class="container mx-auto px-4 py-8">
  <h1>Chapter 4: Colors, Backgrounds, & Gradients</h1>
  
  <div class="chapter-intro">
    <p>In this chapter, we'll explore how to use colors, backgrounds, and gradients to create visually engaging designs. You'll learn about color theory for the web, background images and their properties, and how to create gradients.</p>
    
    <div class="chapter-details">
      <p><strong>Duration:</strong> Approximately 2 hours</p>
      <p><strong>Goal:</strong> Understand color formats, background properties, and gradient techniques to enhance web design.</p>
    </div>
  </div>

  <hr/>

  <h2>Theory</h2>

  <h3>4.1 Color Theory for the Web</h3>
  <p>Colors on the web are defined using various color models. The most common formats are <strong>RGB</strong>, <strong>HEX</strong>, and <strong>HSL</strong>.</p>

  <div class="concept-block">
    <h4>RGB (Red, Green, Blue)</h4>
    <ul>
      <li>Defines color by specifying values for red, green, and blue.</li>
      <li>Example: <code>rgb(255, 0, 0)</code> for red.</li>
    </ul>

    <h4>HEX</h4>
    <ul>
      <li>Hexadecimal representation of RGB values.</li>
      <li>Common format for web colors.</li>
      <li>Example: <code>#FF0000</code> for red.</li>
    </ul>

    <h4>HSL (Hue, Saturation, Lightness)</h4>
    <ul>
      <li>Represents color with hue (color shade), saturation (intensity), and lightness (brightness).</li>
      <li>Example: <code>hsl(0, 100%, 50%)</code> for red.</li>
    </ul>

    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>body {
    background-color: rgb(240, 240, 240);
    color: #333333;
}

h1 {
    color: hsl(210, 50%, 40%);
}</code></pre>
    </div>
  </div>

  <!-- Continue with other sections following same pattern -->

  <h2 class="workshop-title">Practice Workshop: Designing a Hero Section</h2>
  <div class="workshop-container">
    <h3 class="task">Task: Create a hero section with gradient background and overlay</h3>
    
    <!-- Workshop content -->
  </div>

  <ChapterNavigation 
    prevHref="/HTMLKit/html/chapter3" 
    nextHref="/HTMLKit/html/chapter5"
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