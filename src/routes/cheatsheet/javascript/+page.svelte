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
  </div>