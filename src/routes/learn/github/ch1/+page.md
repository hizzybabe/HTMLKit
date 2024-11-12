---
title: Introduction to Astro & Setup
---

## Chapter 1: Introduction to Astro & Setup

In this chapter, you’ll get an introduction to Astro, a modern web framework designed for building fast, content-focused websites. We’ll explore key concepts like Static Site Generation (SSG) vs. Server-Side Rendering (SSR), set up your first Astro project, and understand the Astro project structure. By the end of this chapter, you’ll complete a “Hello Astro!” workshop to create your first Astro page.

### **Chapter 1 Overview:**
- Duration: Approximately 1-2 hours
- Goal: Understand what Astro is, learn the difference between SSG and SSR, set up an Astro project, and create your first page.

---

### **Theory**

#### **1.1 What is Astro?**

Astro is a static site generator that focuses on speed, performance, and simplicity. It allows you to build fast, SEO-friendly websites using modern web technologies. Astro offers a unique approach by allowing you to mix multiple JavaScript frameworks (like React, Vue, Svelte) and only ships the minimal JavaScript required.

**Key Features of Astro**:
- **Island Architecture**: Astro renders most content as static HTML, only hydrating interactive components as needed.
- **Zero JavaScript by Default**: Astro sites have minimal JavaScript unless you choose to add it, reducing page load times.
- **Framework Agnostic**: Astro allows you to use components from React, Vue, Svelte, and others in the same project.
- **Built-in Markdown and MDX Support**: Perfect for content-heavy sites.

---

#### **1.2 Static Site Generation vs Server-Side Rendering**

- **Static Site Generation (SSG)**:
  - SSG pre-builds all pages into static HTML files during the build process. This is ideal for content-focused websites, as it ensures faster load times and better performance.
  - Astro primarily uses SSG, making it an excellent choice for blogs, portfolios, and documentation sites.

- **Server-Side Rendering (SSR)**:
  - SSR generates pages dynamically on the server for each request. This is useful for sites requiring frequent content updates or personalized content.
  - While Astro is primarily focused on SSG, it can also support SSR if needed.

**SSG vs. SSR Comparison**:
- **SSG** is faster for content that doesn’t change frequently.
- **SSR** is suitable for personalized, dynamic content but generally slower for first-time page loads.

---

#### **1.3 Setting Up Your First Astro Project**

Follow these steps to set up an Astro project.

1. **Install Node.js**:
   - If you don’t already have Node.js, download it from [https://nodejs.org](https://nodejs.org).
   - Confirm installation by running `node -v` and `npm -v` in your terminal.

2. **Create a New Astro Project**:
   - In your terminal, run the following command to create a new Astro project:
     ```bash
     npm create astro@latest
     ```
   - This command will prompt you to select a template. Choose `Blog`, `Portfolio`, or `Basic` to get started, or use the default option if unsure.

3. **Navigate to Your Project Directory**:
   ```bash
   cd your-project-name
   ```

4. **Install Dependencies**:
   - Run the following command to install the required dependencies:
     ```bash
     npm install
     ```

5. **Start the Development Server**:
   - Start the Astro development server with:
     ```bash
     npm run dev
     ```
   - Open `http://localhost:3000` in your browser to see your Astro project.

---

#### **1.4 Understanding Project Structure**

Astro projects have a unique file structure optimized for content-focused sites. Here’s a quick overview:

- **`src/`**: This is where most of your project’s content and code live.
  - **`pages/`**: Contains individual page files (`.astro`, `.md`) for your website.
  - **`layouts/`**: Contains layout components used to structure pages consistently.
  - **`components/`**: Contains reusable components, which can be written in `.astro`, `.jsx`, `.vue`, or `.svelte`.
  
- **`public/`**: This folder is for static assets like images, fonts, and icons. Everything here is served as-is, and paths are relative to the root (`/`).

- **Astro Files**:
  - **`.astro` files**: These are special files unique to Astro, blending HTML, JavaScript, and template syntax for highly performant web pages.
  - **Markdown/MDX**: Astro supports Markdown (`.md`) and MDX (`.mdx`) out of the box, making it perfect for content-heavy sites.

---

<h2 class="workshop-title">Practice Workshop: Hello Astro!</h2>
<div class="workshop-container">

In this workshop, you’ll create a simple “Hello Astro!” page to familiarize yourself with Astro’s project structure and `.astro` file syntax.

#### **Workshop Tasks**

1. **Navigate to Your Project Directory**:
   - Open your Astro project folder in a code editor (e.g., VS Code).

2. **Create a New Page**:
   - In the `src/pages/` directory, create a new file named `hello.astro`.

3. **Write Your First Astro Page**

   **hello.astro**:
   ```astro
   ---
   // Optional frontmatter, used to declare variables or data for the page
   const title = "Hello Astro!";
   ---

   <html>
       <head>
           <title>{title}</title>
       </head>
       <body>
           <h1>{title}</h1>
           <p>Welcome to your first Astro page! 🚀</p>
       </body>
   </html>
   ```

   **Explanation**:
   - **Frontmatter**: The `---` syntax at the top of `.astro` files is used to declare variables or data for the page, similar to frontmatter in Markdown.
   - **Template Syntax**: `{title}` is used to interpolate variables within the HTML structure.

4. **Add a Link to Your New Page**
   - Open `src/pages/index.astro` (or your homepage) and add a link to your new `hello.astro` page.

   **index.astro**:
   ```astro
   <h1>Welcome to My Astro Site!</h1>
   <a href="/hello">Go to Hello Astro page</a>
   ```

5. **Run and Test Your Project**
   - Make sure your development server is running with `npm run dev`.
   - Open `http://localhost:3000/hello` in your browser, and you should see “Hello Astro!” along with the welcome message.

---

### **Deliverables**

1. **Astro Project Folder**:
   - Submit a zipped version of your Astro project, including `hello.astro`.

2. **Screenshot**:
   - Take a screenshot of the “Hello Astro!” page as it appears in your browser.

---

### **Summary and Key Takeaways**

- **Astro Overview**: Astro is a static site generator focused on performance and content delivery, ideal for content-rich sites.
- **SSG vs SSR**: Astro primarily uses Static Site Generation, ensuring fast page loads and minimal JavaScript by default.
- **Project Setup**: The Astro CLI (`npm create astro@latest`) makes it easy to get started with new projects.
- **Project Structure**: Astro organizes content in `pages/` for easy access and has support for `.astro`, `.md`, and `.mdx` files.

By completing this chapter, you’ve learned the basics of Astro and created a simple page using `.astro` syntax. These foundational skills will be essential as you build more advanced, content-rich websites with Astro.

</div>

<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
</script>

<ChapterNavigation 
    prevHref="/learn/astro" 
    nextHref="/learn/astro/ch2"
  />