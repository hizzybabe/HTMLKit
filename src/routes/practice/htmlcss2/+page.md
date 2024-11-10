---
title: Single-Page Resume
---

Here’s a simple HTML and CSS tutorial for a single-page resume. This example will help you create a professional-looking resume with sections for your contact information, experience, skills, education, and more.

---

### 1. **Set Up the File Structure**

You’ll need:
1. **index.html** — for the HTML structure of the resume.
2. **style.css** — for styling the resume.

---

### 2. **HTML Code (`index.html`)**

Here’s the basic HTML code for a single-page resume layout.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Your Name</h1>
        <p>Job Title / Specialization</p>
        <p>Email: your.email@example.com | Phone: +123456789 | Location: City, Country</p>
    </header>

    <section id="summary">
        <h2>Summary</h2>
        <p>A brief professional summary that highlights your experience, skills, and strengths.</p>
    </section>

    <section id="experience">
        <h2>Work Experience</h2>
        <div class="job">
            <h3>Job Title</h3>
            <p>Company Name, Location</p>
            <p>Duration (e.g., Jan 2020 - Present)</p>
            <ul>
                <li>Responsibility or achievement #1</li>
                <li>Responsibility or achievement #2</li>
            </ul>
        </div>
        <!-- Repeat the job section as needed -->
    </section>

    <section id="education">
        <h2>Education</h2>
        <div class="education-item">
            <h3>Degree Title</h3>
            <p>Institution Name, Location</p>
            <p>Year of Graduation</p>
        </div>
        <!-- Repeat for other degrees or certifications -->
    </section>

    <section id="skills">
        <h2>Skills</h2>
        <ul>
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
            <!-- Add more skills as needed -->
        </ul>
    </section>

    <footer>
        <p>Connect with me: <a href="#">LinkedIn</a> | <a href="#">GitHub</a></p>
    </footer>
</body>
</html>
```

---

### 3. **CSS Code (`style.css`)**

Create a `style.css` file in the same directory as `index.html` and add the following CSS code to style the resume.

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
    max-width: 800px;
    margin: auto;
    padding: 2rem;
}

header {
    text-align: center;
    margin-bottom: 2rem;
}

header h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

header p {
    font-size: 1.1rem;
    color: #666;
}

section {
    margin-bottom: 2rem;
}

h2 {
    font-size: 1.8rem;
    color: #4CAF50;
    margin-bottom: 1rem;
    border-bottom: 2px solid #4CAF50;
    padding-bottom: 0.3rem;
}

.job, .education-item {
    margin-bottom: 1.5rem;
}

h3 {
    font-size: 1.4rem;
    color: #333;
    margin-bottom: 0.5rem;
}

ul {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin-top: 0.5rem;
}

footer {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid #ddd;
}

footer a {
    color: #4CAF50;
    text-decoration: none;
    font-weight: bold;
}
```

---

### 4. **Explanation of the Code**

- **HTML Structure**:
  - **Header**: Displays your name, job title, and contact details.
  - **Summary Section**: Includes a short summary paragraph describing your professional profile.
  - **Experience Section**: Lists job titles, companies, durations, and responsibilities or achievements.
  - **Education Section**: Lists your degrees, institutions, and graduation years.
  - **Skills Section**: Lists your skills in a simple, bulleted list.
  - **Footer**: Includes links to LinkedIn, GitHub, or other profiles.

- **CSS Styling**:
  - The `header` centers the name and contact details.
  - Each `section` has distinct spacing and headings.
  - List styles for responsibilities in the experience section and skills in the skills section.
  - The `footer` styles the links to be bold and green.

---

### 5. **Customization**

- **Add More Sections**: If you need other sections (e.g., certifications, awards), copy the HTML structure of a section and adjust it accordingly.
- **Experiment with Colors**: Change the color values in CSS to suit your style.

### 6. **Preview Your Resume**

Open `index.html` in a web browser to see your single-page resume. You can edit and save changes in `style.css` to experiment with the design and make it your own.

---

This basic layout is ready to use, and you can build on it for more customization or interactivity. Let me know if you want to add any additional elements!