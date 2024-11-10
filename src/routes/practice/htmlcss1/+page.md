---
title: Personal Portfolio
---

Here's a simple HTML and CSS tutorial to create a basic personal portfolio. This example will show you how to structure a portfolio page with sections for your name, a brief bio, skills, and projects.

---

### 1. **Set Up Your HTML File**

Create a file named `index.html` and add the following HTML code.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Your Name</h1>
        <p>Web Developer | Designer | Your Specialization</p>
    </header>

    <section id="about">
        <h2>About Me</h2>
        <p>I'm a web developer passionate about building efficient and beautiful web experiences. Skilled in HTML, CSS, JavaScript, and various frameworks.</p>
    </section>

    <section id="skills">
        <h2>Skills</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
        </ul>
    </section>

    <section id="projects">
        <h2>Projects</h2>
        <div class="project">
            <h3>Project 1</h3>
            <p>Brief description of your project.</p>
        </div>
        <div class="project">
            <h3>Project 2</h3>
            <p>Brief description of your project.</p>
        </div>
    </section>

    <footer>
        <p>Connect with me on social media:</p>
        <ul>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">GitHub</a></li>
        </ul>
    </footer>
</body>
</html>
```

---

### 2. **Set Up Your CSS File**

Create a file named `style.css` in the same directory as your HTML file and add the following CSS code to style your portfolio.

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
    color: #333;
}

header {
    text-align: center;
    padding: 2rem;
    background-color: #4CAF50;
    color: white;
}

header h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

header p {
    font-size: 1.2rem;
}

section {
    padding: 2rem;
    max-width: 800px;
    margin: auto;
}

h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #4CAF50;
}

#skills ul, footer ul {
    list-style-type: none;
}

#skills li, footer li {
    display: inline-block;
    margin-right: 1rem;
    font-size: 1rem;
}

.project {
    margin-bottom: 1.5rem;
}

.project h3 {
    font-size: 1.5rem;
    color: #333;
}

footer {
    text-align: center;
    padding: 1.5rem;
    background-color: #333;
    color: white;
}

footer ul {
    list-style: none;
    padding-top: 1rem;
}

footer a {
    color: #4CAF50;
    text-decoration: none;
    font-weight: bold;
}
```

---

### 3. **Explanation of the Code**

- **HTML Structure**: The HTML file is structured with sections for the header, about, skills, projects, and footer.
- **CSS Styling**: The `style.css` file contains the basic styling for each section:
  - The `header` has a green background and white text.
  - The `section` elements contain main content and are centered with padding.
  - A simple list is used to show skills, and project descriptions are grouped.
  - The footer has links to social media, which are styled with color and bold text.

### 4. **Add More Content and Personalize**

- Change "Your Name" and "Web Developer" in the header to your name and role.
- Add more skills, projects, and update the social media links.

### 5. **Testing Your Portfolio**

Open the `index.html` file in a web browser to view your portfolio. You can experiment with styles in `style.css` to make it your own.

---

This tutorial sets up a clean, simple portfolio layout. Let me know if you’d like any additions, like a contact form or adding a navigation bar!