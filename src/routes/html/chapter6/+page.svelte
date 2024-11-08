<script>
  const chapterContent = {
    title: "Introduction to HTML & Setup",
    sections: [
      {
        heading: "What is HTML?",
        content: "HTML (HyperText Markup Language) is the standard markup language for creating web pages..."
      },
      {
        heading: "Brief History",
        content: "HTML was created by Tim Berners-Lee in 1991..."
      },
      {
        heading: "Environment Setup",
        content: "To start writing HTML, you'll need a text editor..."
      }
    ],
    workshop: {
      title: "Hello World Workshop",
      instructions: "Create your first HTML page:",
      codeExample: `<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>`
    }
  };
</script>

<main class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{chapterContent.title}</h1>

  <!-- Chapter Content -->
  <h1>Chapter 6: Semantic HTML &amp; Accessibility</h1>
  <h2>Theory</h2>
  <h3>Introduction to Semantic HTML Elements</h3>
  <div>Semantic HTML uses HTML elements that clearly describe their meaning and role in the document structure. By using semantic tags, developers can improve the clarity of their content, making it easier for both browsers and assistive technologies to interpret and render. Here are some commonly used semantic elements:</div>
  <ul>
  <li>
  <div><code><strong>&lt;header&gt;</strong></code>: Represents introductory content or a group of navigational links. It typically contains headings, logos, and navigation menus.</div>
  </li>
  </ul>
  <div>
  <div>&lt;header&gt;</div>
  <div>&lt;h1&gt;My Personal Profile&lt;/h1&gt;</div>
  <div>&lt;nav&gt;...&lt;/nav&gt;</div>
  <div>&lt;/header&gt;</div>
  </div>
  <ul>
  <li>
  <div><code><strong>&lt;nav&gt;</strong></code>: Defines navigation links. It helps search engines and assistive technologies understand that the links contained are for navigation purposes.</div>
  </li>
  </ul>
  <div>
  <div>&lt;nav&gt;</div>
  <div>&lt;ul&gt;</div>
  <div>&lt;li&gt;&lt;a href="#about"&gt;About&lt;/a&gt;&lt;/li&gt;</div>
  <div>&lt;li&gt;&lt;a href="#contact"&gt;Contact&lt;/a&gt;&lt;/li&gt;</div>
  <div>&lt;/ul&gt;</div>
  <div>&lt;/nav&gt;</div>
  </div>
  <ul>
  <li>
  <div><code><strong>&lt;main&gt;</strong></code>: Represents the main content of the document. There should be only one <code>&lt;main&gt;</code> element in a document.</div>
  </li>
  </ul>
  <div>
  <div>&lt;main&gt;</div>
  <div>&lt;section&gt;...&lt;/section&gt;</div>
  <div>&lt;section&gt;...&lt;/section&gt;</div>
  <div>&lt;/main&gt;</div>
  </div>
  <ul>
  <li>
  <div><code><strong>&lt;section&gt;</strong></code>: Represents a thematic grouping of content, typically with a heading. Used to break down content into manageable parts.</div>
  </li>
  </ul>
  <div>
  <div>&lt;section&gt;</div>
  <div>&lt;h2&gt;About Me&lt;/h2&gt;</div>
  <div>&lt;p&gt;...&lt;/p&gt;</div>
  <div>&lt;/section&gt;</div>
  </div>
  <ul>
  <li>
  <div><code><strong>&lt;footer&gt;</strong></code>: Represents the footer for its nearest sectioning element, which typically contains copyright information or links to related documents.</div>
  </li>
  </ul>
  <div>
  <div>&lt;footer&gt;</div>
  <div>&lt;p&gt;&copy; 2023 My Personal Profile&lt;/p&gt;</div>
  <div>&lt;/footer&gt;</div>
  </div>
  <h3>Principles of Web Accessibility in HTML</h3>
  <div>Web accessibility is about making websites usable for people of all abilities and disabilities. Here are important principles to consider when creating accessible web pages:</div>
  <ol>
  <li>
  <div><strong>Perceivable</strong>: Ensure that all information presented on the page is accessible to all users. For images, provide alternative text using the <code>alt</code> attribute, and make sure text is readable with adequate contrast.</div>
  </li>
  </ol>
  <div>
  <div>&lt;img src="profile.jpg" alt="A photo of me"&gt;</div>
  </div>
  <ol>
  <li>
  <div><strong>Operable</strong>: Users should be able to navigate and interact with all content using a keyboard or other assistive technologies without time constraints.</div>
  </li>
  <li>
  <div><strong>Understandable</strong>: Content should be readable and understandable. Use clear language and avoid jargon. Label form fields clearly.</div>
  </li>
  <li>
  <div><strong>Robust</strong>: Ensure that your website is compatible with current and future user agents. This includes compatibility with assistive technologies.</div>
  </li>
  </ol>
  <div><strong>Accessibility Metadata</strong>: Consider implementing ARIA (Accessible Rich Internet Applications) attributes when necessary, which can provide additional information on the roles and properties of elements.</div>
  <div>
  <div>&lt;button aria-label="Close" onclick="closeModal()"&gt;X&lt;/button&gt;</div>
  </div>
  <hr/>
  <h2>Practice Workshop: Enhancing Accessibility &amp; Semantics</h2>
  <h3>Task: Refactor your personal profile page to use semantic HTML and improve accessibility</h3>
  <div>In this workshop, you will update your personal profile page by implementing semantic HTML elements, ensuring images have appropriate alt attributes, and adding ARIA attributes where necessary.</div>
  <h4>Step 1: Open Your Existing Profile HTML File</h4>
  <div>Launch your code editor and open the <code>profile.html</code> file you created in previous chapters.</div>
  <h4>Step 2: Refactor Your HTML Code</h4>
  <div>Make the following updates to your HTML file:</div>
  <ol>
  <li>
  <div><strong>Use Appropriate Semantic Elements</strong>: Wrap sections of your profile with appropriate semantic tags. Here is an example of how you might structure your page:</div>
  </li>
  </ol>
  <div>
  <div>&lt;!DOCTYPE html&gt;</div>
  <div>&lt;html lang="en"&gt;</div>
  <div>&lt;head&gt;</div>
  <div>&lt;meta charset="UTF-8"&gt;</div>
  <div>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</div>
  <div>&lt;title&gt;My Profile&lt;/title&gt;</div>
  <div>&lt;/head&gt;</div>
  <div>&lt;body&gt;</div>
  <div>&lt;header&gt;</div>
  <div>&lt;h1&gt;Your Name&lt;/h1&gt;</div>
  <div>&lt;nav&gt;</div>
  <div>&lt;ul&gt;</div>
  <div>&lt;li&gt;&lt;a href="#about"&gt;About&lt;/a&gt;&lt;/li&gt;</div>
  <div>&lt;li&gt;&lt;a href="#contact"&gt;Contact&lt;/a&gt;&lt;/li&gt;</div>
  <div>&lt;/ul&gt;</div>
  <div>&lt;/nav&gt;</div>
  <div>&lt;/header&gt;</div>
  <div>&lt;main&gt;</div>
  <div>&lt;section id="about"&gt;</div>
  <div>&lt;h2&gt;About Me&lt;/h2&gt;</div>
  <div>&lt;img src="path/to/profile-image.jpg" alt="A photo of me"&gt;</div>
  <div>&lt;p&gt;Hello! My name is &lt;strong&gt;Your Name&lt;/strong&gt;. I am a &lt;em&gt;[your profession/education]&lt;/em&gt;...&lt;/p&gt;</div>
  <div>&lt;/section&gt;</div>
  <div>&lt;section id="contact"&gt;</div>
  <div>&lt;h2&gt;Contact Me&lt;/h2&gt;</div>
  <div>&lt;form action="submit_form.php" method="POST"&gt;</div>
  <div>&lt;label for="name"&gt;Name:&lt;/label&gt;&lt;br&gt;</div>
  <div>&lt;input type="text" id="name" name="name" placeholder="Enter your name" required&gt;&lt;br&gt;&lt;br&gt;</div>
  <div>&lt;label for="email"&gt;Email:&lt;/label&gt;&lt;br&gt;</div>
  <div>&lt;input type="email" id="email" name="email" placeholder="Enter your email" required&gt;&lt;br&gt;&lt;br&gt;</div>
  <div>&lt;label for="inquiryType"&gt;Inquiry Type:&lt;/label&gt;&lt;br&gt;</div>
  <div>&lt;select id="inquiryType" name="inquiryType" required&gt;</div>
  <div>&lt;option value="general"&gt;General Inquiry&lt;/option&gt;</div>
  <div>&lt;option value="support"&gt;Support&lt;/option&gt;</div>
  <div>&lt;option value="feedback"&gt;Feedback&lt;/option&gt;</div>
  <div>&lt;/select&gt;&lt;br&gt;&lt;br&gt;</div>
  <div>&lt;label for="message"&gt;Message:&lt;/label&gt;&lt;br&gt;</div>
  <div>&lt;textarea id="message" name="message" rows="4" cols="50" placeholder="Enter your message" required&gt;&lt;/textarea&gt;&lt;br&gt;&lt;br&gt;</div>
  <div>&lt;button type="submit"&gt;Submit&lt;/button&gt;</div>
  <div>&lt;/form&gt;</div>
  <div>&lt;/section&gt;</div>
  <div>&lt;/main&gt;</div>
  <div>&lt;footer&gt;</div>
  <div>&lt;p&gt;&copy; 2023 My Personal Profile&lt;/p&gt;</div>
  <div>&lt;/footer&gt;</div>
  <div>&lt;/body&gt;</div>
  <div>&lt;/html&gt;</div>
  </div>
  <ol>
  <li>
  <div><strong>Ensure All Images Have </strong><code><strong>alt</strong></code><strong> Attributes</strong>: Make sure that all <code>&lt;img&gt;</code> tags in your code have descriptive alt text.</div>
  </li>
  <li>
  <div><strong>Implement ARIA Attributes Where Necessary</strong>: If you&rsquo;ve included any dynamic content or interactive elements that require additional information for accessibility, consider adding ARIA attributes.</div>
  </li>
  </ol>
  <h4>Step 3: Save the Changes</h4>
  <ol>
  <li>
  <div>Save your modifications to the <code>profile.html</code> file.</div>
  </li>
  </ol>
  <h4>Step 4: Run an Accessibility Audit</h4>
  <div>To assess the accessibility of your updated page, you can use tools like:</div>
  <ul>
  <li>
  <div><strong>WAVE</strong>: A web accessibility evaluation tool that helps identify accessibility errors in web pages.</div>
  </li>
  <li>
  <div><strong>Lighthouse</strong>: Built into Google Chrome Developer Tools, it provides audits on performance, accessibility, SEO, and more.</div>
  </li>
  </ul>
  <div><strong>Running Lighthouse</strong>:</div>
  <ol>
  <li>
  <div>Open your <code>profile.html</code> in Chrome.</div>
  </li>
  <li>
  <div>Right-click anywhere on the page and select &ldquo;Inspect.&rdquo;</div>
  </li>
  <li>
  <div>Go to the &ldquo;Lighthouse&rdquo; tab.</div>
  </li>
  <li>
  <div>Click on &ldquo;Generate report.&rdquo;</div>
  </li>
  </ol>
  <div><strong>Using WAVE</strong>:</div>
  <ol>
  <li>
  <div>Navigate to the WAVE website (<a href="https://wave.webaim.org/"><u>https://wave.webaim.org/</u></a>).</div>
  </li>
  <li>
  <div>Input the URL of your updated profile page, or upload your HTML file.</div>
  </li>
  </ol>
  <h4>Step 5: Generate and Document the Accessibility Audit Report</h4>
  <ol>
  <li>
  <div>Document the results of your accessibility audit. Make note of any suggestions and the overall score or findings provided by the tool.</div>
  </li>
  <li>
  <div>If there are any issues flagged, make necessary adjustments to improve accessibility.</div>
  </li>
  </ol>
  <h3>Deliverables</h3>
  <ol>
  <li>
  <div><strong>Updated profile.html File</strong>: Ensure that your HTML file now uses semantic HTML elements, has appropriate alt attributes for all images, and includes any necessary ARIA attributes.</div>
  </li>
  <li>
  <div><strong>Accessibility Audit Report</strong>: Provide a summary of the accessibility audit findings from your chosen tool, noting any areas of improvement and changes made to the HTML.</div>
  </li>
  </ol>
  <h3>Submission</h3>
  <div>Once you have completed the task:</div>
  <ul>
  <li>
  <div>Ensure that your updated <code>profile.html</code> file is formatted correctly and saved.</div>
  </li>
  <li>
  <div>Compile the accessibility audit findings into a report.</div>
  </li>
  <li>
  <div>Submit both the updated HTML file and the audit report as directed by your course guidelines.</div>
  </li>
  </ul>
  <div>Congratulations on enhancing your personal profile page with semantic HTML and improved accessibility! Understanding and applying these principles is crucial for creating inclusive web experiences.</div>
  

  <!-- Workshop Section -->


  <!-- Navigation -->
  <div class="mt-8 flex justify-between">
    <a href="/html" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
      Back to Chapters
    </a>
    <a href="/html/chapter2" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
      Next Chapter
    </a>
  </div>
</main>
