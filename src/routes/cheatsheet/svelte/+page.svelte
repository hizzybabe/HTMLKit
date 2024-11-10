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
      <li><strong>Two-Way Binding</strong>: Use <code>bind:</code> for two-way data binding, typically with form elements.</li>
    </ul>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-svelte">&lt;script&gt;
  let name = '';
&lt;/script&gt;

&lt;input bind:value=&#123;name&#125; placeholder="Enter your name" /&gt;
&lt;p&gt;Your name is: &#123;name&#125;&lt;/p&gt;</code></pre>
    </div>

    <ul>
      <li><strong>Component Binding</strong>: Bind properties to parent components.</li>
    </ul>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-svelte">&lt;!-- App.svelte --&gt;
&lt;Child bind:count /&gt;

&lt;!-- Child.svelte --&gt;
&lt;script&gt;
  export let count = 0;
&lt;/script&gt;
&lt;button on:click=&#123;() => count += 1&#125;&gt;Count: &#123;count&#125;&lt;/button&gt;</code></pre>
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
      <li><strong>Using &#123;#if&#125;</strong>: Use &#123;#if&#125;...&#123;:else if&#125;...&#123;:else&#125; blocks for conditional rendering.</li>
    </ul>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-svelte">&lt;script&gt;
  let loggedIn = false;
&lt;/script&gt;

&#123;#if loggedIn&#125;
  &lt;p&gt;Welcome back!&lt;/p&gt;
&#123;:else&#125;
  &lt;p&gt;Please log in.&lt;/p&gt;
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
      <li><strong>Basic Loop</strong>: Use &#123;#each&#125; for rendering lists.</li>
    </ul>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-svelte">&lt;script&gt;
  let items = ["Apple", "Banana", "Cherry"];
&lt;/script&gt;

&lt;ul&gt;
  &#123;#each items as item&#125;
    &lt;li&gt;&#123;item&#125;&lt;/li&gt;
  &#123;/each&#125;
&lt;/ul&gt;</code></pre>
    </div>

    <ul>
      <li><strong>Loop with Index</strong>: Access the loop index using index parameter.</li>
    </ul>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-svelte">&#123;#each items as item, index&#125;
  &lt;p&gt;&#123;index + 1&#125;: &#123;item&#125;&lt;/p&gt;
&#123;/each&#125;</code></pre>
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
      <li><strong>Basic Events</strong>: Use <code>on:</code> to add event listeners.</li>
    </ul>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-svelte">&lt;script&gt;
  function handleClick() &#123;
    alert("Button clicked!");
  &#125;
&lt;/script&gt;

&lt;button on:click=&#123;handleClick&#125;&gt;Click me&lt;/button&gt;</code></pre>
    </div>

    <ul>
      <li><strong>Event Forwarding</strong>: Forward events to parent components.</li>
    </ul>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-svelte">&lt;!-- Child.svelte --&gt;
&lt;button on:click&gt;Click me&lt;/button&gt;

&lt;!-- Parent.svelte --&gt;
&lt;Child on:click=&#123;() => console.log('Child clicked!')&#125; /&gt;</code></pre>
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
      <li><strong>Writable Stores</strong>: Create reactive stores using writable for centralized state.</li>
    </ul>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-javascript">// store.js
import &#123; writable &#125; from 'svelte/store';

export const count = writable(0);</code></pre>
    </div>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-svelte">&lt;script&gt;
  import &#123; count &#125; from './store.js';
&lt;/script&gt;

&lt;button on:click=&#123;() => $count += 1&#125;&gt;Count is &#123;$count&#125;&lt;/button&gt;</code></pre>
    </div>

    <ul>
      <li><strong>Readable Stores</strong>: For stores that should only be subscribed to, not modified.</li>
    </ul>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-javascript">import &#123; readable &#125; from 'svelte/store';

export const time = readable(new Date(), set => &#123;
  const interval = setInterval(() => set(new Date()), 1000);
  return () => clearInterval(interval);
&#125;);</code></pre>
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
      <li><strong>Default Slot</strong>: Allows a component to accept child content.</li>
    </ul>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-svelte">&lt;!-- Wrapper.svelte --&gt;
&lt;div class="wrapper"&gt;
  &lt;slot&gt;&lt;/slot&gt;
&lt;/div&gt;

&lt;!-- App.svelte --&gt;
&lt;Wrapper&gt;
  &lt;p&gt;Content goes here.&lt;/p&gt;
&lt;/Wrapper&gt;</code></pre>
    </div>

    <ul>
      <li><strong>Named Slots</strong>: Use slot="name" for multiple slots.</li>
    </ul>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-svelte">&lt;!-- Card.svelte --&gt;
&lt;div class="card"&gt;
  &lt;slot name="header"&gt;&lt;/slot&gt;
  &lt;slot&gt;&lt;/slot&gt;
&lt;/div&gt;

&lt;!-- App.svelte --&gt;
&lt;Card&gt;
  &lt;h1 slot="header"&gt;Header Content&lt;/h1&gt;
  &lt;p&gt;Main Content&lt;/p&gt;
&lt;/Card&gt;</code></pre>
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
      <li><strong>Basic Transitions</strong>: Use in, out, and transition directives with built-in effects.</li>
    </ul>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-svelte">&lt;script&gt;
  import &#123; fade, fly &#125; from 'svelte/transition';
&lt;/script&gt;

&lt;div in:fade out:fly=&#123;&#123; y: 20 &#125;&#125;&gt;
  This element will fade in and fly out!
&lt;/div&gt;</code></pre>
    </div>

    <ul>
      <li><strong>Custom Transitions</strong>: Create custom transitions.</li>
    </ul>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-svelte">&lt;script&gt;
  import &#123; crossfade &#125; from 'svelte/transition';
  const [send, receive] = crossfade(&#123;&#125;);
&lt;/script&gt;

&lt;div transition:send&gt;Content&lt;/div&gt;</code></pre>
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
      <li><strong>Setting Context</strong>: Pass data down without prop drilling.</li>
    </ul>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-svelte">&lt;!-- Provider.svelte --&gt;
&lt;script context="module"&gt;
  import &#123; setContext &#125; from 'svelte';
  setContext('key', value);
&lt;/script&gt;</code></pre>
    </div>

    <ul>
      <li><strong>Getting Context</strong>: Access context data in nested components.</li>
    </ul>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-svelte">&lt;script&gt;
  import &#123; getContext &#125; from 'svelte';
  const value = getContext('key');
&lt;/script&gt;</code></pre>
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
      <li><strong>Lifecycle Functions</strong>: Handle component mounting and cleanup.</li>
    </ul>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-svelte">&lt;script&gt;
  import &#123; onMount, onDestroy &#125; from 'svelte';

  onMount(() => &#123;
    console.log("Component mounted");
  &#125;);

  onDestroy(() => &#123;
    console.log("Component destroyed");
  &#125;);
&lt;/script&gt;</code></pre>
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