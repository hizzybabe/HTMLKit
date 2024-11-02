<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
</script>

<div class="container mx-auto px-4 py-8">


  <h1>Chapter 1: Introduction to HTML &amp; Setting Up the Environment</h1>
  <h2>Theory</h2>
  <h3>What is HTML?</h3>
  <div>HTML, or HyperText Markup Language, is the standard markup language used to create web pages. It provides the basic structure of the website, which is enhanced and modified by CSS (Cascading Style Sheets) and JavaScript. HTML uses tags to define elements and structure content, allowing developers to outline headings, paragraphs, links, images, lists, and more.</div>
  <h3>Brief History of HTML</h3>
  <div>HTML was first developed by Tim Berners-Lee in 1991 as a means to facilitate the sharing of documents across the internet. The initial version, HTML 1.0, contained basic elements like headings, paragraphs, and links. Over the years, HTML has evolved significantly:</div>
  <ul>
  <li>
  <div><strong>HTML 2.0</strong>: Released in 1995, it standardized features and forms.</div>
  </li>
  <li>
  <div><strong>HTML 3.2</strong>: Introduced in 1997, it included support for applets and tables.</div>
  </li>
  <li>
  <div><strong>HTML 4.01</strong>: Launched in 1999, this version focused on separating content from presentation and introduced new elements for multimedia.</div>
  </li>
  <li>
  <div><strong>HTML5</strong>: Released in 2014, HTML5 added new semantic elements, video and audio support, and APIs for complex web applications, making it the foundation for modern web development.</div>
  </li>
  </ul>
  <h3>Importance of HTML in Web Development</h3>
  <div>HTML is fundamental in web development; it is the backbone of any website. Understanding HTML is essential for developers because:</div>
  <ul>
  <li>
  <div>It establishes the structure and layout of web pages.</div>
  </li>
  <li>
  <div>It enables the embedding of multimedia content.</div>
  </li>
  <li>
  <div>It plays a significant role in search engine optimization (SEO) as proper use of HTML tags can improve a site&rsquo;s visibility.</div>
  </li>
  <li>
  <div>It is crucial for accessibility, ensuring that web content can be accessed by all users, including those with disabilities.</div>
  </li>
  </ul>
  <h3>Setting Up a Code Editor/IDE for HTML Development</h3>
  <div>To start writing HTML, you&rsquo;ll need a code editor or integrated development environment (IDE). Popular options include:</div>
  <ul>
  <li>
  <div><strong>Visual Studio Code</strong>: A free and powerful code editor with many extensions and built-in features tailored for web development.</div>
  </li>
  <li>
  <div><strong>Sublime Text</strong>: A sophisticated text editor for code, markup, and prose with a simple interface.</div>
  </li>
  <li>
  <div><strong>Atom</strong>: An open-source text editor created by GitHub, customizable and with a vibrant package ecosystem.</div>
  </li>
  <li>
  <div><strong>Brackets</strong>: Specifically designed for web development, Brackets offers a live preview feature.</div>
  </li>
  </ul>
  <div><strong>Installation Steps:</strong></div>
  <ol>
  <li>
  <div>Download your chosen code editor from its official website.</div>
  </li>
  <li>
  <div>Follow the installation instructions for your operating system.</div>
  </li>
  <li>
  <div>Open the editor and familiarize yourself with the interface.</div>
  </li>
  </ol>
  <div>Once your environment is set up, you&rsquo;re ready to start coding in HTML!</div>
  <hr/>
  <h2>Practice Workshop: &ldquo;Hello, World!&rdquo; in HTML</h2>
  <h3>Task: Create a simple HTML page that displays &ldquo;Hello, World!&rdquo;.</h3>
  <h4>Step 1: Open Your Code Editor</h4>
  <ol>
  <li>
  <div>Launch your installed code editor.</div>
  </li>
  </ol>
  <h4>Step 2: Create a New File</h4>
  <ol>
  <li>
  <div>Click on &ldquo;File,&rdquo; then &ldquo;New File&rdquo; (or use the shortcut, usually <code>Ctrl + N</code> or <code>Cmd + N</code>).</div>
  </li>
  </ol>
  <h4>Step 3: Write the Basic HTML Structure</h4>
  <div>In the new file, enter the following code to create a simple HTML document:</div>
  <code>
    <!DOCTYPE html>

    <html lang="en">
    
    <head>
    
    <meta charset="UTF-8">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Hello, World!</title>
    
    </head>
    
    <body>
    
    <h1>Hello, World!</h1>
    
    </body>
    
    </html>
  </code>
  <h3>Step 4: Save the File</h3>
  <ol>
  <li>
  <div>Click on &ldquo;File&rdquo; then &ldquo;Save As&rdquo; (or use the shortcut, usually <code>Ctrl + S</code> or <code>Cmd + S</code>).</div>
  </li>
  <li>
  <div>Name the file <code>hello.html</code> and ensure you save it with the <code>.html</code> extension.</div>
  </li>
  </ol>
  <h3>Step 5: Open the HTML File in a Web Browser</h3>
  <ol>
  <li>
  <div>Locate the <code>hello.html</code> file where you saved it.</div>
  </li>
  <li>
  <div>Right-click on the file and select &ldquo;Open With&rdquo; followed by your preferred web browser (e.g., Chrome, Firefox).</div>
  </li>
  <li>
  <div>You should see a webpage displaying &ldquo;Hello, World!&rdquo; in a large font.</div>
  </li>
  </ol>
  <h3>Deliverables</h3>
  <ol>
  <li>
  <div><strong>hello.html File</strong>: Ensure your final HTML file includes the basic structure as shown above.</div>
  </li>
  <li>
  <div><strong>Screenshot</strong>: Capture a screenshot of the browser displaying the &ldquo;Hello, World!&rdquo; message.</div>
  </li>
  </ol>
  <h3>Submission</h3>
  <div>Once you have completed your task:</div>
  <ul>
  <li>
  <div>Make sure your <code>hello.html</code> file is correctly formatted and saved.</div>
  </li>
  <li>
  <div>Take a screenshot of the output displayed in the web browser.</div>
  </li>
  <li>
  <div>Submit both the HTML file and the screenshot as per your course requirements.</div>
  </li>
  </ul>
  <div>Congratulations on creating your first HTML page! This fundamental skill sets the stage for more advanced web development topics.</div>
  


<ChapterNavigation 
    prevHref="/" 
    nextHref="/chapter2" 
/>

</div>