---
title: Introduction to Object-Oriented Programming (OOP)
---
**Chapter 11: Introduction to Object-Oriented Programming (OOP)**

### Topics

#### 11.1 Classes, Objects, and Methods
   - **Classes**:
      - Define a class as a blueprint for creating objects, encapsulating data (attributes) and functions (methods) related to that data.
      - **Syntax**:
        ```python
        class ClassName:
            # Class definition
        ```
   - **Objects**:
      - Explain that an object is an instance of a class with specific attribute values.
      - **Creating an Object**:
        ```python
        car = Car("Toyota", "Corolla", 2020)
        ```
   - **Methods**:
      - Define methods as functions within a class that operate on objects.
      - Explain how to define methods with `self` as the first parameter, representing the instance.
      - **Example**:
        ```python
        class Car:
            def start(self):
                print("Car is starting.")
        ```

#### 11.2 Constructors, Inheritance, and Encapsulation
   - **Constructors (`__init__` Method)**:
      - Introduce the constructor (`__init__` method) to initialize object attributes when an object is created.
      - **Example**:
        ```python
        class Car:
            def __init__(self, make, model, year):
                self.make = make
                self.model = model
                self.year = year
        ```
   - **Inheritance**:
      - Explain inheritance as a mechanism to create a new class from an existing class, allowing the new class to inherit methods and attributes.
      - **Example**:
        ```python
        class ElectricCar(Car):
            def __init__(self, make, model, year, battery_size):
                super().__init__(make, model, year)
                self.battery_size = battery_size
        ```
   - **Encapsulation**:
      - Define encapsulation as the practice of keeping data and methods private to control access.
      - Explain the use of private attributes with a single underscore (`_attribute`) or double underscores (`__attribute`) for name mangling.
      - **Example**:
        ```python
        class Car:
            def __init__(self, make, model, year):
                self._make = make  # protected attribute
        ```

---

### Workshop Exercise

#### Create a Class `Car` with Attributes and Display Details

- **Objective**: Create a `Car` class with attributes for make, model, and year. Write a method to display these details.
- **Instructions**:
   1. **Define the `Car` Class**:
      - Create a Python file (e.g., `car.py`).
      - Define the `Car` class with `make`, `model`, and `year` attributes.
      - Example:
        ```python
        class Car:
            def __init__(self, make, model, year):
                self.make = make
                self.model = model
                self.year = year
        ```

   2. **Define a Method to Display Details**:
      - Create a `display_info` method to print the car’s details.
      - Example:
        ```python
            def display_info(self):
                print(f"Car: {self.year} {self.make} {self.model}")
        ```

   3. **Create and Test an Object**:
      - Create an instance of the `Car` class and call `display_info` to display its details.
      - Example:
        ```python
        car = Car("Toyota", "Corolla", 2020)
        car.display_info()  # Outputs: Car: 2020 Toyota Corolla
        ```

---

### Chapter Project

**Project: Build a "Library System"**

- **Description**: The Library System will allow users to borrow, return, and view available books. Each book will have a title, author, and status (available or borrowed).

- **Objective**: Use classes, objects, and methods to build a simple library system, implementing concepts like constructors, encapsulation, and inheritance.

- **Instructions**:
   1. **Define the `Book` Class**:
      - Create a Python file (e.g., `library_system.py`).
      - Define the `Book` class with attributes for `title`, `author`, and `is_borrowed`.
      - Include a method to display book details and a method to check its status.
      - Example:
        ```python
        class Book:
            def __init__(self, title, author):
                self.title = title
                self.author = author
                self.is_borrowed = False

            def display_info(self):
                status = "Available" if not self.is_borrowed else "Borrowed"
                print(f"Title: {self.title}, Author: {self.author}, Status: {status}")
        ```

   2. **Define the `Library` Class**:
      - Create a `Library` class to manage a collection of `Book` objects.
      - Add methods to:
         - Add a book.
         - Borrow a book.
         - Return a book.
         - Display all available books.
      - Example:
        ```python
        class Library:
            def __init__(self):
                self.books = []

            def add_book(self, book):
                self.books.append(book)
                print(f"Added book: {book.title}")

            def borrow_book(self, title):
                for book in self.books:
                    if book.title == title and not book.is_borrowed:
                        book.is_borrowed = True
                        print(f"You have borrowed '{title}'")
                        return
                print(f"Sorry, '{title}' is not available.")

            def return_book(self, title):
                for book in self.books:
                    if book.title == title and book.is_borrowed:
                        book.is_borrowed = False
                        print(f"You have returned '{title}'")
                        return
                print(f"'{title}' was not borrowed from this library.")

            def display_available_books(self):
                print("Available Books:")
                for book in self.books:
                    if not book.is_borrowed:
                        book.display_info()
        ```

   3. **Test the Library System**:
      - Create an instance of the `Library` class and add books to it.
      - Test borrowing, returning, and displaying available books.
      - Example:
        ```python
        library = Library()
        
        book1 = Book("To Kill a Mockingbird", "Harper Lee")
        book2 = Book("1984", "George Orwell")
        
        library.add_book(book1)
        library.add_book(book2)
        
        library.display_available_books()
        
        library.borrow_book("1984")
        library.display_available_books()
        
        library.return_book("1984")
        library.display_available_books()
        ```

---

### Summary

This chapter introduces learners to the basics of Object-Oriented Programming in Python, covering essential OOP concepts like classes, objects, methods, constructors, inheritance, and encapsulation. The workshop exercise familiarizes learners with creating classes and instances, while the Library System project demonstrates a practical application of OOP principles, showcasing how to organize and manage complex data with objects.

</div>

<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
</script>

<ChapterNavigation 
    prevHref="/learn/python/ch10" 
    nextHref="/learn/python/ch12"
  />