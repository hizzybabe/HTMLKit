<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
  import SolutionChecker from '$lib/components/SolutionChecker.svelte';
</script>

<div class="container mx-auto px-4 py-8">
  <h1>Chapter 1: Introduction to CSS & Setting Up the Environment</h1>
  
  <h2>Theory</h2>
  <h3>What is CSS?</h3>
  <div>
    CSS, or Cascading Style Sheets, is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS controls the layout of multiple web pages all at once.
  </div>
  
  <h3>Brief History of CSS</h3>
  <div>
    CSS was first proposed by Håkon Wium Lie in 1994. The first version, CSS1, was released in 1996, followed by CSS2 in 1998, and CSS3, which is modularized and still evolving.
  </div>
  
  <h3>Importance of CSS in Web Development</h3>
  <div>
    CSS is essential for web development as it allows developers to create visually engaging web pages. It separates content from design, making it easier to maintain and update.
  </div>
  
  <h2>Setting Up a Code Editor/IDE for CSS Development</h2>
  <div>
    To start writing CSS, you’ll need a code editor or integrated development environment (IDE). Popular options include Visual Studio Code, Sublime Text, and Atom.
  </div>
  
  <h3>Installation Steps:</h3>
  <ol>
    <li>Download your chosen code editor from its official website.</li>
    <li>Follow the installation instructions for your operating system.</li>
    <li>Open the editor and familiarize yourself with the interface.</li>
  </ol>
  
  <div>Once your environment is set up, you’re ready to start coding in CSS!</div>
  
  <hr/>
  
  <!-- Workshop Section -->
  <h2 class="workshop-title">Practice Workshop: Styling a Simple Web Page</h2>
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
    
    <pre><code>{`
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
}`}</code></pre>
    
    <h4>Step 4: Link Your CSS File to Your HTML</h4>
    <div>In your HTML file, add the following line within the <code>&lt;head&gt;</code> section:</div>
    
    <pre><code>{`<link rel="stylesheet" href="styles.css">`}</code></pre>
    
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

    <SolutionChecker />
    
    <div>Congratulations on creating your first CSS styles! This fundamental skill sets the stage for more advanced web development topics.</div>
  </div>

  <ChapterNavigation 
    prevHref="/css" 
    nextHref="/css/chapter2" 
  />
</div>
