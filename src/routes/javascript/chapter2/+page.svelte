<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';

  let showCode = true;
  let showCode1 = true;
  let showCode2 = true;
</script>

<div class="container mx-auto px-4 py-8">
  <h1>Chapter 2: Functions, Conditional Statements, & Loops</h1>
  
  <div class="chapter-intro">
    <p>In this chapter, you'll learn foundational JavaScript programming concepts, including functions, conditional statements, and loops. These tools allow you to perform tasks, make decisions, and repeat actions in your code.</p>
    
    <div class="chapter-details">
      <p><strong>Duration:</strong> Approximately 2 hours</p>
      <p><strong>Goal:</strong> Understand and apply functions, conditional statements, and loops to create interactive and dynamic JavaScript programs.</p>
    </div>
  </div>

  <hr/>

  <h2>Theory</h2>

  <h3>2.1 Defining and Calling Functions</h3>
  <p>Functions are reusable blocks of code that perform specific tasks. You define a function once, and you can call (or execute) it as many times as needed.</p>

  <div class="concept-block">
    <h4>Basic Function Syntax</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>function functionName(parameters) &#123;
  // Code to execute
&#125;</code></pre>
    </div>

    <h4>Example</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>function greet(name) &#123;
  console.log("Hello, " + name);
&#125;

greet("Alice"); // Calls the function and logs "Hello, Alice"</code></pre>
    </div>
  </div>

  <h3>2.2 Conditional Statements</h3>
  <div class="concept-block">
    <h4>if/else Statement</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>let age = 18;
if (age >= 18) &#123;
  console.log("You are an adult.");
&#125; else &#123;
  console.log("You are a minor.");
&#125;</code></pre>
    </div>

    <h4>switch Statement</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>let grade = "A";
switch (grade) &#123;
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  default:
    console.log("Needs Improvement");
&#125;</code></pre>
    </div>
  </div>

  <h3>2.3 Loops</h3>
  <div class="concept-block">
    <h4>for Loop</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>for (let i = 0; i &lt; 5; i++) &#123;
  console.log("Count: " + i);
&#125;</code></pre>
    </div>

    <h4>while Loop</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>let count = 0;
while (count &lt; 5) &#123;
  console.log("Count: " + count);
  count++;
&#125;</code></pre>
    </div>
  </div>

  <hr/>

  <h2 class="workshop-title">Practice Workshop: "Quiz Time"</h2>
  <div class="workshop-container">
    <h3 class="task">Task: Create a simple quiz using JavaScript</h3>

    <h4>Step 1: Set Up Your Files</h4>
    <ul>
      <li>Create a new HTML file named <code>quiz.html</code></li>
      <li>Create a new JavaScript file named <code>quiz.js</code></li>
    </ul>

    <h4>Step 2: HTML Structure</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;Quiz Time&lt;/title&gt;
  &lt;script src="quiz.js" defer&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Quiz Time&lt;/h1&gt;
  &lt;div id="quiz-container"&gt;
    &lt;p&gt;Question 1: What is 2 + 2?&lt;/p&gt;
    &lt;input type="number" id="q1"&gt;
    &lt;p&gt;Question 2: What is the capital of France?&lt;/p&gt;
    &lt;input type="text" id="q2"&gt;
    &lt;br&gt;&lt;br&gt;
    &lt;button onclick="submitQuiz()"&gt;Submit Quiz&lt;/button&gt;
    &lt;p id="result"&gt;&lt;/p&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h4>Step 3: JavaScript Implementation</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>function submitQuiz() &#123;
  // Get the user's answers
  let answer1 = parseInt(document.getElementById("q1").value);
  let answer2 = document.getElementById("q2").value.toLowerCase();

  // Initialize score and feedback
  let score = 0;
  let feedback = "";

  // Check answers
  if (answer1 === 4) &#123;
    score++;
    feedback += "Question 1 is correct! ";
  &#125; else &#123;
    feedback += "Question 1 is incorrect. ";
  &#125;

  if (answer2 === "paris") &#123;
    score++;
    feedback += "Question 2 is correct!";
  &#125; else &#123;
    feedback += "Question 2 is incorrect.";
  &#125;

  // Display results
  document.getElementById("result").textContent = 
    `Score: $&#123;score&#125;/2. $&#123;feedback&#125;`;
&#125;</code></pre>
    </div>

    <h3>Deliverables</h3>
    <ul>
      <li>Complete quiz.html and quiz.js files</li>
      <li>Screenshot showing the working quiz with feedback</li>
    </ul>
  </div>

  <ChapterNavigation 
    prevHref="/HTMLKit/javascript/chapter1" 
    nextHref="/HTMLKit/javascript/chapter3"
  />
</div>

<style>
  .chapter-intro {
    background-color: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
    margin-bottom: 2rem;
  }

  .chapter-details {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #dee2e6;
  }

  .concept-block {
    margin-bottom: 2rem;
  }

  .workshop-container {
    padding: 1rem;
    background-color: #f8f9fa;
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
