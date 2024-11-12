---
title: Astro Components & Pages
---

## Chapter 3: Markdown & MDX

In this chapter, you’ll learn how to work with Markdown (`.md`) and MDX (`.mdx`) files in Astro to create a flexible content management system. Markdown files allow you to write content using a simple syntax, while MDX files extend Markdown with JSX-like components. You’ll also explore how to use frontmatter for metadata and organize content with Astro’s content collections. By the end of this chapter, you’ll create a dynamic blog post system using Markdown and MDX.

### **Chapter 3 Overview:**
- Duration: Approximately 2-3 hours
- Goal: Understand how to use Markdown and MDX files in Astro to manage content, including frontmatter and content collections.

---

### **Theory**

#### **3.1 Working with Markdown Files**

Markdown files (`.md`) are widely used in content-focused websites because of their simplicity and readability. Astro supports Markdown files directly, allowing you to create and manage content easily.

**Basic Markdown Example**:
```markdown
# My First Blog Post
This is a sample blog post written in Markdown. Markdown syntax includes headers, lists, links, images, and more.

## Subheading
More content here.
```

To render Markdown files in Astro, place them in `src/pages/` or import them into other `.astro` files.

---

#### **3.2 MDX Integration**

MDX (`.mdx`) is a powerful extension of Markdown that allows you to include components within Markdown files. This is particularly useful if you need to embed interactive elements, like buttons or videos, within content.

**Example of MDX**:
```mdx
# Interactive Blog Post

Here’s some Markdown content with an embedded component.

<CustomButton label="Click Me" />
```

**Using MDX in Astro**:
- Astro supports MDX files with built-in support.
- Create `.mdx` files within `src/pages/` or import them into `.astro` files.
- MDX files allow you to mix Markdown syntax and components, making it easy to create engaging content.

To use MDX, install the necessary plugin:
```bash
npm install @astrojs/mdx
```

And add it to your `astro.config.mjs`:
```javascript
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()]
});
```

---

#### **3.3 Frontmatter**

Frontmatter is metadata added at the top of Markdown and MDX files, enclosed within `---`. It’s used to define variables like title, date, and tags, which can be accessed within Astro to manage content dynamically.

**Frontmatter Example**:
```markdown
---
title: "My First Blog Post"
date: "2023-01-01"
tags: ["Astro", "Markdown", "Blog"]
---

# My First Blog Post

This is content with metadata defined in the frontmatter.
```

In Astro, you can access frontmatter properties when rendering Markdown files, allowing you to display metadata like titles and dates.

---

#### **3.4 Content Collections**

Content collections in Astro provide a way to organize and retrieve Markdown and MDX content efficiently. By creating a dedicated directory for collections, you can centralize content and fetch it as needed.

**Setting Up a Content Collection**:
1. Create a new folder in `src/content` (e.g., `src/content/blog`).
2. Place Markdown or MDX files within this folder, each representing a content item.

**Example File Structure**:
```
src/
├── content/
│   └── blog/
│       ├── post1.md
│       └── post2.md
```

**Fetching Content Collection**:
- Use `Astro.glob` to retrieve content from a folder and display it dynamically on pages.

**Example of Fetching Content**:
```astro
---
const posts = await Astro.glob('../content/blog/*.md');
---

<h1>Blog</h1>
<ul>
    {#each posts as post}
        <li><a href={post.url}>{post.frontmatter.title}</a></li>
    {/each}
</ul>
```

With content collections, you can create a dynamic blog system that pulls content directly from Markdown files.

---

<h2 class="workshop-title">Practice Workshop: Blog Post System</h2>
<div class="workshop-container">

In this workshop, you’ll build a blog post system using Markdown files. Each Markdown file will represent a blog post with frontmatter metadata, allowing you to create a dynamic blog layout that displays each post’s title and summary.

#### **Workshop Tasks**

1. **Set Up a Blog Content Collection**

   - In your project, create a new folder named `content/blog` under `src`.
   - Inside `src/content/blog`, create a few Markdown files for blog posts.

2. **Create Markdown Files for Blog Posts**

   **src/content/blog/post1.md**:
   ```markdown
   ---
   title: "Getting Started with Astro"
   date: "2023-01-01"
   summary: "An introduction to Astro, a modern web framework for static site generation."
   ---

   # Getting Started with Astro

   Astro is a static site generator that offers a fast and flexible way to create websites.
   ```

   **src/content/blog/post2.md**:
   ```markdown
   ---
   title: "Using Markdown in Astro"
   date: "2023-02-01"
   summary: "Learn how to use Markdown files in Astro for content management."
   ---

   # Using Markdown in Astro

   Markdown files allow you to write content easily using simple syntax.
   ```

   Repeat this process to add a few more posts, using different dates, titles, and summaries in the frontmatter.

3. **Fetch Blog Posts in the Blog Index Page**

   - In `src/pages/blog`, create an `index.astro` file to serve as the main blog page.

   **blog/index.astro**:
   ```astro
   ---
   const posts = await Astro.glob('../../content/blog/*.md');
   ---

   <h1>Blog</h1>
   <ul>
       {#each posts as post}
           <li>
               <a href={post.url}>
                   <h2>{post.frontmatter.title}</h2>
                   <p>{post.frontmatter.summary}</p>
                   <small>Published on {post.frontmatter.date}</small>
               </a>
           </li>
       {/each}
   </ul>
   ```

   **Explanation**:
   - **Dynamic Fetching**: `Astro.glob` retrieves all Markdown files in the `blog` content collection.
   - **Frontmatter Data**: Each post’s title, summary, and date are accessed from frontmatter and displayed on the blog index page.

4. **Display Individual Blog Post Content**

   - Each Markdown file generates a URL based on its filename. For example, `post1.md` becomes `/blog/post1`.
   - Click on any post link from the blog index to view the full content, including the `#` heading from Markdown.

5. **Add MDX for Enhanced Content (Optional)**

   - To add interactive components to your blog, convert one of the Markdown files to MDX.
   - Rename `post2.md` to `post2.mdx` and add a custom component, such as a call-to-action button.

   **post2.mdx**:
   ```mdx
   ---
   title: "Using Markdown and MDX in Astro"
   date: "2023-02-01"
   summary: "Learn how to use Markdown and MDX files in Astro for content management."
   ---

   # Using Markdown and MDX in Astro

   Markdown files allow you to write content easily using simple syntax.

   <CustomButton label="Learn More" />
   ```

   **CustomButton Component**:
   - Create `src/components/CustomButton.astro` with a button component.

   ```astro
   ---
   const { label } = Astro.props;
   ---

   <button style="padding: 8px 16px; background-color: teal; color: white;">
       {label}
   </button>
   ```

   **Usage**:
   - The MDX file will render `CustomButton` as part of the blog post.

6. **Run and Test Your Project**

   - Start the Astro development server (`npm run dev`).
   - Open `http://localhost:3000/blog` to view the blog index, displaying each post’s title, summary, and date.
   - Click on each post to view the full content, including any embedded components in MDX files.

---

### **Deliverables**

1. **Astro Project Folder**:
   - Submit a zipped version of your Astro project, including `content/blog` with Markdown and MDX files, and the `CustomButton` component (if included).

2. **Screenshot**:
   - Capture a screenshot of the blog index page and one of the individual blog posts with embedded MDX components.

---

### **Summary and Key Takeaways**

- **Markdown & MDX in Astro**: Markdown is ideal for content, while MDX allows you to include components for more interactive pages.
- **Frontmatter**: Frontmatter metadata is useful for managing content details, such as titles and dates.
- **Content Collections**: Content collections in Astro let you organize and fetch content, enabling dynamic displays on pages.

This chapter introduced Astro’s Markdown and MDX support, empowering you to create dynamic, component-enhanced content systems. By building a blog post system, you practiced setting up and managing content collections—a foundational skill for content-focused sites.

</div>

<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
</script>

<ChapterNavigation 
    prevHref="/learn/astro/ch2" 
    nextHref="/learn/astro/ch4"
  />