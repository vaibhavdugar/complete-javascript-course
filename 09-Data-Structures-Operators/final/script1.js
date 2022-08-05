'use script';
// Destructuring Objects

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // When we pass many arguments in the function it becomes difficult to keep the track of their position while calling them. Therefore we made an object with those arguments and passed it in the function.
  // But there are values as arguments and not objects. So we destructured the object there only and the properties of objects are seperate values which we can use like normal parameters.
  orderDelivery: function ({ time, address, mainIndex, starterIndex }) {
    console.log(
      `Order confirmed! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Mansarovar, Sector 9, Jaipur',
  mainIndex: 2,
  starterIndex: 3,
});

// We use {} to destructure the objects. The variable names will be same as the property names in the object which we want to destructure. And the order in which we destructure it doesn't matter. We can retrive any property at any time.

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// We can change the variable name but we'll have to mention the name of the property we are changing
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Setting the default value
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // menu property does not exist in the object but still we have given it a default value so that it so that it does not hive undefined

// Mutating variable
let a = 111;
let b = 999;
const obj = {
  a: 23,
  b: 7,
  c: 14,
};
// Since a and b already stores the values 111 and 999, we cannot destructure then into seperate values like
// const {a, b} = obj;
// Instead we have to reassign the values to a and b

// {a , b} = obj; // We cannot reassign the values like this because when we start the line with {}, JS assumes it to be a codeblock and we get an error 'unexpected token =' because we cannot assign anything to a codeblock.

// So to avoid this error use ()
({ a, b } = obj);
console.log(a, b);

// Nested Objects
// const { fri } = openingHours;
// const { open, close } = fri;
// console.log(fri, open, close);

// Another way which is easy/preferable
const {
  thu: { open, close },
} = openingHours;
console.log(open, close);
