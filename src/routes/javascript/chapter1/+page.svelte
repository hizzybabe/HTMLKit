<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';

  let showCode = true;
  let showCode1 = true;
  let showCode2 = true;
</script>

<div class="container mx-auto px-4 py-8">
  <h1>Chapter 1: Introduction to JavaScript & Setting Up</h1>
  
  <h2>Theory</h2>
  
  <h3>What is JavaScript?</h3>
  <div>
    JavaScript is a versatile programming language primarily used for creating interactive and dynamic web content. 
    It's one of the core technologies of web development, alongside HTML and CSS.
  </div>

  <h3>Brief History of JavaScript</h3>
  <div>
    <ul>
      <li>Created by Brendan Eich in 1995 for Netscape Navigator</li>
      <li>Originally named Mocha, then LiveScript, finally JavaScript</li>
      <li>Standardized as ECMAScript in 1997</li>
      <li>Modern JavaScript (ES6+) introduced major improvements in 2015</li>
    </ul>
  </div>

  <h3>Setting Up Your Development Environment</h3>
  <div>To start writing JavaScript, you'll need:</div>
  <ul>
    <li>A text editor or IDE (Visual Studio Code recommended)</li>
    <li>A modern web browser (Chrome, Firefox, etc.)</li>
    <li>Browser Developer Tools (F12 in most browsers)</li>
  </ul>

  <hr/>

  <h2 class="workshop-title">Practice Workshop: Hello, Interactive World!</h2>
  <div class="workshop-container">
    <h3 class="task">Task: Create your first JavaScript programs</h3>
    
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <button 
        class="toggle-btn mb-2 px-2 py-1 text-sm text-white rounded"
        style="background-color: rgb(59 130 246) !important"
        on:click={() => showCode1 = !showCode1}
      >
        {showCode1 ? 'Show Preview' : 'Show Code'}
      </button>
      
      {#if showCode1}
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;Hello JavaScript&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;My First JavaScript Program&lt;/h1&gt;
    &lt;button onclick=&quot;sayHello()&quot;&gt;Click Me!&lt;/button&gt;

    &lt;script&gt;
        function sayHello() {
            alert(&quot;Hello, World!&quot;);
        }
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      {:else}
      <div class="preview-content">
        <h1>My First JavaScript Program</h1>
        <button onclick="alert('Hello, World!')">Click Me!</button>
      </div>
      {/if}
    </div>
  </div>

  <ChapterNavigation 
    prevHref="/HTMLKit/javascript" 
    nextHref="/HTMLKit/javascript/chapter2"
  />
</div>

<style>
  .workshop-container {
    margin-top: 2rem;
    padding: 1rem;
    background-color: #f8f9fa;
    border-radius: 8px;
  }

  .task {
    color: #2563eb;
    margin-bottom: 1rem;
  }

  .code-preview {
    margin: 1rem 0;
  }
  
  .preview-content {
    padding: 1rem;
    background: white;
    border-radius: 4px;
  }
</style>
