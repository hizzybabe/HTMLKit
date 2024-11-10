<script>
  // State to track visibility of each section
  let visibleSections = {
    basics: false,
    reactivity: false,
    props: false,
    bindings: false,
    conditionals: false,
    looping: false,
    events: false,
    stores: false,
    slots: false,
    transitions: false,
    context: false,
    lifecycles: false
  };

  // Toggle function
  const toggleSection = (section) => {
    visibleSections[section] = !visibleSections[section];
  };
</script>

<div class="container mx-auto px-4 py-8">
  <p>Here's a Svelte cheatsheet with essential syntax and concepts to get started!</p>
  <hr class="my-4">

  <h1 class="text-2xl font-bold mb-4">⚡ Svelte Cheatsheet</h1>

  <p class="text-sm text-gray-500">Click to expand section</p>

  <!-- Basics Section -->
  <h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('basics')}
  >
    <span class="mr-2">{visibleSections.basics ? '▼' : '▶'}</span>
    🔰 Svelte Basics
  </h2>
  {#if visibleSections.basics}
    <ul>
      <li><strong>Setup</strong>: Svelte apps are compiled, not run in the browser like frameworks (React, Vue).</li>
      <li><strong>Component File Structure</strong>: Svelte components use <code>.svelte</code> files containing:
        <ul>
          <li><code>&lt;script&gt;</code> for JavaScript</li>
          <li><code>&lt;style&gt;</code> for CSS</li>
          <li>Markup for HTML</li>
        </ul>
      </li>
    </ul>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-svelte">&lt;script&gt;
  let name = "World";
&lt;/script&gt;

&lt;style&gt;
  h1 &#123;
    color: blue;
  &#125;
&lt;/style&gt;

&lt;h1&gt;Hello, &#123;name&#125;!&lt;/h1&gt;</code></pre>
    </div>
  {/if}

  <!-- Reactivity Section -->
  <h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('reactivity')}
  >
    <span class="mr-2">{visibleSections.reactivity ? '▼' : '▶'}</span>
    🔄 Reactivity
  </h2>
  {#if visibleSections.reactivity}
    <ul>
      <li><strong>Auto-Reactivity</strong>: Assigning a new value to a variable makes it reactive.</li>
    </ul>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-svelte">&lt;script&gt;
  let count = 0;

  function increment() &#123;
    count += 1;
  &#125;
&lt;/script&gt;

&lt;button on:click=&#123;increment&#125;&gt;
  Clicked &#123;count&#125; &#123;count === 1 ? 'time' : 'times'&#125;
&lt;/button&gt;</code></pre>
    </div>

    <ul>
      <li><strong>Reactive Statements</strong>: <code>$:</code> re-runs a statement whenever a dependency changes.</li>
    </ul>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-svelte">&lt;script&gt;
  let a = 1;
  let b = 2;

  $: sum = a + b;
&lt;/script&gt;

&lt;p&gt;Sum is &#123;sum&#125;&lt;/p&gt;</code></pre>
    </div>
  {/if}

  <!-- Props Section -->
  <h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('props')}
  >
    <span class="mr-2">{visibleSections.props ? '▼' : '▶'}</span>
    📦 Props
  </h2>
  {#if visibleSections.props}
    <ul>
      <li><strong>Passing Props</strong>: Use props to pass data from a parent component to a child component.</li>
    </ul>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-svelte">&lt;ChildComponent name="Svelte" /&gt;</code></pre>
    </div>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-svelte">&lt;script&gt;
  export let name;
&lt;/script&gt;

&lt;p&gt;Hello, &#123;name&#125;!&lt;/p&gt;</code></pre>
    </div>
  {/if}
</div>

<style>
  .code-preview {
    margin: 1rem 0;
  }
  
  h2 {
    user-select: none;
  }
  
  h2:hover {
    opacity: 0.8;
  }
</style>