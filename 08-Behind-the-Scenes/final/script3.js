'use strict';
// ----------REGULAR FUNCTIONS VS ARROW FUNCTIONS-----------

// var firstName = 'Vaibhav';   // Variables declared with var create properties in the window object, remember? So if we had created this firstName variable in global scope we would have got 'Hey Vaibhav' in the console instead of undefined because it is now a property in window object.

// Using var to declare variables is also a bad practice

const vaibhavObj = {
  firstName: 'Vaibhav',
  year: 1990,
  calcAge: function () {
    console.log(2022 - this.year);

    // Solution 1 (of 'this' being undefined)
    const self = this;
    // Solution 2 // Use an arrow function so 'this' now belongs to its parent scope and it can access year property. This is a very good use of arrow function
    const isMillenial = function () {
      console.log(this);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial(); // Simple function call, so 'this' = undefined. Therefore we copied the value of this in a variable called self outside this function
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

vaibhavObj.calcAge();
vaibhavObj.greet(); // Parent scope of greet is global scope. And in global scope, 'this' = window object. But in window object firstName property is not found, therefore it shows undefined.

// Whenever a property is not found in an object it shows undefined instead of an error

// HEMCE IT IS CONCLUDED THAT WE SHOULD NEVER USE AN ARROW FUNCTION AS A METHOD. IT CAN GIVE BUGS IF WE USE 'this' KEYWORD IN IT.

/* ------------------------------------------------- */

//------ arguments keyword-------
// 'arguemnts' keyword exists only in the regular function
const addExpr = function (a, b) {
  console.log(arguments); // It is an array containing all the arguments
  return a + b;
};
console.log(addExpr(2, 3, 4, 9)); // We can actually pass more arguments than defined
