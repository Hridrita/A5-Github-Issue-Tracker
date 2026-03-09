1. Var is the old way to declare variables. It is function-scoped and can be redeclared and updated. Because of this, it can sometimes create problems in larger programs.
   let is block-scoped, which means it only works inside the block where it is declared.
   const is also block-scoped like let, but its value cannot be reassigned after it is created. It is usually used for values that should not change.

2. The spread operator (...) is used to expand elements of an array or properties of an object.
   For example, 
         const nums = [1,2,3] ;
         const newNums = [...nums,4,5] ;

3. map() creates a new array by applying a function to each element of the original array.
   filter() also creates a new array, but it only includes the elements that meet a specific condition.
   forEach() runs a function for every element in the array, but it does not return a new array. It is mainly used when i want to perform an action, such as printing values from an array.

4. An arrow function is a shorter way to write a function in JavaScript using the => symbol.
   It makes the code cleaner and easier to read, especially for small functions.
   Example: const sum = (a, b) => a + b;

5. Template literals are a way to create strings in JavaScript using backticks instead of quotation.They allow to insert variables or expressions inside a string using ${ }.
   Example:
          const name = "Arif";
          `Hello ${name}`












   API Endpoints:
All Issues:
https://phi-lab-server.vercel.app/api/v1/lab/issues
Single Issue:
https://phi-lab-server.vercel.app/api/v1/lab/issue/{id}

Example: https://phi-lab-server.vercel.app/api/v1/lab/issue/33

Search Issue: https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q={searchText}
Example: https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=notifications
📝 Main Requirements
🎨 Design Part
Login Page
Created a login page containing a logo, title, and sub-title
Below that, there has 2 inputs, a sign-in button, and a demo credential to sign in. Followed the Figma for this page
Styled as per Figma
Main Page:
Navbar:
Navbar with website logo/name on the left
Search input and button on the right
Tab Section like Figma:
3 tab ( All, Open, Closed) at the top of this section.(All, Open, Closed)

Below the tab, there has an icon, the issue count, some text on the left, and an open and closed marker on the right

Responsiveness: The website is responsive for mobile devices. 

⚙️ Functionalities
In login page, there has default admin credentials (username, password). You need to sign in using these credentials.

Loaded all issues and display as per Figma

On clicking on an open or closed tab, it will load the issues data of the related tab and show it in a display-like card in a 4-column layout like Figma. By default, it will show all data

Each card shows:

Title
Description
Status
Author
Priority
Label
CreatedAt
Clicking on an issue card will open a modal and show all the information about that Issue.


Showed the card Top border based on their category(open, closed), open card will have Green Boder, closed card will have a purple border on top.

Loading spinner on data load

Showed active button on changing category names

Implemented Search Functionality and 8 meaningful github commit.


🛠️ Technology Stack
HTML
CSS (Vanilla/Tailwind/DaisyUI)
JavaScript (Vanilla)

   
