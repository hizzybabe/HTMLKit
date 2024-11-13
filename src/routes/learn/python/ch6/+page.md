---
title: Functions and Modules
---

**Chapter 6: Working with Strings**

### Topics

#### 6.1 String Operations, Formatting, and Methods
   - **String Operations**:
      - **Explanation**: Introduce strings as sequences of characters.
      - **Basic Operations**: Show basic operations, such as concatenation (`+`), repetition (`*`), and membership (`in`).
      - **Examples**:
        ```python
        name = "Alice"
        greeting = "Hello, " + name
        print(greeting)  # Outputs: Hello, Alice
        ```
   - **String Methods**:
      - Introduce common string methods, such as `.lower()`, `.upper()`, `.strip()`, `.replace()`, `.find()`, and `.count()`.
      - **Examples**:
        ```python
        text = " Hello, World! "
        print(text.strip())       # Outputs: Hello, World!
        print(text.lower())       # Outputs: hello, world!
        print(text.replace("World", "Python"))  # Outputs: Hello, Python!
        ```

   - **String Formatting**:
      - **f-Strings**: Explain f-strings for inserting variables within strings (available in Python 3.6+).
      - **`.format()` Method**: Introduce the `.format()` method for more flexibility in formatting strings.
      - **Examples**:
        ```python
        age = 25
        name = "Alice"
        print(f"{name} is {age} years old.")  # Outputs: Alice is 25 years old.
        print("{} is {} years old.".format(name, age))  # Outputs: Alice is 25 years old.
        ```

#### 6.2 String Slicing and Concatenation
   - **String Slicing**:
      - Explain how to access substrings using indexing and slicing syntax: `[start:end:step]`.
      - **Examples**:
        ```python
        word = "Hello"
        print(word[1:4])   # Outputs: ell
        print(word[::-1])  # Outputs: olleH (reversed)
        ```

   - **String Concatenation**:
      - Demonstrate string concatenation using the `+` operator to combine strings.
      - **Example**:
        ```python
        first_name = "John"
        last_name = "Doe"
        full_name = first_name + " " + last_name
        print(full_name)  # Outputs: John Doe
        ```

---

<h2 class="workshop-title">Workshop Exercise</h2>
<div class="workshop-container">

#### Write a Program that Counts Vowels and Consonants in a String

- **Objective**: Create a program that counts the number of vowels and consonants in a given string.
- **Instructions**:
   1. **Get User Input**:
      - Create a Python file (e.g., `count_vowels_consonants.py`).
      - Use `input()` to ask the user for a string.
      - Example:
        ```python
        text = input("Enter a string: ").lower()
        ```

   2. **Count Vowels and Consonants**:
      - Define two variables to count vowels and consonants.
      - Use a loop to iterate through each character in the string, checking if it’s a vowel or consonant.
      - Example:
        ```python
        vowels = "aeiou"
        vowel_count = 0
        consonant_count = 0

        for char in text:
            if char.isalpha():
                if char in vowels:
                    vowel_count += 1
                else:
                    consonant_count += 1
        ```

   3. **Display the Results**:
      - Print the counts of vowels and consonants.
      - Example:
        ```python
        print(f"Vowels: {vowel_count}")
        print(f"Consonants: {consonant_count}")
        ```

</div>

<h2 class="workshop-title">Chapter Project</h2>
<div class="workshop-container">
**Project: Develop a "Password Generator"**

- **Description**: The Password Generator will create random passwords based on specified criteria, such as length and the inclusion of symbols, uppercase letters, and digits.

- **Objective**: Use string manipulation and the `random` module to generate secure, customizable passwords.

- **Instructions**:
   1. **Set Up the File**:
      - Create a Python file (e.g., `password_generator.py`).
      - Import the `random` module.

   2. **Define Password Criteria**:
      - Ask the user for password criteria, including the desired length and whether to include uppercase letters, digits, and symbols.
      - Example:
        ```python
        length = int(input("Enter password length: "))
        include_upper = input("Include uppercase letters? (y/n): ").lower() == "y"
        include_digits = input("Include digits? (y/n): ").lower() == "y"
        include_symbols = input("Include symbols? (y/n): ").lower() == "y"
        ```

   3. **Create the Character Pool**:
      - Define character sets for lowercase letters, uppercase letters, digits, and symbols.
      - Use the user's choices to create a pool of characters from which the password will be generated.
      - Example:
        ```python
        import random

        lower = "abcdefghijklmnopqrstuvwxyz"
        upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        digits = "0123456789"
        symbols = "!@#$%^&*()-_=+[]{};:,.<>?/"

        character_pool = lower
        if include_upper:
            character_pool += upper
        if include_digits:
            character_pool += digits
        if include_symbols:
            character_pool += symbols
        ```

   4. **Generate the Password**:
      - Use `random.choice()` in a loop to randomly select characters from the pool until the password reaches the desired length.
      - Example:
        ```python
        password = "".join(random.choice(character_pool) for _ in range(length))
        ```

   5. **Display the Generated Password**:
      - Print the generated password for the user.
      - Example:
        ```python
        print(f"Generated password: {password}")
        ```

   6. **Test the Password Generator**:
      - Run the program with different criteria and verify that the generated passwords meet the specified requirements.

---

### Summary

This chapter provides a solid introduction to string manipulation in Python, covering essential string operations, formatting, slicing, and concatenation. The workshop exercise reinforces fundamental string techniques, while the Password Generator project offers practical experience with string and randomization, resulting in a secure and customizable password creation tool.

</div>

<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
</script>

<ChapterNavigation 
    prevHref="/learn/python/ch5" 
    nextHref="/learn/python/ch7"
  />