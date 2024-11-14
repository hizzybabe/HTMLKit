---
title: Introduction to Python and Setup
---

**Chapter 1: Introduction to Python and Setup**

## Topics

### 1.1 What is Python? History and Applications

Python is a versatile and beginner-friendly programming language known for its readability and extensive applications. Let’s explore its origins, evolution, and why it’s so popular today.

#### Concepts Covered

- **History of Python**:
  - Python was created in the late 1980s by **Guido van Rossum** at the Centrum Wiskunde & Informatica (CWI) in the Netherlands. Van Rossum wanted to build a language that emphasized code readability and simplicity, which led to the development of Python.
  - The language was officially released in 1991, and over time, Python has undergone multiple updates and improvements, each bringing new features and capabilities.
  - Python’s name is inspired by the British comedy series *Monty Python’s Flying Circus*, reflecting Van Rossum's intention to make the language both fun and approachable.

- **Evolution and Key Features**:
  - Python has evolved through multiple versions, with major releases such as Python 2 (2000) and Python 3 (2008). Python 3 is now the standard version used worldwide.
  - Key figures behind Python’s development include Guido van Rossum (who was the language’s “Benevolent Dictator for Life” until he stepped down in 2018), along with contributions from an active open-source community.
  - Python is celebrated for its easy-to-read syntax, rich standard library, and large collection of third-party packages that extend its functionality for various applications.

- **Why Python is So Popular Today**:
  - Python is popular for its simplicity, versatility, and extensive support for various programming paradigms (procedural, object-oriented, and functional).
  - Its readability makes it an excellent language for beginners, while its power and flexibility make it a favorite among professional developers.
  - Python’s extensive community and documentation support make it easy to learn and troubleshoot.

#### Applications of Python

Python’s versatility allows it to be used in a wide range of fields. Some of the most common applications include:

1. **Data Science and Analysis**:
   - Python is the most popular language in data science due to its libraries for data manipulation (e.g., Pandas, NumPy) and visualization (e.g., Matplotlib, Seaborn).
   - Data scientists use Python to process, analyze, and visualize large datasets, making it essential in fields like finance, healthcare, and social sciences.

2. **Web Development**:
   - With frameworks like Django, Flask, and FastAPI, Python is widely used for back-end web development. These frameworks provide the tools needed to build and deploy web applications quickly and efficiently.
   - Python’s ease of use and extensive libraries make it a popular choice for web developers.

3. **Automation and Scripting**:
   - Python is commonly used for automating repetitive tasks such as file manipulation, data scraping, and server management.
   - Automation scripts can save time and reduce human error, making Python valuable in IT, administration, and other fields where efficiency is crucial.

4. **Artificial Intelligence (AI) and Machine Learning (ML)**:
   - Python is a leading language in AI and ML, thanks to powerful libraries like TensorFlow, PyTorch, and Scikit-Learn.
   - Researchers and developers use Python to build and train machine learning models, powering innovations in fields like natural language processing, computer vision, and robotics.

5. **Game Development**:
   - While not as common as C++ or Unity, Python is used in game development, particularly for prototyping and educational games. Libraries like Pygame provide simple ways to create interactive games.

6. **Scientific and Numeric Computing**:
   - Python’s support for scientific libraries such as SciPy and SymPy makes it suitable for complex mathematical calculations and simulations, often used in engineering, physics, and academia.

---

### 1.2 Installing Python and Setting Up an IDE

To begin coding in Python, you’ll need to install Python on your computer and set up an Integrated Development Environment (IDE) or code editor. This section provides instructions for installing Python on different operating systems and suggests IDEs to use.

#### Instructions for Installing Python

1. **Installing on Windows**:
   - Go to the [Python Downloads page](https://www.python.org/downloads/) and download the latest version for Windows.
   - Run the installer, and be sure to check the box labeled **“Add Python to PATH”** before clicking **Install Now**. This ensures Python can be run from the command line.
   - Once installed, open Command Prompt and type:
     ```bash
     python --version
     ```
   - If installed correctly, this command will display the installed Python version (e.g., `Python 3.x.x`).

2. **Installing on macOS**:
   - macOS typically includes Python 2.x pre-installed, but it’s outdated. It’s recommended to install the latest version of Python 3.
   - Go to the [Python Downloads page](https://www.python.org/downloads/) and download the latest version for macOS.
   - Run the installer and follow the prompts.
   - After installation, open Terminal and type:
     ```bash
     python3 --version
     ```
   - This should display the Python version. Note that on macOS, you’ll use `python3` instead of `python` in the terminal to avoid conflicts with Python 2.

3. **Installing on Linux**:
   - Most Linux distributions come with Python pre-installed. To check, open a terminal and type:
     ```bash
     python3 --version
     ```
   - If Python isn’t installed, you can install it via the package manager. For example, on Ubuntu:
     ```bash
     sudo apt update
     sudo apt install python3
     ```
   - After installation, verify by typing `python3 --version`.

#### IDE Options

Python code can be written and executed in various IDEs and editors. Here are some popular options:

1. **VSCode (Visual Studio Code)**:
   - A free, versatile code editor with a Python extension that provides syntax highlighting, IntelliSense, and debugging.
   - To set up, download [VSCode](https://code.visualstudio.com/) and install the **Python extension** from the Extensions Marketplace.

2. **PyCharm**:
   - A dedicated Python IDE with powerful features for professional development.
   - Available in a free **Community Edition** and a paid **Professional Edition**.
   - Download [PyCharm](https://www.jetbrains.com/pycharm/) and follow the installation instructions.

3. **Jupyter Notebook**:
   - A popular tool for data science and interactive programming, often used for data analysis and visualization.
   - To install Jupyter Notebook, first install Python, then run:
     ```bash
     pip install notebook
     ```
   - Start Jupyter by typing `jupyter notebook` in the terminal, which will open a notebook interface in your browser.

4. **IDLE**:
   - IDLE is Python’s built-in IDE, which comes installed with Python. It’s simple and ideal for beginners who want to start coding right away without installing additional tools.
   - To open IDLE, search for “IDLE” in your applications (Windows and macOS) or type `idle` in the terminal.

#### Environment Check

After installing Python, it’s essential to verify that everything is set up correctly:

1. **Checking in Terminal/Command Prompt**:
   - Open a terminal (Linux/macOS) or Command Prompt (Windows).
   - Type the following command to check the Python version:
     ```bash
     python --version  # or python3 --version on macOS and Linux
     ```
   - You should see output like `Python 3.x.x`, confirming that Python is installed.

2. **Testing in an IDE**:
   - Open your chosen IDE (e.g., VSCode, PyCharm, or IDLE).
   - Create a new file, enter the following code, and run it to ensure Python is working:
     ```python
     print("Hello, Python!")
     ```
   - If you see the output `"Hello, Python!"`, your environment is ready for Python development.

---

With Python installed and your IDE set up, you’re ready to start writing and running Python code! The next steps will guide you through creating your first Python script and understanding the fundamentals of Python syntax, variables, and data types.

### 1.3 Writing and Running Your First Python Script

In this section, you’ll learn how to create a simple Python script, save it as a file, and run it. This is an essential first step to writing and executing code in Python.

#### Basics of Script Writing

1. **Creating a Python Script**:
   - A script is simply a file that contains Python code. Scripts are saved with a `.py` extension, which tells the system it’s a Python file.
   - To create a script:
     - Open a text editor (such as Notepad on Windows, TextEdit on macOS in plain text mode, or any code editor like VSCode or PyCharm).
     - Write some Python code in the editor.
     - Save the file with a `.py` extension (e.g., `hello.py`).

2. **The `print()` Function**:
   - One of the most basic and useful functions in Python is `print()`, which outputs text to the console.
   - **Example**:
     ```python
     print("Hello, World!")
     ```
   - This line of code tells Python to display the text `"Hello, World!"` on the screen. It’s commonly used as a first program because it’s simple yet confirms that everything is set up correctly.

3. **Writing Your First Script**:
   - Open your editor and type the following code:
     ```python
     print("Hello, World!")
     ```
   - Save the file as `hello.py`. You now have a basic Python script that, when run, will display `"Hello, World!"`.

#### Running the Script

Once you’ve created your first Python script, the next step is to run it. Here’s how to do it in different environments.

1. **Running in an Integrated Development Environment (IDE)**:
   - **PyCharm**:
     - Open PyCharm and create a new Python project. Add your `hello.py` file to the project if it isn’t already there.
     - Right-click on the file in the project explorer and select **Run 'hello'**. Alternatively, you can click on the green play button at the top.
     - The output will appear in the console at the bottom of the IDE.
   - **VSCode**:
     - Open VSCode and open the folder or file containing `hello.py`.
     - Open the `hello.py` file in the editor, then click on the green **Run Python File** button in the upper right corner, or press `Ctrl + F5` (Windows) or `Cmd + F5` (Mac).
     - The output will appear in the integrated terminal within VSCode.

2. **Running from the Terminal (Command Line)**:
   - **Windows**:
     - Open Command Prompt.
     - Navigate to the folder containing your `hello.py` file by using the `cd` command.
       ```cmd
       cd path\to\your\folder
       ```
     - Run the script by typing:
       ```cmd
       python hello.py
       ```
     - You should see the output `Hello, World!` in the command prompt.

   - **macOS**:
     - Open Terminal.
     - Navigate to the directory containing your `hello.py` file using the `cd` command.
       ```bash
       cd /path/to/your/folder
       ```
     - Run the script by typing:
       ```bash
       python3 hello.py
       ```
     - You should see the output `Hello, World!`.

   - **Linux**:
     - Open Terminal.
     - Navigate to the directory containing your `hello.py` file with the `cd` command.
       ```bash
       cd /path/to/your/folder
       ```
     - Run the script by typing:
       ```bash
       python3 hello.py
       ```
     - You should see the output `Hello, World!`.

3. **Running in a Jupyter Notebook**:
   - If you’re using Jupyter Notebook:
     - Open Jupyter Notebook and create a new notebook.
     - In a code cell, type:
       ```python
       print("Hello, World!")
       ```
     - Press `Shift + Enter` to run the cell, and you’ll see the output directly below the cell.

#### Summary

To recap, you’ve created your first Python script using the `print()` function and learned how to run it using different tools. Running a script may vary depending on your setup, but the process is generally straightforward across IDEs, text editors, and terminals. Now that you know how to write and execute code, you’re ready to start building more complex scripts and programs!
   
### 1.4 Overview of Python Syntax, Variables, and Data Types

#### Syntax

Python’s syntax is designed to be clear and readable, making it a great language for beginners. Let’s go over some essential parts of Python syntax:

- **Indentation**:
  - Python uses indentation (spaces or tabs) to define code blocks, such as loops, functions, and conditional statements.
  - Indentation is crucial; if it’s inconsistent, Python will throw an `IndentationError`.
  - **Example**:
    ```python
    if True:
        print("This is indented correctly.")
    ```

- **Case Sensitivity**:
  - Python is case-sensitive, meaning `Variable` and `variable` are considered two different identifiers.
  - **Example**:
    ```python
    myVar = 5
    MyVar = 10
    print(myVar)  # Outputs: 5
    print(MyVar)  # Outputs: 10
    ```

- **Comments**:
  - Comments are used to explain code and are ignored by Python during execution. They start with the `#` symbol.
  - Multi-line comments can be created by using triple quotes (`"""` or `'''`).
  - **Examples**:
    ```python
    # This is a single-line comment
    print("Hello, World!")  # Inline comment

    """
    This is a
    multi-line comment.
    """
    ```

#### Variables

Variables are used to store data, which can then be used and manipulated within your program. Python has simple and flexible rules for declaring and naming variables.

- **Variable Assignment**:
  - In Python, variables are created when you assign a value to them. You don’t need to specify the type of the variable.
  - **Example**:
    ```python
    age = 25
    name = "Alice"
    is_student = True
    ```

- **Naming Conventions**:
  - Variable names should be descriptive and follow these rules:
    - Use letters (a-z, A-Z), numbers (0-9), and underscores (`_`).
    - Variable names cannot start with a number.
    - Avoid using Python keywords (like `print`, `for`, `if`) as variable names.
  - By convention, variable names are written in `snake_case` (e.g., `user_name`, `total_price`).
  - **Examples**:
    ```python
    user_age = 30  # Valid variable name
    1st_place = "Winner"  # Invalid, starts with a number
    ```

#### Data Types

Python has several built-in data types for storing different kinds of information. Here are the fundamental ones:

1. **Integers**:
   - Integers are whole numbers, positive or negative, without a decimal point.
   - **Examples**:
     ```python
     x = 10
     y = -5
     ```

2. **Floats**:
   - Floats are numbers that include a decimal point, used for representing fractional values.
   - **Examples**:
     ```python
     price = 19.99
     temperature = -3.5
     ```

3. **Strings**:
   - Strings are sequences of characters enclosed within single (`'`), double (`"`), or triple quotes (`'''` or `"""`).
   - Strings are commonly used for storing text.
   - **Examples**:
     ```python
     greeting = "Hello, World!"
     multi_line = """This is a
     multi-line string."""
     ```

4. **Booleans**:
   - Booleans represent one of two values: `True` or `False`. They are often used in conditions and comparisons.
   - **Examples**:
     ```python
     is_active = True
     is_admin = False
     ```

#### Summary of Examples

Here’s a quick summary of Python syntax, variables, and data types:

```python
# Variables and their data types
name = "Alice"          # String
age = 30                # Integer
height = 5.7            # Float
is_student = True       # Boolean

# Python is case-sensitive
myVariable = 10
MyVariable = 20

# Code block using indentation
if is_student:
    print(f"{name} is a student.")

# This is a comment explaining code
```

In this section, you’ve learned the basics of Python’s syntax, how to define variables, and some of the primary data types. These building blocks will help you as you start writing more complex programs!

---

<h2 class="workshop-title">Workshop Exercises</h2>
<div class="workshop-container">

#### 1. Write a Simple "Hello, World!" Program
   - **Objective**: Write and run a basic script that displays "Hello, World!" on the screen.
   - **Instructions**:
      - Open your IDE, create a new Python file (e.g., `hello_world.py`), and write:
        ```python
        print("Hello, World!")
        ```
      - Save and run the script.
      - Observe the output and ensure the setup is working.

#### 2. Create a Program that Asks for the User's Name and Prints a Greeting
   - **Objective**: Write a program that prompts the user for their name and then displays a custom greeting.
   - **Instructions**:
      - Create a new Python file (e.g., `greet_user.py`).
      - Use `input()` to get the user’s name and `print()` to display the greeting:
        ```python
        name = input("What's your name? ")
        print("Hello, " + name + "! Welcome to Python.")
        ```
      - Run the script and test it by entering your name.

</div>

<h2 class="workshop-title">Chapter Project</h2>
<div class="workshop-container">
<h3 class="project-title">Project: Build a "Mad Libs" Game</h3>

- **Description**: Mad Libs is a fun, fill-in-the-blank word game where users enter specific types of words (nouns, verbs, adjectives, etc.), which are then incorporated into a pre-written story template.

- **Objective**: Allow users to input different types of words, then integrate them into a playful sentence or paragraph that outputs as a mini-story.

- **Instructions**:
   1. **Plan Your Story**: Write a short template story with placeholders for different word types, like:
      - "Today I went to the [place]. It was really [adjective] and I saw a [animal] that was [verb]-ing."
   
   2. **Prompt for Input**:
      - Create a Python file (e.g., `mad_libs.py`).
      - Use `input()` to collect words from the user for each placeholder:
        ```python
        place = input("Enter a place: ")
        adjective = input("Enter an adjective: ")
        animal = input("Enter an animal: ")
        verb = input("Enter a verb ending in -ing: ")
        ```
   
   3. **Display the Story**:
      - Use string formatting to integrate the user’s inputs into the story template:
        ```python
        print(f"Today I went to the {place}. It was really {adjective} and I saw a {animal} that was {verb}-ing.")
        ```
   
   4. **Run and Test**:
      - Run the program, input different words, and see the resulting story. Encourage users to try funny and creative words for unique outputs.

---

This chapter will provide a solid introduction to Python, giving learners confidence with syntax, basic input/output, and running code in their development environment. Plus, the Mad Libs project will let them apply these concepts in a fun and engaging way.

</div>

<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
</script>

<ChapterNavigation 
    prevHref="/learn/python" 
    nextHref="/learn/python/ch2"
  />