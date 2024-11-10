<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
  import SolutionChecker from '$lib/components/SolutionChecker.svelte';

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

  <p>Variables: Used to store data. Variables can be declared using let, const, or var.</p>

  <pre><code>let name = "Alice";
const age = 30;</code></pre>

  <p>Data Types:</p>

  <li>String: Textual data, enclosed in quotes ("Hello" or 'Hello').</li>
  <li>Number: Numeric data (e.g., 10, 5.5).</li>
  <li>Boolean: Logical data, either true or false.</li>

  <p>Basic Operations: Arithmetic and string operations.</p>

  <pre><code>let sum = 5 + 3;       // Addition
let greeting = "Hi, " + name;  // String concatenation</code></pre>

  <hr/>

  <h2 class="workshop-title">Practice Workshop: Hello, Interactive World!</h2>
  <div class="workshop-container">
    <h3 class="task">Task: Create your first JavaScript programs</h3>

    <h3>Task 1: Display “Hello, World!” in an Alert Box</h3>

    <li>Open hello.html in VSCode and create a basic HTML structure.</li>
    <li>Add an inline &lt;script&gt; tag to write JavaScript directly within the HTML.</li>
    <li>Write a script to display an alert box with “Hello, World!” when the page loads.</li>
    
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

    <h3>Task 2: Create a Simple Calculator</h3>

    <p>In calculator.html, create an HTML form that allows users to input two numbers and calculate their sum.</p>

    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <button 
        class="toggle-btn mb-2 px-2 py-1 text-sm text-white rounded"
        style="background-color: rgb(59 130 246) !important"
        on:click={() => showCode2 = !showCode2}
      >
        {showCode2 ? 'Show Preview' : 'Show Code'}
      </button>
      
      {#if showCode2}
        <pre><code>{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Calculator</title>
</head>
<body>
    <h1>Simple Calculator</h1>
    <label for="num1">Enter First Number:</label>
    <input type="number" id="num1">
    <br>
    <label for="num2">Enter Second Number:</label>
    <input type="number" id="num2">
    <br><br>
    <button onclick="calculateSum()">Calculate Sum</button>
    <p id="result"></p>

    <script>
        function calculateSum() {
            let num1 = parseFloat(document.getElementById("num1").value);
            let num2 = parseFloat(document.getElementById("num2").value);
            let sum = num1 + num2;
            document.getElementById("result").textContent = "Sum: " + sum;
        }
    </script>
</body>
</html>`}</code></pre>
      {:else}
        <div class="preview-content">
          <h1>Simple Calculator</h1>
          <label for="calc-num1">Enter First Number:</label>
          <input type="number" id="calc-num1">
          <br>
          <label for="calc-num2">Enter Second Number:</label>
          <input type="number" id="calc-num2">
          <br><br>
          <button onclick="let n1 = parseFloat(document.getElementById('calc-num1').value); let n2 = parseFloat(document.getElementById('calc-num2').value); document.getElementById('calc-result').textContent = 'Sum: ' + (n1 + n2);">Calculate Sum</button>
          <p id="calc-result"></p>
        </div>
      {/if}
    </div>

    <h3 class="mt-8">Deliverables</h3>
    <h4>HTML Files:</h4>
    <ul class="list-disc ml-6">
      <li><code>hello.html</code> with JavaScript to display an alert.</li>
      <li><code>calculator.html</code> with a calculator that sums two numbers.</li>
    </ul>

    <h4 class="mt-4">Screenshots:</h4>
    <ul class="list-disc ml-6">
      <li>Take screenshots of the alert box in hello.html and the calculator in action in calculator.html.</li>
    </ul>

    <h3 class="mt-8">Summary and Key Takeaways</h3>
    <ul class="list-disc ml-6">
      <li>
        <strong>JavaScript Basics:</strong> JavaScript allows you to add interactivity to web pages with alert boxes, input handling, and simple calculations.
      </li>
      <li>
        <strong>Variables and Data Types:</strong> Understanding JavaScript variables and data types is essential for building interactive scripts.
      </li>
      <li>
        <strong>DOM Manipulation:</strong> JavaScript can retrieve and modify HTML elements to create dynamic content.
      </li>
    </ul>

    <SolutionChecker />
  </div>

  <ChapterNavigation 
    prevHref="/HTMLKit/javascript" 
    nextHref="/HTMLKit/javascript/chapter2"
  />
</div>

<style>
  .workshop-container {
    /* margin-top: 2rem; */
    padding: 1rem;
    background-color: #f8f9fa;
    /* border-radius: 8px; */
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
