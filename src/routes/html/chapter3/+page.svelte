<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';

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
<div>&lt;strong&gt;This text is important.&lt;/strong&gt;</div>
</div>
<ul>
<li>
<div><code><strong>&lt;em&gt;</strong></code>: This tag is used to emphasize text, usually rendered in italics. This is often used for stress or importance in phrases.</div>
</li>
</ul>
<div>
<div>&lt;em&gt;This text is emphasized.&lt;/em&gt;</div>
</div>
<ul>
<li>
<div><code><strong>&lt;u&gt;</strong></code>: This tag underlines the text, although underlining is often reserved for hyperlinked text.</div>
</li>
</ul>
<div>
<div>&lt;u&gt;This text is underlined.&lt;/u&gt;</div>
</div>
<ul>
<li>
<div><code><strong>&lt;strike&gt;</strong></code> (or <code>&lt;del&gt;</code>): This tag represents text that has been deleted or struck through, often used to indicate changes in text.</div>
</li>
</ul>
<div>
<div>&lt;strike&gt;This text is struck through.&lt;/strike&gt;</div>
</div>
<h3>Creating Hyperlinks</h3>
<div>The <code>&lt;a&gt;</code> tag, known as the anchor tag, is used to create hyperlinks. You can link to other web pages, files, images, or even sections of the same page.</div>
<div>The basic syntax of the anchor tag is:</div>
<div>
<div>&lt;a href="URL"&gt;Link Text&lt;/a&gt;</div>
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
<div>&lt;!-- Link to a section --&gt;</div>
<div>&lt;a href="#section1"&gt;Go to Section 1&lt;/a&gt;</div>
<div>&lt;!-- Target section --&gt;</div>
<div>&lt;h2 id="section1"&gt;Section 1&lt;/h2&gt;</div>
</div>
<hr/>
<h2>Practice Workshop: Enhancing Your Profile Page</h2>
<h3>Task: Update the personal profile page</h3>
<div>In this workshop, you will enhance your personal profile HTML page by emphasizing certain text, adding a hyperlink to your favorite website, and creating an email contact link.</div>
<h4>Step 1: Open Your Existing Profile HTML File</h4>
<div>Launch your code editor and open the <code>profile.html</code> file you created in Chapter 2.</div>
<h4>Step 2: Update Your HTML Code</h4>
<div>Make the following updates to your existing code:</div>
<ol>
<li>
<div><strong>Emphasize Text</strong>: Use <code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code> to emphasize specific parts of your description.</div>
</li>
<li>
<div><strong>Add a Link to Your Favorite Website</strong>: Insert a hyperlink pointing to your favorite website.</div>
</li>
<li>
<div><strong>Create an Email Link</strong>: Include an email link that allows others to contact you directly.</div>
</li>
</ol>
<div>Here&rsquo;s an example of how your updated HTML code might look:</div>
<div>

<pre><code>
&lt;!DOCTYPE html&gt;
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
&lt;/html&gt;
</code></pre>

</div>
<h4>Step 3: Save the Changes</h4>
<ol>
<li>
<div>Save your changes in the <code>profile.html</code> file.</div>
</li>
</ol>
<h4>Step 4: Open the Updated HTML File in a Web Browser</h4>
<ol>
<li>
<div>Locate the updated <code>profile.html</code> file where you saved it.</div>
</li>
<li>
<div>Right-click the file and select &ldquo;Open With,&rdquo; followed by your preferred web browser.</div>
</li>
<li>
<div>Verify that the updates are displayed correctly, including emphasized text, a hyperlink, and an email link.</div>
</li>
</ol>
<h3>Deliverables</h3>
<ol>
<li>
<div><strong>Updated profile.html File</strong>: Ensure that your HTML file now includes the text formatting, hyperlink to your favorite website, and your email link.</div>
</li>
<li>
<div><strong>Screenshot</strong>: Capture a screenshot of the rendered page in the browser, showing all enhancements.</div>
</li>
</ol>
<h3>Submission</h3>
<div>Once you have completed the task:</div>
<ul>
<li>
<div>Ensure that your updated <code>profile.html</code> file is correctly formatted and saved.</div>
</li>
<li>
<div>Take a screenshot of the output displayed in the web browser.</div>
</li>
<li>
<div>Submit both the updated HTML file and the screenshot as required by your course guidelines.</div>
</li>
</ul>
<div>Congratulations on enhancing your profile page! With the knowledge of text formatting and creating hyperlinks, you&rsquo;re building a solid foundation for more advanced web content.</div>
  
  


<ChapterNavigation 
    prevHref="/HTMLKit/html/chapter2" 
    nextHref="/HTMLKit/html/chapter4" 
/>

</div>