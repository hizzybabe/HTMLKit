---
title: Control Flow - Conditional Statements
---

**Chapter 3: Control Flow - Conditional Statements**

### Topics

#### 3.1 if, elif, and else Statements
   - **Introduction to Conditional Statements**: Explain the purpose of conditional statements in programming, allowing the code to make decisions based on conditions.
   - **if Statement**: Introduce the basic `if` statement syntax and show examples of how to use it to execute code when a condition is true.
      - **Example**:
        ```python
        age = 18
        if age >= 18:
            print("You are an adult.")
        ```
   - **elif Statement**: Explain the `elif` (else if) statement for checking multiple conditions sequentially. Demonstrate its usage following an `if` statement.
   - **else Statement**: Explain the `else` statement as the final fallback condition when none of the previous conditions are met.

#### 3.2 Nested and Chained Conditional Statements
   - **Nested Conditionals**: Show how to use `if` statements within other `if` statements, known as nested conditionals, and explain when and why this approach may be useful.
   - **Chained Conditionals**: Explain how to combine conditions using logical operators (`and`, `or`, `not`) to create more complex condition checks without nesting.
   - **Examples**: Provide examples of nested and chained conditionals to illustrate different approaches to complex decision-making.

---

<h2 class="workshop-title">Workshop Exercise</h2>
<div class="workshop-container">

#### Write a Program that Categorizes a Person’s Age

- **Objective**: Create a program that asks the user for their age and categorizes them as a child, teenager, adult, or senior.
- **Instructions**:
   1. **Get User Input**:
      - Create a Python file (e.g., `age_category.py`).
      - Use `input()` to ask the user for their age and convert the input to an integer.
      - Example:
        ```python
        age = int(input("Enter your age: "))
        ```

   2. **Apply Conditional Statements**:
      - Use `if`, `elif`, and `else` statements to check the age and categorize it.
      - Example:
        ```python
        if age <= 12:
            category = "child"
        elif age <= 19:
            category = "teenager"
        elif age <= 64:
            category = "adult"
        else:
            category = "senior"
        ```

   3. **Display the Result**:
      - Print the result in a clear message.
      - Example:
        ```python
        print(f"You are classified as a {category}.")
        ```
   4. **Test the Program**: Run the script with various ages to ensure it categorizes correctly.

</div>

<h2 class="workshop-title">Chapter Project</h2>
<div class="workshop-container">

**Project: Build a "Number Guessing Game"**

- **Description**: The computer will randomly select a number within a specific range, and the user will have to guess it. The program should provide feedback on whether the guess is too high or too low, and continue until the user guesses correctly.

- **Objective**: Apply conditional statements to create a simple game and provide feedback to the user based on their guesses.

- **Instructions**:
   1. **Set Up the Game**:
      - Create a Python file (e.g., `number_guessing_game.py`).
      - Import the `random` module and generate a random number for the user to guess.
      - Example:
        ```python
        import random
        number_to_guess = random.randint(1, 100)
        ```

   2. **Prompt User for Guesses**:
      - Create a loop that will continue until the user guesses the correct number.
      - Use `input()` to get the user’s guess, converting it to an integer.
      - Example:
        ```python
        guess = int(input("Guess the number between 1 and 100: "))
        ```

   3. **Provide Feedback Using Conditional Statements**:
      - Use `if`, `elif`, and `else` statements to compare the user’s guess to the random number.
      - Give feedback if the guess is too high, too low, or correct.
      - Example:
        ```python
        while True:
            guess = int(input("Guess the number between 1 and 100: "))
            if guess < number_to_guess:
                print("Too low! Try again.")
            elif guess > number_to_guess:
                print("Too high! Try again.")
            else:
                print("Congratulations! You guessed it right.")
                break
        ```

   4. **Test the Game**:
      - Run the game and try guessing numbers to check if the program provides accurate feedback and ends when the correct number is guessed.

---

This chapter introduces learners to the powerful control flow capabilities of Python. By categorizing ages and creating a number guessing game, they’ll gain hands-on experience using conditional statements to control the flow of a program. The guessing game also introduces the concept of loops in a simple, interactive way.

</div>

<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
</script>

<ChapterNavigation 
    prevHref="/learn/python/ch2" 
    nextHref="/learn/python/ch4"
  />