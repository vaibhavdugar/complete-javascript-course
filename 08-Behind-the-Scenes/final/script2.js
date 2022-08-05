'use strict';

console.log(this); // point towards window object

// Simple function call
function calcAge(birthyear) {
  return 2022 - birthyear;
  console.log(this); // undefined because we are using strict mode
}
calcAge(2002);

// Arrow function
const calcAgeArrow = birthyear => {
  return 2022 - birthyear;
  console.log(this); // point towards window object because it is 'lexical this' and it belongs to the parent scope of arrow function which is a global scope where 'this' = window object
};
calcAgeArrow(1995);

// Method
const vaibhavObj = {
  firstName: 'Vaibhav',
  year: 1990,
  calcAge: function () {
    console.log(this); // this = vaibhavObj (the object which is calling the calcAge method). vaibhavObj is also the owner of the method
    console.log(2022 - this.year);
  },
};
vaibhavObj.calcAge();

// Example
const matilda = {
  year: 2017,
};

matilda.calcAge = vaibhavObj.calcAge; // copied the calcAge method from vaibhavObj. Also called as method borrowing
matilda.calcAge(); // Now 'this' keyword is pointing towards matilda because matila is the object which called the calcAge function

const f = vaibhavObj.calcAge; // f is a variable where we have copied the method calcAge. therefore calcAge is now a function. And 'this' is undefined

f(); // regular function call
