<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
  import SolutionChecker from '$lib/components/SolutionChecker.svelte';

  let showCode = true;
  let showCode1 = true;
  let showCode2 = true;
</script>

<div class="container mx-auto px-4 py-8">
  <h1>Chapter 7: Advanced Topics & Best Practices</h1>
  
  <h2>Theory</h2>
  
  <h3>SEO Meta Tags</h3>
  <div>Meta tags provide structured metadata about a web page and play a crucial role in search engine optimization (SEO). These tags, placed within the <code>&lt;head&gt;</code> section of your HTML document, help search engines understand the content of your page and improve your site’s visibility in search results.</div>

  <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
    <button 
      class="toggle-btn mb-2 px-2 py-1 text-sm text-white rounded"
      style="background-color: rgb(59 130 246) !important"
      on:click={() => showCode = !showCode}
    >
      {showCode ? 'Show Preview' : 'Show Code'}
    </button>
    
    {#if showCode}
    <pre><code>&lt;meta name="description" content="A brief description of your web page"&gt;
&lt;meta name="keywords" content="HTML, CSS, personal website, web development"&gt;
&lt;meta name="author" content="Your Name"&gt;</code></pre>
    {:else}
    <div class="preview-content">
      <meta name="description" content="A brief description of your web page">
      <meta name="keywords" content="HTML, CSS, personal website, web development">
      <meta name="author" content="Your Name">
    </div>
    {/if}
  </div>

  <h3>Understanding and Using HTML Entities</h3>
  <div>HTML entities are special characters or reserved symbols that can’t be directly typed into HTML because they are reserved for markup syntax. You can use these entities to represent characters that might otherwise confuse the parser.</div>

  <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
    <pre><code>&lt;p&gt;Use &amp;lt;code&amp;gt; for code snippets.&lt;/p&gt;</code></pre>
  </div>


  <h3>Best Practices for HTML Coding</h3>
  <div>To ensure your HTML is clean, efficient, and accessible, follow these best practices:</div>

    <div class="my-4">
      <ol>
        <li>Use Semantic HTML</li>
        <li>Validate Your HTML</li>
        <li>Keep Code Clean and Organized</li>
        <li>Test Across Browsers</li>
        <li>Optimize for Performance</li>
        <li>Ensure Accessibility</li>
      </ol>
    </div>


  <hr class="my-8"/>

  <h2 class="workshop-title">Practice Workshop: Personal Website Project</h2>
  
  <div class="workshop-container">
    <h3 class="task">Task: Create a multi-page personal website</h3>
    
    <div class="steps">
      <h4>Step 1: Plan Your Website</h4>
      <div>Before coding, sketch out a rough layout for each page. Decide on the navigation structure and what content you’ll include on each page.</div>

      <h4>Step 2: Create the Website Structure</h4>
      <div>Add the following HTML files to your project:</div>

      <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
        <button 
          class="toggle-btn mb-2 px-2 py-1 text-sm text-white rounded"
          style="background-color: rgb(59 130 246) !important"
          on:click={() => showCode2 = !showCode2}
        >
          {showCode2 ? 'Show Preview' : 'Show Code'}
        </button>
        
        {#if showCode2}
        <pre><code>index.html (Home Page)
about.html (About Page)
projects.html (Projects Page)
contact.html (Contact Page)</code></pre>
        {:else}
        <div class="preview-content">
          <ul>
            <li>index.html (Home Page)</li>
            <li>about.html (About Page)</li>
            <li>projects.html (Projects Page)</li>
            <li>contact.html (Contact Page)</li>
          </ul>
        </div>
        {/if}
      </div>

      <h4>Step 3: Build Each Page</h4>
      <div>Use the knowledge from previous chapters to create the content for each page.</div>

      <h3>Deliverables</h3>
      <ul>
        <li>A multi-page personal website with at least four pages</li>
        <li>Proper use of semantic HTML and best practices</li>
        <li>Ensure all pages are linked correctly</li>
      </ul>

      <SolutionChecker />
    </div>
  </div>

  <ChapterNavigation 
    prevHref="/html/chapter6" 
    nextHref="/css/chapter1" 
  />
</div>

<style>
  .code-preview {
    margin: 1rem 0;
  }
  
  .preview-content {
    padding: 1rem;
    background: white;
    border-radius: 4px;
  }
</style>
  