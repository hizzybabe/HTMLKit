---
title: Astro Components & Pages
---

## Chapter 2: Astro Components & Pages

In this chapter, you’ll learn how to create and work with components and pages in Astro. Astro’s file-based routing makes creating new pages simple, and its component syntax allows for reusable, modular code. You’ll also explore how to handle static and dynamic content within your pages. By the end of this chapter, you’ll complete a workshop on building a basic blog layout.

### **Chapter 2 Overview:**
- Duration: Approximately 2-3 hours
- Goal: Understand Astro’s component syntax, file-based routing, and how to create both static and dynamic content.

---

### **Theory**

#### **2.1 Astro Component Syntax**

Astro components are unique `.astro` files that blend HTML, JavaScript, and templating syntax. Components allow you to create reusable elements, like headers, footers, or card layouts, which can be included in multiple pages.

**Basic Component Example**:
```astro
// src/components/Greeting.astro
---
const { name } = Astro.props;
---

<h2>Hello, {name}!</h2>
```

**Explanation**:
- **Props**: In Astro, you access component properties using `Astro.props`.
- This component accepts a `name` prop, which can be passed in from other pages or components.

**Using a Component**:
```astro
// In any .astro file
---
import Greeting from '../components/Greeting.astro';
---

<Greeting name="Astro" />
```

Components can be organized in `src/components/` for easy access and reusability.

---

#### **2.2 Creating Pages**

In Astro, pages are created within the `src/pages/` directory. Each file within `pages/` automatically becomes a route in your website.

**Example of Creating a Page**:
- If you create a file named `about.astro` in `src/pages/`, it will be accessible at `/about`.

**about.astro**:
```astro
---
const title = "About Us";
---

<h1>{title}</h1>
<p>This is the about page for our website.</p>
```

Astro’s file-based routing system makes it easy to add new pages without complex routing logic.

---

#### **2.3 File-based Routing**

Astro automatically generates routes based on the files within `src/pages/`. Here’s how it works:

- **Simple Pages**: A file named `contact.astro` in `src/pages/` becomes `/contact`.
- **Nested Pages**: Create folders within `pages/` for nested routes. For example, `src/pages/blog/post.astro` becomes `/blog/post`.
- **Index Files**: Naming a file `index.astro` in any folder makes it the default page for that folder’s route. `src/pages/blog/index.astro` becomes `/blog`.

This structure keeps routing intuitive and easy to manage.

---

#### **2.4 Static & Dynamic Content**

Astro supports both static and dynamic content, making it versatile for blogs, portfolios, and more.

- **Static Content**: Hardcoded content that doesn’t change, ideal for sections like footers or informational pages.
- **Dynamic Content**: Content that can be generated or fetched, often used in blogs or portfolios. Astro uses frontmatter to define variables, allowing you to dynamically generate content in each `.astro` file.

**Example of Static Content**:
```astro
<h1>Welcome to My Website</h1>
<p>This text is static and hardcoded in the .astro file.</p>
```

**Example of Dynamic Content with Frontmatter**:
```astro
---
const post = {
    title: "My First Blog Post",
    date: "2023-01-01",
    content: "This is the content of my blog post."
};
---

<article>
    <h1>{post.title}</h1>
    <p>Published on: {post.date}</p>
    <p>{post.content}</p>
</article>
```

For large collections of dynamic content, you can also use Markdown files and import their content into Astro.

---

<h2 class="workshop-title">Practice Workshop: Building a Blog Layout</h2>
<div class="workshop-container">

In this workshop, you’ll create a basic blog layout in Astro. This layout will include a list of blog posts, each displayed with its title and summary. You’ll also set up file-based routing and use dynamic content to populate each post.

#### **Workshop Tasks**

1. **Set Up Your Project**
   - If you’re continuing from a previous project, use the same setup. Otherwise, set up a new Astro project.

2. **Create a Blog Page**

   - In the `src/pages` folder, create a new folder called `blog`.
   - Inside `blog`, create an `index.astro` file to serve as the main blog page.

   **blog/index.astro**:
   ```astro
   ---
   const posts = [
       { title: "Understanding Astro Components", slug: "understanding-astro-components", summary: "Learn the basics of Astro components and how to use them." },
       { title: "Static Site Generation in Astro", slug: "static-site-generation-in-astro", summary: "An introduction to static site generation with Astro." },
       { title: "Dynamic Content in Astro", slug: "dynamic-content-in-astro", summary: "How to manage dynamic content in Astro projects." }
   ];
   ---

   <h1>Blog</h1>
   <ul>
       {#each posts as post}
           <li>
               <a href={`/blog/${post.slug}`}>
                   <h2>{post.title}</h2>
                   <p>{post.summary}</p>
               </a>
           </li>
       {/each}
   </ul>
   ```

   **Explanation**:
   - **Dynamic Content**: `posts` is an array of blog posts defined in frontmatter. Each post has a title, a slug for the URL, and a summary.
   - **Looping with `each`**: The `each` block loops over the posts array, displaying each post’s title and summary as a link.

3. **Create Individual Blog Post Pages**

   - In `src/pages/blog`, create files for each blog post, using the `slug` defined in the main blog page.
   - For example, create a file named `understanding-astro-components.astro`.

   **understanding-astro-components.astro**:
   ```astro
   ---
   const title = "Understanding Astro Components";
   const date = "2023-01-01";
   const content = "In this post, we explore the basics of Astro components and their usage.";
   ---

   <article>
       <h1>{title}</h1>
       <p><em>Published on {date}</em></p>
       <p>{content}</p>
   </article>
   ```

   Repeat this process for each blog post in your list, creating separate files and using dynamic variables for each post’s title, date, and content.

4. **Create a Blog Post Layout Component (Optional)**

   - To keep each blog post page consistent, create a layout component for blog posts in `src/layouts`.

   **src/layouts/BlogPostLayout.astro**:
   ```astro
   ---
   const { title, date, content } = Astro.props;
   ---

   <article>
       <h1>{title}</h1>
       <p><em>Published on {date}</em></p>
       <div>{content}</div>
   </article>
   ```

   **Using the Layout in Blog Post Files**:
   - Import and use this layout in each blog post file.
   
   ```astro
   ---
   import BlogPostLayout from '../../layouts/BlogPostLayout.astro';

   const title = "Understanding Astro Components";
   const date = "2023-01-01";
   const content = "In this post, we explore the basics of Astro components and their usage.";
   ---

   <BlogPostLayout {title} {date} {content} />
   ```

5. **Run and Test Your Project**

   - Start the Astro development server (`npm run dev`).
   - Open `http://localhost:3000/blog` to see the main blog page with links to individual posts.
   - Click on each post link to view the content, ensuring that the layout and routing are working correctly.

---

### **Deliverables**

1. **Astro Project Folder**:
   - Submit a zipped version of your Astro project, including `blog/index.astro`, individual blog post files, and the optional layout component (`BlogPostLayout.astro`).

2. **Screenshot**:
   - Capture a screenshot of the blog index page and one of the individual blog posts.

---

### **Summary and Key Takeaways**

- **Astro Component Syntax**: Astro components use props for dynamic content, allowing you to create reusable layouts.
- **File-based Routing**: Organize files in `src/pages` to automatically generate routes.
- **Static & Dynamic Content**: Use frontmatter for dynamic content, creating flexibility within Astro pages.
- **Building a Blog Layout**: Use file-based routing and components to set up a blog layout with individual post pages.

This chapter introduced Astro’s component structure, page creation, and dynamic content management. You’ve also practiced creating a blog layout, a foundational setup that can be extended for more complex content-focused sites.

</div>

<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
</script>

<ChapterNavigation 
    prevHref="/learn/astro/ch1" 
    nextHref="/learn/astro/ch3"
  />