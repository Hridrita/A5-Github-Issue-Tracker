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

   
