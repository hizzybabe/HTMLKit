<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
  import SolutionChecker from '$lib/components/SolutionChecker.svelte';

  let showCode = true;
  let showCode1 = true;
  let showCode2 = true;
  let showCode3 = true;
</script>

<div class="container mx-auto px-4 py-8">


  <h1>Chapter 3: Working with Text and Links</h1>
<h2>Theory</h2>
<h3>Formatting Text</h3>
<div>Text formatting in HTML allows you to emphasize or style text in various ways. Here are some common tags used for formatting:</div>
<ul>
<li>
<div><code><strong>&lt;strong&gt;</strong></code>: This tag is used to indicate that text is of strong importance. By default, it renders text in bold.</div>
</li>
</ul>

<div>
  <button 
    class="toggle-btn mb-0.5 px-0.5 py-0.5 text-[10px] text-white rounded"
    style="background-color: rgb(59 130 246) !important"
    on:click={() => showCode = !showCode}
  >
    {showCode ? 'Show Preview' : 'Show Code'}
  </button>

  {#if showCode}

  <div><code>&lt;strong&gt;This text is important.&lt;/strong&gt;</code></div>
  {:else}

  <div><strong>This text is important.</strong></div>
  {/if}
</div>



<ul>
<li>
<div><code><strong>&lt;em&gt;</strong></code>: This tag is used to emphasize text, usually rendered in italics. This is often used for stress or importance in phrases.</div>
</li>
</ul>


<div>
  <button 
    class="toggle-btn mb-0.5 px-0.5 py-0.5 text-[10px] text-white rounded"
    style="background-color: rgb(59 130 246) !important"
    on:click={() => showCode1 = !showCode1}
  >
    {showCode1 ? 'Show Preview' : 'Show Code'}
  </button>

  {#if showCode1}

  <div><code>&lt;em&gt;This text is emphasized.&lt;/em&gt;</code></div>
  {:else}

  <div><em>This text is emphasized.</em></div>
  {/if}
</div>





<ul>
<li>
<div><code><strong>&lt;u&gt;</strong></code>: This tag underlines the text, although underlining is often reserved for hyperlinked text.</div>
</li>
</ul>


<div>
  <button 
    class="toggle-btn mb-0.5 px-0.5 py-0.5 text-[10px] text-white rounded"
    style="background-color: rgb(59 130 246) !important"
    on:click={() => showCode2 = !showCode2}
  >
    {showCode2 ? 'Show Preview' : 'Show Code'}
  </button>

  {#if showCode2}

  <div><code>&lt;u&gt;This text is underlined.&lt;/u&gt;</code></div>
  {:else}

  <div><u>This text is underlined.</u></div>
  {/if}
</div>




<ul>
<li>
<div><code><strong>&lt;strike&gt;</strong></code> (or <code>&lt;del&gt;</code>): This tag represents text that has been deleted or struck through, often used to indicate changes in text.</div>
</li>
</ul>




<div>
  <button 
    class="toggle-btn mb-0.5 px-0.5 py-0.5 text-[10px] text-white rounded"
    style="background-color: rgb(59 130 246) !important"
    on:click={() => showCode3 = !showCode3}
  >
    {showCode3 ? 'Show Preview' : 'Show Code'}
  </button>

  {#if showCode3}

  <div><code>&lt;strike&gt;This text is struck through.&lt;/strike&gt;</code></div>
  {:else}

  <div><strike>This text is struck through.</strike></div>
  {/if}
</div>






<h3>Creating Hyperlinks</h3>
<div>The <code>&lt;a&gt;</code> tag, known as the anchor tag, is used to create hyperlinks. You can link to other web pages, files, images, or even sections of the same page.</div>
<div>The basic syntax of the anchor tag is:</div>
<div>
<code>&lt;a href="URL"&gt;Link Text&lt;/a&gt;</code>
</div>
<ul>
<li>
<div><strong>Example of linking to a website</strong>:</div>
</li>
</ul>
<div>
<div>&lt;a href="https://www.example.com"&gt;Visit Example&lt;/a&gt;</div>
</div>
<ul>
<li>
<div><strong>Email Links</strong>: To create an email link that opens the user&rsquo;s default email client, you can use the <code>mailto:</code> protocol:</div>
</li>
</ul>
<div>
<div>&lt;a href="mailto:yourname@example.com"&gt;Contact Me&lt;/a&gt;</div>
</div>
<ul>
<li>
<div><strong>Linking to Sections of a Page</strong>: You can create an internal link by using the <code>id</code> attribute on a target element and linking to it. For example:</div>
</li>
</ul>
<div>

  <pre><code>
&lt;!-- Link to a section --&gt;
&lt;a href="#section1"&gt;Go to Section 1&lt;/a&gt;
&lt;!-- Target section --&gt;
&lt;h2 id="section1"&gt;Section 1&lt;/h2&gt;
</code></pre>

</div>
<hr/>
<!-- Workshop Section -->
<h2 class="workshop-title">Practice Workshop: Enhancing Your Profile Page</h2>
<div class="workshop-container">
  <h3 class="task">Task: Update the personal profile page</h3>
  
  <div>In this workshop, you will enhance your personal profile HTML page by emphasizing certain text, adding a hyperlink to your favorite website, and creating an email contact link.</div>
  
  <h4>Step 1: Open Your Existing Profile HTML File</h4>
  <div>Launch your code editor and open the <code>profile.html</code> file you created in Chapter 2.</div>
  
  <h4>Step 2: Update Your HTML Code</h4>
  <div>Make the following updates to your existing code:</div>
  <ol>
    <li><strong>Emphasize Text</strong>: Use <code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code> to emphasize specific parts of your description.</li>
    <li><strong>Add a Link to Your Favorite Website</strong>: Insert a hyperlink pointing to your favorite website.</li>
    <li><strong>Create an Email Link</strong>: Include an email link that allows others to contact you directly.</li>
  </ol>
  
  <div>Here's an example of how your updated HTML code might look:</div>
  
  <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;My Profile&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Your Name&lt;/h1&gt;
  &lt;p&gt;Hello! My name is &lt;strong&gt;Your Name&lt;/strong&gt;. I am a &lt;em&gt;[your profession/education]&lt;/em&gt;. I enjoy various activities, and one of my favorite hobbies is &lt;span style="font-weight: bold; color: blue;"&gt;[your hobby]&lt;/span&gt;. In my free time, I love to explore more about it!&lt;/p&gt;
  &lt;p&gt;For more information, visit my favorite website: &lt;a href="https://www.yourfavoritewebsite.com" target="_blank"&gt;Your Favorite Website&lt;/a&gt;.&lt;/p&gt;
  &lt;p&gt;Feel free to &lt;a href="mailto:yourname@example.com"&gt;contact me&lt;/a&gt; anytime!&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

  <h4>Step 3: Save the Changes</h4>
  <ol>
    <li>Save your changes in the <code>profile.html</code> file.</li>
  </ol>

  <h4>Step 4: Open the Updated HTML File in a Web Browser</h4>
  <ol>
    <li>Locate the updated <code>profile.html</code> file where you saved it.</li>
    <li>Right-click the file and select "Open With," followed by your preferred web browser.</li>
    <li>Verify that the updates are displayed correctly, including emphasized text, a hyperlink, and an email link.</li>
  </ol>

  <h3>Deliverables</h3>
  <ol>
    <li><strong>Updated profile.html File</strong>: Ensure that your HTML file now includes the text formatting, hyperlink to your favorite website, and your email link.</li>
    <li><strong>Screenshot</strong>: Capture a screenshot of the rendered page in the browser, showing all enhancements.</li>
  </ol>

  <h3>Submission</h3>
  <div>Once you have completed the task:</div>
  <ul>
    <li>Ensure that your updated <code>profile.html</code> file is correctly formatted and saved.</li>
    <li>Take a screenshot of the output displayed in the web browser.</li>
    <li>Submit both the updated HTML file and the screenshot as required by your course guidelines.</li>
  </ul>


  <SolutionChecker />

  <div>Congratulations on enhancing your profile page! With the knowledge of text formatting and creating hyperlinks, you're building a solid foundation for more advanced web content.</div>
</div>
  
  


<ChapterNavigation 
    prevHref="/html/chapter2" 
    nextHref="/html/chapter4" 
/>

</div>