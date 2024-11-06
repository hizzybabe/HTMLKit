<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';

  let showCode = true;
  let showCode1 = true;
  let showCode2 = true;
  let showCode3 = true;
</script>

<div class="container mx-auto px-4 py-8">


  <h1>Chapter 4: Images, Lists, and Tables</h1>
  <h2>Theory</h2>
  <h3>Adding Images</h3>
  <div>The <code>&lt;img&gt;</code> tag is used to embed images in an HTML document. This tag is self-closing, meaning it does not require a separate closing tag. To use the <code>&lt;img&gt;</code> tag, you need to provide at least the <code>src</code> (source) attribute, which specifies the image file location, and the <code>alt</code> (alternative text) attribute, which describes the image for screen readers or when the image cannot be displayed.</div>
  <div><strong>Syntax</strong>:</div>
  <div>
  <div>&lt;img src="path/to/image.jpg" alt="Description of the image"&gt;</div>
  </div>
  <div><strong>Example</strong>:</div>
  <div>
  <div>&lt;img src="https://www.example.com/product.jpg" alt="An amazing product"&gt;</div>
  </div>
  <h3>Unordered, Ordered, and Definition Lists</h3>
  <div>HTML provides different types of lists to organize content:</div>
  <ol>
  <li>
  <div><strong>Unordered Lists (</strong><code><strong>&lt;ul&gt;</strong></code><strong>)</strong>: This type of list is used for items that do not require a specific order. Each item is typically marked with a bullet point.</div>
  </li>
  </ol>
  <div>
  <div>&lt;ul&gt;</div>
  <div>&lt;li&gt;Feature 1&lt;/li&gt;</div>
  <div>&lt;li&gt;Feature 2&lt;/li&gt;</div>
  <div>&lt;li&gt;Feature 3&lt;/li&gt;</div>
  <div>&lt;/ul&gt;</div>
  </div>
  <ol>
  <li>
  <div><strong>Ordered Lists (</strong><code><strong>&lt;ol&gt;</strong></code><strong>)</strong>: This type of list is used when the order of items is important. Each item is numbered automatically.</div>
  </li>
  </ol>
  <div>
  <div>&lt;ol&gt;</div>
  <div>&lt;li&gt;Step 1&lt;/li&gt;</div>
  <div>&lt;li&gt;Step 2&lt;/li&gt;</div>
  <div>&lt;li&gt;Step 3&lt;/li&gt;</div>
  <div>&lt;/ol&gt;</div>
  </div>
  <ol>
  <li>
  <div><strong>Definition Lists (</strong><code><strong>&lt;dl&gt;</strong></code><strong>)</strong>: This type is used to define terms and their corresponding descriptions.</div>
  </li>
  </ol>
  <div>
  <div>&lt;dl&gt;</div>
  <div>&lt;dt&gt;Term 1&lt;/dt&gt;</div>
  <div>&lt;dd&gt;Description for term 1.&lt;/dd&gt;</div>
  <div>&lt;dt&gt;Term 2&lt;/dt&gt;</div>
  <div>&lt;dd&gt;Description for term 2.&lt;/dd&gt;</div>
  <div>&lt;/dl&gt;</div>
  </div>
  <h3>Creating Tables</h3>
  <div>Tables in HTML allow you to display data in a structured format. You can create a table using the <code>&lt;table&gt;</code> element, along with <code>&lt;tr&gt;</code> for table rows and <code>&lt;td&gt;</code> for table data cells.</div>
  <div><strong>Basic Structure</strong>:</div>
  <div>
  <div>&lt;table&gt;</div>
  <div>&lt;tr&gt;</div>
  <div>&lt;th&gt;Header 1&lt;/th&gt;</div>
  <div>&lt;th&gt;Header 2&lt;/th&gt;</div>
  <div>&lt;/tr&gt;</div>
  <div>&lt;tr&gt;</div>
  <div>&lt;td&gt;Row 1, Cell 1&lt;/td&gt;</div>
  <div>&lt;td&gt;Row 1, Cell 2&lt;/td&gt;</div>
  <div>&lt;/tr&gt;</div>
  <div>&lt;tr&gt;</div>
  <div>&lt;td&gt;Row 2, Cell 1&lt;/td&gt;</div>
  <div>&lt;td&gt;Row 2, Cell 2&lt;/td&gt;</div>
  <div>&lt;/tr&gt;</div>
  <div>&lt;/table&gt;</div>
  </div>
  <ul>
  <li>
  <div><code><strong>&lt;th&gt;</strong></code>: This tag is used to define header cells in a table, which are usually bold and centered.</div>
  </li>
  <li>
  <div><code><strong>&lt;td&gt;</strong></code>: This tag defines regular data cells within a table.</div>
  </li>
  </ul>
  <hr/>
  <h2>Practice Workshop: Building a Product Showcase</h2>
  <h3>Task: Create an HTML page showcasing a product</h3>
  <div>In this workshop, you will create a product showcase page that includes an image of a product, a list of its features, and a table comparing it to a competitor&rsquo;s product.</div>
  <h4>Step 1: Open Your Code Editor</h4>
  <div>Launch your preferred code editor.</div>
  <h4>Step 2: Create a New HTML File</h4>
  <ol>
  <li>
  <div>Create a new file and name it <code>product.html</code>.</div>
  </li>
  </ol>
  <h4>Step 3: Write the Basic HTML Structure</h4>
  <div>Begin by adding the following basic structure to your HTML file:</div>
  <div>
  <div>&lt;!DOCTYPE html&gt;</div>
  <div>&lt;html lang="en"&gt;</div>
  <div>&lt;head&gt;</div>
  <div>&lt;meta charset="UTF-8"&gt;</div>
  <div>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</div>
  <div>&lt;title&gt;Product Showcase&lt;/title&gt;</div>
  <div>&lt;/head&gt;</div>
  <div>&lt;body&gt;</div>
  <div>&lt;h1&gt;Product Name&lt;/h1&gt;</div>
  <div>&lt;img src="path/to/product-image.jpg" alt="Product Image"&gt;</div>
  <div>&lt;h2&gt;Features&lt;/h2&gt;</div>
  <div>&lt;ul&gt;</div>
  <div>&lt;li&gt;Feature 1&lt;/li&gt;</div>
  <div>&lt;li&gt;Feature 2&lt;/li&gt;</div>
  <div>&lt;li&gt;Feature 3&lt;/li&gt;</div>
  <div>&lt;/ul&gt;</div>
  <div>&lt;h2&gt;Comparison Table&lt;/h2&gt;</div>
  <div>&lt;table border="1"&gt;</div>
  <div>&lt;tr&gt;</div>
  <div>&lt;th&gt;Feature&lt;/th&gt;</div>
  <div>&lt;th&gt;Our Product&lt;/th&gt;</div>
  <div>&lt;th&gt;Competitor's Product&lt;/th&gt;</div>
  <div>&lt;/tr&gt;</div>
  <div>&lt;tr&gt;</div>
  <div>&lt;td&gt;Feature 1&lt;/td&gt;</div>
  <div>&lt;td&gt;Yes&lt;/td&gt;</div>
  <div>&lt;td&gt;No&lt;/td&gt;</div>
  <div>&lt;/tr&gt;</div>
  <div>&lt;tr&gt;</div>
  <div>&lt;td&gt;Feature 2&lt;/td&gt;</div>
  <div>&lt;td&gt;Yes&lt;/td&gt;</div>
  <div>&lt;td&gt;Yes&lt;/td&gt;</div>
  <div>&lt;/tr&gt;</div>
  <div>&lt;tr&gt;</div>
  <div>&lt;td&gt;Feature 3&lt;/td&gt;</div>
  <div>&lt;td&gt;Yes&lt;/td&gt;</div>
  <div>&lt;td&gt;Yes&lt;/td&gt;</div>
  <div>&lt;/tr&gt;</div>
  <div>&lt;/table&gt;</div>
  <div>&lt;/body&gt;</div>
  <div>&lt;/html&gt;</div>
  </div>
  <h4>Step 4: Replace Example Content</h4>
  <ol>
  <li>
  <div>Replace <code>"path/to/product-image.jpg"</code> with the actual URL of your product image. Make sure to use a real image link or upload an image locally and provide the correct path.</div>
  </li>
  <li>
  <div>Replace <code><strong>Product Name</strong></code> with the actual name of your product.</div>
  </li>
  <li>
  <div>Update the list of features and the table comparison as relevant to your product and its competitor.</div>
  </li>
  </ol>
  <h4>Step 5: Save the File</h4>
  <ol>
  <li>
  <div>Save your <code>product.html</code> file after making all necessary changes.</div>
  </li>
  </ol>
  <h4>Step 6: Open the HTML File in a Web Browser</h4>
  <ol>
  <li>
  <div>Locate the <code>product.html</code> file where you saved it.</div>
  </li>
  <li>
  <div>Right-click the file and select &ldquo;Open With,&rdquo; followed by your preferred web browser.</div>
  </li>
  <li>
  <div>Verify that the product showcase displays correctly, including the product image, feature list, and comparison table.</div>
  </li>
  </ol>
  <h3>Deliverables</h3>
  <ol>
  <li>
  <div><strong>product.html File</strong>: Ensure that your HTML file includes the product image, features list, and comparison table.</div>
  </li>
  <li>
  <div><strong>Screenshot</strong>: Capture a screenshot of the rendered page in the browser, showing the complete product showcase.</div>
  </li>
  </ol>
  <h3>Submission</h3>
  <div>Once you have completed your task:</div>
  <ul>
  <li>
  <div>Ensure that your <code>product.html</code> file is correctly formatted and saved.</div>
  </li>
  <li>
  <div>Take a screenshot of the output displayed in the web browser.</div>
  </li>
  <li>
  <div>Submit both the HTML file and the screenshot as required by your course guidelines.</div>
  </li>
  </ul>
  <div>Congratulations on creating a product showcase page! This practice enhances your skills in working with images, lists, and tables, all essential elements of web design.</div>
  
  


<ChapterNavigation 
    prevHref="/HTMLKit/html/chapter3" 
    nextHref="/HTMLKit/html/chapter5" 
/>

</div>