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
      <pre><code class="language-javascript">// If...Else
  if (condition) &#123;
    // Code if true
  &#125; else if (anotherCondition) &#123;
    // Code if another condition is true
  &#125; else &#123;
    // Code if false
  &#125;
  
  // Switch
  let day = 3;
  switch(day) &#123;
    case 1: 
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    default:
      console.log("Unknown day");
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
  let count = 0;
  while (count &lt; 5) &#123;
    console.log(count);
    count++;
  &#125;
  
  // For...of (for Arrays)
  for (let item of arr) &#123;
    console.log(item);
  &#125;
  
  // For...in (for Objects)
  for (let key in obj) &#123;
    console.log(key, obj[key]);
  &#125;</code></pre>
    {/if}
  
    <p class="mt-8">This cheatsheet covers core concepts, helping you quickly reference JavaScript fundamentals!</p>
  </div>

---

<h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('functions')}
  >
    <span class="mr-2">{visibleSections.functions ? '▼' : '▶'}</span>
    🎯 Functions
  </h2>
  {#if visibleSections.functions}
    <pre><code class="language-javascript">
// Function Declaration
function greet(name) &#123;
  return `Hello, $&#123;name&#125;`;
&#125;

// Arrow Function
const greet = (name) =&gt; `Hello, $&#123;name&#125;`;

// Default Parameters
function multiply(a, b = 1) &#123;
  return a * b;
&#125;

// IIFE (Immediately Invoked Function Expression)
(function() &#123;
  console.log("This runs immediately!");
&#125;)();
</code></pre>
  {/if}

---

<h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('arrays')}
  >
    <span class="mr-2">{visibleSections.arrays ? '▼' : '▶'}</span>
    📦 Arrays
  </h2>
  {#if visibleSections.arrays}
<pre><code class="language-javascript">
let arr = [1, 2, 3, 4];

// Array Methods
arr.push(5);     // Add to end
arr.pop();       // Remove last
arr.unshift(0);  // Add to start
arr.shift();     // Remove first
arr.splice(2, 1); // Remove items from index 2

// Higher-order Methods
arr.forEach(item =&gt; console.log(item));
let newArr = arr.map(x =&gt; x * 2);
let filteredArr = arr.filter(x =&gt; x &gt; 2);
let sum = arr.reduce((acc, x) =&gt; acc + x, 0);
</code></pre>
  {/if}

---

<h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('objects')}
  >
    <span class="mr-2">{visibleSections.objects ? '▼' : '▶'}</span>
    🗃️ Objects
  </h2>
  {#if visibleSections.objects}
<pre><code class="language-javascript">
// Object Declaration
let person = &#123;
  name: "John",
  age: 30,
  greet() &#123;
    console.log("Hello!");
  &#125;
&#125;;

// Accessing Properties
console.log(person.name); // Dot notation
console.log(person["age"]); // Bracket notation

// Destructuring
let &#123; name, age &#125; = person;

// Adding Properties
person.city = "New York";
</code></pre>
  {/if}

---

<h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('es6')}
  >
    <span class="mr-2">{visibleSections.es6 ? '▼' : '▶'}</span>
    ✨ ES6 Features
  </h2>
  {#if visibleSections.es6}
<pre><code class="language-javascript">
// Spread Operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];

// Rest Operator
function sum(...args) &#123;
  return args.reduce((acc, x) =&gt; acc + x);
&#125;

// Destructuring Arrays
let [first, second] = arr;
</code></pre>
  {/if}

---

<h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('classes')}
  >
    <span class="mr-2">{visibleSections.classes ? '▼' : '▶'}</span>
    🏗️ Classes
  </h2>
  {#if visibleSections.classes}
<pre><code class="language-javascript">
class Animal &#123;
  constructor(name) &#123;
    this.name = name;
  &#125;
  
  speak() &#123;
    console.log(`$&#123;this.name&#125; makes a sound`);
  &#125;
&#125;

class Dog extends Animal &#123;
  speak() &#123;
    console.log(`$&#123;this.name&#125; barks`);
  &#125;
&#125;

let dog = new Dog("Rex");
dog.speak();
</code></pre>
  {/if}

---

<h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('promises')}
  >
    <span class="mr-2">{visibleSections.promises ? '▼' : '▶'}</span>
    ⏳ Promises & Async/Await
  </h2>
  {#if visibleSections.promises}
<pre><code class="language-javascript">
// Promise
let promise = new Promise((resolve, reject) =&gt; &#123;
  let success = true;
  success ? resolve("Success") : reject("Failure");
&#125;);

promise.then(result =&gt; console.log(result)).catch(error =&gt; console.log(error));

// Async/Await
async function fetchData() &#123;
  try &#123;
    let response = await fetch("https://api.example.com");
    let data = await response.json();
    console.log(data);
  &#125; catch (error) &#123;
    console.error(error);
  &#125;
&#125;
</code></pre>
  {/if}

---

<h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('dom')}
  >
    <span class="mr-2">{visibleSections.dom ? '▼' : '▶'}</span>
    🎨 DOM Manipulation
  </h2>
  {#if visibleSections.dom}
<pre><code class="language-javascript">
// Selecting Elements
let element = document.getElementById("id");
let elements = document.querySelectorAll(".class");

// Modifying Elements
element.textContent = "Hello";
element.style.color = "red";
element.classList.add("new-class");

// Events
element.addEventListener("click", function() &#123;
  console.log("Element clicked!");
&#125;);
</code></pre>
  {/if}

---

<h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('errorHandling')}
  >
    <span class="mr-2">{visibleSections.errorHandling ? '▼' : '▶'}</span>
    ⚠️ Error Handling
  </h2>

<pre><code class="language-javascript">
try &#123;
  // Code that might throw an error
&#125; catch (error) &#123;
  console.log(error.message);
&#125; finally &#123;
  console.log("This always runs");
&#125;
</code></pre>
  {/if}

---

<p>This cheatsheet covers core concepts, helping you quickly reference JavaScript fundamentals!</p>

</div>