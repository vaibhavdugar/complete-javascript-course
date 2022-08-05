'use strict';
// Spread Operator(...) - Spread operator is used to take all the values out of the array arr and write them individually i.e. spraed the array

const arr = [7, 8, 9];
// Getting elements of arr manually
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// Getting elements of arr using spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr); // It will print the individual elements of the array

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

// In this newMenu array I want all the elements of menu array and a new element
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
