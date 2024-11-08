<div class="container mx-auto px-4 py-8">
  <p>Here's a handy CSS cheatsheet covering essential properties and concepts to help you style your web pages:</p>
  
  <h1>CSS Cheatsheet</h1>
  
  <h2>1. Basic Syntax</h2>
  <pre><code class="language-css">selector &#123;
  property: value;
&#125;</code></pre>

  <h2>2. Selectors</h2>
  <h3>Type Selector</h3>
  <p>Selects all elements of a given type.</p>
  <pre><code class="language-css">p &#123;
  color: blue;
&#125;</code></pre>

  <h3>Class Selector</h3>
  <p>Selects all elements with a specific class (use <code>.</code>).</p>
  <pre><code class="language-css">.class-name &#123;
  color: red;
&#125;</code></pre>

<h3>ID Selector</h3>
<p>Selects an element with a specific ID (use <code>#</code>).</p>
<pre><code class="language-css">#unique-id &#123;
background-color: yellow;
&#125;</code></pre>

<h3>Descendant Selector</h3>
<p>Selects elements that are descendants of another element.</p>
<pre><code class="language-css">div p &#123;
margin: 10px;
&#125;</code></pre>

<h3>Attribute Selector</h3>
<p>Selects elements that are descendants of another element.</p>
<pre><code class="language-css">div p &#123;
margin: 10px;
&#125;</code></pre>

<h3>Universal Selector</h3>
<p>Selects elements that are descendants of another element.</p>
<pre><code class="language-css">div p &#123;
margin: 10px;
&#125;</code></pre>

<h2>3. Text Styling</h2>
<h3>Color</h3>
<p>Sets the text color.</p>
<pre><code class="language-css">p &#123;
color: #333;
&#125;</code></pre>

<h3>Font Size</h3>
<p>Sets the font size.</p>
<pre><code class="language-css">p &#123;
font-size: 16px;
&#125;</code></pre>

<h3>Font Family</h3>
<p>Sets the font family.</p>
<pre><code class="language-css">p &#123;
font-family: Arial, sans-serif;
&#125;</code></pre>

<h3>Text Alignment</h3>
<p>Aligns text within an element.</p>
<pre><code class="language-css">p &#123;
text-align: center;
&#125;</code></pre>

<h3>Text Decoration</h3>
<p>Sets the text decoration.</p>
<pre><code class="language-css">p &#123;
text-decoration: underline;
&#125;</code></pre>

<h2>4. Background</h2>
<h3>Background Color</h3>
<p>Sets the background color.</p>
<pre><code class="language-css">p &#123;
background-color: #f0f0f0;
&#125;</code></pre>

<h3>Background Image</h3>
<p>Sets the background image.</p>
<pre><code class="language-css">p &#123;
background-image: url('image.jpg');
&#125;</code></pre>

<h3>Background Position</h3>
<p>Sets the background position.</p>
<pre><code class="language-css">p &#123;
background-position: center;
&#125;</code></pre>

<h3>Background Size</h3>
<p>Sets the background size.</p>
<pre><code class="language-css">p &#123;
background-size: cover;
&#125;</code></pre>

<h2>5. Box Model</h2>
<h3>Width and Height</h3>
<p>Sets the width and height of an element.</p>
<pre><code class="language-css">.element &#123;
width: 100px;
height: 100px;
&#125;</code></pre>

  <h3>Margin</h3>
  <p>Space outside the border.</p>
  <pre><code class="language-css">.element &#123;
  margin: 10px;                /* all sides */
  margin: 10px 20px;          /* top/bottom left/right */
  margin: 10px 20px 15px 25px; /* top right bottom left */
&#125;</code></pre>

  <h3>Padding</h3>
  <p>Space between content and border.</p>
  <pre><code class="language-css">.element &#123;
  padding: 10px;
  padding-left: 20px;
&#125;</code></pre>

  <h3>Border</h3>
  <p>The line between padding and margin.</p>
  <pre><code class="language-css">.element &#123;
  border: 1px solid black;
  border-radius: 5px;
&#125;</code></pre>

  <h2>4. Display & Positioning</h2>
  <h3>Common Values</h3>
  <p>Display controls how elements are displayed.</p>
  <pre><code class="language-css">.element &#123;
  display: block;
  display: inline;
  display: inline-block;
  display: flex;
  display: grid;
  display: none;
&#125;</code></pre>

<h3>Position Types</h3>
<p>Controls the position of elements.</p>
<pre><code class="language-css">.element &#123;
  position: static;    /* default */
  position: relative;  /* relative to normal position */
  position: absolute;  /* relative to positioned parent */
  position: fixed;     /* relative to viewport */
  position: sticky;    /* hybrid of relative and fixed */
&#125;</code></pre>

<h3>Top Left Bottom Right</h3>
  <pre><code class="language-css">.element &#123;
  top: 10px;
  left: 20px;
  bottom: 30px;
  right: 40px;
&#125;</code></pre>

<h3>Z-index</h3>
<p>Controls the stacking order of elements.</p>
  <pre><code class="language-css">.element &#123;
  z-index: 1;
&#125;</code></pre>

<h2>7. Flexbox</h2>
  <h3>Container Properties</h3>
  <pre><code class="language-css">.container &#123;
  display: flex;
  flex-direction: row | column;
  justify-content: center | space-between | space-around;
  align-items: center | flex-start | flex-end;
  flex-wrap: wrap | nowrap;
&#125;</code></pre>

<h3>Justify Content</h3>
<p>Controls the alignment of items along the main axis.</p>
<pre><code class="language-css">.container &#123;
  justify-content: center | space-between | space-around;
&#125;</code></pre>

<h3>Align Items</h3>
<p>Controls the alignment of items along the cross axis.</p>
<pre><code class="language-css">.container &#123;
  align-items: center | flex-start | flex-end;
&#125;</code></pre>

<h3>Flex Wrap</h3>
<p>Controls how items wrap in a container.</p>
<pre><code class="language-css">.container &#123;
  flex-wrap: wrap | nowrap;
&#125;</code></pre>

<h3>Flex Direction</h3>
<p>Controls the direction of the flex container.</p>
<pre><code class="language-css">.container &#123;
  flex-direction: row | column;
&#125;</code></pre>

<h3>Flex Shrink</h3>
<p>Controls the shrink factor of items.</p>
<pre><code class="language-css">.item &#123;
  flex-shrink: 1;
&#125;</code></pre>

<h3>Flex Grow</h3>
<p>Controls the grow factor of items.</p>
<pre><code class="language-css">.item &#123;
  flex-grow: 1;
&#125;</code></pre>

<h2>8. Grid</h2>
<h3>Display Grid</h3>
<p>Enables CSS Grid on a container.</p>
<pre><code class="language-css">.container &#123;
  display: grid;
&#125;</code></pre>

<h3></h3>Grid Template Columns/Rows</h3>
<p>Sets the number of columns/rows in a grid.</p>
<pre><code class="language-css">.container &#123;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
&#125;</code></pre>

<h3></h3>Gap</h3>
<p>Sets the gap between grid items.</p>
<pre><code class="language-css">.container &#123;
  gap: 10px;
&#125;</code></pre>

<h2>9. Transform & Transition</h2>
<h3>Transform</h3>
<p>Applies a 2D or 3D transformation to an element.</p>
<pre><code class="language-css">.element &#123;
  transform: rotate(20deg);
&#125;</code></pre>

<h3>Transition</h3>
<p>Controls the transition of elements.</p>
<pre><code class="language-css">.element &#123;
  transition: property duration timing-function delay;
&#125;</code></pre>

<h2>10. Media Queries</h2>
<p>Controls the display of elements based on the screen size.</p>
<pre><code class="language-css">@media (max-width: 768px) {
  .element &#123;
    display: none;
  &#125;
}</code></pre>

</div>