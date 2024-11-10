Here’s a basic JavaScript cheatsheet covering key syntax and concepts:

---

&lt;h2&gt;JavaScript Basics&lt;/h2&gt;

&lt;pre&gt;&lt;code class="language-javascript"&gt;
// Declaring Variables
let x = 10; // Block-scoped
const y = 5; // Block-scoped, cannot be re-assigned
var z = 15; // Function-scoped (avoid using 'var' in modern JS)

// Data Types
let str = "Hello";
let num = 42;
let isActive = true;
let obj = &#123; key: "value" &#125;;
let arr = [1, 2, 3];
let nothing = null;
let notDefined;

// Type Conversion
Number("10");   // 10
String(123);    // "123"
Boolean(0);     // false
parseInt("10.5"); // 10
parseFloat("10.5"); // 10.5

// Template Literals
let name = "World";
console.log(`Hello, $&#123;name&#125;!`); // Hello, World!
&lt;/code&gt;&lt;/pre&gt;

---

&lt;h2&gt;Operators&lt;/h2&gt;

&lt;pre&gt;&lt;code class="language-javascript"&gt;
// Arithmetic Operators: +, -, *, /, %
let sum = 5 + 10;

// Comparison Operators: ===, ==, !==, !=, &gt;, &lt;, &gt;=, &lt;=
console.log(5 === "5"); // false

// Logical Operators: && (and), || (or), ! (not)
let isAdult = age &gt;= 18 && age &lt; 65;

// Ternary Operator
let result = condition ? "True" : "False";
&lt;/code&gt;&lt;/pre&gt;

---

&lt;h2&gt;Conditionals&lt;/h2&gt;

&lt;pre&gt;&lt;code class="language-javascript"&gt;
// If...Else
if (condition) &#123;
  // Code if true
&#125; else if (anotherCondition) &#123;
  // Code if another condition is true
&#125; else &#123;
  // Code if false
&#125;

// Switch
let day = 3;
switch(day) &#123;
  case 1: 
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Unknown day");
&#125;
&lt;/code&gt;&lt;/pre&gt;

---

&lt;h2&gt;Loops&lt;/h2&gt;

&lt;pre&gt;&lt;code class="language-javascript"&gt;
// For Loop
for (let i = 0; i &lt; 5; i++) &#123;
  console.log(i);
&#125;

// While Loop
let count = 0;
while (count &lt; 5) &#123;
  console.log(count);
  count++;
&#125;

// For...of (for Arrays)
for (let item of arr) &#123;
  console.log(item);
&#125;

// For...in (for Objects)
for (let key in obj) &#123;
  console.log(key, obj[key]);
&#125;
&lt;/code&gt;&lt;/pre&gt;

---

&lt;h2&gt;Functions&lt;/h2&gt;

&lt;pre&gt;&lt;code class="language-javascript"&gt;
// Function Declaration
function greet(name) &#123;
  return `Hello, $&#123;name&#125;`;
&#125;

// Arrow Function
const greet = (name) =&gt; `Hello, $&#123;name&#125;`;

// Default Parameters
function multiply(a, b = 1) &#123;
  return a * b;
&#125;

// IIFE (Immediately Invoked Function Expression)
(function() &#123;
  console.log("This runs immediately!");
&#125;)();
&lt;/code&gt;&lt;/pre&gt;

---

&lt;h2&gt;Arrays&lt;/h2&gt;

&lt;pre&gt;&lt;code class="language-javascript"&gt;
let arr = [1, 2, 3, 4];

// Array Methods
arr.push(5);     // Add to end
arr.pop();       // Remove last
arr.unshift(0);  // Add to start
arr.shift();     // Remove first
arr.splice(2, 1); // Remove items from index 2

// Higher-order Methods
arr.forEach(item =&gt; console.log(item));
let newArr = arr.map(x =&gt; x * 2);
let filteredArr = arr.filter(x =&gt; x &gt; 2);
let sum = arr.reduce((acc, x) =&gt; acc + x, 0);
&lt;/code&gt;&lt;/pre&gt;

---

&lt;h2&gt;Objects&lt;/h2&gt;

&lt;pre&gt;&lt;code class="language-javascript"&gt;
// Object Declaration
let person = &#123;
  name: "John",
  age: 30,
  greet() &#123;
    console.log("Hello!");
  &#125;
&#125;;

// Accessing Properties
console.log(person.name); // Dot notation
console.log(person["age"]); // Bracket notation

// Destructuring
let &#123; name, age &#125; = person;

// Adding Properties
person.city = "New York";
&lt;/code&gt;&lt;/pre&gt;

---

&lt;h2&gt;ES6 Features&lt;/h2&gt;

&lt;pre&gt;&lt;code class="language-javascript"&gt;
// Spread Operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];

// Rest Operator
function sum(...args) &#123;
  return args.reduce((acc, x) =&gt; acc + x);
&#125;

// Destructuring Arrays
let [first, second] = arr;
&lt;/code&gt;&lt;/pre&gt;

---

&lt;h2&gt;Classes&lt;/h2&gt;

&lt;pre&gt;&lt;code class="language-javascript"&gt;
class Animal &#123;
  constructor(name) &#123;
    this.name = name;
  &#125;
  
  speak() &#123;
    console.log(`$&#123;this.name&#125; makes a sound`);
  &#125;
&#125;

class Dog extends Animal &#123;
  speak() &#123;
    console.log(`$&#123;this.name&#125; barks`);
  &#125;
&#125;

let dog = new Dog("Rex");
dog.speak();
&lt;/code&gt;&lt;/pre&gt;

---

&lt;h2&gt;Promises & Async/Await&lt;/h2&gt;

&lt;pre&gt;&lt;code class="language-javascript"&gt;
// Promise
let promise = new Promise((resolve, reject) =&gt; &#123;
  let success = true;
  success ? resolve("Success") : reject("Failure");
&#125;);

promise.then(result =&gt; console.log(result)).catch(error =&gt; console.log(error));

// Async/Await
async function fetchData() &#123;
  try &#123;
    let response = await fetch("https://api.example.com");
    let data = await response.json();
    console.log(data);
  &#125; catch (error) &#123;
    console.error(error);
  &#125;
&#125;
&lt;/code&gt;&lt;/pre&gt;

---

&lt;h2&gt;DOM Manipulation&lt;/h2&gt;

&lt;pre&gt;&lt;code class="language-javascript"&gt;
// Selecting Elements
let element = document.getElementById("id");
let elements = document.querySelectorAll(".class");

// Modifying Elements
element.textContent = "Hello";
element.style.color = "red";
element.classList.add("new-class");

// Events
element.addEventListener("click", function() &#123;
  console.log("Element clicked!");
&#125;);
&lt;/code&gt;&lt;/pre&gt;

---

&lt;h2&gt;Error Handling&lt;/h2&gt;

&lt;pre&gt;&lt;code class="language-javascript"&gt;
try &#123;
  // Code that might throw an error
&#125; catch (error) &#123;
  console.log(error.message);
&#125; finally &#123;
  console.log("This always runs");
&#125;
&lt;/code&gt;&lt;/pre&gt;

---

This cheatsheet covers core concepts, helping you quickly reference JavaScript fundamentals!