'use strict';

let age = 30;
let oldage = age;
age = 31;
console.log(age); // 31
console.log(oldage); // 30

const me = {
  name: 'Vaibhav',
  age: '30',
};

const friend = me;
me.age = 27;
console.log('Friend:', friend.age); // 27
console.log('Me:', `${me.age}`); // 27

// we copied the me object to friend object and changed the age of friend object. But the age of me object also changed. Why? Let's
