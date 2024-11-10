---
title: Restaurant Menu
---

Here's a simple HTML and CSS tutorial to create a restaurant menu page. This example will include sections for appetizers, main courses, and desserts, along with prices and descriptions for each item.

---

### 1. **Set Up Your Files**

You’ll need:
1. **index.html** — for the HTML structure of the menu.
2. **style.css** — for styling the menu.

---

### 2. **HTML Code (`index.html`)**

Here’s the basic HTML structure for a restaurant menu.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restaurant Menu</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Our Menu</h1>
        <p>Delicious dishes made with fresh ingredients and love.</p>
    </header>

    <section class="menu-section">
        <h2>Appetizers</h2>
        <div class="menu-item">
            <h3>Bruschetta <span class="price">$5.99</span></h3>
            <p>Grilled bread topped with diced tomatoes, garlic, basil, and olive oil.</p>
        </div>
        <div class="menu-item">
            <h3>Stuffed Mushrooms <span class="price">$6.99</span></h3>
            <p>Fresh mushrooms filled with herbs, garlic, and cream cheese.</p>
        </div>
    </section>

    <section class="menu-section">
        <h2>Main Courses</h2>
        <div class="menu-item">
            <h3>Grilled Salmon <span class="price">$15.99</span></h3>
            <p>Served with roasted vegetables and lemon-butter sauce.</p>
        </div>
        <div class="menu-item">
            <h3>Margherita Pizza <span class="price">$12.99</span></h3>
            <p>Classic pizza with fresh mozzarella, tomatoes, and basil.</p>
        </div>
    </section>

    <section class="menu-section">
        <h2>Desserts</h2>
        <div class="menu-item">
            <h3>Chocolate Lava Cake <span class="price">$7.99</span></h3>
            <p>Warm chocolate cake with a gooey molten center, served with vanilla ice cream.</p>
        </div>
        <div class="menu-item">
            <h3>Tiramisu <span class="price">$6.99</span></h3>
            <p>Classic Italian dessert with layers of espresso-soaked ladyfingers and mascarpone cream.</p>
        </div>
    </section>

    <footer>
        <p>&copy; 2024 [Your Restaurant Name]. All rights reserved.</p>
    </footer>
</body>
</html>
```

---

### 3. **CSS Code (`style.css`)**

Create a `style.css` file in the same directory as `index.html` and add the following CSS code to style the menu.

```css
/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f8f8f8;
    color: #333;
    padding: 2rem;
}

header {
    text-align: center;
    margin-bottom: 2rem;
}

header h1 {
    font-size: 2.5rem;
    color: #333;
}

header p {
    font-size: 1.2rem;
    color: #666;
}

.menu-section {
    margin-bottom: 2rem;
}

.menu-section h2 {
    font-size: 2rem;
    color: #4CAF50;
    border-bottom: 2px solid #ddd;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
}

.menu-item {
    margin-bottom: 1.5rem;
}

.menu-item h3 {
    font-size: 1.5rem;
    color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.menu-item .price {
    font-size: 1.2rem;
    color: #4CAF50;
}

.menu-item p {
    color: #666;
    font-size: 1rem;
    margin-top: 0.3rem;
}

footer {
    text-align: center;
    margin-top: 2rem;
    font-size: 0.9rem;
    color: #666;
}
```

---

### 4. **Explanation of the Code**

- **HTML Structure**:
  - **Header**: Displays the restaurant name or title of the menu, with a subtitle.
  - **Menu Sections**: Each section (`Appetizers`, `Main Courses`, `Desserts`) is organized under `menu-section`, which contains menu items (`menu-item`) with names, descriptions, and prices.
  - **Footer**: Contains a copyright notice.

- **CSS Styling**:
  - **Layout and Spacing**: Each `.menu-section` and `.menu-item` has margins to create space between sections and items.
  - **Price Styling**: Prices are aligned to the right within each item’s header to make it visually clear.
  - **Section Titles**: Each section title (`h2`) has a green color (`#4CAF50`) and a bottom border for a polished look.

### 5. **Customization**

- **Change Colors**: Modify colors in CSS to fit the theme or branding of your restaurant.
- **Add More Items**: To add more items, duplicate a `.menu-item` block and edit the content.
- **Font Styling**: You can adjust the font sizes in CSS to make the menu items stand out more.

### 6. **Preview Your Menu**

Open `index.html` in a web browser to see how your restaurant menu looks. Adjust styles in `style.css` as needed to fine-tune the design.

---

This setup provides a clean, visually appealing restaurant menu. Let me know if you want to add special styles or new sections like beverages or sides!