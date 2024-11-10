---
title: Blog Post Layout
---

Creating a simple blog post layout with HTML and CSS is a great way to present articles or posts in a readable and visually appealing format. This tutorial covers setting up a layout for a single blog post with a title, author, date, content, and images.

---

### 1. **Set Up Your Files**

You’ll need:
1. **index.html** — for the HTML structure of the blog post.
2. **style.css** — for styling the blog post layout.

---

### 2. **HTML Code (`index.html`)**

Here’s the basic HTML structure for a single blog post layout.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog Post</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <article class="blog-post">
        <header class="post-header">
            <h1 class="post-title">How to Create a Simple Blog Post Layout</h1>
            <p class="post-meta">By <span class="author">John Doe</span> | <span class="date">November 10, 2024</span></p>
        </header>

        <img src="post-image.jpg" alt="Blog post image" class="post-image">

        <section class="post-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum purus vitae felis sagittis, a dapibus dui sollicitudin. Sed facilisis orci at metus volutpat, a vehicula nunc facilisis.</p>
            <p>Curabitur ut enim vel orci auctor ultrices. Nullam eu est id magna vulputate fermentum in sit amet eros. Integer fringilla tortor eget dolor feugiat malesuada. Fusce eget libero ut libero efficitur faucibus.</p>
            
            <h2>Subheading Example</h2>
            <p>Aliquam erat volutpat. Integer vel nisi sit amet velit pretium consequat. Morbi tincidunt dolor in sollicitudin elementum. In hac habitasse platea dictumst.</p>
            
            <blockquote>"This is a quote example within the blog post, providing emphasis to a specific part of the content."</blockquote>
            
            <p>Praesent in dapibus risus, ut feugiat sapien. Nulla vel dui eu velit condimentum faucibus vel ac justo.</p>
        </section>
        
        <footer class="post-footer">
            <p>Tags: <a href="#">HTML</a>, <a href="#">CSS</a>, <a href="#">Web Design</a></p>
        </footer>
    </article>
</body>
</html>
```

Replace `post-image.jpg` with the actual path to an image you want to use for the post.

---

### 3. **CSS Code (`style.css`)**

Create a `style.css` file in the same directory as `index.html` and add the following CSS code to style the blog post layout.

```css
/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f9f9f9;
    color: #333;
    padding: 2rem;
    display: flex;
    justify-content: center;
}

.blog-post {
    max-width: 800px;
    background-color: #fff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.post-header {
    text-align: center;
    margin-bottom: 1.5rem;
}

.post-title {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 0.5rem;
}

.post-meta {
    font-size: 0.9rem;
    color: #666;
}

.post-image {
    width: 100%;
    height: auto;
    margin: 1.5rem 0;
    border-radius: 10px;
}

.post-content {
    font-size: 1.1rem;
    color: #333;
}

.post-content h2 {
    font-size: 1.8rem;
    color: #4CAF50;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
}

.post-content p {
    margin-bottom: 1rem;
}

blockquote {
    margin: 1rem 0;
    padding: 1rem;
    background-color: #f0f0f0;
    border-left: 4px solid #4CAF50;
    font-style: italic;
    color: #666;
}

.post-footer {
    margin-top: 2rem;
    text-align: center;
    font-size: 0.9rem;
    color: #666;
}

.post-footer a {
    color: #4CAF50;
    text-decoration: none;
    font-weight: bold;
}
```

---

### 4. **Explanation of the Code**

- **HTML Structure**:
  - **Header**: Contains the blog post title, author, and date.
  - **Image**: A featured image in the `.post-image` class that visually represents the content.
  - **Content Section**: The main content of the blog post, which includes paragraphs, a subheading, and a blockquote.
  - **Footer**: Contains tags related to the post, linking to categories or tags.

- **CSS Styling**:
  - **Container Styling**: The `.blog-post` container centers the content, with padding and a shadow for a clean look.
  - **Text Styling**: Specific font sizes and colors are applied to different parts of the post.
  - **Quote Styling**: The `blockquote` styling includes a left border and background color for emphasis.
  - **Responsive Image**: `.post-image` is styled to be responsive and fit within the blog post container.

### 5. **Customization**

- **Change Colors**: Modify the color values in CSS to match your theme.
- **Add More Sections**: You can add more sections like “Related Posts” or “Comments” below the footer.
- **Adjust Width**: Change the `max-width` in `.blog-post` to make the layout wider or narrower.

### 6. **Preview Your Blog Post Layout**

Open `index.html` in your web browser to view the blog post layout. Adjust styles in `style.css` as needed to refine the design.

---

This tutorial provides a clean, readable blog post layout.