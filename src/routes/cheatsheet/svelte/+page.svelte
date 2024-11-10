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
      <pre><code class="language-svelte"><script>
  let name = "World";
</script>

<style>
  h1 {
    color: blue;
  }
</style>

<h1>Hello, {name}!</h1></code></pre>
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
      <pre><code class="language-svelte"><script>
  let count = 0;

  function increment() {
    count += 1;
  }
</script>

<button on:click={increment}>
  Clicked {count} {count === 1 ? 'time' : 'times'}
</button></code></pre>
    </div>

    <ul>
      <li><strong>Reactive Statements</strong>: <code>$:</code> re-runs a statement whenever a dependency changes.</li>
    </ul>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-svelte"><script>
  let a = 1;
  let b = 2;

  $: sum = a + b;
</script>

<p>Sum is {sum}</p></code></pre>
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
      <pre><code class="language-svelte"><ChildComponent name="Svelte" /></code></pre>
    </div>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-svelte"><script>
  export let name;
</script>

<p>Hello, {name}!</p></code></pre>
    </div>
  {/if}

  <!-- Bindings Section -->
  <h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('bindings')}
  >
    <span class="mr-2">{visibleSections.bindings ? '▼' : '▶'}</span>
    🔗 Bindings
  </h2>
  {#if visibleSections.bindings}
    <ul>
      <li><strong>Two-Way Binding</strong>: Use <code>bind:</code> to create two-way data bindings.</li>
    </ul>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-svelte"><script>
  let name = "Svelte";
</script>

<input bind:value={name} />
<p>Hello, {name}!</p></code></pre>
    </div>
  {/if}

  <!-- Conditionals Section -->
  <h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('conditionals')}
  >
    <span class="mr-2">{visibleSections.conditionals ? '▼' : '▶'}</span>
    ❓ Conditionals
  </h2>
  {#if visibleSections.conditionals}
    <ul>
      <li><strong>Using &#123;#if&#125;</strong>: Conditional rendering with the &#123;#if&#125; block.</li>
    </ul>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-svelte">&lt;script&gt;
  let isVisible = true;
&lt;/script&gt;

&#123;#if isVisible&#125;
  &lt;p&gt;This is visible!&lt;/p&gt;
&#123;:else&#125;
  &lt;p&gt;This is hidden!&lt;/p&gt;
&#123;/if&#125;</code></pre>
    </div>
  {/if}

  <!-- Looping Section -->
  <h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('looping')}
  >
    <span class="mr-2">{visibleSections.looping ? '▼' : '▶'}</span>
    🔄 Looping
  </h2>
  {#if visibleSections.looping}
    <ul>
      <li><strong>Using {#each}</strong>: Loop through arrays with the {#each} block.</li>
    </ul>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-svelte"><script>
  let items = ['Apple', 'Banana', 'Cherry'];
</script>

{#each items as item}
  <p>{item}</p>
{/each}</code></pre>
    </div>
  {/if}

  <!-- Events Section -->
  <h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('events')}
  >
    <span class="mr-2">{visibleSections.events ? '▼' : '▶'}</span>
    🎉 Events
  </h2>
  {#if visibleSections.events}
    <ul>
      <li><strong>Event Handling</strong>: Use <code>on:event</code> to handle events.</li>
    </ul>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-svelte"><script>
  function handleClick() {
    alert('Button clicked!');
  }
</script>

<button on:click={handleClick}>Click Me</button></code></pre>
    </div>
  {/if}

  <!-- Stores Section -->
  <h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('stores')}
  >
    <span class="mr-2">{visibleSections.stores ? '▼' : '▶'}</span>
    🏪 Stores
  </h2>
  {#if visibleSections.stores}
    <ul>
      <li><strong>Creating a Store</strong>: Use Svelte's built-in stores for state management.</li>
    </ul>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-javascript">import { writable } from 'svelte/store';

const count = writable(0);</code></pre>
    </div>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-svelte"><script>
  import { count } from './store.js';
</script>

<button on:click={() => count.update(n => n + 1)}>Increment</button></code></pre>
    </div>
  {/if}

  <!-- Slots Section -->
  <h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('slots')}
  >
    <span class="mr-2">{visibleSections.slots ? '▼' : '▶'}</span>
    📦 Slots
  </h2>
  {#if visibleSections.slots}
    <ul>
      <li><strong>Using Slots</strong>: Allow parent components to pass content to child components.</li>
    </ul>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-svelte"><slot>Default content</slot></code></pre>
    </div>
  {/if}

  <!-- Transitions Section -->
  <h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('transitions')}
  >
    <span class="mr-2">{visibleSections.transitions ? '▼' : '▶'}</span>
    🎭 Transitions
  </h2>
  {#if visibleSections.transitions}
    <ul>
      <li><strong>Using Transitions</strong>: Animate elements entering or leaving the DOM.</li>
    </ul>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-svelte"><script>
  import { fade } from 'svelte/transition';
</script>

<div transition:fade>This will fade in and out</div></code></pre>
    </div>
  {/if}

  <!-- Context Section -->
  <h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('context')}
  >
    <span class="mr-2">{visibleSections.context ? '▼' : '▶'}</span>
    🧩 Context
  </h2>
  {#if visibleSections.context}
    <ul>
      <li><strong>Using Context API</strong>: Share data between components without props drilling.</li>
    </ul>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-svelte"><script>
  import { setContext, getContext } from 'svelte';
  const key = 'myKey';
  setContext(key, 'some value');
</script></code></pre>
    </div>
  {/if}

  <!-- Lifecycles Section -->
  <h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('lifecycles')}
  >
    <span class="mr-2">{visibleSections.lifecycles ? '▼' : '▶'}</span>
    ⏳ Lifecycles
  </h2>
  {#if visibleSections.lifecycles}
    <ul>
      <li><strong>Lifecycle Functions</strong>: Use functions like <code>onMount</code> and <code>beforeUpdate</code>.</li>
    </ul>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-svelte"><script>
  import { onMount } from 'svelte';

  onMount(() => {
    console.log('Component mounted');
  });
</script></code></pre>
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