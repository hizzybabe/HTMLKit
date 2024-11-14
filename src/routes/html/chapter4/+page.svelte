<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
  import SolutionChecker from '$lib/components/SolutionChecker.svelte';

  let showCode1 = true;
  let showCode2 = true;
  let showCode3 = true;
</script>

<div class="container mx-auto px-4 py-8">
  <h1>Chapter 4: Images, Lists, and Tables</h1>
  
  <h2>Theory</h2>
  
  <h3>Adding Images</h3>
  <div>The <code>&lt;img&gt;</code> tag is used to embed images in an HTML document. This tag is self-closing, meaning it does not require a separate closing tag. The two essential attributes are:</div>
  <ul>
    <li><code>src</code>: Specifies the image file location</li>
    <li><code>alt</code>: Provides alternative text for accessibility</li>
  </ul>

    <pre><code>&lt;img src="product-image.jpg" alt="A sleek modern laptop"&gt;</code></pre>

  <h3>Working with Lists</h3>
  <div>HTML offers three types of lists to organize content effectively:</div>

  <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
    <button 
      class="toggle-btn mb-2 px-2 py-1 text-sm text-white rounded"
      style="background-color: rgb(59 130 246) !important"
      on:click={() => showCode1 = !showCode1}
    >
      {showCode1 ? 'Show Preview' : 'Show Code'}
    </button>
    
    {#if showCode1}
    <pre><code>&lt;!-- Unordered List --&gt;
&lt;ul&gt;
  &lt;li&gt;First item&lt;/li&gt;
  &lt;li&gt;Second item&lt;/li&gt;
&lt;/ul&gt;

&lt;!-- Ordered List --&gt;
&lt;ol&gt;
  &lt;li&gt;First step&lt;/li&gt;
  &lt;li&gt;Second step&lt;/li&gt;
&lt;/ol&gt;

&lt;!-- Definition List --&gt;
&lt;dl&gt;
  &lt;dt&gt;HTML&lt;/dt&gt;
  &lt;dd&gt;HyperText Markup Language&lt;/dd&gt;
&lt;/dl&gt;</code></pre>
    {:else}
    <div class="preview-content">
      <h4>Unordered List:</h4>
      <ul>
        <li>First item</li>
        <li>Second item</li>
      </ul>

      <h4>Ordered List:</h4>
      <ol>
        <li>First step</li>
        <li>Second step</li>
      </ol>

      <h4>Definition List:</h4>
      <dl>
        <dt>HTML</dt>
        <dd>HyperText Markup Language</dd>
      </dl>
    </div>
    {/if}
  </div>

  <h3>Creating Tables</h3>
  <div>Tables help organize data into rows and columns. Key elements include:</div>
  <ul>
    <li><code>&lt;table&gt;</code>: Container for the table</li>
    <li><code>&lt;tr&gt;</code>: Table row</li>
    <li><code>&lt;th&gt;</code>: Table header</li>
    <li><code>&lt;td&gt;</code>: Table data cell</li>
  </ul>

  <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
    <button 
      class="toggle-btn mb-2 px-2 py-1 text-sm text-white rounded"
      style="background-color: rgb(59 130 246) !important"
      on:click={() => showCode2 = !showCode2}
    >
      {showCode2 ? 'Show Preview' : 'Show Code'}
    </button>
    
    {#if showCode2}
    <pre><code>&lt;table border="1"&gt;
  &lt;tr&gt;
    &lt;th&gt;Header 1&lt;/th&gt;
    &lt;th&gt;Header 2&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Data 1&lt;/td&gt;
    &lt;td&gt;Data 2&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</code></pre>
    {:else}
<!-- Replace the table structure -->
<table border="1" class="w-full">
  <tbody>
    <tr>
      <th class="p-2">Header 1</th>
      <th class="p-2">Header 2</th>
    </tr>
    <tr>
      <td class="p-2">Data 1</td>
      <td class="p-2">Data 2</td>
    </tr>
  </tbody>
</table>

    {/if}
  </div>

  <hr class="my-8"/>

  <h2 class="workshop-title">Practice Workshop: Product Showcase Page</h2>
  
  <div class="workshop-container">
    <h3 class="task">Task: Create a product showcase page using images, lists, and tables</h3>
    
    <div class="steps">
      <h4>Step 1: Set Up Your File</h4>
      <div>Create a new file named <code>product.html</code></div>

      <h4>Step 2: Add Basic HTML Structure</h4>
      <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
        <button 
          class="toggle-btn mb-2 px-2 py-1 text-sm text-white rounded"
          style="background-color: rgb(59 130 246) !important"
          on:click={() => showCode3 = !showCode3}
        >
          {showCode3 ? 'Show Preview' : 'Show Code'}
        </button>
        
        {#if showCode3}
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Product Showcase&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Amazing Product&lt;/h1&gt;
    
    &lt;!-- Product Image --&gt;
    &lt;img src="product.jpg" alt="Our Amazing Product"&gt;
    
    &lt;!-- Features List --&gt;
    &lt;h2&gt;Key Features&lt;/h2&gt;
    &lt;ul&gt;
        &lt;li&gt;Feature 1&lt;/li&gt;
        &lt;li&gt;Feature 2&lt;/li&gt;
        &lt;li&gt;Feature 3&lt;/li&gt;
    &lt;/ul&gt;
    
    &lt;!-- Comparison Table --&gt;
    &lt;h2&gt;Comparison&lt;/h2&gt;
    &lt;table border="1"&gt;
        &lt;tr&gt;
            &lt;th&gt;Feature&lt;/th&gt;
            &lt;th&gt;Basic&lt;/th&gt;
            &lt;th&gt;Premium&lt;/th&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;Feature 1&lt;/td&gt;
            &lt;td&gt;✓&lt;/td&gt;
            &lt;td&gt;✓&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/table&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
        {:else}
        <div class="preview-content">
          <h1>Amazing Product</h1>
          <img src="https://via.placeholder.com/300x200" alt="Our Amazing Product">
          <h2>Key Features</h2>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <h2>Comparison</h2>
          <table border="1" class="w-full">
            <tbody>
              <tr>
                <th class="p-2">Feature</th>
                <th class="p-2">Basic</th>
                <th class="p-2">Premium</th>
              </tr>
              <tr>
                <td class="p-2">Feature 1</td>
                <td class="p-2">✓</td>
                <td class="p-2">✓</td>
              </tr>
            </tbody>
          </table>
          
        </div>
        {/if}
      </div>

      <h3>Deliverables</h3>
      <ul>
        <li>Complete HTML file with proper structure</li>
        <li>At least one image</li>
        <li>Both ordered and unordered lists</li>
        <li>A comparison table</li>
      </ul>

      <SolutionChecker />
    </div>
  </div>

  <ChapterNavigation 
    prevHref="/html/chapter3" 
    nextHref="/html/chapter5" 
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

  table {
    border-collapse: collapse;
  }

  th, td {
    border: 1px solid #ddd;
  }
</style>