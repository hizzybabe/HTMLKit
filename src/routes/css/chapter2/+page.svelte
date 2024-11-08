<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
</script>

<div class="container mx-auto px-4 py-8">
  <h1>Chapter 2: Selectors & Properties</h1>

  <h2>Theory</h2>
  
  <h3>Understanding CSS Selectors</h3>
  <div>
    CSS selectors are used to "select" the HTML elements you want to style. Different types of selectors allow you to apply styles to specific elements in your document.
  </div>
  
  <h4>Types of Selectors:</h4>
  <ul>
    <li><strong>Element Selector</strong>: Targets all elements of a specific type.
      <div>Example: <code>p &lbrace; color: blue; &rbrace;</code> styles all <code>&lt;p&gt;</code> elements.</div>
    </li>
    <li><strong>ID Selector</strong>: Targets a specific element with a unique <code>id</code> attribute. The ID selector is represented with a <code>#</code>.
      <div>Example: <code>#profile &lbrace; color: green; &rbrace;</code> styles the element with <code>id="profile"</code>.</div>
    </li>
    <li><strong>Class Selector</strong>: Targets all elements with a specific <code>class</code> attribute. The class selector is represented with a <code>.</code>.
      <div>Example: <code>.highlight &lbrace; background-color: yellow; &rbrace;</code> styles all elements with <code>class="highlight"</code>.</div>
    </li>
    <li><strong>Universal Selector</strong>: Targets all elements on the page and is represented with <code>*</code>.
      <div>Example: <code>* &lbrace; margin: 0; padding: 0; &rbrace;</code> removes default margins and padding from all elements.</div>
    </li>
  </ul>

  <h4>Selector Example:</h4>
  <pre><code>
h1 &lbrace; color: navy; &rbrace;           /* Element selector */
#header &lbrace; font-size: 24px; &rbrace;  /* ID selector */
.container &lbrace; padding: 10px; &rbrace; /* Class selector */
* &lbrace; box-sizing: border-box; &rbrace; /* Universal selector */
  </code></pre>

  <h3>Common CSS Properties</h3>
  <div>
    CSS properties define the styling applied to elements. Here are some of the most common properties you’ll use:
  </div>
  
  <ul>
    <li><strong>Color</strong>: Sets the color of the text.
      <div>Example: <code>color: red;</code></div>
    </li>
    <li><strong>Background</strong>: Sets the background color or image of an element.
      <div>Example: <code>background-color: lightgray;</code></div>
      <div>Example: <code>background-image: url('background.jpg');</code></div>
    </li>
    <li><strong>Fonts</strong>: Controls font type, size, and style.
      <div>Example: <code>font-family: Arial, sans-serif;</code></div>
      <div>Example: <code>font-size: 16px;</code></div>
    </li>
    <li><strong>Text</strong>: Adjusts text alignment, decoration, and more.
      <div>Example: <code>text-align: center;</code></div>
      <div>Example: <code>text-decoration: underline;</code></div>
    </li>
  </ul>

  <h4>Property Example:</h4>
  <pre><code>
body &lbrace;
    color: #333;
    background-color: #f4f4f4;
    font-family: Arial, sans-serif;
    font-size: 16px;
&rbrace;
  </code></pre>

  <h3>Introduction to the Box Model</h3>
  <div>
    The CSS Box Model is a fundamental concept for layout and spacing. Every element on a webpage is represented as a rectangular box made up of four areas: <strong>content</strong>, <strong>padding</strong>, <strong>border</strong>, and <strong>margin</strong>.
  </div>

  <h4>Box Model Components:</h4>
  <ul>
    <li><strong>Content</strong>: The actual content of the element, such as text or images.</li>
    <li><strong>Padding</strong>: Space between the content and the border.</li>
    <li><strong>Border</strong>: A line surrounding the padding and content.</li>
    <li><strong>Margin</strong>: Space outside the border, separating the element from others.</li>
  </ul>

  <h4>Box Model Example:</h4>
  <pre><code>
.profile &lbrace;
    padding: 10px;     /* Space inside the element */
    border: 2px solid #ccc; /* Border around the element */
    margin: 20px;      /* Space outside the element */
&rbrace;
  </code></pre>

  <h2 class="workshop-title">Practice Workshop: Styling a Personal Profile</h2>
  <div class="workshop-container">
    <h3 class="task">Task: Create a simple CSS file to style an HTML page.</h3>
    
    <h4>Step 1: Open Your Code Editor</h4>
    <ol>
      <li>Launch your installed code editor.</li>
    </ol>
    
    <h4>Step 2: Create a New CSS File</h4>
    <ol>
      <li>Click on "File," then "New File" (or use the shortcut).</li>
      <li>Name the file <code>styles.css</code>.</li>
    </ol>
    
    <h4>Step 3: Write Your CSS Code</h4>
    <div>In the new file, enter the following code to style your HTML document:</div>
    
    <pre><code>
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
}

h1 {
    color: #4CAF50;
}

p {
    line-height: 1.6;
}
    </code></pre>
    
    <h4>Step 4: Link Your CSS File to Your HTML</h4>
    <div>In your HTML file, add the following line within the <code>&lt;head&gt;</code> section:</div>
    
    <pre><code>&lt;link rel="stylesheet" href="styles.css"&gt;</code></pre>
    
    <h3>Deliverables</h3>
    <ol>
      <li><strong>styles.css File</strong>: Ensure your CSS file includes the styles as shown above.</li>
      <li><strong>Screenshot</strong>: Capture a screenshot of the rendered page showing your styles applied.</li>
    </ol>
    
    <h3>Submission</h3>
    <div>Once you have completed your task:</div>
    <ul>
      <li>Ensure that your <code>styles.css</code> file is correctly formatted and saved.</li>
      <li>Take a screenshot of the output displayed in the web browser.</li>
      <li>Submit both the CSS file and the screenshot as required by the course guidelines.</li>
    </ul>
    
    <div>Congratulations on creating your first CSS styles! This fundamental skill sets the stage for more advanced web development topics.</div>
  </div>

  <h2>Summary and Key Takeaways</h2>
  <ul>
    <li><strong>Selectors</strong>: Use element, ID, class, and universal selectors to target elements for styling.</li>
    <li><strong>Properties</strong>: Experiment with text, background, font, and color properties to make elements visually appealing.</li>
    <li><strong>Box Model</strong>: Padding, borders, and margins are crucial for layout and spacing.</li>
  </ul>

  <div>
    This chapter covered essential CSS selectors and properties, equipping you with the tools to create well-structured, visually pleasing web pages. Keep experimenting with different styles and layouts to develop your CSS skills further.
  </div>

  <ChapterNavigation 
    prevHref="/HTMLKit/css/chapter1" 
    nextHref="/HTMLKit/css/chapter3" 
  />
</div>