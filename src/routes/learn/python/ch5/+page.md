---
title: Functions and Modules
---
**Chapter 5: Functions and Modules**

### Topics

#### 5.1 Defining and Calling Functions
   - **Introduction to Functions**:
      - Explain functions as reusable blocks of code that perform a specific task.
      - Describe the benefits of using functions for modularity, reusability, and organization.
   - **Defining a Function**:
      - Show the syntax for defining a function using the `def` keyword, function name, and parentheses.
      - Example:
        ```python
        def greet():
            print("Hello, World!")
        ```
   - **Calling a Function**:
      - Explain how to call a function by using its name followed by parentheses.
      - Example:
        ```python
        greet()  # Outputs: Hello, World!
        ```

#### 5.2 Parameters, Return Values, and Scope
   - **Parameters and Arguments**:
      - Explain how to pass data to functions using parameters and how arguments work when calling a function.
      - Example:
        ```python
        def greet(name):
            print(f"Hello, {name}!")
        greet("Alice")  # Outputs: Hello, Alice!
        ```
   - **Return Values**:
      - Introduce the `return` statement to send a result back from a function.
      - Explain how returning a value allows functions to be more flexible.
      - Example:
        ```python
        def add(a, b):
            return a + b
        result = add(5, 3)  # result is 8
        ```
   - **Scope**:
      - Explain local and global scope.
      - Illustrate how variables defined within a function are local to that function, while global variables are accessible throughout the program.
      - Example:
        ```python
        x = 10  # Global variable

        def func():
            x = 5  # Local variable
            print(x)

        func()  # Outputs: 5
        print(x)  # Outputs: 10
        ```

#### 5.3 Introduction to Python Modules and Importing Libraries
   - **Modules**:
      - Explain modules as files containing Python code that can be imported into other scripts, enabling code reusability.
      - Briefly introduce common Python modules (like `math`, `datetime`, and `random`).
   - **Importing Modules**:
      - Show how to import modules using the `import` statement.
      - Explain different ways to import modules:
         - Importing the whole module:
           ```python
           import math
           print(math.sqrt(16))  # Outputs: 4.0
           ```
         - Importing specific functions:
           ```python
           from math import sqrt
           print(sqrt(16))  # Outputs: 4.0
           ```
         - Importing with aliases:
           ```python
           import math as m
           print(m.sqrt(16))  # Outputs: 4.0
           ```
   - **Creating and Importing Custom Modules**:
      - Explain how to create a custom module by saving Python code in a `.py` file.
      - Show how to import and use the custom module in another file.

---

<h2 class="workshop-title">Workshop Exercise</h2>
<div class="workshop-container">

#### Write a Function that Checks if a Number is Prime

- **Objective**: Write a function that determines if a given number is prime.
- **Instructions**:
   1. **Define the Function**:
      - Create a Python file (e.g., `is_prime.py`).
      - Define a function `is_prime()` that accepts a number as input and returns `True` if it’s prime, otherwise `False`.
      - Example:
        ```python
        def is_prime(number):
            if number <= 1:
                return False
            for i in range(2, int(number**0.5) + 1):
                if number % i == 0:
                    return False
            return True
        ```

   2. **Test the Function**:
      - Call the function with different numbers to verify that it works correctly.
      - Example:
        ```python
        print(is_prime(5))  # Outputs: True
        print(is_prime(4))  # Outputs: False
        ```

</div>

<h2 class="workshop-title">Chapter Project</h2>
<div class="workshop-container">

**Project: Create a "Unit Converter"**

- **Description**: The Unit Converter will take user input for a value and its unit, convert it to a specified target unit, and display the result. The converter should handle units like inches to centimeters, Fahrenheit to Celsius, and pounds to kilograms.

- **Objective**: Use functions and modules to create a useful, modular tool that allows conversions between different units.

- **Instructions**:
   1. **Set Up the File**:
      - Create a Python file (e.g., `unit_converter.py`).

   2. **Define Conversion Functions**:
      - Define separate functions for each conversion type, such as:
         - Inches to centimeters (`inches_to_cm`)
         - Fahrenheit to Celsius (`fahrenheit_to_celsius`)
         - Pounds to kilograms (`pounds_to_kg`)
      - Example:
        ```python
        def inches_to_cm(inches):
            return inches * 2.54

        def fahrenheit_to_celsius(fahrenheit):
            return (fahrenheit - 32) * 5/9

        def pounds_to_kg(pounds):
            return pounds * 0.453592
        ```

   3. **Implement User Input**:
      - Use `input()` to ask the user for the value and units they want to convert.
      - Example:
        ```python
        value = float(input("Enter the value: "))
        unit = input("Enter the unit (inches, Fahrenheit, pounds): ")
        ```

   4. **Add Conversion Logic**:
      - Use `if` statements to check the unit type and call the appropriate conversion function.
      - Display the result to the user.
      - Example:
        ```python
        if unit == "inches":
            print(f"{value} inches is {inches_to_cm(value)} cm.")
        elif unit == "Fahrenheit":
            print(f"{value} Fahrenheit is {fahrenheit_to_celsius(value)} Celsius.")
        elif unit == "pounds":
            print(f"{value} pounds is {pounds_to_kg(value)} kg.")
        else:
            print("Unknown unit.")
        ```

   5. **Test the Converter**:
      - Run the program, enter different values and units, and verify the correctness of the conversion outputs.

---

### Summary

This chapter introduces learners to the fundamental concepts of functions and modules in Python. By completing the workshop and the Unit Converter project, learners gain experience defining, calling, and organizing functions. They’ll also understand how to work with modules and libraries, setting a strong foundation for modular and maintainable code.

</div>

<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
</script>

<ChapterNavigation 
    prevHref="/learn/python/ch4" 
    nextHref="/learn/python/ch6"
  />