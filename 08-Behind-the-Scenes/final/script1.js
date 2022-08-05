'use strict';
// -----------------HOISTING AND TDZ--------------------

// Hoisting with variables
// console.log(me);
// console.log(job);
// console.log(birthYear);

var me = 'vaibhav';
let job = 'student';
const birthYear = 2002;

// Hoisting with functions
console.log(addDecl(2, 3));
// console.log(addExpr(3, 4));
console.log(addArrow); // It will give undefined because we are using the variable before declaring it with var

// function declaration
function addDecl(a, b) {
  return a + b;
}

// function expression
const addExpr = function (a, b) {
  return a + b;
};

// Arrow Function
var addArrow = (a, b) => a + b; // Not a function anymore. treated as a simple variable

// ----------------------------------------------------

// Example
if (!numProducts) deleteShoppingCart(); // since we are calling numProducts before declaring it with var it is undefined which is a falsy value the unction will be called. It is a bug because on actually numProducts is not a flasy value.

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

// ----------------------------------------------------

var x = 1;
let y = 2;
const z = 3;

// var vaiable is a property of window object but let and const are not.

// window is a global object of JS browser
console.log(x === window.x); // true
console.log(y === window.y); // flase
console.log(z === window.z); // false
