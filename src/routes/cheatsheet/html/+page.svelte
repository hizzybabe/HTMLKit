<script>
  // Create an object to track the visibility state of each section
  let visibleSections = {
    structure: false,
    text: false,
    lists: false,
    linksAndImages: false,
    tables: false,
    forms: false,
    media: false,
    entities: false,
    semantic: false
  };

  // Toggle function
  const toggleSection = (section) => {
    visibleSections[section] = !visibleSections[section];
  };
</script>

<div class="container mx-auto px-4 py-8">
  <p>Here's a simple HTML cheatsheet to help you with essential HTML tags and attributes:</p>
  <hr class="my-4">

  <h1 class="text-2xl font-bold mb-4">HTML Cheatsheet</h1>

  <h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('structure')}
  >
    <span class="mr-2">{visibleSections.structure ? '▼' : '▶'}</span>
    1. Basic Document Structure
  </h2>
  {#if visibleSections.structure}
    <pre><code class="language-html">
    &lt;!DOCTYPE html&gt;
    &lt;html lang="en"&gt;
      &lt;head&gt;
        &lt;meta charset="UTF-8"&gt;
        &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
        &lt;title&gt;Page Title&lt;/title&gt;
      &lt;/head&gt;
      &lt;body&gt;
        &lt;!-- Your content goes here --&gt;
      &lt;/body&gt;
    &lt;/html&gt;
    </code></pre>
  {/if}

  <h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('text')}
  >
    <span class="mr-2">{visibleSections.text ? '▼' : '▶'}</span>
    2. Text Elements
  </h2>
  {#if visibleSections.text}
    <ul>
      <li><strong>Headings</strong>: Defines headings from the largest (<code>&lt;h1&gt;</code>) to smallest (<code>&lt;h6&gt;</code>).</li>
      <pre><code class="language-html">
      &lt;h1&gt;Main Heading&lt;/h1&gt;
      &lt;h2&gt;Subheading&lt;/h2&gt;
      </code></pre>

      <li><strong>Paragraph</strong>: Defines a paragraph.</li>
      <pre><code class="language-html">
      &lt;p&gt;This is a paragraph.&lt;/p&gt;
      </code></pre>

      <li><strong>Text Formatting</strong>:</li>
      <pre><code class="language-html">
      &lt;strong&gt;Bold Text&lt;/strong&gt;
      &lt;em&gt;Italic Text&lt;/em&gt;
      &lt;u&gt;Underlined Text&lt;/u&gt;
      </code></pre>
    </ul>
  {/if}

  <h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('lists')}
  >
    <span class="mr-2">{visibleSections.lists ? '▼' : '▶'}</span>
    3. Lists
  </h2>
  {#if visibleSections.lists}
    <ul>
      <li><strong>Unordered List</strong>:</li>
      <pre><code class="language-html">
      &lt;ul&gt;
        &lt;li&gt;Item 1&lt;/li&gt;
        &lt;li&gt;Item 2&lt;/li&gt;
      &lt;/ul&gt;
      </code></pre>

      <li><strong>Ordered List</strong>:</li>
      <pre><code class="language-html">
      &lt;ol&gt;
        &lt;li&gt;First item&lt;/li&gt;
        &lt;li&gt;Second item&lt;/li&gt;
      &lt;/ol&gt;
      </code></pre>
    </ul>
  {/if}

  <h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('linksAndImages')}
  >
    <span class="mr-2">{visibleSections.linksAndImages ? '▼' : '▶'}</span>
    4. Links &amp; Images
  </h2>
  {#if visibleSections.linksAndImages}
    <ul>
      <li><strong>Link (Anchor)</strong>: Defines a hyperlink.</li>
      <pre><code class="language-html">
      &lt;a href="https://www.example.com"&gt;Visit Example&lt;/a&gt;
      </code></pre>

      <li><strong>Image</strong>: Embeds an image.</li>
      <pre><code class="language-html">
      &lt;img src="image.jpg" alt="Description of Image"&gt;
      </code></pre>
    </ul>
  {/if}

  <h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('tables')}
  >
    <span class="mr-2">{visibleSections.tables ? '▼' : '▶'}</span>
    5. Tables
  </h2>
  {#if visibleSections.tables}
    <pre><code class="language-html">
    &lt;table&gt;
      &lt;tr&gt;
        &lt;th&gt;Header 1&lt;/th&gt;
        &lt;th&gt;Header 2&lt;/th&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td&gt;Data 1&lt;/td&gt;
        &lt;td&gt;Data 2&lt;/td&gt;
      &lt;/tr&gt;
    &lt;/table&gt;
    </code></pre>
  {/if}

  <h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('forms')}
  >
    <span class="mr-2">{visibleSections.forms ? '▼' : '▶'}</span>
    6. Forms
  </h2>
  {#if visibleSections.forms}
    <pre><code class="language-html">
    &lt;form action="submit.php" method="post"&gt;
      &lt;label for="name"&gt;Name:&lt;/label&gt;
      &lt;input type="text" id="name" name="name"&gt;
    </code></pre>
  {/if}

  <h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('media')}
  >
    <span class="mr-2">{visibleSections.media ? '▼' : '▶'}</span>
    7. Media Embeds
  </h2>
  {#if visibleSections.media}
    <ul>
      <li><strong>Video</strong>:</li>
      <pre><code class="language-html">
      &lt;video controls&gt;
        &lt;source src="video.mp4" type="video/mp4"&gt;
        Your browser does not support the video tag.
      &lt;/video&gt;
      </code></pre>

      <li><strong>Audio</strong>:</li>
      <pre><code class="language-html">
      &lt;audio controls&gt;
        &lt;source src="audio.mp3" type="audio/mp3"&gt;
        Your browser does not support the audio element.
      &lt;/audio&gt;
      </code></pre>
    </ul>
  {/if}

  <h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('entities')}
  >
    <span class="mr-2">{visibleSections.entities ? '▼' : '▶'}</span>
    8. Common HTML Entities
  </h2>
  {#if visibleSections.entities}
    <ul>
      <li><strong>Space</strong>: `&amp;nbsp;`</li>
      <li><strong>Less Than (&lt;)</strong>: `&amp;lt;`</li>
      <li><strong>Greater Than (&gt;)</strong>: `&amp;gt;`</li>
      <li><strong>Ampersand (&amp;)</strong>: `&amp;amp;`</li>
    </ul>
  {/if}

  <h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('semantic')}
  >
    <span class="mr-2">{visibleSections.semantic ? '▼' : '▶'}</span>
    9. Semantic Elements
  </h2>
  {#if visibleSections.semantic}
    <ul>
      <li><strong>Header</strong>: Defines a header for a document or section.</li>
      <pre><code class="language-html">
      &lt;header&gt;
        &lt;h1&gt;Page Title&lt;/h1&gt;
      &lt;/header&gt;
      </code></pre>

      <li><strong>Nav</strong>: Defines navigation links.</li>
      <pre><code class="language-html">
      &lt;nav&gt;
        &lt;a href="#home"&gt;Home&lt;/a&gt;
        &lt;a href="#about"&gt;About&lt;/a&gt;
      &lt;/nav&gt;
      </code></pre>

      <li><strong>Section</strong>: Defines a section in a document.</li>
      <pre><code class="language-html">
      &lt;section&gt;
        &lt;h2&gt;Section Title&lt;/h2&gt;
        &lt;p&gt;Section content...&lt;/p&gt;
      &lt;/section&gt;
      </code></pre>

      <li><strong>Footer</strong>: Defines a footer for a document or section.</li>
      <pre><code class="language-html">
      &lt;footer&gt;
        &lt;p&gt;&amp;copy; 2023 Your Website&lt;/p&gt;
      &lt;/footer&gt;
      </code></pre>
    </ul>
  {/if}

  <hr class="my-4">
  <p>This cheatsheet covers essential HTML tags and structures, perfect for quick reference as you build web pages!</p>

</div>

<style>
  h2 {
    user-select: none; /* Prevents text selection when clicking */
  }
  
  h2:hover {
    opacity: 0.8;
  }
</style>