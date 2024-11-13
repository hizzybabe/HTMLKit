---
title: Loops in Python
---

**Chapter 4: Loops in Python**

### Topics

#### 4.1 for and while Loops
   - **for Loop**:
      - **Explanation**: Introduce the `for` loop, which iterates over a sequence (like a list, tuple, or range).
      - **Example**: Show examples of looping through a list of items and using the `range()` function.
      - **Syntax**:
        ```python
        for i in range(5):
            print(i)
        ```
   - **while Loop**:
      - **Explanation**: Introduce the `while` loop, which continues as long as a given condition is true.
      - **Example**: Show a basic example where the `while` loop runs until a certain condition is no longer met.
      - **Syntax**:
        ```python
        count = 0
        while count < 5:
            print(count)
            count += 1
        ```

#### 4.2 Nested Loops
   - **Explanation**: Explain that loops can be nested within other loops and show how nested loops are useful for handling multi-dimensional data structures, such as matrices.
   - **Example**:
     ```python
     for i in range(3):
         for j in range(3):
             print(f"i: {i}, j: {j}")
     ```

#### 4.3 Loop Control Statements
   - **break**: Explain the `break` statement, which stops the loop entirely when encountered.
   - **continue**: Explain the `continue` statement, which skips the current iteration and moves to the next one.
   - **Example**:
     ```python
     for i in range(5):
         if i == 3:
             break
         print(i)  # Will print numbers until it reaches 3 and then stop
     ```

---

<h2 class="workshop-title">Workshop Exercise</h2>
<div class="workshop-container">

#### Write a Program that Prints a Multiplication Table for a Given Number

- **Objective**: Create a program that takes a number as input and prints its multiplication table up to a specified range (e.g., 1 to 10).
- **Instructions**:
   1. **Get User Input**:
      - Create a Python file (e.g., `multiplication_table.py`).
      - Use `input()` to ask the user for a number and convert it to an integer.
      - Example:
        ```python
        number = int(input("Enter a number for its multiplication table: "))
        ```
   2. **Print the Multiplication Table**:
      - Use a `for` loop to iterate through a range (e.g., 1 to 10) and print the product of the number and each iteration.
      - Example:
        ```python
        for i in range(1, 11):
            print(f"{number} x {i} = {number * i}")
        ```
   3. **Test the Program**: Run the program and try different numbers to verify it prints correct multiplication tables.

</div>

<h2 class="workshop-title">Chapter Project</h2>
<div class="workshop-container">

**Project: Create a "Countdown Timer"**

- **Description**: The Countdown Timer program will take the user’s input for the number of seconds and then count down to zero, printing the remaining time at each second.

- **Objective**: Use a `while` loop to implement a countdown and introduce learners to the `time.sleep()` function for delaying execution.

- **Instructions**:
   1. **Get User Input**:
      - Create a Python file (e.g., `countdown_timer.py`).
      - Use `input()` to ask the user for the number of seconds for the countdown and convert it to an integer.
      - Example:
        ```python
        import time
        seconds = int(input("Enter the number of seconds for the countdown: "))
        ```

   2. **Implement the Countdown**:
      - Use a `while` loop to count down from the entered number to zero.
      - Inside the loop, print the current seconds remaining, subtract one from the counter, and use `time.sleep(1)` to wait one second between each print.
      - Example:
        ```python
        while seconds > 0:
            print(f"Time left: {seconds} seconds")
            seconds -= 1
            time.sleep(1)
        print("Countdown finished!")
        ```

   3. **Test the Timer**:
      - Run the timer with different countdown lengths to verify that it correctly counts down and ends.

---

This chapter introduces learners to essential loop structures in Python. The multiplication table exercise helps solidify the `for` loop, while the countdown project reinforces the `while` loop with a practical example. By the end, learners will have a firm understanding of using loops and controlling their flow with `break` and `continue` statements.

</div>

<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
</script>

<ChapterNavigation 
    prevHref="/learn/python/ch1" 
    nextHref="/learn/python/ch3"
  />