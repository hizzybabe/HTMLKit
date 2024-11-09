<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
  let showCode = true;
</script>

<div class="container mx-auto px-4 py-8">
  <h1>Chapter 5: Asynchronous JavaScript & API Fetching</h1>
  
  <div class="chapter-intro">
    <p>In this chapter, you'll learn about asynchronous JavaScript, which enables you to perform tasks like fetching data from external APIs without freezing the browser. You'll explore asynchronous programming concepts like callbacks, promises, and async/await, and apply these to build a simple Weather App.</p>
    
    <div class="chapter-details">
      <p><strong>Duration:</strong> Approximately 2-3 hours</p>
      <p><strong>Goal:</strong> Understand asynchronous programming in JavaScript, learn how to fetch data from APIs, and build a Weather App to display live weather data.</p>
    </div>
  </div>

  <hr/>

  <h2>Theory</h2>

  <h3>5.1 Introduction to Asynchronous Programming</h3>
  <p>JavaScript is single-threaded, meaning it can only handle one task at a time. Asynchronous programming allows JavaScript to perform tasks like API requests in the background while still responding to user interactions.</p>

  <div class="concept-block">
    <h4>Key Concepts:</h4>
    <ul>
      <li><strong>Callbacks:</strong> Functions passed as arguments to other functions and executed after a task completes.</li>
      <li><strong>Promises:</strong> Objects representing the eventual completion or failure of an asynchronous operation.</li>
      <li><strong>Async/Await:</strong> A more readable way to work with promises.</li>
    </ul>

    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>// Example with Promises
function fetchData() &#123;
    return new Promise((resolve, reject) => &#123;
        setTimeout(() => resolve("Data loaded"), 2000);
    &#125;);
&#125;

// Example with Async/Await
async function fetchData() &#123;
    try &#123;
        let data = await new Promise((resolve) => &#123;
            setTimeout(() => resolve("Data loaded"), 2000);
        &#125;);
        console.log(data);
    &#125; catch (error) &#123;
        console.log(error);
    &#125;
&#125;</code></pre>
    </div>
  </div>

  <h3>5.2 Understanding and Working with APIs</h3>
  <p>APIs (Application Programming Interfaces) allow applications to communicate with each other. Web APIs often return data in JSON format.</p>

  <div class="concept-block">
    <h4>Fetching Data from an API</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>async function getData() &#123;
    try &#123;
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log(data);
    &#125; catch (error) &#123;
        console.error("Error fetching data:", error);
    &#125;
&#125;</code></pre>
    </div>
  </div>

  <h2>Practice Workshop: Weather App</h2>
  <div class="workshop-container">
    <h3 class="task">Task: Create a Weather App using an API</h3>
    
    <h4>Step 1: Set Up Your Files</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Weather App&lt;/title&gt;
    &lt;script src="weather.js" defer&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Weather App&lt;/h1&gt;
    &lt;input type="text" id="cityInput" placeholder="Enter city name"&gt;
    &lt;button id="getWeatherBtn"&gt;Get Weather&lt;/button&gt;
    &lt;div id="weatherInfo"&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h4>Step 2: Implement the Weather App Logic</h4>
    <div class="code-preview bg-gray-100 p-4 rounded-lg my-4">
      <pre><code>// weather.js
document.getElementById("getWeatherBtn").addEventListener("click", getWeather);

async function getWeather() &#123;
    const city = document.getElementById("cityInput").value;
    const weatherInfo = document.getElementById("weatherInfo");
    
    if (!city) &#123;
        weatherInfo.textContent = "Please enter a city name.";
        return;
    &#125;

    const apiKey = "YOUR_API_KEY";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=$&#123;city&#125;&appid=$&#123;apiKey&#125;&units=metric`;

    try &#123;
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("City not found");
        
        const data = await response.json();
        displayWeather(data);
    &#125; catch (error) &#123;
        weatherInfo.textContent = `Error: $&#123;error.message&#125;`;
    &#125;
&#125;</code></pre>
    </div>

    <h3>Deliverables</h3>
    <ul>
      <li>Complete weather.html and weather.js files</li>
      <li>Screenshot of the working Weather App</li>
      <li>Documentation of your implementation choices</li>
    </ul>
  </div>

  <ChapterNavigation 
    prevHref="/HTMLKit/javascript/chapter4" 
    nextHref="/HTMLKit/javascript/chapter6"
  />
</div>

<style>
  .concept-block {
    margin-bottom: 2rem;
  }
  
  .chapter-intro {
    background-color: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
    margin-bottom: 2rem;
  }

  .chapter-details {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #dee2e6;
  }

  .code-preview {
    margin: 1rem 0;
  }
</style>