---
title: Working with Libraries (e.g., NumPy, Pandas, Matplotlib)
---
**Chapter 13: Working with APIs and Web Requests**

### Topics

#### 13.1 Using `requests` to Interact with APIs
   - **Introduction to APIs**:
      - Define APIs (Application Programming Interfaces) as endpoints that allow applications to communicate with external services.
      - Explain the concept of REST APIs and how they commonly use HTTP requests (GET, POST, PUT, DELETE).
   - **Using the `requests` Library**:
      - Introduce the `requests` library for making HTTP requests in Python.
      - Show basic syntax for sending a GET request and handling the response.
      - **Example**:
        ```python
        import requests

        response = requests.get("https://api.example.com/data")
        if response.status_code == 200:
            print("Success!")
        else:
            print("Failed to retrieve data.")
        ```

#### 13.2 Parsing JSON Data from API Responses
   - **Understanding JSON**:
      - Explain JSON (JavaScript Object Notation) as a lightweight format for data exchange, commonly used in APIs.
   - **Parsing JSON Responses**:
      - Demonstrate how to access data in JSON format using the `.json()` method from the `requests` library.
      - **Example**:
        ```python
        data = response.json()
        print(data["key"])  # Access specific data from the JSON response
        ```

---

<h2 class="workshop-title">Workshop Exercise</h2>
<div class="workshop-container">

#### Write a Program that Fetches Current Weather Data for a City

- **Objective**: Use an open weather API to fetch and display the current weather data for a specified city.
- **Instructions**:
   1. **Sign Up for an API Key**:
      - Use a free weather API service (e.g., OpenWeatherMap) and register for an API key to access their data.

   2. **Set Up the Program**:
      - Create a Python file (e.g., `weather_fetch.py`).
      - Prompt the user to enter a city name and store the API endpoint URL in a variable.
      - Example:
        ```python
        city = input("Enter city name: ")
        api_key = "YOUR_API_KEY"
        url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"
        ```

   3. **Fetch and Parse Weather Data**:
      - Use `requests.get()` to fetch weather data, then parse the JSON response to display specific details (e.g., temperature, weather description).
      - Example:
        ```python
        import requests

        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            temperature = data["main"]["temp"]
            description = data["weather"][0]["description"]
            print(f"Temperature: {temperature}°C")
            print(f"Weather: {description}")
        else:
            print("City not found.")
        ```

   4. **Test the Program**:
      - Run the program, enter various city names, and confirm it displays correct and relevant weather information.

</div>

<h2 class="workshop-title">Chapter Project</h2>
<div class="workshop-container">

**Project: Build a "Crypto Price Tracker"**

- **Description**: The Crypto Price Tracker fetches and displays the real-time prices of various cryptocurrencies by interacting with a public cryptocurrency API.

- **Objective**: Use the `requests` library to interact with a cryptocurrency API and fetch live prices, applying JSON parsing to display relevant data.

- **Instructions**:
   1. **Choose a Cryptocurrency API**:
      - Use a public API (e.g., CoinGecko or CoinMarketCap) to access live cryptocurrency data. Register for an API key if required.

   2. **Set Up the File**:
      - Create a Python file (e.g., `crypto_tracker.py`).
      - Prompt the user to enter one or more cryptocurrency symbols (e.g., BTC, ETH) to track.
      - Example:
        ```python
        symbols = input("Enter cryptocurrency symbols separated by commas (e.g., BTC,ETH): ")
        api_key = "YOUR_API_KEY"  # if required by the chosen API
        ```

   3. **Build the API Request URL**:
      - Construct the API URL based on user input. For example, if using CoinGecko:
        ```python
        url = f"https://api.coingecko.com/api/v3/simple/price?ids={symbols}&vs_currencies=usd"
        ```

   4. **Fetch and Display Crypto Prices**:
      - Use `requests.get()` to retrieve the data and parse the JSON response to extract the current prices of the specified cryptocurrencies.
      - Example:
        ```python
        import requests

        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            for symbol in symbols.split(","):
                symbol = symbol.lower()
                if symbol in data:
                    price = data[symbol]["usd"]
                    print(f"The current price of {symbol.upper()} is ${price}")
                else:
                    print(f"{symbol.upper()} not found in the API data.")
        else:
            print("Failed to retrieve data.")
        ```

   5. **Optional: Auto-Refresh Prices**:
      - Implement an option to automatically refresh and display updated prices every few seconds using a loop and `time.sleep()`.

   6. **Test the Crypto Price Tracker**:
      - Run the program, enter various cryptocurrency symbols, and verify that it correctly fetches and displays the latest prices.

---

### Summary

This chapter introduces learners to working with APIs in Python, covering essential skills for making web requests, handling responses, and parsing JSON data. The workshop exercise focuses on fetching real-world weather data, while the Crypto Price Tracker project reinforces these concepts by building a practical tool that monitors live cryptocurrency prices, providing valuable experience in API interactions.

</div>

<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
</script>

<ChapterNavigation 
    prevHref="/learn/python/ch12" 
    nextHref="/learn/python/ch14"
  />