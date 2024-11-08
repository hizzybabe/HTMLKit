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
  <h1>Chapter 5: Forms and Input Elements</h1>
  <h2>Theory</h2>
  <h3>Introduction to HTML Forms</h3>
  <div>HTML forms are essential tools for collecting user input. The <code>&lt;form&gt;</code> element wraps all the elements that make up the form and provides options to handle user submissions. Forms can be used for various purposes such as contact forms, surveys, and login forms.</div>
  <div><strong>Basic Structure of a Form</strong>:</div>
  <div>
  <div>&lt;form action="URL" method="POST"&gt;</div>
  <div>&lt;!-- Form Elements Go Here --&gt;</div>
  <div>&lt;/form&gt;</div>
  </div>
  <ul>
  <li>
  <div><code><strong>action</strong></code>: The URL where the form data will be sent when submitted.</div>
  </li>
  <li>
  <div><code><strong>method</strong></code>: The HTTP method used when sending form data, typically either <code>GET</code> or <code>POST</code>.</div>
  </li>
  </ul>
  <h3>Input Types</h3>
  <div>The <code>&lt;input&gt;</code> element is one of the most crucial elements of a form. It can take various types, each serving different purposes. Here are some common input types:</div>
  <ul>
  <li>
  <div><strong>Text</strong> (<code>&lt;input type="text"&gt;</code>): For single-line text input.</div>
  </li>
  </ul>
  <div>
  <div>&lt;input type="text" name="username" placeholder="Enter your name"&gt;</div>
  </div>
  <ul>
  <li>
  <div><strong>Password</strong> (<code>&lt;input type="password"&gt;</code>): Hides the user&rsquo;s input for sensitive data.</div>
  </li>
  </ul>
  <div>
  <div>&lt;input type="password" name="password" placeholder="Enter your password"&gt;</div>
  </div>
  <ul>
  <li>
  <div><strong>Email</strong> (<code>&lt;input type="email"&gt;</code>): Validates that the input is in the form of an email address.</div>
  </li>
  </ul>
  <div>
  <div>&lt;input type="email" name="email" placeholder="Enter your email"&gt;</div>
  </div>
  <ul>
  <li>
  <div><strong>Number</strong> (<code>&lt;input type="number"&gt;</code>): Accepts numerical input only.</div>
  </li>
  </ul>
  <div>
  <div>&lt;input type="number" name="age" min="1" max="120"&gt;</div>
  </div>
  <h3>Other Form Elements</h3>
  <div>In addition to the <code>&lt;input&gt;</code> element, several other elements can be utilized to collect user input:</div>
  <ul>
  <li>
  <div><code><strong>&lt;textarea&gt;</strong></code>: Used for multi-line text input.</div>
  </li>
  </ul>
  <div>
  <div>&lt;textarea name="message" placeholder="Enter your message" rows="4" cols="50"&gt;&lt;/textarea&gt;</div>
  </div>
  <ul>
  <li>
  <div><code><strong>&lt;select&gt;</strong></code>: A dropdown list that allows users to select one option from a list.</div>
  </li>
  </ul>
  <div>
  <div>&lt;select name="inquiryType"&gt;</div>
  <div>&lt;option value="general"&gt;General Inquiry&lt;/option&gt;</div>
  <div>&lt;option value="support"&gt;Support&lt;/option&gt;</div>
  <div>&lt;option value="feedback"&gt;Feedback&lt;/option&gt;</div>
  <div>&lt;/select&gt;</div>
  </div>
  <ul>
  <li>
  <div><code><strong>&lt;button&gt;</strong></code>: A button that can be customized to submit the form or trigger JavaScript actions.</div>
  </li>
  </ul>
  <div>
  <div>&lt;button type="submit"&gt;Submit&lt;/button&gt;</div>
  </div>
  <hr/>
  <h2>Practice Workshop: Creating a Simple Contact Form</h2>
  <h3>Task: Add a contact form to your personal profile page</h3>
  <div>In this workshop, you will enhance your personal profile page by adding a contact form with fields for the user&rsquo;s name, email, message, a dropdown for the inquiry type, and a submit button.</div>
  <h4>Step 1: Open Your Existing Profile HTML File</h4>
  <div>Launch your code editor and open the <code>profile.html</code> file you created in previous chapters.</div>
  <h4>Step 2: Update Your HTML Code</h4>
  <div>Add the following contact form within the <code>&lt;body&gt;</code> section of your HTML, ideally after your existing content:</div>
  <div>
  <div>&lt;h2&gt;Contact Me&lt;/h2&gt;</div>
  <div>&lt;form action="submit_form.php" method="POST"&gt;</div>
  <div>&lt;label for="name"&gt;Name:&lt;/label&gt;&lt;br&gt;</div>
  <div>&lt;input type="text" id="name" name="name" placeholder="Enter your name" required&gt;&lt;br&gt;&lt;br&gt;</div>
  <div>&lt;label for="email"&gt;Email:&lt;/label&gt;&lt;br&gt;</div>
  <div>&lt;input type="email" id="email" name="email" placeholder="Enter your email" required&gt;&lt;br&gt;&lt;br&gt;</div>
  <div>&lt;label for="inquiryType"&gt;Inquiry Type:&lt;/label&gt;&lt;br&gt;</div>
  <div>&lt;select id="inquiryType" name="inquiryType"&gt;</div>
  <div>&lt;option value="general"&gt;General Inquiry&lt;/option&gt;</div>
  <div>&lt;option value="support"&gt;Support&lt;/option&gt;</div>
  <div>&lt;option value="feedback"&gt;Feedback&lt;/option&gt;</div>
  <div>&lt;/select&gt;&lt;br&gt;&lt;br&gt;</div>
  <div>&lt;label for="message"&gt;Message:&lt;/label&gt;&lt;br&gt;</div>
  <div>&lt;textarea id="message" name="message" rows="4" cols="50" placeholder="Enter your message" required&gt;&lt;/textarea&gt;&lt;br&gt;&lt;br&gt;</div>
  <div>&lt;button type="submit"&gt;Submit&lt;/button&gt;</div>
  <div>&lt;/form&gt;</div>
  </div>
  <h3>Notes on the Form Code:</h3>
  <ul>
  <li>
  <div>Each <code>input</code> and <code>textarea</code> has an associated <code>label</code> that helps identify the input field. The <code>for</code> attribute in the label corresponds to the <code>id</code> of the input.</div>
  </li>
  <li>
  <div>The <code>required</code> attribute ensures that users fill out the fields before submitting the form.</div>
  </li>
  <li>
  <div>Adjust the <code>action</code> attribute as necessary depending on your setup or if you&rsquo;re testing locally (for local tests, this could be an empty string or a relevant URL).</div>
  </li>
  </ul>
  <h4>Step 3: Save the Changes</h4>
  <ol>
  <li>
  <div>Save your modifications to the <code>profile.html</code> file.</div>
  </li>
  </ol>
  <h4>Step 4: Open the Updated HTML File in a Web Browser</h4>
  <ol>
  <li>
  <div>Locate your updated <code>profile.html</code> file.</div>
  </li>
  <li>
  <div>Right-click the file and select &ldquo;Open With,&rdquo; followed by your preferred web browser.</div>
  </li>
  <li>
  <div>Verify that the contact form renders correctly, and all fields are displayed as intended.</div>
  </li>
  </ol>
  <h3>Deliverables</h3>
  <ol>
  <li>
  <div><strong>Updated profile.html File</strong>: Ensure that your HTML file includes the new contact form with fields for name, email, message, a dropdown for inquiry type, and the submit button.</div>
  </li>
  <li>
  <div><strong>Screenshot</strong>: Capture a screenshot of the rendered form in the browser, showing all fields.</div>
  </li>
  </ol>
  <h3>Submission</h3>
  <div>Once you have completed the task:</div>
  <ul>
  <li>
  <div>Ensure that your updated <code>profile.html</code> file is formatted correctly and saved.</div>
  </li>
  <li>
  <div>Take a screenshot of the output displayed in the web browser.</div>
  </li>
  <li>
  <div>Submit both the updated HTML file and the screenshot as required by your course guidelines.</div>
  </li>
  </ul>
  <div>Congratulations on adding a contact form to your profile page! Forms are crucial for interacting with users and collecting data effectively, a key skill in web development.</div>

  <!-- Workshop Section -->


  <!-- Navigation -->
  <ChapterNavigation 
  prevHref="/HTMLKit/html/chapter4" 
  nextHref="/HTMLKit/html/chapter6" 
/>


</main>
