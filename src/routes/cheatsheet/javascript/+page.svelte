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

  <h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('basics')}
  >
    <span class="mr-2">{visibleSections.basics ? '▼' : '▶'}</span>
    🔰 JavaScript Basics
  </h2>
  {#if visibleSections.basics}
    <pre><code class="language-javascript">
    // Declaring Variables
    let x = 10; // Block-scoped
    const y = 5; // Block-scoped, cannot be re-assigned
    var z = 15; // Function-scoped (avoid using 'var' in modern JS)

    // Data Types
    let str = "Hello";
    let num = 42;
    let isActive = true;
    let obj = { key: "value" };
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
    console.log(`Hello, ${name}!`); // Hello, World!
    </code></pre>
  {/if}

  <h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('operators')}
  >
    <span class="mr-2">{visibleSections.operators ? '▼' : '▶'}</span>
    ➗ Operators
  </h2>
  {#if visibleSections.operators}
    <pre><code class="language-javascript">
    // Your existing operators code
    </code></pre>
  {/if}
</div>