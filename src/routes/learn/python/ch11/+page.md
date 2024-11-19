---
title: Introduction to Object-Oriented Programming (OOP)
---
**Chapter 11: Introduction to Object-Oriented Programming (OOP)**

### Topics

### 11.1 Classes, Objects, and Methods

---

#### **Classes**

**What is a Class?**
- A **class** is a blueprint for creating objects. It encapsulates data (attributes) and functions (methods) related to that data.
- It allows you to define the structure and behavior of the objects you want to create.

**Syntax**:
```python
class ClassName:
    # Class definition (attributes and methods)
```

**Example: Defining a Simple Class**:
```python
class Car:
    # A method inside the class
    def start(self):
        print("Car is starting.")
```

---

#### **Objects**

**What is an Object?**
- An **object** is an instance of a class. It represents a specific realization of the blueprint defined by the class.
- Each object has its own unique data (attribute values).

**Creating an Object**:
- Use the class name followed by parentheses to create an object.
```python
car = Car()  # Create an instance of the Car class
car.start()  # Call the start method
```
**Output**:
```
Car is starting.
```

---

#### **Attributes**

**What Are Attributes?**
- Attributes are variables that belong to an object or class. They hold data about the object.

**Defining and Accessing Attributes**:
- Define attributes in a special method called `__init__`, which is the class constructor.
- Access attributes using the dot (`.`) operator.

**Example**:
```python
class Car:
    def __init__(self, brand, model, year):
        self.brand = brand  # Attribute: brand
        self.model = model  # Attribute: model
        self.year = year    # Attribute: year

    def display_info(self):
        print(f"{self.year} {self.brand} {self.model}")

# Creating an object
car = Car("Toyota", "Corolla", 2020)
car.display_info()  # Outputs: 2020 Toyota Corolla
```

---

#### **Methods**

**What Are Methods?**
- Methods are functions defined inside a class that operate on objects.
- The first parameter of a method is always `self`, which refers to the specific instance of the class.

**Defining Methods**:
- Use the same syntax as regular functions, but include `self` as the first parameter.

**Example: A Method to Start a Car**:
```python
class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

    def start(self):
        print(f"{self.brand} {self.model} is starting.")

car = Car("Honda", "Civic")
car.start()  # Outputs: Honda Civic is starting.
```

---

#### **Combining Attributes and Methods**

Attributes and methods work together to define the behavior of objects.

**Example**:
```python
class Car:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

    def display_info(self):
        print(f"{self.year} {self.brand} {self.model}")

    def start(self):
        print(f"{self.brand} {self.model} is starting.")

# Creating an object
car = Car("Ford", "Mustang", 1967)
car.display_info()  # Outputs: 1967 Ford Mustang
car.start()         # Outputs: Ford Mustang is starting.
```

---

#### **Key Points**

1. **Classes**:
   - Define the structure and behavior of objects.
   - Example:
     ```python
     class Person:
         def greet(self):
             print("Hello!")
     ```

2. **Objects**:
   - Instances of a class.
   - Example:
     ```python
     person = Person()
     person.greet()  # Outputs: Hello!
     ```

3. **Attributes**:
   - Data associated with an object.
   - Example:
     ```python
     class Car:
         def __init__(self, brand):
             self.brand = brand
     car = Car("Tesla")
     print(car.brand)  # Outputs: Tesla
     ```

4. **Methods**:
   - Functions that operate on objects.
   - Example:
     ```python
     class Car:
         def start(self):
             print("Car is starting.")
     car = Car()
     car.start()  # Outputs: Car is starting.
     ```

---

#### **Summary**

1. **Class**: A blueprint for creating objects.
   ```python
   class Car:
       def __init__(self, brand, model):
           self.brand = brand
           self.model = model
   ```

2. **Object**: An instance of a class.
   ```python
   car = Car("Toyota", "Corolla")
   ```

3. **Attributes**: Variables inside an object that hold data.
   ```python
   car.brand  # Access the brand attribute
   ```

4. **Methods**: Functions that define the behavior of an object.
   ```python
   def start(self):
       print("Car is starting.")
   ```

By mastering classes, objects, and methods, you can effectively use object-oriented programming to build modular and reusable code.

### 11.2 Constructors, Inheritance, and Encapsulation

---

#### **Constructors (`__init__` Method)**

**What is a Constructor?**
- The **constructor** is a special method in Python named `__init__`.
- It is automatically called when a new object of the class is created.
- The constructor is used to initialize the object’s attributes.

---

**Defining a Constructor**:
- The constructor takes `self` as its first parameter, followed by other parameters to initialize attributes.

**Example**:
```python
class Car:
    def __init__(self, make, model, year):
        self.make = make  # Public attribute
        self.model = model
        self.year = year

    def display_info(self):
        print(f"{self.year} {self.make} {self.model}")

# Creating an object with attributes initialized
car = Car("Toyota", "Corolla", 2020)
car.display_info()  # Outputs: 2020 Toyota Corolla
```

---

#### **Inheritance**

**What is Inheritance?**
- Inheritance allows you to create a new class (**child class**) from an existing class (**parent class**).
- The child class inherits the attributes and methods of the parent class.
- You can extend or override the behavior of the parent class in the child class.

---

**Syntax**:
```python
class ParentClass:
    # Attributes and methods of the parent class

class ChildClass(ParentClass):
    # Attributes and methods of the child class
```

**Example**: Creating a Child Class
```python
class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

    def display_info(self):
        print(f"{self.year} {self.make} {self.model}")

# Child class inheriting from Car
class ElectricCar(Car):
    def __init__(self, make, model, year, battery_size):
        super().__init__(make, model, year)  # Call the constructor of the parent class
        self.battery_size = battery_size  # New attribute for ElectricCar

    def display_battery(self):
        print(f"Battery size: {self.battery_size} kWh")

# Creating an object of the child class
electric_car = ElectricCar("Tesla", "Model S", 2023, 100)
electric_car.display_info()  # Outputs: 2023 Tesla Model S
electric_car.display_battery()  # Outputs: Battery size: 100 kWh
```

**Key Points**:
- Use `super().__init__()` to call the parent class’s constructor in the child class.
- The child class can have additional attributes and methods.

---

#### **Encapsulation**

**What is Encapsulation?**
- Encapsulation is the practice of restricting direct access to an object’s data and methods, controlling their visibility and behavior.
- Python uses naming conventions to implement encapsulation.

---

**Levels of Attribute Visibility**:
1. **Public Attributes**:
   - Accessible from anywhere.
   - No underscores.
   ```python
   self.make = make
   ```

2. **Protected Attributes**:
   - Indicated with a single underscore (`_attribute`).
   - Treated as a convention for internal use but still accessible.
   ```python
   self._make = make
   ```

3. **Private Attributes**:
   - Indicated with double underscores (`__attribute`).
   - Name mangling makes them inaccessible directly from outside the class.
   ```python
   self.__make = make
   ```

---

**Examples of Encapsulation**:

1. **Protected Attributes**:
   ```python
   class Car:
       def __init__(self, make, model):
           self._make = make  # Protected attribute
           self._model = model

       def display_info(self):
           print(f"{self._make} {self._model}")

   car = Car("Toyota", "Camry")
   car.display_info()  # Outputs: Toyota Camry
   print(car._make)  # Outputs: Toyota (accessible but not recommended)
   ```

2. **Private Attributes (Name Mangling)**:
   ```python
   class Car:
       def __init__(self, make, model):
           self.__make = make  # Private attribute

       def display_info(self):
           print(f"{self.__make} {self.model}")

   car = Car("Honda", "Accord")
   # print(car.__make)  # AttributeError: 'Car' object has no attribute '__make'
   print(car._Car__make)  # Outputs: Honda (name mangling)
   ```

3. **Getters and Setters**:
   - Use methods to access and modify private attributes.
   ```python
   class Car:
       def __init__(self, make, model):
           self.__make = make  # Private attribute
           self.__model = model

       def get_make(self):
           return self.__make

       def set_make(self, make):
           self.__make = make

   car = Car("Toyota", "Corolla")
   print(car.get_make())  # Outputs: Toyota
   car.set_make("Honda")
   print(car.get_make())  # Outputs: Honda
   ```

---

#### **Summary**

1. **Constructors (`__init__` Method)**:
   - Initialize object attributes when an object is created.
   - Example:
     ```python
     class Car:
         def __init__(self, make, model, year):
             self.make = make
             self.model = model
             self.year = year
     car = Car("Toyota", "Camry", 2021)
     ```

2. **Inheritance**:
   - Create a child class that inherits attributes and methods from a parent class.
   - Example:
     ```python
     class ElectricCar(Car):
         def __init__(self, make, model, year, battery_size):
             super().__init__(make, model, year)
             self.battery_size = battery_size
     ```

3. **Encapsulation**:
   - Control access to attributes using public, protected, or private visibility.
   - Example:
     ```python
     class Car:
         def __init__(self, make):
             self.__make = make  # Private attribute
     ```

By combining constructors, inheritance, and encapsulation, you can build robust, modular, and secure object-oriented programs in Python.

---

<h2 class="workshop-title">Workshop Exercise</h2>
<div class="workshop-container">

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

</div>

<h2 class="workshop-title">Chapter Project</h2>
<div class="workshop-container">

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