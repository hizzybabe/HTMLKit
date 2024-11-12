---
title: Styling in Astro
---

## Chapter 4: Styling in Astro

In this chapter, you’ll explore various ways to style Astro components, including using scoped CSS, adding global styles, and integrating popular styling frameworks like Tailwind CSS. By the end of this chapter, you’ll build a responsive portfolio page to practice these styling techniques.

### **Chapter 4 Overview:**
- Duration: Approximately 2-3 hours
- Goal: Learn different methods for styling in Astro, including scoped CSS, global styles, and Tailwind CSS integration.

---

### **Theory**

#### **4.1 CSS in Astro**

Astro allows you to add CSS directly within `.astro` files to style individual components. You can use standard CSS, CSS modules, or import external stylesheets.

**Example of Inline CSS in `.astro`**:
```astro
<style>
    h1 {
        color: teal;
    }
    .container {
        padding: 20px;
        background-color: lightgray;
    }
</style>

<div class="container">
    <h1>Hello, Astro!</h1>
</div>
```

Adding CSS within `.astro` files is useful for quickly styling components and pages without external files. This CSS is scoped to the current file by default, preventing styles from affecting other components.

---

#### **4.2 Scoped Styles**

In Astro, CSS written within a `.astro` file is scoped to that specific component, ensuring that it won’t interfere with styles in other parts of the site. Scoped styles help maintain modularity and avoid unintended side effects.

**Scoped CSS Example**:
```astro
<style>
    .card {
        border: 1px solid #ddd;
        padding: 15px;
        border-radius: 8px;
        background-color: #f9f9f9;
    }
</style>

<div class="card">
    <h2>Card Title</h2>
    <p>This is a card component with scoped styles.</p>
</div>
```

The `.card` class here is only applied to the styles in this file, so any other `.card` classes on the site won’t be affected.

---

#### **4.3 Tailwind CSS Integration**

Tailwind CSS is a utility-first CSS framework that provides pre-built classes to quickly style elements without writing custom CSS. Astro offers an easy way to integrate Tailwind CSS into your project.

**Setting Up Tailwind CSS in Astro**:
1. Install Tailwind and its dependencies:
   ```bash
   npm install tailwindcss postcss autoprefixer
   ```

2. Initialize Tailwind to create the configuration file:
   ```bash
   npx tailwindcss init
   ```

3. Configure Tailwind to work with Astro by editing `tailwind.config.js`:
   ```javascript
   // tailwind.config.js
   module.exports = {
       content: [
           "./src/**/*.{html,js,astro}"
       ],
       theme: {
           extend: {},
       },
       plugins: [],
   };
   ```

4. Import Tailwind CSS into your global styles:
   - Create a CSS file (e.g., `src/styles/global.css`) and add the following:
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

5. Link the global CSS file in your Astro project:
   - Open `src/layouts/BaseLayout.astro` or your main layout file and import the global styles.

   ```astro
   ---
   import '../styles/global.css';
   ---

   <html>
       <head>
           <title>My Astro Site</title>
       </head>
       <body>
           <slot />
       </body>
   </html>
   ```

**Using Tailwind in Astro**:
Now, you can use Tailwind’s utility classes directly in `.astro` files.

```astro
<div class="bg-blue-500 text-white p-4 rounded-lg">
    Tailwind Styled Box
</div>
```

Tailwind CSS provides a wide range of classes for responsive design, making it easy to build and customize your layout.

---

#### **4.4 Global Styles**

Global styles are styles that apply across the entire site. You can add them to your project by linking a global CSS file in your main layout or importing them directly in your Astro config file.

**Creating a Global Stylesheet**:
1. Create a `global.css` file in `src/styles/`.
2. Add global styles, such as typography or color themes.

   ```css
   /* global.css */
   body {
       font-family: Arial, sans-serif;
       margin: 0;
       padding: 0;
       color: #333;
   }

   a {
       color: #007acc;
       text-decoration: none;
   }
   ```

3. Import `global.css` in your main layout file (`BaseLayout.astro`).

Global styles are helpful for setting base styling rules that should apply throughout the site.

---

<h2 class="workshop-title">Practice Workshop: Responsive Portfolio</h2>
<div class="workshop-container">

In this workshop, you’ll create a responsive portfolio page using Astro. The portfolio will showcase a list of projects with titles, descriptions, and links, and will include responsive styling using Tailwind CSS.

#### **Workshop Tasks**

1. **Set Up Tailwind CSS**

   - Follow the instructions in the Tailwind CSS section above to set up Tailwind in your Astro project.

2. **Create a Portfolio Page**

   - In `src/pages`, create a file named `portfolio.astro`.

   **portfolio.astro**:
   ```astro
   ---
   const projects = [
       {
           title: "Astro Blog",
           description: "A blog built with Astro and Markdown.",
           link: "https://example.com/astro-blog"
       },
       {
           title: "E-commerce Site",
           description: "An online store built with Astro and Tailwind CSS.",
           link: "https://example.com/ecommerce"
       },
       {
           title: "Portfolio Website",
           description: "A personal portfolio to showcase my work.",
           link: "https://example.com/portfolio"
       }
   ];
   ---

   <h1 class="text-3xl font-bold text-center my-8">My Portfolio</h1>

   <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
       {#each projects as project}
           <div class="border rounded-lg p-4 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
               <h2 class="text-xl font-semibold mb-2">{project.title}</h2>
               <p class="text-gray-600 mb-4">{project.description}</p>
               <a href={project.link} target="_blank" class="text-blue-500 hover:underline">View Project</a>
           </div>
       {/each}
   </div>
   ```

   **Explanation**:
   - **Responsive Grid**: Tailwind’s `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` classes create a responsive grid that changes based on screen size.
   - **Hover Effect**: The `hover:shadow-xl` class adds a shadow effect when the card is hovered over.
   - **Transition**: The `transition-shadow duration-300` class smoothens the hover effect, making it feel interactive.

3. **Add Global Styles (Optional)**

   - In `src/styles/global.css`, you can add global styles to customize the site’s appearance.

   **global.css**:
   ```css
   /* Custom global styles */
   body {
       font-family: 'Helvetica Neue', sans-serif;
       background-color: #f3f4f6;
       margin: 0;
       color: #333;
   }

   h1 {
       color: #1e3a8a;
   }
   ```

4. **Test the Responsive Layout**

   - Start the Astro development server (`npm run dev`) and open `http://localhost:3000/portfolio` in your browser.
   - Resize your browser window to see the responsive grid adjust for different screen sizes.

---

### **Deliverables**

1. **Astro Project Folder**:
   - Submit a zipped version of your Astro project, including `portfolio.astro` and any custom styles in `global.css` if used.

2. **Screenshot**:
   - Capture a screenshot of the portfolio page at different screen sizes to demonstrate responsiveness.

---

### **Summary and Key Takeaways**

- **CSS in Astro**: You can write CSS directly in `.astro` files, where it’s scoped to that component by default.
- **Scoped Styles**: CSS added to `.astro` files does not affect other parts of the site, keeping styles modular.
- **Tailwind CSS Integration**: Tailwind CSS provides a wide range of utility classes, making it easy to build responsive and styled components without writing custom CSS.
- **Global Styles**: Use a global stylesheet for site-wide styling, such as base typography and colors.

In this chapter, you learned how to apply styles in Astro using various methods and built a responsive portfolio page to practice these techniques. Mastering Astro’s styling options will help you create visually appealing and responsive websites.

</div>

<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
</script>

<ChapterNavigation 
    prevHref="/learn/astro/ch3" 
    nextHref="/learn/astro/ch5"
  />