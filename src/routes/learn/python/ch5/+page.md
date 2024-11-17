---
title: Chapter 5 - Functions and Modules
---
## Topics

### 5.1 Defining and Calling Functions

---

#### **Introduction to Functions**

**What are Functions?**
- A **function** is a reusable block of code that performs a specific task.
- Functions allow you to organize your code into logical chunks, making it easier to read, maintain, and debug.

**Why Use Functions?**
1. **Modularity**:
   - Breaks the program into smaller, manageable sections.
   - Each function can focus on one specific task.

2. **Reusability**:
   - Write a function once and reuse it as many times as needed.
   - Reduces code duplication.

3. **Organization**:
   - Makes the code easier to read and understand.
   - Allows for collaborative development by separating responsibilities.

**Example**: Without Functions vs. With Functions

*Without Functions:*
```python
print("Welcome!")
print("Calculating...")
result = 2 + 2
print(f"The result is {result}")
```

*With Functions:*
```python
def greet():
    print("Welcome!")

def calculate():
    result = 2 + 2
    print(f"The result is {result}")

greet()
calculate()
```

Using functions makes the program modular, reusable, and easier to expand.

---

#### **Defining a Function**

**Syntax**:
```python
def function_name():
    # Code block to execute
```

- **`def` keyword**: Indicates the start of a function definition.
- **Function name**: Follows the same rules as variable names (letters, numbers, underscores, no spaces).
- **Parentheses `()`**: Used to pass information (arguments) to the function (optional for now).
- **Colon `:`**: Indicates the start of the function body.
- **Indented Code**: The code inside the function must be indented.

**Example**: Define a simple function
```python
def greet():
    print("Hello, World!")
```

- The function `greet()` is defined, and its purpose is to print `"Hello, World!"` whenever it is called.

---

#### **Calling a Function**

**What is Function Calling?**
- To execute the code inside a function, you need to "call" it by its name followed by parentheses `()`.

**Syntax**:
```python
function_name()
```

**Example**: Call a function
```python
def greet():
    print("Hello, World!")

greet()  # Calling the function
```

**Output**:
```
Hello, World!
```

- When you call `greet()`, Python executes the code inside the function, printing `"Hello, World!"`.

---

#### **More Examples**

1. **Multiple Function Calls**:
   - You can call a function multiple times in your program.
   ```python
   def greet():
       print("Welcome!")

   greet()
   greet()
   ```
   **Output**:
   ```
   Welcome!
   Welcome!
   ```

2. **Functions with No Output**:
   - Functions don’t always need to print or return values. They can perform actions like updating variables or interacting with files.
   ```python
   def notify():
       pass  # Placeholder for future functionality

   notify()  # Doesn't do anything but avoids errors
   ```

3. **Combining Functions**:
   - Functions can call other functions for modular design.
   ```python
   def greet():
       print("Hello!")

   def farewell():
       print("Goodbye!")

   def conversation():
       greet()
       print("How are you?")
       farewell()

   conversation()
   ```
   **Output**:
   ```
   Hello!
   How are you?
   Goodbye!
   ```

---

#### **Benefits Recap**
- **Efficiency**: Reduces code duplication.
- **Readability**: Simplifies program structure.
- **Scalability**: Easy to add or modify functionality.

---

#### Summary

- **Functions** are reusable blocks of code that make your program modular and organized.
- **Defining a function**:
  ```python
  def function_name():
      # Code block
  ```
- **Calling a function**:
  ```python
  function_name()
  ```

**Example Recap**:
```python
def greet():
    print("Hello, World!")

greet()  # Outputs: Hello, World!
```

Functions form the foundation for creating scalable and maintainable Python programs. Up next, you’ll learn how to enhance functions by passing data through **arguments**!

### 5.2 Parameters, Return Values, and Scope

---

#### **Parameters and Arguments**

**What Are Parameters and Arguments?**
- **Parameters**: Variables listed in the function definition that act as placeholders for the data the function will process.
- **Arguments**: The actual values passed to the function when calling it.

**Why Use Parameters?**
- Parameters allow you to create flexible and reusable functions that can process different data.

**Syntax**:
```python
def function_name(parameter1, parameter2):
    # Code block
```

**Example**: Function with a Parameter
```python
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")  # Outputs: Hello, Alice!
greet("Bob")    # Outputs: Hello, Bob!
```

- `name` is the parameter.
- `"Alice"` and `"Bob"` are the arguments passed to the function during the calls.

**Multiple Parameters**:
- You can define functions with multiple parameters separated by commas.
```python
def introduce(name, age):
    print(f"My name is {name} and I am {age} years old.")

introduce("Alice", 30)  # Outputs: My name is Alice and I am 30 years old.
```

**Default Parameter Values**:
- You can assign default values to parameters, making them optional when calling the function.
```python
def greet(name="Guest"):
    print(f"Hello, {name}!")

greet()           # Outputs: Hello, Guest!
greet("Charlie")  # Outputs: Hello, Charlie!
```

---

#### **Return Values**

**What is a Return Value?**
- The `return` statement is used to send a value back to the caller of the function.
- This makes functions more flexible as they can produce results that can be stored or used elsewhere.

**Syntax**:
```python
def function_name(parameter1, parameter2):
    # Code block
    return result
```

**Example**: Returning a Value
```python
def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # Outputs: 8
```

**Multiple Return Values**:
- A function can return multiple values as a tuple.
```python
def calculate(a, b):
    return a + b, a - b

sum_, diff = calculate(10, 5)
print(sum_)   # Outputs: 15
print(diff)   # Outputs: 5
```

**Why Use `return`?**
- Allows the function's output to be used in further calculations or decisions.
```python
def square(num):
    return num * num

result = square(4) + square(3)
print(result)  # Outputs: 25
```

---

#### **Scope**

**What is Scope?**
- **Scope** defines where variables can be accessed or modified in a program.
- Variables can have **local scope** or **global scope** depending on where they are defined.

1. **Local Scope**:
   - Variables defined inside a function are **local** to that function.
   - They are created when the function starts and are destroyed when the function ends.
   ```python
   def func():
       x = 5  # Local variable
       print(x)

   func()       # Outputs: 5
   print(x)     # Error: x is not defined outside the function
   ```

2. **Global Scope**:
   - Variables defined outside all functions are **global** and can be accessed anywhere in the program.
   ```python
   x = 10  # Global variable

   def func():
       print(x)  # Accessing the global variable

   func()       # Outputs: 10
   print(x)     # Outputs: 10
   ```

3. **Modifying Global Variables**:
   - To modify a global variable inside a function, use the `global` keyword.
   ```python
   x = 10

   def update_global():
       global x
       x = 5

   update_global()
   print(x)  # Outputs: 5
   ```

**Avoid Overusing Global Variables**:
- Global variables make the program harder to debug and maintain. Use them sparingly.

---

#### **Examples Combining Parameters, Return Values, and Scope**

1. **Parameter and Return Value Example**:
   - A function to calculate the area of a rectangle.
   ```python
   def rectangle_area(length, width):
       return length * width

   area = rectangle_area(10, 5)
   print(area)  # Outputs: 50
   ```

2. **Scope Example**:
   - Demonstrating local and global variables.
   ```python
   x = 20  # Global variable

   def demo_scope():
       x = 10  # Local variable
       print(f"Local x: {x}")  # Outputs: Local x: 10

   demo_scope()
   print(f"Global x: {x}")  # Outputs: Global x: 20
   ```

3. **Real-World Example: A Calculator**:
   ```python
   def calculator(a, b, operation):
       if operation == "add":
           return a + b
       elif operation == "subtract":
           return a - b
       elif operation == "multiply":
           return a * b
       elif operation == "divide" and b != 0:
           return a / b
       else:
           return "Invalid operation or division by zero."

   result = calculator(10, 5, "add")
   print(result)  # Outputs: 15
   ```

---

#### **Summary**

1. **Parameters and Arguments**:
   - Functions can accept input values (arguments) through parameters.
   - Example:
     ```python
     def greet(name):
         print(f"Hello, {name}!")
     greet("Alice")  # Outputs: Hello, Alice!
     ```

2. **Return Values**:
   - Functions can return results using the `return` statement.
   - Example:
     ```python
     def add(a, b):
         return a + b
     result = add(5, 3)  # result is 8
     ```

3. **Scope**:
   - Variables defined inside functions are **local** and only accessible within that function.
   - Variables defined outside functions are **global** and accessible throughout the program.
   - Example:
     ```python
     x = 10  # Global variable

     def func():
         x = 5  # Local variable
         print(x)  # Outputs: 5

     func()
     print(x)  # Outputs: 10
     ```

By mastering these concepts, you can create flexible, reusable, and well-organized functions in Python!

### 5.3 Introduction to Python Modules and Importing Libraries

---

#### **Modules**

**What are Modules?**
- A **module** is a file containing Python code that can include functions, classes, and variables. It allows you to organize your code and reuse it across multiple scripts or projects.
- Python has a rich collection of built-in modules, and you can also create custom modules.

**Benefits of Using Modules**:
1. **Reusability**: Write code once, use it in multiple places.
2. **Organization**: Break a large program into manageable parts.
3. **Built-in Functionality**: Leverage Python's extensive library of pre-built modules.

**Common Built-in Python Modules**:
1. **`math`**:
   - Provides mathematical functions and constants.
   - Example:
     ```python
     import math
     print(math.pi)  # Outputs: 3.141592653589793
     print(math.sqrt(16))  # Outputs: 4.0
     ```

2. **`datetime`**:
   - Handles dates and times.
   - Example:
     ```python
     import datetime
     today = datetime.date.today()
     print(today)  # Outputs: Current date
     ```

3. **`random`**:
   - Generates random numbers.
   - Example:
     ```python
     import random
     print(random.randint(1, 10))  # Outputs a random integer between 1 and 10
     ```

---

#### **Importing Modules**

Python provides flexible ways to import modules into your script.

1. **Importing the Whole Module**:
   - Syntax:
     ```python
     import module_name
     ```
   - Example:
     ```python
     import math
     print(math.sqrt(16))  # Outputs: 4.0
     print(math.pi)  # Outputs: 3.141592653589793
     ```

2. **Importing Specific Functions**:
   - Syntax:
     ```python
     from module_name import function_name
     ```
   - Example:
     ```python
     from math import sqrt, pi
     print(sqrt(16))  # Outputs: 4.0
     print(pi)  # Outputs: 3.141592653589793
     ```

3. **Importing with Aliases**:
   - Syntax:
     ```python
     import module_name as alias
     ```
   - Example:
     ```python
     import math as m
     print(m.sqrt(16))  # Outputs: 4.0
     print(m.pi)  # Outputs: 3.141592653589793
     ```

4. **Importing Everything (`*`)**:
   - Syntax:
     ```python
     from module_name import *
     ```
   - Note: Avoid using `*` in larger projects to prevent naming conflicts.
   - Example:
     ```python
     from math import *
     print(sqrt(16))  # Outputs: 4.0
     print(pi)  # Outputs: 3.141592653589793
     ```

---

#### **Creating and Importing Custom Modules**

**How to Create a Custom Module**:
1. Create a `.py` file with functions, variables, or classes.
   ```python
   # mymodule.py
   def greet(name):
       return f"Hello, {name}!"

   pi = 3.14159
   ```

2. Save the file in the same directory as your script or in a location accessible to Python.

**How to Import a Custom Module**:
1. Import the module in another Python script.
   ```python
   # main.py
   import mymodule
   print(mymodule.greet("Alice"))  # Outputs: Hello, Alice!
   print(mymodule.pi)  # Outputs: 3.14159
   ```

2. Import specific functions or variables:
   ```python
   from mymodule import greet, pi
   print(greet("Bob"))  # Outputs: Hello, Bob!
   print(pi)  # Outputs: 3.14159
   ```

3. Use aliases for the module:
   ```python
   import mymodule as mm
   print(mm.greet("Charlie"))  # Outputs: Hello, Charlie!
   print(mm.pi)  # Outputs: 3.14159
   ```

---

#### **Practical Examples**

1. **Using Built-in Modules**:
   ```python
   import random
   import math

   num = random.randint(1, 100)
   print(f"Random Number: {num}")
   print(f"Square Root: {math.sqrt(num)}")
   ```

2. **Using Custom Modules**:
   - Create `calculator.py`:
     ```python
     def add(a, b):
         return a + b

     def subtract(a, b):
         return a - b
     ```

   - Use in `main.py`:
     ```python
     from calculator import add, subtract

     print(add(10, 5))  # Outputs: 15
     print(subtract(10, 5))  # Outputs: 5
     ```

3. **Combining Built-in and Custom Modules**:
   ```python
   import random
   from mymodule import greet

   name = greet("Alex")
   lucky_number = random.randint(1, 100)
   print(f"{name}, your lucky number is {lucky_number}!")
   ```

---

#### **Summary**

1. **Modules**:
   - Built-in or custom files containing Python code for reuse.
   - Common built-in modules: `math`, `datetime`, `random`.

2. **Importing Modules**:
   - Whole module: `import module_name`
   - Specific functions: `from module_name import function_name`
   - Aliases: `import module_name as alias`

3. **Creating Custom Modules**:
   - Save Python code in a `.py` file.
   - Import it into other scripts using `import`.

---

**Example Recap**:
```python
# Using a Built-in Module
import math
print(math.sqrt(25))  # Outputs: 5.0

# Creating and Using a Custom Module
# mymodule.py
def greet(name):
    return f"Hello, {name}!"

# main.py
from mymodule import greet
print(greet("Alice"))  # Outputs: Hello, Alice!
```

Modules and libraries are essential for building modular and efficient programs, empowering you to leverage existing functionality and organize your code effectively.
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