---
title: Pricing Table
---

Creating a pricing table with HTML and CSS is a great way to showcase different pricing options or subscription plans for a product or service. Here’s a simple guide to building a pricing table with three plans.

---

### 1. **Set Up Your Files**

You’ll need:
1. **index.html** — for the HTML content of the pricing table.
2. **style.css** — for styling the pricing table.

---

### 2. **HTML Code (`index.html`)**

Here’s the HTML structure for a three-column pricing table.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pricing Table</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <section class="pricing-table">
        <div class="pricing-card">
            <h2>Basic</h2>
            <p class="price">$9<span>/month</span></p>
            <ul>
                <li>5 Projects</li>
                <li>10 GB Storage</li>
                <li>Email Support</li>
            </ul>
            <a href="#" class="btn">Sign Up</a>
        </div>

        <div class="pricing-card featured">
            <h2>Standard</h2>
            <p class="price">$19<span>/month</span></p>
            <ul>
                <li>20 Projects</li>
                <li>50 GB Storage</li>
                <li>Priority Email Support</li>
            </ul>
            <a href="#" class="btn">Sign Up</a>
        </div>

        <div class="pricing-card">
            <h2>Premium</h2>
            <p class="price">$29<span>/month</span></p>
            <ul>
                <li>Unlimited Projects</li>
                <li>200 GB Storage</li>
                <li>24/7 Support</li>
            </ul>
            <a href="#" class="btn">Sign Up</a>
        </div>
    </section>
</body>
</html>
```

---

### 3. **CSS Code (`style.css`)**

Create a `style.css` file in the same directory as `index.html` and add the following CSS code to style the pricing table.

```css
/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f4f4f4;
}

.pricing-table {
    display: flex;
    gap: 1.5rem;
}

.pricing-card {
    width: 250px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    text-align: center;
    transition: transform 0.3s;
}

.pricing-card:hover {
    transform: translateY(-10px);
}

.pricing-card h2 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1rem;
}

.price {
    font-size: 2.5rem;
    color: #4CAF50;
    margin: 1rem 0;
}

.price span {
    font-size: 1rem;
    color: #666;
}

.pricing-card ul {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
}

.pricing-card li {
    font-size: 1rem;
    color: #555;
    padding: 0.5rem 0;
    border-bottom: 1px solid #eee;
}

.btn {
    display: inline-block;
    text-decoration: none;
    background-color: #4CAF50;
    color: #fff;
    padding: 0.8rem 1.5rem;
    border-radius: 5px;
    margin-top: 1.5rem;
    font-weight: bold;
    transition: background-color 0.3s;
}

.btn:hover {
    background-color: #388E3C;
}

/* Featured Card */
.featured {
    background-color: #f9f9f9;
    border: 2px solid #4CAF50;
}
```

---

### 4. **Explanation of the Code**

- **HTML Structure**:
  - Each `.pricing-card` represents a pricing option (e.g., Basic, Standard, Premium).
  - The `.price` class is used to display the price with a larger font, with the `/month` styled smaller.
  - The `.btn` is a call-to-action button for users to sign up.

- **CSS Styling**:
  - **Layout**: `.pricing-table` is a flex container that aligns the pricing cards side-by-side.
  - **Hover Effects**: Each card slightly elevates when hovered, creating a subtle animation.
  - **Featured Card**: `.featured` has a border and a different background color to highlight it.

---

### 5. **Customization**

- **Change Colors**: Modify the color values to match your brand colors.
- **Add More Cards**: Copy a `.pricing-card` block in the HTML to add more plans.
- **Adjust Widths**: Increase or decrease the `width` of `.pricing-card` in CSS to change the size of each card.

### 6. **Preview Your Pricing Table**

Open `index.html` in a web browser to see your pricing table in action. Adjust styles as desired in `style.css` to customize the appearance.

---

This setup gives you a clean, professional pricing table.