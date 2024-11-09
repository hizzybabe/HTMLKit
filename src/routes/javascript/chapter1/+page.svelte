<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';

  let showCode = true;
  let showCode1 = true;
  let showCode2 = true;
</script>

<div class="container mx-auto px-4 py-8">
  <h1>Chapter 1: Introduction to JavaScript & Setting Up</h1>
  
  <h2>Theory</h2>
  
  <h3>What is JavaScript?</h3>
  <p>
    JavaScript is a versatile and powerful programming language essential for creating dynamic and interactive web content.
    In this chapter, you’ll learn what JavaScript is, understand its role in web development, and set up your environment for JavaScript coding.
    By the end of this chapter, you’ll be able to add JavaScript to a webpage, display an alert, and create a simple calculator.
  </p>

  <p>
    JavaScript is a programming language used to add interactivity and dynamic elements to websites.
    It enables features like form validation, animations, content updates, and much more. JavaScript is a core technology of the web, alongside HTML and CSS, making it essential for modern web development.
  </p>

  <p>Key Features of JavaScript:</p>

  <ul>
    <li>Client-Side Scripting: Runs in the browser, allowing for real-time interactions without requiring server requests.</li>
    <li>Cross-Platform Compatibility: Works across all major web browsers.</li>
    <li>Versatile: Used in both frontend and backend (with Node.js) development.</li>
  </ul>

  <h3>Brief History of JavaScript</h3>
  <div>
    <ul>
      <li>Created by Brendan Eich in 1995 for Netscape Navigator</li>
      <li>Originally named Mocha, then LiveScript, finally JavaScript</li>
      <li>Standardized as ECMAScript in 1997</li>
      <li>Modern JavaScript (ES6+) introduced major improvements in 2015</li>
    </ul>
  </div>

  <h3>JavaScript in the Browser vs. Node.js</h3>
  <p>
    JavaScript can run in two main environments:
  </p>

  <ul>
    <li>In the Browser: JavaScript is primarily used in the browser to add interactivity to web pages.</li>
    <li>Node.js: Node.js is a runtime that allows JavaScript to run on the server side, opening up backend development with JavaScript.</li>
  </ul>

  <p>In this course, we’ll focus on JavaScript in the browser, working directly with web pages.</p>

  <h3>Setting Up Your Development Environment</h3>
  <div>To start writing JavaScript, you'll need:</div>
  <ul>
    <li>A text editor or IDE (Visual Studio Code recommended)</li>
    <li>A modern web browser (Chrome, Firefox, etc.)</li>
    <li>Browser Developer Tools ('press F12' in most browsers)</li>
  </ul>

  <h3>Basic Syntax and Data Types (Variables, Strings, Numbers)</h3>
  <p>
    JavaScript uses simple syntax to declare variables, manipulate data, and perform operations. Here are some essential concepts:
  </p>

  <p></p>Variables: Used to store data. Variables can be declared using let, const, or var.</p>

  <pre><code>let name = "Alice";
const age = 30;</code></pre>

  <p>Data Types:</p>

  <p>String: Textual data, enclosed in quotes ("Hello" or 'Hello').</p>
  <p></p>Number: Numeric data (e.g., 10, 5.5).</p>
  <p>Boolean: Logical data, either true or false.</p>

  <p>Basic Operations: Arithmetic and string operations.</p>

  <pre><code>let sum = 5 + 3;       // Addition
let greeting = "Hi, " + name;  // String concatenation</code></pre>

  <hr/>

  <h2 class="workshop-title">Practice Workshop: Hello, Interactive World!</h2>
  <div class="workshop-container">
    <h3 class="task">Task: Create your first JavaScript programs</h3>
    
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <button 
        class="toggle-btn mb-2 px-2 py-1 text-sm text-white rounded"
        style="background-color: rgb(59 130 246) !important"
        on:click={() => showCode1 = !showCode1}
      >
        {showCode1 ? 'Show Preview' : 'Show Code'}
      </button>
      
      {#if showCode1}
        <pre><code>{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hello JavaScript</title>
</head>
<body>
    <h1>My First JavaScript Program</h1>
    <button onclick="sayHello()">Click Me!</button>

    <script>
        function sayHello() {
            alert("Hello, World!");
        }
    </script>
</body>
</html>`}</code></pre>
      {:else}
        <div class="preview-content">
          <h1>My First JavaScript Program</h1>
          <button onclick="alert('Hello, World!')">Click Me!</button>
        </div>
      {/if}
    </div>
  </div>

  <ChapterNavigation 
    prevHref="/HTMLKit/javascript" 
    nextHref="/HTMLKit/javascript/chapter2"
  />
</div>

<style>
  .workshop-container {
    margin-top: 2rem;
    padding: 1rem;
    background-color: #f8f9fa;
    border-radius: 8px;
  }

  .task {
    color: #2563eb;
    margin-bottom: 1rem;
  }

  .code-preview {
    margin: 1rem 0;
  }
  
  .preview-content {
    padding: 1rem;
    background: white;
    border-radius: 4px;
  }
</style>
