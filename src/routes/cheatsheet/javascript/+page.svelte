<script>
    // State to track visibility of each section
    let visibleSections = {
      basics: false,
      operators: false,
      conditionals: false,
      loops: false,
      functions: false,
      arrays: false,
      objects: false,
      es6: false,
      classes: false,
      promises: false,
      dom: false,
      errorHandling: false
    };
  
    // Toggle function
    const toggleSection = (section) => {
      visibleSections[section] = !visibleSections[section];
    };
  </script>
  
  <div class="container mx-auto px-4 py-8">
    <p>Here's a basic JavaScript cheatsheet covering key syntax and concepts:</p>
    
    <h1 class="text-2xl font-bold mb-4">⚡ JavaScript Cheatsheet</h1>
    
    <p class="text-sm text-gray-500">Click to expand section</p>
  
    <!-- Basics Section -->
    <h2 
      class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
      on:click={() => toggleSection('basics')}
    >
      <span class="mr-2">{visibleSections.basics ? '▼' : '▶'}</span>
      🔰 JavaScript Basics
    </h2>
    {#if visibleSections.basics}
      <pre><code class="language-javascript">// Declaring Variables
  let x = 10;  // Block-scoped
  const y = 5; // Block-scoped, cannot be re-assigned
  var z = 15;  // Function-scoped (avoid using 'var' in modern JS)
  
  // Data Types
  let str = "Hello";
  let num = 42;
  let isActive = true;
  let obj = &#123; key: "value" &#125;;
  let arr = [1, 2, 3];
  let nothing = null;
  let notDefined;
  
  // Type Conversion
  Number("10");   // 10
  String(123);    // "123"
  Boolean(0);     // false
  parseInt("10.5"); // 10
  parseFloat("10.5"); // 10.5
  
  // Template Literals
  let name = "World";
  console.log(`Hello, $&#123;name&#125;!`); // Hello, World!</code></pre>
    {/if}
  
    <!-- Operators Section -->
    <h2 
      class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
      on:click={() => toggleSection('operators')}
    >
      <span class="mr-2">{visibleSections.operators ? '▼' : '▶'}</span>
      ➗ Operators
    </h2>
    {#if visibleSections.operators}
      <pre><code class="language-javascript">// Arithmetic Operators: +, -, *, /, %
  let sum = 5 + 10;
  let diff = 10 - 5;
  let product = 2 * 3;
  let quotient = 10 / 2;
  let remainder = 10 % 3;
  
  // Comparison Operators: ===, ==, !==, !=, &gt;, &lt;, &gt;=, &lt;=
  console.log(5 === "5"); // false
  
  // Logical Operators: && (and), || (or), ! (not)
  let isAdult = age &gt;= 18 && age &lt; 65;
  
  // Ternary Operator
  let result = condition ? "True" : "False";</code></pre>
    {/if}
  
    <!-- Conditionals Section -->
    <h2 
      class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
      on:click={() => toggleSection('conditionals')}
    >
      <span class="mr-2">{visibleSections.conditionals ? '▼' : '▶'}</span>
      🔄 Conditionals
    </h2>
    {#if visibleSections.conditionals}
      <pre><code class="language-javascript">// If Statement
if (condition) &#123;
  // code
&#125; else if (otherCondition) &#123;
  // code
&#125; else &#123;
  // code
&#125;</code></pre>
    {/if}
  
    <!-- Loops Section -->
    <h2 
      class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
      on:click={() => toggleSection('loops')}
    >
      <span class="mr-2">{visibleSections.loops ? '▼' : '▶'}</span>
      🔁 Loops
    </h2>
    {#if visibleSections.loops}
      <pre><code class="language-javascript">// For Loop
for (let i = 0; i &lt; 5; i++) &#123;
  console.log(i);
&#125;

// While Loop
while (condition) &#123;
  // code
&#125;</code></pre>
    {/if}
  
    <!-- Functions -->
    <h2 
      class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
      on:click={() => toggleSection('functions')}
    >
      <span class="mr-2">{visibleSections.functions ? '▼' : '▶'}</span>
      🎯 Functions
    </h2>
    {#if visibleSections.functions}
      <pre><code class="language-javascript">// Function Declaration
function greet(name) &#123;
  return `Hello, $&#123;name&#125;!`;
&#125;

// Arrow Function
const greet = (name) => &#123;
  return `Hello, $&#123;name&#125;!`;
&#125;

// Function Expression
const greet = function(name) &#123;
  return `Hello, $&#123;name&#125;!`;
&#125;</code></pre>
    {/if}
  
    <!-- Arrays -->
    <h2 
      class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
      on:click={() => toggleSection('arrays')}
    >
      <span class="mr-2">{visibleSections.arrays ? '▼' : '▶'}</span>
      📦 Arrays
    </h2>
    {#if visibleSections.arrays}
      <pre><code class="language-javascript">// Array Methods
let arr = [1, 2, 3, 4, 5];

arr.push(6);       // Add to end
arr.pop();         // Remove from end
arr.unshift(0);    // Add to start
arr.shift();       // Remove from start

// Array Operations
arr.map(x => x * 2);     // Transform elements
arr.filter(x => x > 2);  // Filter elements
arr.reduce((a,b) => a+b); // Reduce to single value
arr.forEach(x => console.log(x)); // Loop through</code></pre>
    {/if}
  
    <!-- Objects -->
    <h2 
      class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
      on:click={() => toggleSection('objects')}
    >
      <span class="mr-2">{visibleSections.objects ? '▼' : '▶'}</span>
      🗃️ Objects
    </h2>
    {#if visibleSections.objects}
      <pre><code class="language-javascript">// Object Creation
let person = &#123;
  name: "John",
  age: 30,
  greet() &#123;
    return `Hello, I'm $&#123;this.name&#125;`;
  &#125;
&#125;;

// Object Operations
Object.keys(person);    // Get keys
Object.values(person);  // Get values
Object.entries(person); // Get key-value pairs</code></pre>
    {/if}
  
    <!-- ES6 Features -->
    <h2 
      class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
      on:click={() => toggleSection('es6')}
    >
      <span class="mr-2">{visibleSections.es6 ? '▼' : '▶'}</span>
      ✨ ES6 Features
    </h2>
    {#if visibleSections.es6}
      <pre><code class="language-javascript">// Destructuring
let &#123;name, age&#125; = person;
let [first, second] = arr;

// Spread Operator
let newArr = [...arr];
let newObj = &#123;...person&#125;;

// Default Parameters
function greet(name = "Guest") &#123;
  return `Hello, $&#123;name&#125;!`;
&#125;

// Template Literals
let greeting = `Hello, $&#123;name&#125;!`;</code></pre>
    {/if}
  
    <!-- Classes -->
    <h2 
      class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
      on:click={() => toggleSection('classes')}
    >
      <span class="mr-2">{visibleSections.classes ? '▼' : '▶'}</span>
      🏗️ Classes
    </h2>
    {#if visibleSections.classes}
      <pre><code class="language-javascript">// Class Definition
class Person &#123;
  constructor(name) &#123;
    this.name = name;
  &#125;

  greet() &#123;
    return `Hello, I'm $&#123;this.name&#125;`;
  &#125;
&#125;

// Inheritance
class Employee extends Person &#123;
  constructor(name, role) &#123;
    super(name);
    this.role = role;
  &#125;
&#125;</code></pre>
    {/if}
  
    <!-- Promises -->
    <h2 
      class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
      on:click={() => toggleSection('promises')}
    >
      <span class="mr-2">{visibleSections.promises ? '▼' : '▶'}</span>
      ⏳ Promises & Async/Await
    </h2>
    {#if visibleSections.promises}
      <pre><code class="language-javascript">// Promise
const promise = new Promise((resolve, reject) => &#123;
  // Async operation
  if (success) resolve(data);
  else reject(error);
&#125;);

// Async/Await
async function getData() &#123;
  try &#123;
    const result = await fetch(url);
    return await result.json();
  &#125; catch (error) &#123;
    console.error(error);
  &#125;
&#125;</code></pre>
    {/if}
  
    <!-- DOM -->
    <h2 
      class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
      on:click={() => toggleSection('dom')}
    >
      <span class="mr-2">{visibleSections.dom ? '▼' : '▶'}</span>
      🎨 DOM Manipulation
    </h2>
    {#if visibleSections.dom}
      <pre><code class="language-javascript">// Selecting Elements
const el = document.querySelector('.class');
const els = document.querySelectorAll('.class');

// Modifying Elements
el.textContent = 'New text';
el.innerHTML = '&lt;span&gt;HTML&lt;/span&gt;';
el.classList.add('new-class');
el.style.color = 'red';</code></pre>
    {/if}
  
    <!-- Error Handling -->
    <h2 
      class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
      on:click={() => toggleSection('errorHandling')}
    >
      <span class="mr-2">{visibleSections.errorHandling ? '▼' : '▶'}</span>
      ⚠️ Error Handling
    </h2>
    {#if visibleSections.errorHandling}
      <pre><code class="language-javascript">// Try-Catch
try &#123;
  // Code that might throw an error
  throw new Error('Something went wrong');
&#125; catch (error) &#123;
  console.error(error);
&#125; finally &#123;
  // Always executes
&#125;

// Custom Error
class CustomError extends Error &#123;
  constructor(message) &#123;
    super(message);
    this.name = 'CustomError';
  &#125;
&#125;</code></pre>
    {/if}
  </div>