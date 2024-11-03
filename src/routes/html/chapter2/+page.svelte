<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';

  let showCode = true;
  let showCode1 = true;
</script>

<div class="container mx-auto px-4 py-8">


  <h1>Chapter 2: Basic HTML Structure &amp; Elements</h1>
  <h2>Theory</h2>
  <h3>Understanding the Basic HTML Document Structure</h3>
  <div>When creating an HTML document, it&rsquo;s essential to understand the basic structure that outlines the different sections of an HTML page. This structure includes several key elements:</div>
  <ol>
  <li>
  <div><code><strong>&lt;!DOCTYPE html&gt;</strong></code>: This declaration defines the document type and version of HTML. It should always be the first line in your HTML document and informs the browser that it is parsing HTML5.</div>
  </li>
  <li>
  <div><code><strong>&lt;html&gt;</strong></code>: The <code>&lt;html&gt;</code> element is the root element of an HTML page. All other elements (except for <code>&lt;!DOCTYPE&gt;</code>) must be nested within this tag.</div>
  </li>
  <li>
  <div><code><strong>&lt;head&gt;</strong></code>: The <code>&lt;head&gt;</code> section contains meta-information about the document, including the title, character set, styles, and scripts. It is not displayed directly on the web page.</div>
  </li>
  </ol>
  <ul>
  <li>
  <div><code><strong>&lt;title&gt;</strong></code>: This specifies the title of the web page that appears in the browser tab.</div>
  </li>
  <li>
  <div><code><strong>&lt;meta&gt;</strong></code>: Tags that provide various types of metadata, like character encoding (<code>&lt;meta charset="UTF-8"&gt;</code>) and viewport settings for responsive design.</div>
  </li>
  </ul>
  <ol>
  <li>
  <div><code><strong>&lt;body&gt;</strong></code>: The <code>&lt;body&gt;</code> section contains all the content that is displayed on the web page, such as text, images, links, and other elements.</div>
  </li>
  </ol>
  <h3>Common HTML Elements</h3>
  <div>HTML has a variety of elements that can be used to structure content:</div>
  <ul>
  <li>
  <div><strong>Headings</strong> (<code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>): Used to define headings and subheadings. <code>&lt;h1&gt;</code> is the largest and most important heading, while <code>&lt;h6&gt;</code> is the smallest.</div>
  </li>
  </ul>

  <div>



      <div class="bg-gray-100 p-2 rounded-lg">
        <button 
          class="mb-1 px-1 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600"
          on:click={() => showCode = !showCode}
        >
          {showCode ? 'Show Preview' : 'Show Code'}
        </button>
      
        {#if showCode}
        <div class="mb-2"><code>&lt;h1&gt;Main Heading&lt;/h1&gt;</code></div>

        {:else}
        <div><h1>Main Heading</h1></div>

        {/if}
      </div>

      <div>
        <button 
          class="mb-1 px-1 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600"
          on:click={() => showCode1 = !showCode1}
        >
          {showCode1 ? 'Show Preview' : 'Show Code'}
        </button>
      
        {#if showCode1}

        <div><code>&lt;h2&gt;Subheading&lt;/h2&gt;</code></div>
        {:else}

        <div><h2>Subheading</h2></div>
        {/if}
      </div>



  </div>

  <ul>
  <li>
  <div><strong>Paragraph</strong> (<code>&lt;p&gt;</code>): Defines a paragraph of text. This tag is essential for presenting text content clearly.</div>
  </li>
  </ul>
  <div>
  <div>&lt;p&gt;This is a paragraph.&lt;/p&gt;</div>
  </div>
  <ul>
  <li>
  <div><strong>Span</strong> (<code>&lt;span&gt;</code>): A simple inline container used to group text for styling or scripting purposes without introducing line breaks.</div>
  </li>
  </ul>
  <div>
  <div>&lt;span style="color: blue;"&gt;This text is blue.&lt;/span&gt;</div>
  </div>
  <ul>
  <li>
  <div><strong>Div</strong> (<code>&lt;div&gt;</code>): A block-level container used to group larger chunks of content. It is commonly used for styling.</div>
  </li>
  </ul>
  <div>
  <div>&lt;div class="container"&gt;This is a div element.&lt;/div&gt;</div>
  </div>
  <h3>Attributes in HTML</h3>
  <div>HTML elements can be modified using attributes. Attributes provide additional information about an element. Some common attributes include:</div>
  <ul>
  <li>
  <div><code><strong>id</strong></code>: A unique identifier for the element. Useful for CSS styling and JavaScript manipulation.</div>
  </li>
  </ul>
  <div>
  <div>&lt;div id="header"&gt;Header Content&lt;/div&gt;</div>
  </div>
  <ul>
  <li>
  <div><code><strong>class</strong></code>: Used to assign one or more class names to an element, allowing for shared CSS styles among multiple elements.</div>
  </li>
  </ul>
  <div>
  <div>&lt;p class="highlight"&gt;Highlighted text.&lt;/p&gt;</div>
  </div>
  <ul>
  <li>
  <div><code><strong>style</strong></code>: Allows you to add inline CSS styling directly to an element.</div>
  </li>
  </ul>
  <div>
  <div>&lt;h1 style="color: red;"&gt;Red Heading&lt;/h1&gt;</div>
  </div>
  <hr/>
  <h2>Practice Workshop: Building a Simple Web Page</h2>
  <h3>Task: Create an HTML page for a personal profile</h3>
  <div>In this workshop, you will create a simple HTML page that includes your name, a brief description of yourself, and highlight a specific hobby using the <code>&lt;span&gt;</code> element.</div>
  <h4>Step 1: Open Your Code Editor</h4>
  <div>Launch your preferred code editor.</div>
  <h4>Step 2: Create a New File</h4>
  <ol>
  <li>
  <div>Click on &ldquo;File,&rdquo; then &ldquo;New File&rdquo; (or use the shortcut).</div>
  </li>
  </ol>
  <h4>Step 3: Write the Basic HTML Structure</h4>
  <div>Enter the following code in your new file:</div>

  <pre><code>&lt;!DOCTYPE html&gt;

&lt;html lang="en"&gt;

&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;My Profile&lt;/title&gt;
&lt;/head&gt;

&lt;body&gt;
  &lt;h1&gt;Your Name&lt;/h1&gt;
  &lt;p&gt;Hello! My name is &lt;strong&gt;Your Name&lt;/strong&gt;. I am a [your profession/education]. I enjoy various activities, one of my favorite hobbies is &lt;span style="font-weight: bold; color: blue;"&gt;[your hobby]&lt;/span&gt;. In my free time, I love to explore more about it!&lt;/p&gt;
&lt;/body&gt;

&lt;/html&gt;</code></pre>

  <div>Replace <code><strong>Your Name</strong></code> and <code><strong>[your profession/education]</strong></code> with your actual name and profession, and <code><strong>[your hobby]</strong></code> with a hobby you enjoy.</div>
  <h4>Step 4: Save the File</h4>
  <ol>
  <li>
  <div>Save this file as <code>profile.html</code>.</div>
  </li>
  </ol>
  <h4>Step 5: Open the HTML File in a Web Browser</h4>
  <ol>
  <li>
  <div>Locate the <code>profile.html</code> file where you saved it.</div>
  </li>
  <li>
  <div>Right-click the file and select &ldquo;Open With,&rdquo; followed by your preferred web browser.</div>
  </li>
  <li>
  <div>You should see your personal profile displayed on the page.</div>
  </li>
  </ol>
  <h3>Deliverables</h3>
  <ol>
  <li>
  <div><strong>profile.html File</strong>: Ensure your HTML file includes your name, a brief description, and the hobby highlighted using <code>&lt;span&gt;</code>.</div>
  </li>
  <li>
  <div><strong>Screenshot</strong>: Capture a screenshot of the rendered page showing your personal profile in the browser.</div>
  </li>
  </ol>
  <h3>Submission</h3>
  <div>Once you have completed your task:</div>
  <ul>
  <li>
  <div>Ensure that your <code>profile.html</code> file is formatted correctly and saved.</div>
  </li>
  <li>
  <div>Take a screenshot of the output displayed in the web browser.</div>
  </li>
  <li>
  <div>Submit both the HTML file and the screenshot as required by the course guidelines.</div>
  </li>
  </ul>
  <div>Congratulations on creating your personal profile web page! This exercise reinforces the fundamental elements of HTML and paves the way for more complex web development projects.</div>
  
  


<ChapterNavigation 
    prevHref="/HTMLKit/html/chapter1" 
    nextHref="/HTMLKit/html/chapter3" 
/>

</div>