---
title: Astro Prerequisites
---

## Prerequisites for Learning Astro

Before diving into Astro development, let's ensure you have everything set up correctly and understand how to deploy your Astro sites to various platforms.

### Development Environment Setup

1. **Node.js Installation**
   - Install Node.js (version 18.14.1 or higher) from [nodejs.org](https://nodejs.org)
   - Verify installation by running:
     ```bash
     node --version
     npm --version
     ```

2. **Code Editor**
   - Install [Visual Studio Code](https://code.visualstudio.com/)
   - Recommended extensions:
     - Astro
     - Path Intellisense
     - Prettier

### Deploying to Vercel

1. **Prepare Your Project**
   - Ensure your project has a `vercel.json` configuration:
     ```json
     {
       "buildCommand": "npm run build",
       "outputDirectory": "dist",
       "framework": "astro"
     }
     ```

2. **Deploy to Vercel**
   - Create an account on [Vercel](https://vercel.com)
   - Install Vercel CLI:
     ```bash
     npm install -g vercel
     ```
   - Deploy your project:
     ```bash
     vercel
     ```

### Deploying to Netlify

1. **Prepare Your Project**
   - Create a `netlify.toml` file in your project root:
     ```toml
     [build]
       command = "npm run build"
       publish = "dist"
     ```

2. **Deploy to Netlify**
   - Create an account on [Netlify](https://netlify.com)
   - Install Netlify CLI:
     ```bash
     npm install -g netlify-cli
     ```
   - Deploy your project:
     ```bash
     netlify deploy
     ```

### Required Knowledge

Before starting with Astro, you should have:
- Basic HTML understanding
- CSS fundamentals
- JavaScript basics
- Familiarity with terminal/command line
- Git basics (recommended)

### Useful Resources

- [Official Astro Documentation](https://docs.astro.build)
- [Node.js Documentation](https://nodejs.org/docs)
- [Git Documentation](https://git-scm.com/doc)
- [MDN Web Docs](https://developer.mozilla.org)

<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
</script>

<ChapterNavigation 
    prevHref="/learn/astro" 
    nextHref="/learn/astro/ch1"
/>