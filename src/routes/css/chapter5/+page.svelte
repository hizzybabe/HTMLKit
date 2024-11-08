## Chapter 5: Responsive Web Design (RWD) & Media Queries

In this chapter, you’ll learn the principles of responsive web design (RWD) and how to use media queries to create layouts that adapt to different screen sizes. You’ll also be introduced to flexible units like `%`, `em`, `rem`, `vw`, and `vh`, which allow your designs to adjust seamlessly across various devices. By the end of this chapter, you’ll be able to make a photo gallery responsive.

### **Chapter 5 Overview:**
- Duration: Approximately 2 hours
- Goal: Learn to create responsive layouts using media queries and flexible units.

---

### **Theory**

#### **5.1 Principles of Responsive Web Design**

Responsive Web Design (RWD) ensures that web content looks good and functions well across a range of devices and screen sizes. The core principles of RWD include:

- **Fluid Layouts**: Use flexible units like percentages instead of fixed pixel values to make layouts adapt to screen width.
- **Flexible Images**: Use CSS to resize images and avoid overflowing their containers.
- **Media Queries**: CSS rules that apply different styles based on the screen size, device type, or orientation.

---

#### **5.2 Using Media Queries for Different Screen Sizes**

Media queries allow you to apply CSS rules based on certain conditions, such as screen width or height. Common breakpoints used in RWD include:

- **Large screens**: Desktops and larger screens (e.g., `min-width: 1200px`).
- **Medium screens**: Tablets and smaller laptops (e.g., `min-width: 768px`).
- **Small screens**: Mobile devices (e.g., `max-width: 767px`).

**Syntax**:
```css
@media (max-width: 767px) {
    /* CSS rules for small screens */
}
```

**Example**:
```css
/* Default layout */
.gallery-item {
    width: 30%;
}

/* Small screens */
@media (max-width: 767px) {
    .gallery-item {
        width: 100%;
    }
}
```

---

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