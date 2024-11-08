<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
  let showCode = true;
</script>

<div class="container mx-auto px-4 py-8">
  <h1>Chapter 5: Responsive Web Design & Media Queries</h1>
  
  <div class="chapter-intro">
    <p>In this chapter, you'll learn the principles of responsive web design (RWD) and how to use media queries to create layouts that adapt to different screen sizes. You'll also be introduced to flexible units that allow your designs to adjust seamlessly across various devices.</p>
    
    <div class="chapter-details">
      <p><strong>Duration:</strong> Approximately 2 hours</p>
      <p><strong>Goal:</strong> Learn to create responsive layouts using media queries and flexible units.</p>
    </div>
  </div>

  <hr/>

  <h2>Theory</h2>

  <h3>5.1 Principles of Responsive Web Design</h3>
  <p>Responsive Web Design (RWD) ensures that web content looks good and functions well across a range of devices and screen sizes. The core principles include:</p>

  <div class="concept-block">
    <ul>
      <li><strong>Fluid Layouts</strong>: Use flexible units like percentages instead of fixed pixel values</li>
      <li><strong>Flexible Images</strong>: Use CSS to resize images and avoid overflowing containers</li>
      <li><strong>Media Queries</strong>: CSS rules that apply different styles based on screen size</li>
    </ul>
  </div>

  <h3>5.2 Using Media Queries</h3>
  <p>Media queries allow you to apply CSS rules based on certain conditions, such as screen width or height.</p>

  <div class="concept-block">
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>/* Default layout */
.gallery-item {
    width: 30%;
}

/* Small screens */
@media (max-width: 767px) {
    .gallery-item {
        width: 100%;
    }
}</code></pre>
    </div>
  </div>

  <h3>5.3 Introduction to Flexible Units</h3>
  <p>Flexible units help create responsive designs by adjusting elements based on screen size or user settings.</p>

  <div class="concept-block">
    <h4>Percentage (%)</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>.container {
    width: 80%;  /* Relative to parent */
}</code></pre>
    </div>

    <h4>em and rem Units</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>.text {
    font-size: 1.2em;   /* Relative to parent font size */
    margin: 1.5rem;     /* Relative to root font size */
}</code></pre>
    </div>

    <h4>Viewport Units</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>.hero {
    height: 50vh;    /* 50% of viewport height */
    width: 100vw;    /* 100% of viewport width */
}</code></pre>
    </div>
  </div>

  <h2 class="workshop-title">Practice Workshop: Making the Gallery Responsive</h2>
  <div class="workshop-container">
    <h3 class="task">Task: Update your photo gallery to be responsive across all devices</h3>
    
    <h4>Step 1: Update Gallery Layout</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>.gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 2%;
}

.gallery-item {
    width: 30%;
    margin-bottom: 2rem;
}

@media (max-width: 768px) {
    .gallery-item {
        width: 48%;
    }
}

@media (max-width: 480px) {
    .gallery-item {
        width: 100%;
    }
}</code></pre>
    </div>

    <h3>Deliverables</h3>
    <ul>
      <li><strong>Updated Files</strong>: Modified gallery.html and gallery.css with responsive styles</li>
      <li><strong>Screenshots</strong>: Gallery layout at different screen sizes (desktop, tablet, mobile)</li>
#### **5.3 Introduction to Flexible Units (%, em, rem, vw, vh)**

Flexible units help create responsive designs by adjusting elements based on screen size or user settings.

- **Percentage (%)**: Relative to the parent element’s size. Useful for layout widths.
  - Example: `width: 50%;`

- **em**: Relative to the font size of the parent element. Useful for padding, margin, and font sizes.
  - Example: `font-size: 1.2em;`

- **rem**: Relative to the font size of the root (`<html>`) element. Consistent across all elements regardless of nesting.
  - Example: `font-size: 1.5rem;`

- **vw (Viewport Width)**: 1vw is 1% of the viewport’s width.
  - Example: `width: 50vw;` (50% of the viewport width)

- **vh (Viewport Height)**: 1vh is 1% of the viewport’s height.
  - Example: `height: 50vh;` (50% of the viewport height)

**Example CSS**:
```css
.container {
    width: 80%;  /* Responsive width */
    font-size: 1rem; /* Relative to root font size */
    padding: 2vh 2vw; /* Responsive padding */
}
```

---

### **Practice Workshop: Making the Gallery Responsive**

In this workshop, you’ll make the photo gallery responsive by using media queries and flexible units. You’ll adjust the layout for different screen sizes, ensuring the gallery adapts to both desktop and mobile views.

#### **Workshop Tasks**

1. **Set Up Your Files**:
   - Open your existing `gallery.html` and `gallery.css` files from Chapter 3.

2. **Applying Flexible Units**:
   - Update the CSS to use flexible units for font sizes, padding, and margins.
   - Replace fixed values with relative units like `%`, `em`, `rem`, `vw`, and `vh` where appropriate.
   ```css
   .gallery-item {
       width: 30%;
       margin: 1vw;
   }

   .gallery-item img {
       width: 100%;
       height: auto;
   }
   ```

3. **Adding Media Queries for Different Screen Sizes**:
   - Use media queries to adjust the gallery layout for smaller screens.
   - For mobile devices, set the `.gallery-item` width to 100% so images stack vertically.
   ```css
   /* Default layout for larger screens */
   .gallery-item {
       width: 30%;
   }

   /* Medium screens (tablets) */
   @media (max-width: 1024px) {
       .gallery-item {
           width: 45%;
       }
   }

   /* Small screens (mobiles) */
   @media (max-width: 767px) {
       .gallery-item {
           width: 100%;
       }
   }
   ```

4. **Adjusting Font Sizes and Spacing**:
   - Use flexible units for text and spacing to make the design adapt better on smaller screens.
   - Set base font sizes in `rem` and use `em` for spacing.
   ```css
   .gallery-item p {
       font-size: 1rem;
       padding: 0.5em;
   }
   ```

5. **Testing the Responsive Design**:
   - Open `gallery.html` in a browser and resize the window to test how the layout responds to different screen sizes.
   - Ensure that images and text scale smoothly across breakpoints.

#### **Deliverables**

1. **Updated HTML and CSS Files**:
   - Update `gallery.html` and `gallery.css` to include responsive styles.
2. **Screenshots**:
   - Take screenshots of the gallery on different screen sizes (desktop, tablet, and mobile) to demonstrate responsiveness.

---

### **Summary and Key Takeaways**

- **Responsive Design**: Ensures web content adapts to different screen sizes.
- **Media Queries**: Allows specific styles to be applied based on conditions like screen width.
- **Flexible Units**: `%`, `em`, `rem`, `vw`, and `vh` units make layouts responsive.

In this chapter, you learned the essentials of responsive web design, enabling you to create layouts that adjust beautifully on any device. Continue experimenting with media queries and flexible units to build adaptable designs for real-world projects.