<script>
  // State to track visibility of each section
  let visibleSections = {
    overview: false,
    installation: false,
    structure: false,
    concepts: false,
    deployment: false,
    workshop: false
  };

  // Toggle function
  const toggleSection = (section) => {
    visibleSections[section] = !visibleSections[section];
  };
</script>

<div class="container mx-auto px-4 py-8">
  <p>Quick reference guide for building fast, content-focused websites with Astro.</p>
  <hr class="my-4">

  <h1 class="text-2xl font-bold mb-4">🚀 Astro Cheatsheet</h1>

  <p class="text-sm text-gray-500">Click to expand section</p>

  <h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('overview')}
  >
    <span class="mr-2">{visibleSections.overview ? '▼' : '▶'}</span>
    🌟 1. Astro Overview
  </h2>
  {#if visibleSections.overview}
    <ul>
      <li>Server-first, content-focused web framework for building fast, SEO-friendly websites</li>
      <li>Component-based architecture similar to React, Vue, and Svelte</li>
      <li>Minimizes client-side JavaScript for better performance</li>
      <li>Easy to learn - if you know HTML, you can start with Astro</li>
    </ul>
  {/if}

  <h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('installation')}
  >
    <span class="mr-2">{visibleSections.installation ? '▼' : '▶'}</span>
    ⚙️ 2. Installation & Setup
  </h2>
  {#if visibleSections.installation}
    <h3>Prerequisites</h3>
    <ul>
      <li>Node.js version 18.17.1 or 20.3.0 or higher</li>
      <li>Text editor (VS Code recommended with Astro extension)</li>
    </ul>

    <h3>Creating a New Project</h3>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-bash">npm create astro@latest</code></pre>
    </div>

    <h3>Using a Template</h3>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-bash">npm create astro@latest -- --template blog</code></pre>
    </div>
  {/if}

  <h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('structure')}
  >
    <span class="mr-2">{visibleSections.structure ? '▼' : '▶'}</span>
    📁 3. Project Structure
  </h2>
  {#if visibleSections.structure}
    <ul>
      <li><strong>src/</strong>: Main source code directory
        <ul>
          <li><strong>pages/</strong>: File-based routing</li>
          <li><strong>components/</strong>: Reusable UI components</li>
          <li><strong>layouts/</strong>: Page layouts and templates</li>
          <li><strong>styles/</strong>: Global styles and CSS</li>
          <li><strong>content/</strong>: Content collections</li>
        </ul>
      </li>
      <li><strong>public/</strong>: Static assets</li>
      <li><strong>astro.config.mjs</strong>: Configuration file</li>
    </ul>
  {/if}

  <h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('concepts')}
  >
    <span class="mr-2">{visibleSections.concepts ? '▼' : '▶'}</span>
    💡 4. Key Concepts
  </h2>
  {#if visibleSections.concepts}
    <h3>Components</h3>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-astro">---
// Component Script (server-side only)
const greeting = "Hello, Astro!";
---
<!-- Component Template -->
&lt;h1&gt;&#123;greeting&#125;&lt;/h1&gt;</code></pre>
    </div>

    <h3>File-Based Routing</h3>
    <ul>
      <li>Pages in <code>src/pages</code> automatically become routes</li>
      <li>Supports <code>.astro</code>, <code>.md</code>, <code>.mdx</code>, and <code>.html</code> files</li>
    </ul>

    <h3>Content Collections</h3>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-typescript">// src/content/config.ts
import &#123; defineCollection, z &#125; from 'astro:content';

const blog = defineCollection(&#123;
  schema: z.object(&#123;
    title: z.string(),
    date: z.date()
  &#125;)
&#125;);

export const collections = &#123;
  blog
&#125;;</code></pre>
    </div>
  {/if}

  <h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('deployment')}
  >
    <span class="mr-2">{visibleSections.deployment ? '▼' : '▶'}</span>
    🚀 5. Building & Deployment
  </h2>
  {#if visibleSections.deployment}
    <h3>Development</h3>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-bash">npm run dev</code></pre>
    </div>

    <h3>Production Build</h3>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-bash">npm run build</code></pre>
    </div>
  {/if}

  <h2 
    class="text-xl font-bold mt-6 mb-3 cursor-pointer flex items-center"
    on:click={() => toggleSection('workshop')}
  >
    <span class="mr-2">{visibleSections.workshop ? '▼' : '▶'}</span>
    🛠️ Workshop: Building Your First Astro Site
  </h2>
  {#if visibleSections.workshop}
    <div class="workshop-container">
      <h3 class="task">Create a Simple Astro Website</h3>
      
      <h4>Step 1: Project Setup</h4>
      <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
        <pre><code class="language-bash">npm create astro@latest my-first-site
cd my-first-site
npm install</code></pre>
      </div>

      <h4>Step 2: Create Your First Page</h4>
      <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
        <pre><code class="language-astro">---
// src/pages/index.astro
---
&lt;html lang="en"&gt;
    &lt;head&gt;
        &lt;meta charset="UTF-8"&gt;
        &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
        &lt;title&gt;My First Astro Site&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;h1&gt;Hello, Astro!&lt;/h1&gt;
    &lt;/body&gt;
&lt;/html&gt;</code></pre>
      </div>

      <h4>Step 3: Run the Development Server</h4>
      <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
        <pre><code class="language-bash">npm run dev</code></pre>
      </div>

      <h3>Deliverables</h3>
      <ul>
        <li>A working Astro project with at least one page</li>
        <li>Basic HTML structure using Astro components</li>
        <li>Development server running successfully</li>
      </ul>
    </div>
  {/if}
</div>

<style>
  .code-preview {
    margin: 1rem 0;
  }
  
  .preview-content {
    padding: 1rem;
    background: white;
    border-radius: 4px;
  }

  h2 {
    user-select: none;
  }
  
  h2:hover {
    opacity: 0.8;
  }
</style>
