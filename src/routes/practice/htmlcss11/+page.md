---
title: Product Card
---

Here’s a simple tutorial for creating a product card with HTML and CSS. This card will display a product image, name, price, and a "Buy Now" button. It will include box shadows, borders, and hover effects for a visually appealing, depth-creating effect.

---

### 1. **Set Up Your Files**

You’ll need:
1. **index.html** — for the HTML structure of the product card.
2. **style.css** — for styling the card.

---

### 2. **HTML Code (`index.html`)**

Here’s the HTML code for a product card layout.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Card</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="product-card">
        <img src="product-image.jpg" alt="Product Image" class="product-image">
        
        <div class="product-details">
            <h2 class="product-name">Stylish Headphones</h2>
            <p class="product-price">$49.99</p>
            <a href="#" class="buy-now-btn">Buy Now</a>
        </div>
    </div>
</body>
</html>
```

Replace `product-image.jpg` with the path to the actual product image you want to display.

---

### 3. **CSS Code (`style.css`)**

Create a `style.css` file in the same directory as `index.html` and add the following CSS code to style the product card.

```css
/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
}

.product-card {
    width: 250px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
}

.product-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.product-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 1px solid #ddd;
}

.product-details {
    padding: 1rem;
    text-align: center;
}

.product-name {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 0.5rem;
}

.product-price {
    font-size: 1.2rem;
    color: #4CAF50;
    font-weight: bold;
    margin-bottom: 1rem;
}

.buy-now-btn {
    display: inline-block;
    text-decoration: none;
    padding: 0.8rem 1.5rem;
    background-color: #4CAF50;
    color: #fff;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s;
}

.buy-now-btn:hover {
    background-color: #388E3C;
}
```

---

### 4. **Explanation of the Code**

- **HTML Structure**:
  - **Product Card Container**: The `.product-card` div holds the product image and details.
  - **Product Image**: A placeholder image within `.product-image`.
  - **Product Details**: Includes the product name, price, and a "Buy Now" button.

- **CSS Styling**:
  - **Card Layout and Hover Effect**: The `.product-card` has a box shadow and transition effect. On hover, it moves up slightly (`translateY(-10px)`) and the shadow deepens for added depth.
  - **Button Styling**: The `.buy-now-btn` has a smooth color transition and hover effect, changing to a darker shade of green.
  - **Price Styling**: The `.product-price` uses a bold green font to highlight the price.

### 5. **Customization**

- **Change Colors**: Adjust colors for the background, button, and text in CSS to match your brand or style.
- **Add More Elements**: Add elements like product ratings or descriptions by creating additional tags in HTML and styling them in CSS.
- **Adjust Width and Height**: Modify the `width` of `.product-card` or the `height` of `.product-image` to resize the card.

### 6. **Preview Your Product Card**

Open `index.html` in your web browser to see the product card in action. Adjust styles in `style.css` as needed to refine the design.

---

This setup provides a clean, modern product card layout with hover effects and emphasis on price and button.