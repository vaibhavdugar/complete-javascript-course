'use script';

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log(jessica.lastName, marriedJessica.lastName);
// marriedJessica = {};  // I cannot do this because if I change the complete object then the value in stack will also be changed which is not possible since it is const

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// This will copy the jessica2 object in the empty object but oject.assign creates a shallow copy
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log(jessica2.lastName, jessicaCopy.lastName);
console.log(jessica2, jessicaCopy);

// family[0] will be changed in both jessicaCopy and jessica2 but we wanted it to be changed only in jessicaCopy. This happens because object.assign creates only a shallow copy of only those values which are not objects inside the objects. Hence thw copy of array is not created.
jessicaCopy.family[0] = 'vaibhav';
console.log(jessica2, jessicaCopy);
