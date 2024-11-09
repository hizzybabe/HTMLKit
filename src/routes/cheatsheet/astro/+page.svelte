<script>
  // State to track visibility of each section
  let showOverview = false;
  let showInstallation = false;
  let showStructure = false;
  let showConcepts = false;
  let showDeployment = false;
  let showWorkshop = false;
</script>

<div class="container mx-auto px-4 py-8">
  <h1>Astro Cheatsheet</h1>
  
  <p>Quick reference guide for building fast, content-focused websites with Astro.</p>

  <h2 on:click={() => showOverview = !showOverview} class="cursor-pointer">
    🚀 1. Astro Overview {showOverview ? '▼' : '▶'}
  </h2>
  {#if showOverview}
    <ul>
      <li>Server-first, content-focused web framework for building fast, SEO-friendly websites</li>
      <li>Component-based architecture similar to React, Vue, and Svelte</li>
      <li>Minimizes client-side JavaScript for better performance</li>
      <li>Easy to learn - if you know HTML, you can start with Astro</li>
    </ul>
  {/if}

  <h2 on:click={() => showInstallation = !showInstallation} class="cursor-pointer">
    ⚙️ 2. Installation & Setup {showInstallation ? '▼' : '▶'}
  </h2>
  {#if showInstallation}
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

  <h2 on:click={() => showStructure = !showStructure} class="cursor-pointer">
    📁 3. Project Structure {showStructure ? '▼' : '▶'}
  </h2>
  {#if showStructure}
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

  <h2 on:click={() => showConcepts = !showConcepts} class="cursor-pointer">
    💡 4. Key Concepts {showConcepts ? '▼' : '▶'}
  </h2>
  {#if showConcepts}
    <h3>Components</h3>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-astro">---
// Component Script (server-side only)
const greeting = "Hello, Astro!";
---
<!-- Component Template -->
<h1>{greeting}</h1></code></pre>
    </div>

    <h3>File-Based Routing</h3>
    <ul>
      <li>Pages in <code>src/pages</code> automatically become routes</li>
      <li>Supports <code>.astro</code>, <code>.md</code>, <code>.mdx</code>, and <code>.html</code> files</li>
    </ul>

    <h3>Content Collections</h3>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-typescript">// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date()
  })
});</code></pre>
    </div>
  {/if}

  <h2 on:click={() => showDeployment = !showDeployment} class="cursor-pointer">
    🚀 5. Building & Deployment {showDeployment ? '▼' : '▶'}
  </h2>
  {#if showDeployment}
    <h3>Development</h3>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-bash">npm run dev</code></pre>
    </div>

    <h3>Production Build</h3>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code class="language-bash">npm run build</code></pre>
    </div>
  {/if}

  <h2 on:click={() => showWorkshop = !showWorkshop} class="cursor-pointer">
    🛠️ Workshop: Building Your First Astro Site {showWorkshop ? '▼' : '▶'}
  </h2>
  {#if showWorkshop}
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
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My First Astro Site</title>
    </head>
    <body>
        <h1>Hello, Astro!</h1>
    </body>
</html></code></pre>
      </div>

      <h4>Step 3: Run the Development Server</h4>
      <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
        <pre><code class="language-bash">npm run dev</code></pre>
      </div>
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
</style>
