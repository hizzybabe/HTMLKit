---
title: Svelte Prerequisites
---

Here's a step-by-step guide on how to set up Svelte, develop a basic app, and deploy it to GitHub Pages:

---

## Prerequisites

Before starting, ensure you have the following:
1. **Git** - Version control system ([Download Git](https://git-scm.com/downloads))
2. **GitHub Account** - For hosting your project ([Sign up](https://github.com/))
3. **Basic HTML/CSS/JavaScript Knowledge** - Familiarity with basic web development is useful but not mandatory.
4. **Node.js and npm** - Svelte requires Node.js ([Download Node.js](https://nodejs.org/)).

---

## 1. Setting Up Git and GitHub

1. **Install Git** - Download and install Git.
2. **Set up Git configuration**:
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

3. **Create a new GitHub repository**:
   - Go to your GitHub account.
   - Click **New repository** and give it a name (e.g., `svelte-app`).
   - Initialize the repository with a README file.

4. **Clone the repository**:
   - In your terminal, clone the repository to your local machine.
   ```bash
   git clone https://github.com/your-username/svelte-app.git
   cd svelte-app
   ```

---

## 2. Setting Up Svelte

1. **Create a New Svelte Project**:
   - Run the following command to create a new Svelte app in the cloned GitHub repository folder:
   ```bash
   npx degit sveltejs/template svelte-app
   cd svelte-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Development Server**:
   - Start the local development server to test if Svelte is working.
   ```bash
   npm run dev
   ```
   - Open your browser and go to `http://localhost:5000` to see the Svelte app.

---

## 3. Modifying the Svelte App

1. Open the project in your code editor.
2. **Edit `src/App.svelte`**:
   - Replace the existing content with a simple example:
   ```html
   <script>
       let name = "World";
   </script>

   <h1>Hello {name}!</h1>

   <input type="text" bind:value={name} placeholder="Enter your name" />
   ```

3. Save and check the browser to see your changes reflected.

---

## 4. Preparing for Deployment to GitHub Pages

1. **Install `gh-pages`** (a package for deploying to GitHub Pages):
   ```bash
   npm install gh-pages --save-dev
   ```

2. **Add a GitHub Pages script**:
   - In `package.json`, add the following scripts:
   ```json
   "scripts": {
     "build": "svelte-kit build",
     "deploy": "gh-pages -d public"
   }
   ```
   
3. **Update `rollup.config.js`**:
   - Open `rollup.config.js` and modify the `output` section:
   ```javascript
   output: {
       sourcemap: true,
       format: 'iife',
       name: 'app',
       file: 'public/build/bundle.js'
   },
   ```
   
4. **Build the Project**:
   ```bash
   npm run build
   ```

5. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

---

## 5. Verifying the Deployment

1. Go to your GitHub repository.
2. Under **Settings** > **Pages**, set the branch to `gh-pages` if not already done.
3. GitHub will generate a URL for you to view your Svelte app live!

---

### Troubleshooting
- If you run into issues, make sure your GitHub repository is public and that you have pushed the changes to GitHub before deploying.

---

This guide should get your Svelte app up and running on GitHub Pages, ready to share!

<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
</script>

<ChapterNavigation 
    prevHref="/learn/svelte" 
    nextHref="/learn/svelte/ch1"
  />
