<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';

  let showCode = true;
  let showCode1 = true;
  let showCode2 = true;
  let showCode3 = true;
</script>

<div class="container mx-auto px-4 py-8">
  <h1>Chapter 6: Semantic HTML & Accessibility</h1>
  
  <h2>Theory</h2>
  
  <h3>Introduction to Semantic HTML</h3>
  <div>Semantic HTML uses HTML elements that clearly describe their meaning and role in the document structure. By using semantic tags, developers can improve the clarity of their content, making it easier for both browsers and assistive technologies to interpret and render.</div>

  <h3>Commonly Used Semantic Elements</h3>
  <div>Here are some commonly used semantic elements:</div>

  <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
    <button 
      class="toggle-btn mb-2 px-2 py-1 text-sm text-white rounded"
      style="background-color: rgb(59 130 246) !important"
      on:click={() => showCode = !showCode}
    >
      {showCode ? 'Show Preview' : 'Show Code'}
    </button>
    
    {#if showCode}
    <pre><code>&lt;header&gt;...&lt;/header&gt;
&lt;nav&gt;...&lt;/nav&gt;
&lt;main&gt;...&lt;/main&gt;
&lt;section&gt;...&lt;/section&gt;
&lt;article&gt;...&lt;/article&gt;
&lt;footer&gt;...&lt;/footer&gt;</code></pre>
    {:else}
    <div class="preview-content">
      <header>
        <h1>My Personal Profile</h1>
      </header>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <main>
        <section>
          <h2>About Me</h2>
          <p>This is a brief introduction about myself.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 My Personal Profile</p>
      </footer>
    </div>
    {/if}
  </div>

  <div class="my-4">
    <h3>Importance of Accessibility</h3>
    <div>Web accessibility is about making websites usable for people of all abilities and disabilities. Here are important principles to consider when creating accessible web pages:</div>

    <ol>
      <li>Perceivable: Ensure that all information presented on the page is accessible to all users.</li>
      <li>Operable: Users should be able to navigate and interact with all content using a keyboard or other assistive technologies.</li>
      <li>Understandable: Content should be readable and understandable.</li>
      <li>Robust: Ensure that your website is compatible with current and future user agents.</li>
    </ol>
  </div>

  <h3>Implementing ARIA Attributes</h3>
  <div>Consider implementing ARIA (Accessible Rich Internet Applications) attributes when necessary, which can provide additional information on the roles and properties of elements.</div>


  <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
    <button 
      class="toggle-btn mb-2 px-2 py-1 text-sm text-white rounded"
      style="background-color: rgb(59 130 246) !important"
      on:click={() => showCode2 = !showCode2}
    >
      {showCode2 ? 'Show Preview' : 'Show Code'}
    </button>
    
    {#if showCode2}
    <pre><code>&lt;button aria-label="Close" onclick="closeModal()"&gt;X&lt;/button&gt;</code></pre>
    {:else}
    <div class="preview-content">
      <button aria-label="Close" onclick="closeModal()">X</button>
    </div>
    {/if}
  </div>


  <hr class="my-8"/>

  <h2 class="workshop-title">Practice Workshop: Enhancing Accessibility & Semantics</h2>
  
  <div class="workshop-container">
    <h3 class="task">Task: Refactor your personal profile page to use semantic HTML and improve accessibility</h3>
    
    <div class="steps">
      <h4>Step 1: Open Your Existing Profile HTML File</h4>
      <div>Launch your code editor and open the <code>profile.html</code> file you created in previous chapters.</div>

      <h4>Step 2: Refactor Your HTML Code</h4>
      <div>Add the following semantic elements to your profile page:</div>

      <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
        <button 
          class="toggle-btn mb-2 px-2 py-1 text-sm text-white rounded"
          style="background-color: rgb(59 130 246) !important"
          on:click={() => showCode3 = !showCode3}
        >
          {showCode3 ? 'Show Preview' : 'Show Code'}
        </button>
        
        {#if showCode3}
        <pre><code>&lt;header&gt;
  &lt;h1&gt;Your Name&lt;/h1&gt;
  &lt;nav&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href="#about"&gt;About&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="#contact"&gt;Contact&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/nav&gt;
&lt;/header&gt;

&lt;main&gt;
  &lt;section id="about"&gt;
    &lt;h2&gt;About Me&lt;/h2&gt;
    &lt;p&gt;Hello! My name is &lt;strong&gt;Your Name&lt;/strong&gt;...&lt;/p&gt;
  &lt;/section&gt;
&lt;/main&gt;

&lt;footer&gt;
  &lt;p&gt;&copy; 2023 My Personal Profile&lt;/p&gt;
&lt;/footer&gt;</code></pre>
        {:else}
        <div class="preview-content">
          <header>
            <h1>Your Name</h1>
            <nav>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </header>
          <main>
            <section id="about">
              <h2>About Me</h2>
              <p>Hello! My name is <strong>Your Name</strong>...</p>
            </section>
          </main>
          <footer>
            <p>&copy; 2023 My Personal Profile</p>
          </footer>
        </div>
        {/if}
      </div>

      <h3>Deliverables</h3>
      <ul>
        <li>Updated profile.html file with semantic HTML elements</li>
        <li>Ensure all images have appropriate alt attributes</li>
        <li>Implement ARIA attributes where necessary</li>
      </ul>

      <SolutionChecker />
    </div>
  </div>

  <ChapterNavigation 
    prevHref="/HTMLKit/html/chapter5" 
    nextHref="/HTMLKit/html/chapter7" 
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
