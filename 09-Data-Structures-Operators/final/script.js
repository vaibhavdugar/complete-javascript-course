'use strict';
// Destructuring arrays

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// With destructuring we can declare all the three variables at the same time
const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories; // To skip the 1st index of the array, leave an empty space in between
console.log(main, secondary);

// To switch the main and secondary category
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// To switch using destructuring
[main, , secondary] = [secondary, , main];
console.log(main, secondary);

// Destructuring the array to receive 2 return values from the function - For this store those values in an array and return the array then destructure it
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested array
const nested = [2, 4, [5, 6]];
const [firstEl, , array] = nested;
const [first, second] = array;
console.log(firstEl, first, second); // Output: 2 5 6

// Nested destructuring
// [] is the destructure. For nested array we can have nested destructure
const [i, , [j, k]] = nested;
console.log(i, j, k); // Output: 2 5 6

// Deafult values
let [p, q, r] = [2, 3];
console.log(p, q, r); // 2, 3, undefined

[p = 1, q = 1, r = 1] = [2, 3];
console.log(p, q, r); // 2, 3, 1
