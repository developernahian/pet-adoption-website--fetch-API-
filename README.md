﻿# Pet Adoption Website


## Live Link: https://developernahian.github.io/pet-adoption-website-Fetch-API/


---
### Description:
This project is a pet adoption website where users can browse pets by category, view detailed information, and adopt them. Key features include displaying pets with details like breed, gender, price, and birthdate, sorting pets by price, and allowing users to like or adopt pets. The site is responsive, using Tailwind CSS for styling, and incorporates loading indicators for a smooth user experience.

---


### Technologies Used

- **HTML**: For structuring the web pages.
- **CSS (Tailwind CSS)**: For styling and responsive design.
- **JavaScript**: For functionality and interactivity.
- **API**: To fetch pet data and categories dynamically.



---

### Key features of the projec are:

- __Pet Categories & Filtering:__ <br>
Users can view pets by category (e.g., dogs, cats, birds) using dynamically generated buttons. This allows them to filter and browse pets based on their preferences.

- __Detailed Pet Information:__<br>
Each pet has a detailed view modal, showing information like breed, gender, birthdate, vaccination status, and price. Users can easily access all necessary details before deciding to adopt.

- __Pet Sorting by Price:__ <br>
A sorting feature allows users to sort pets by price in descending order, helping users prioritize their options based on their budget.

- __Like/Preference System:__ <br>
A like button feature allows users to mark pets they like. The liked pets are displayed in a separate section, helping users track their favorite pets. 

- __Adoption Countdown & Process:__ <br>
A unique adoption process includes a countdown timer. Once the countdown finishes, the pet is marked as "Adopted," and the adoption button is disabled, ensuring a dynamic user interaction.


---


### ES6 features used in this Project:

Here are some ES6 features used in your pet adoption project, along with brief descriptions of each:
- **Arrow Functions:**
    - Syntax: `const functionName = () => { ... }`
    - Arrow functions provide a more concise syntax for writing function expressions and lexically bind the `this` value, making them useful in callbacks.


- **Template Literals:**

    - Syntax: `string with ${variable}`
    - Template literals allow for multi-line strings and embedded expressions, making string concatenation easier and more readable. They are used extensively in the HTML generation of pet details and cards.


- **Destructuring Assignment:**

    - Syntax: `const { property1, property2 } = object;`
    - Destructuring allows for unpacking values from arrays or properties from objects into distinct variables, simplifying the code when accessing API response data.
    
    
    
- **Async/Await:**

    - Syntax: `const data = await fetch(url);`
    - Async/await syntax allows writing asynchronous code in a more synchronous manner, making it easier to read and maintain. It simplifies working with promises.
    
    
- **Promises:**

    - Syntax: `fetch(url).then(response => response.json())`
    - Promises represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They are used for handling asynchronous API calls to fetch pet and category data.
    
    
- **Let and Const:**

    - Syntax: `let variableName = value; and const constantName = value;`
    - let and const provide block-scoped variable declarations. const is used for variables that should not be reassigned, enhancing code clarity and safety.
    
    
---
    
    
