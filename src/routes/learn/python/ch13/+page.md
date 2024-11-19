---
title: Working with Libraries (e.g., NumPy, Pandas, Matplotlib)
---
**Chapter 13: Working with APIs and Web Requests**

### Topics

### 13.1 Using `requests` to Interact with APIs

---

#### **Introduction to APIs**

**What is an API?**
- **API**: An Application Programming Interface allows communication between software applications or systems.
- APIs expose functionality or data from one application so it can be used by others.

**What is a REST API?**
- A **REST API** (Representational State Transfer API) is a popular type of API that uses standard HTTP methods to interact with resources:
  - **GET**: Retrieve data.
  - **POST**: Create new data.
  - **PUT/PATCH**: Update existing data.
  - **DELETE**: Remove data.

**API Responses**:
- APIs typically return data in formats like **JSON** or **XML**.
- JSON (JavaScript Object Notation) is the most commonly used due to its simplicity and readability.

---

#### **Using the `requests` Library**

The `requests` library is a simple and powerful tool for making HTTP requests in Python.

**Installing the Library**:
```bash
pip install requests
```

**Basic Syntax**:
```python
import requests

response = requests.get("https://api.example.com/data")
```

**Key Methods**:
1. `requests.get()`: Send a GET request to retrieve data.
2. `requests.post()`: Send a POST request to submit data.
3. `requests.put()`: Update existing data.
4. `requests.delete()`: Delete data.

---

#### **Example: Sending a GET Request**

```python
import requests

# Send a GET request
response = requests.get("https://api.example.com/data")

# Check the status code
if response.status_code == 200:
    print("Success!")
    # Parse the JSON data
    data = response.json()
    print(data)
else:
    print(f"Failed to retrieve data. Status code: {response.status_code}")
```

**Explanation**:
- `response.status_code`: The HTTP status code (e.g., 200 for success, 404 for not found).
- `response.json()`: Parses the response body as JSON.
- `response.text`: Retrieves the raw response as a string.

---

#### **Handling Common HTTP Methods**

1. **GET Request**:
   - Used to retrieve data from a server.
   ```python
   response = requests.get("https://api.example.com/users")
   if response.status_code == 200:
       print(response.json())  # Outputs the data in JSON format
   ```

2. **POST Request**:
   - Used to send data to the server, often to create new resources.
   ```python
   data = {"name": "Alice", "age": 25}
   response = requests.post("https://api.example.com/users", json=data)
   print(response.status_code)  # Check the status code
   ```

3. **PUT Request**:
   - Used to update existing resources.
   ```python
   updated_data = {"age": 26}
   response = requests.put("https://api.example.com/users/1", json=updated_data)
   print(response.json())  # Outputs the updated resource
   ```

4. **DELETE Request**:
   - Used to delete resources.
   ```python
   response = requests.delete("https://api.example.com/users/1")
   print(response.status_code)  # Check if the deletion was successful
   ```

---

#### **Error Handling**

API calls can fail due to network issues, incorrect endpoints, or server errors. Use `try` and `except` to handle such scenarios.

**Example**:
```python
import requests

try:
    response = requests.get("https://api.example.com/data")
    response.raise_for_status()  # Raises an exception for HTTP errors
    print(response.json())
except requests.exceptions.RequestException as e:
    print(f"An error occurred: {e}")
```

---

#### **Advanced Example: Query Parameters and Headers**

1. **Query Parameters**:
   - Add parameters to the URL to filter or sort data.
   ```python
   params = {"page": 2, "limit": 10}
   response = requests.get("https://api.example.com/users", params=params)
   print(response.json())
   ```

2. **Custom Headers**:
   - Add headers to include authentication tokens or custom metadata.
   ```python
   headers = {"Authorization": "Bearer your_api_token"}
   response = requests.get("https://api.example.com/users", headers=headers)
   print(response.json())
   ```

---

#### **Summary**

1. **APIs**:
   - Enable communication between applications using HTTP methods like GET, POST, PUT, DELETE.
   - Responses are often in JSON format.

2. **`requests` Library**:
   - A Python library to make HTTP requests.
   - Example of a GET request:
     ```python
     import requests
     response = requests.get("https://api.example.com/data")
     if response.status_code == 200:
         print(response.json())
     ```

3. **Key Features**:
   - **GET**: Retrieve data.
   - **POST**: Submit data.
   - **PUT**: Update data.
   - **DELETE**: Remove data.

4. **Error Handling**:
   - Use `try` and `except` with `response.raise_for_status()` to manage errors gracefully.

Using the `requests` library makes interacting with APIs simple and efficient, opening up a wide range of possibilities for integrating external data and services into Python applications.

### 13.2 Parsing JSON Data from API Responses

---

#### **Understanding JSON**

**What is JSON?**
- **JSON (JavaScript Object Notation)** is a lightweight, human-readable data format used for data exchange between a client and a server.
- JSON is widely used in APIs due to its simplicity and compatibility with many programming languages.

**Key Features**:
1. **Structure**:
   - Data is organized in key-value pairs.
   - Example:
     ```json
     {
         "name": "Alice",
         "age": 25,
         "skills": ["Python", "JavaScript"]
     }
     ```
2. **Data Types**:
   - Strings, numbers, booleans, null, arrays, and objects.

**JSON vs. Python Data Structures**:
| JSON       | Python Equivalent |
|------------|-------------------|
| Object     | Dictionary        |
| Array      | List              |
| String     | String            |
| Number     | Integer/Float     |
| Boolean    | Boolean           |
| Null       | None              |

---

#### **Parsing JSON Responses**

When you make an API call using the `requests` library, the response is often in JSON format. The `requests` library provides the `.json()` method to parse the response into Python objects.

---

**Example**: Parsing JSON Data
```python
import requests

# API call
response = requests.get("https://api.example.com/data")

# Check if the request was successful
if response.status_code == 200:
    # Parse the JSON response
    data = response.json()
    print(data)  # Outputs the entire JSON response as a Python dictionary
else:
    print("Failed to fetch data")
```

---

**Accessing Specific Data from JSON**
Once the JSON response is parsed, you can access specific data using dictionary or list operations.

**Example**:
```python
# Sample JSON response
response_data = {
    "user": {
        "id": 1,
        "name": "Alice",
        "email": "alice@example.com"
    },
    "status": "active"
}

# Accessing data
user_name = response_data["user"]["name"]
user_email = response_data["user"]["email"]
status = response_data["status"]

print(user_name)  # Outputs: Alice
print(user_email)  # Outputs: alice@example.com
print(status)  # Outputs: active
```

---

#### **Example: Working with JSON Arrays**

APIs often return lists (arrays) of data. You can iterate through the list and access individual items.

**Example**:
```python
# Sample JSON response with an array
response_data = {
    "users": [
        {"id": 1, "name": "Alice"},
        {"id": 2, "name": "Bob"},
        {"id": 3, "name": "Charlie"}
    ]
}

# Accessing the array
users = response_data["users"]

# Loop through each user
for user in users:
    print(user["name"])
```
**Output**:
```
Alice
Bob
Charlie
```

---

#### **Error Handling for JSON Parsing**

If the API response is not in JSON format or is malformed, calling `.json()` will raise an exception. Use error handling to manage this scenario.

**Example**:
```python
try:
    data = response.json()
    print(data)
except ValueError:
    print("Failed to parse JSON")
```

---

#### **Example: End-to-End Workflow**

1. Make an API call.
2. Parse the JSON response.
3. Access and manipulate specific data.

**Code**:
```python
import requests

# Make an API request
response = requests.get("https://jsonplaceholder.typicode.com/posts/1")

# Check for successful response
if response.status_code == 200:
    try:
        # Parse JSON
        data = response.json()
        # Access specific fields
        title = data["title"]
        body = data["body"]
        print(f"Title: {title}")
        print(f"Body: {body}")
    except ValueError:
        print("Error parsing JSON data")
else:
    print(f"Request failed with status code: {response.status_code}")
```
**Output**:
```
Title: sunt aut facere repellat provident occaecati excepturi optio reprehenderit
Body: quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto
```

---

#### **Summary**

1. **What is JSON?**
   - A lightweight data format for exchanging structured data between systems.
   - Example:
     ```json
     {
         "name": "Alice",
         "age": 25,
         "skills": ["Python", "JavaScript"]
     }
     ```

2. **Parsing JSON**:
   - Use `.json()` from the `requests` library to parse JSON responses.
   - Example:
     ```python
     response = requests.get("https://api.example.com/data")
     data = response.json()
     print(data["key"])
     ```

3. **Accessing Data**:
   - Access data using Python dictionary or list syntax:
     ```python
     data["user"]["name"]  # Access nested data
     for item in data["items"]:  # Iterate through arrays
         print(item)
     ```

4. **Error Handling**:
   - Handle parsing errors with `try` and `except`:
     ```python
     try:
         data = response.json()
     except ValueError:
         print("Failed to parse JSON")
     ```

Parsing JSON data is a fundamental skill when working with APIs, allowing you to extract and use the data effectively.

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