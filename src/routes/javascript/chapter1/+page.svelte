<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
</script>

<div class="container mx-auto px-4 py-8">
 
  <p>## Chapter 1: Introduction to JavaScript &amp; Setting Up</p>
  <p>JavaScript is a versatile and powerful programming language essential for creating dynamic and interactive web content. In this chapter, you&rsquo;ll learn what JavaScript is, understand its role in web development, and set up your environment for JavaScript coding. By the end of this chapter, you&rsquo;ll be able to add JavaScript to a webpage, display an alert, and create a simple calculator.</p>
  <p>### **Chapter 1 Overview:**<br/>- Duration: Approximately 2 hours<br/>- Goal: Understand the basics of JavaScript, set up a coding environment, and write simple interactive scripts.</p>
  <p>---</p>
  <p>### **Theory**</p>
  <p>#### **1.1 What is JavaScript?**<br/>JavaScript is a programming language used to add interactivity and dynamic elements to websites. It enables features like form validation, animations, content updates, and much more. JavaScript is a core technology of the web, alongside HTML and CSS, making it essential for modern web development.</p>
  <p>**Key Features of JavaScript**:<br/>- **Client-Side Scripting**: Runs in the browser, allowing for real-time interactions without requiring server requests.<br/>- **Cross-Platform Compatibility**: Works across all major web browsers.<br/>- **Versatile**: Used in both frontend and backend (with Node.js) development.</p>
  <p>---</p>
  <p>#### **1.2 Brief History and Evolution of JavaScript**<br/>JavaScript was created in 1995 by Brendan Eich at Netscape and quickly gained popularity as a scripting language for the web. Over time, JavaScript evolved, with significant improvements made through ECMAScript (ES) standards, such as ES6 (2015), which introduced many modern JavaScript features like `let`/`const`, arrow functions, and template literals.</p>
  <p>---</p>
  <p>#### **1.3 JavaScript in the Browser vs. Node.js**<br/>JavaScript can run in two main environments:</p>
  <p>- **In the Browser**: JavaScript is primarily used in the browser to add interactivity to web pages.<br/>- **Node.js**: Node.js is a runtime that allows JavaScript to run on the server side, opening up backend development with JavaScript.</p>
  <p>In this course, we&rsquo;ll focus on JavaScript in the browser, working directly with web pages.</p>
  <p>---</p>
  <p>#### **1.4 Setting Up a Code Editor/IDE for JavaScript Development**</p>
  <p>To start coding with JavaScript, you&rsquo;ll need a code editor. **Visual Studio Code (VSCode)** is recommended for its versatility, ease of use, and wide range of extensions.</p>
  <p>**Instructions**:<br/>1. **Download and Install VSCode** from [https://code.visualstudio.com/](https://code.visualstudio.com/).<br/>2. **Create a Project Folder** for your JavaScript files, and create two files: `hello.html` and `calculator.html`.<br/>3. Open VSCode, navigate to your project folder, and open both files.</p>
  <p>---</p>
  <p>#### **1.5 Basic Syntax and Data Types (Variables, Strings, Numbers)**</p>
  <p>JavaScript uses simple syntax to declare variables, manipulate data, and perform operations. Here are some essential concepts:</p>
  <p>- **Variables**: Used to store data. Variables can be declared using `let`, `const`, or `var`.<br/> ```javascript<br/> let name = "Alice";<br/> const age = 30;<br/> ```</p>
  <p>- **Data Types**:<br/> - **String**: Textual data, enclosed in quotes (`"Hello"` or `'Hello'`).<br/> - **Number**: Numeric data (e.g., `10`, `5.5`).<br/> - **Boolean**: Logical data, either `true` or `false`.<br/> <br/>- **Basic Operations**: Arithmetic and string operations.<br/> ```javascript<br/> let sum = 5 + 3; // Addition<br/> let greeting = "Hi, " + name; // String concatenation<br/> ```</p>
  <p>---</p>
  <p>### **Practice Workshop: "Hello, Interactive World!"**</p>
  <p>In this workshop, you&rsquo;ll add JavaScript to an HTML page to display a greeting in an alert box and create a simple calculator that adds two numbers. These exercises will give you hands-on experience with basic JavaScript concepts.</p>
  <p>#### **Workshop Tasks**</p>
  <p>1. **Task 1: Display &ldquo;Hello, World!&rdquo; in an Alert Box**<br/> - Open `hello.html` in VSCode and create a basic HTML structure.<br/> - Add an inline `&lt;script&gt;` tag to write JavaScript directly within the HTML.<br/> - Write a script to display an alert box with &ldquo;Hello, World!&rdquo; when the page loads.</p>
  <p>**hello.html**:<br/> ```html<br/> &lt;!DOCTYPE html&gt;<br/> &lt;html lang="en"&gt;<br/> &lt;head&gt;<br/> &lt;meta charset="UTF-8"&gt;<br/> &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;<br/> &lt;title&gt;Hello, World!&lt;/title&gt;<br/> &lt;/head&gt;<br/> &lt;body&gt;<br/> &lt;script&gt;<br/> alert("Hello, World!");<br/> &lt;/script&gt;<br/> &lt;/body&gt;<br/> &lt;/html&gt;<br/> ```</p>
  <p>2. **Task 2: Create a Simple Calculator**<br/> - In `calculator.html`, create an HTML form that allows users to input two numbers.<br/> - Use JavaScript to retrieve the values of these inputs, calculate their sum, and display the result.</p>
  <p>**HTML Structure**:<br/> - The HTML form includes two input fields and a button to trigger the calculation.<br/> - Include an empty `&lt;p&gt;` element to display the result.</p>
  <p>**calculator.html**:<br/> ```html<br/> &lt;!DOCTYPE html&gt;<br/> &lt;html lang="en"&gt;<br/> &lt;head&gt;<br/> &lt;meta charset="UTF-8"&gt;<br/> &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;<br/> &lt;title&gt;Simple Calculator&lt;/title&gt;<br/> &lt;/head&gt;<br/> &lt;body&gt;<br/> &lt;h1&gt;Simple Calculator&lt;/h1&gt;<br/> &lt;label for="num1"&gt;Enter First Number:&lt;/label&gt;<br/> &lt;input type="number" id="num1"&gt;<br/> &lt;br&gt;<br/> &lt;label for="num2"&gt;Enter Second Number:&lt;/label&gt;<br/> &lt;input type="number" id="num2"&gt;<br/> &lt;br&gt;&lt;br&gt;<br/> &lt;button onclick="calculateSum()"&gt;Calculate Sum&lt;/button&gt;<br/> &lt;p id="result"&gt;&lt;/p&gt;</p>
  <p>&lt;script&gt;<br/> function calculateSum() {<br/> let num1 = parseFloat(document.getElementById("num1").value);<br/> let num2 = parseFloat(document.getElementById("num2").value);<br/> let sum = num1 + num2;<br/> document.getElementById("result").textContent = "Sum: " + sum;<br/> }<br/> &lt;/script&gt;<br/> &lt;/body&gt;<br/> &lt;/html&gt;<br/> ```</p>
  <p>#### **Explanation**:<br/>- **`calculateSum` function**: Retrieves values from the input fields, converts them to numbers using `parseFloat`, calculates the sum, and displays it in the `&lt;p&gt;` element with `id="result"`.<br/>- **Button Event**: The `onclick` attribute in the button calls `calculateSum()` when the button is clicked.</p>
  <p>#### **Testing Your Work**:<br/>- Open `hello.html` and `calculator.html` in a browser to test.<br/>- Verify that `hello.html` displays an alert with &ldquo;Hello, World!&rdquo;.<br/>- In `calculator.html`, enter two numbers, click "Calculate Sum," and confirm that the result appears below.</p>
  <p>---</p>
  <p>### **Deliverables**</p>
  <p>1. **HTML Files**:<br/> - **hello.html** with JavaScript to display an alert.<br/> - **calculator.html** with a calculator that sums two numbers.</p>
  <p>2. **Screenshots**:<br/> - Take screenshots of the alert box in `hello.html` and the calculator in action in `calculator.html`.</p>
  <p>---</p>
  <p>### **Summary and Key Takeaways**</p>
  <p>- **JavaScript Basics**: JavaScript allows you to add interactivity to web pages with alert boxes, input handling, and simple calculations.<br/>- **Variables and Data Types**: Understanding JavaScript variables and data types is essential for building interactive scripts.<br/>- **DOM Manipulation**: JavaScript can retrieve and modify HTML elements to create dynamic content.</p>
  <p>This chapter introduced you to JavaScript fundamentals, laying the groundwork for creating more complex and interactive web applications. Continue practicing with different operations and interactions to strengthen your JavaScript skills.</p>




  <ChapterNavigation 
    prevHref="/HTMLKit/css" 
    nextHref="/HTMLKit/css/chapter2" 
  />
</div>
