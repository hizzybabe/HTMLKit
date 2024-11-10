<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
  import SolutionChecker from '$lib/components/SolutionChecker.svelte';

  let showCode1 = true;
  let showCode2 = true;
  let showCode3 = true;
</script>

<div class="container mx-auto px-4 py-8">
  <h1>Chapter 5: Forms and Input Elements</h1>
  
  <h2>Theory</h2>
  
  <h3>Introduction to HTML Forms</h3>
  <div>HTML forms are essential tools for collecting user input. The <code>&lt;form&gt;</code> element wraps all form elements and provides options to handle user submissions.</div>


    <pre><code>&lt;form action="URL" method="POST"&gt;
  &lt;!-- Form Elements Go Here --&gt;
&lt;/form&gt;</code></pre>


  <div class="my-4">
    <strong>Key Form Attributes:</strong>
    <ul>
      <li><code>action</code>: The URL where form data will be sent</li>
      <li><code>method</code>: The HTTP method (GET or POST) used for submission</li>
    </ul>
  </div>

  <h3>Input Types</h3>
  <div>The <code>&lt;input&gt;</code> element is versatile and can take various types for different purposes:</div>

  <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
    <button 
      class="toggle-btn mb-2 px-2 py-1 text-sm text-white rounded"
      style="background-color: rgb(59 130 246) !important"
      on:click={() => showCode1 = !showCode1}
    >
      {showCode1 ? 'Show Preview' : 'Show Code'}
    </button>
    
    {#if showCode1}
    <pre><code>&lt;!-- Text Input --&gt;
&lt;input type="text" name="username" placeholder="Enter your name"&gt;

&lt;!-- Password Input --&gt;
&lt;input type="password" name="password" placeholder="Enter your password"&gt;

&lt;!-- Email Input --&gt;
&lt;input type="email" name="email" placeholder="Enter your email"&gt;

&lt;!-- Number Input --&gt;
&lt;input type="number" name="age" min="1" max="120"&gt;</code></pre>
    {:else}
    <div class="preview-content space-y-4">
      <div>
        <input type="text" name="username" placeholder="Enter your name" class="border p-2 rounded w-full">
      </div>
      <div>
        <input type="password" name="password" placeholder="Enter your password" class="border p-2 rounded w-full">
      </div>
      <div>
        <input type="email" name="email" placeholder="Enter your email" class="border p-2 rounded w-full">
      </div>
      <div>
        <input type="number" name="age" min="1" max="120" class="border p-2 rounded w-full">
      </div>
    </div>
    {/if}
  </div>

  <h3>Other Form Elements</h3>
  <div>Forms can include various other elements for different types of input:</div>

  <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
    <button 
      class="toggle-btn mb-2 px-2 py-1 text-sm text-white rounded"
      style="background-color: rgb(59 130 246) !important"
      on:click={() => showCode2 = !showCode2}
    >
      {showCode2 ? 'Show Preview' : 'Show Code'}
    </button>
    
    {#if showCode2}
    <pre><code>&lt;!-- Textarea --&gt;
&lt;textarea name="message" placeholder="Enter your message" rows="4" cols="50"&gt;&lt;/textarea&gt;

&lt;!-- Select Dropdown --&gt;
&lt;select name="inquiryType"&gt;
  &lt;option value="general"&gt;General Inquiry&lt;/option&gt;
  &lt;option value="support"&gt;Support&lt;/option&gt;
  &lt;option value="feedback"&gt;Feedback&lt;/option&gt;
&lt;/select&gt;

&lt;!-- Submit Button --&gt;
&lt;button type="submit"&gt;Submit&lt;/button&gt;</code></pre>
    {:else}
    <div class="preview-content space-y-4">
      <div>
        <textarea name="message" placeholder="Enter your message" rows="4" cols="50" class="border p-2 rounded w-full"></textarea>
      </div>
      <div>
        <select name="inquiryType" class="border p-2 rounded w-full">
          <option value="general">General Inquiry</option>
          <option value="support">Support</option>
          <option value="feedback">Feedback</option>
        </select>
      </div>
      <div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </div>
    </div>
    {/if}
  </div>

  <hr class="my-8"/>

  <h2 class="workshop-title">Practice Workshop: Creating a Contact Form</h2>
  
  <div class="workshop-container">
    <h3 class="task">Task: Create a contact form for your personal profile page</h3>
    
    <div class="steps">
      <h4>Step 1: Open Your Profile HTML File</h4>
      <div>Add the following contact form to your existing profile.html file:</div>

      <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
        <button 
          class="toggle-btn mb-2 px-2 py-1 text-sm text-white rounded"
          style="background-color: rgb(59 130 246) !important"
          on:click={() => showCode3 = !showCode3}
        >
          {showCode3 ? 'Show Preview' : 'Show Code'}
        </button>
        
        {#if showCode3}
        <pre><code>&lt;h2&gt;Contact Me&lt;/h2&gt;
&lt;form action="submit_form.php" method="POST"&gt;
  &lt;label for="name"&gt;Name:&lt;/label&gt;&lt;br&gt;
  &lt;input type="text" id="name" name="name" placeholder="Enter your name" required&gt;&lt;br&gt;&lt;br&gt;
  
  &lt;label for="email"&gt;Email:&lt;/label&gt;&lt;br&gt;
  &lt;input type="email" id="email" name="email" placeholder="Enter your email" required&gt;&lt;br&gt;&lt;br&gt;
  
  &lt;label for="inquiryType"&gt;Inquiry Type:&lt;/label&gt;&lt;br&gt;
  &lt;select id="inquiryType" name="inquiryType"&gt;
    &lt;option value="general"&gt;General Inquiry&lt;/option&gt;
    &lt;option value="support"&gt;Support&lt;/option&gt;
    &lt;option value="feedback"&gt;Feedback&lt;/option&gt;
  &lt;/select&gt;&lt;br&gt;&lt;br&gt;
  
  &lt;label for="message"&gt;Message:&lt;/label&gt;&lt;br&gt;
  &lt;textarea id="message" name="message" rows="4" cols="50" placeholder="Enter your message" required&gt;&lt;/textarea&gt;&lt;br&gt;&lt;br&gt;
  
  &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;</code></pre>
        {:else}
        <div class="preview-content">
          <h2>Contact Me</h2>
          <form class="space-y-4">
            <div>
              <label for="name">Name:</label><br>
              <input type="text" id="name" name="name" placeholder="Enter your name" required class="border p-2 rounded w-full">
            </div>
            
            <div>
              <label for="email">Email:</label><br>
              <input type="email" id="email" name="email" placeholder="Enter your email" required class="border p-2 rounded w-full">
            </div>
            
            <div>
              <label for="inquiryType">Inquiry Type:</label><br>
              <select id="inquiryType" name="inquiryType" class="border p-2 rounded w-full">
                <option value="general">General Inquiry</option>
                <option value="support">Support</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>
            
            <div>
              <label for="message">Message:</label><br>
              <textarea id="message" name="message" rows="4" cols="50" placeholder="Enter your message" required class="border p-2 rounded w-full"></textarea>
            </div>
            
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
          </form>
        </div>
        {/if}
      </div>

      <h3>Notes on the Form Code:</h3>
      <ul>
        <li>Each input has an associated label for accessibility</li>
        <li>The required attribute ensures fields are filled before submission</li>
        <li>The action attribute should be updated based on your server setup</li>
      </ul>

      <h3>Deliverables</h3>
      <ol>
        <li>Updated profile.html file with the contact form</li>
        <li>Screenshot of the rendered form in browser</li>
      </ol>

      <SolutionChecker />
    </div>
  </div>

  <ChapterNavigation 
    prevHref="/HTMLKit/html/chapter4" 
    nextHref="/HTMLKit/html/chapter6" 
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

  .space-y-4 > * + * {
    margin-top: 1rem;
  }
</style>
