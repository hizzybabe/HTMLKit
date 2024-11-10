---
title: Recipe Cards
---

Creating a recipe card with HTML and CSS is a great way to display a recipe in a visually appealing format. This example will cover the basics of setting up a recipe card with sections for the recipe title, ingredients, instructions, and a photo.

---

### 1. **Set Up Your Files**

You’ll need:
1. **index.html** — for the HTML content of the recipe card.
2. **style.css** — for styling the recipe card.

---

### 2. **HTML Code (`index.html`)**

Here’s the HTML code to structure the recipe card.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recipe Card</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="recipe-card">
        <img src="recipe-photo.jpg" alt="Recipe Photo" class="recipe-photo">
        
        <div class="recipe-content">
            <h1 class="recipe-title">Delicious Pancakes</h1>
            <p class="recipe-description">Fluffy and light, perfect for breakfast or brunch.</p>
            
            <div class="recipe-info">
                <p><strong>Prep Time:</strong> 10 mins</p>
                <p><strong>Cook Time:</strong> 20 mins</p>
                <p><strong>Servings:</strong> 4</p>
            </div>
            
            <h2>Ingredients</h2>
            <ul class="ingredients">
                <li>1 cup all-purpose flour</li>
                <li>2 tablespoons sugar</li>
                <li>1 tablespoon baking powder</li>
                <li>1/2 teaspoon salt</li>
                <li>3/4 cup milk</li>
                <li>1 large egg</li>
                <li>2 tablespoons melted butter</li>
            </ul>
            
            <h2>Instructions</h2>
            <ol class="instructions">
                <li>In a bowl, whisk together flour, sugar, baking powder, and salt.</li>
                <li>In another bowl, whisk milk, egg, and melted butter until smooth.</li>
                <li>Combine wet and dry ingredients, and mix until just combined.</li>
                <li>Heat a nonstick skillet over medium heat and pour 1/4 cup of batter for each pancake.</li>
                <li>Cook until bubbles form on the surface, then flip and cook until golden.</li>
                <li>Serve warm with your favorite toppings.</li>
            </ol>
        </div>
    </div>
</body>
</html>
```

Replace `recipe-photo.jpg` with the path to your own recipe photo.

---

### 3. **CSS Code (`style.css`)**

Create a `style.css` file in the same directory as `index.html` and add the following CSS code to style the recipe card.

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
    background-color: #f9f9f9;
}

.recipe-card {
    width: 350px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    text-align: left;
}

.recipe-photo {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.recipe-content {
    padding: 1.5rem;
}

.recipe-title {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 0.5rem;
}

.recipe-description {
    color: #666;
    font-size: 1rem;
    margin-bottom: 1rem;
}

.recipe-info p {
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 0.3rem;
}

h2 {
    font-size: 1.3rem;
    color: #4CAF50;
    margin-bottom: 0.5rem;
    margin-top: 1rem;
}

.ingredients, .instructions {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
}

.instructions {
    list-style-type: decimal;
}
```

---

### 4. **Explanation of the Code**

- **HTML Structure**:
  - **Recipe Card Container**: `.recipe-card` is the main container, holding all recipe elements.
  - **Image**: `.recipe-photo` displays an image of the recipe.
  - **Recipe Content**: Contains the title, description, cooking info, ingredients, and instructions.

- **CSS Styling**:
  - **Recipe Card Layout**: The `.recipe-card` container has rounded corners, a shadow effect, and a centered layout.
  - **Font Styling**: Titles, descriptions, and lists have specific font sizes and colors to make the text readable and visually appealing.
  - **List Styles**: Ingredients use bullets, while instructions use numbers to indicate steps.

---

### 5. **Customization**

- **Change the Width**: Modify the `width` of `.recipe-card` to make the card larger or smaller.
- **Adjust Colors**: Update colors in the CSS file to fit your style or brand.
- **Add More Recipe Details**: Add elements like "Nutrition Information" or "Tips" if desired.

### 6. **Preview Your Recipe Card**

Open `index.html` in your web browser to see your recipe card in action. You can tweak the styles in `style.css` to further customize the look.

---

This layout creates a visually appealing recipe card.