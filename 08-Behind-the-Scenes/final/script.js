'use strict';
// --------------------SCOPING--------------------
// const myName = 'Vaibhav';
// function first() {
//   const age = 30;

//   if (age >= 30) {
//     const decade = 3;
//     var millenial = true;
//   }

//   function second() {
//     const job = 'teacher';

//     console.log(`${myName} is a ${age} year old ${job}`);
//   }
//   second();
// }
// first();

// _______________________________________________________

// const a = 'Vaibhav';
// first();

// function first() {
//   const b = 'Hello';
//   second();
//   function second() {
//     const c = 'Hi';
//     third();
//   }
// }

// function third() {
//   const d = 'Hey';
//   console.log(d + c + b + a);
// }

// _______________________________________________________

function calcAge(birthyear) {
  const age = 2022 - birthyear;

  function printAge() {
    let output = `${firstName} are ${age}, born in ${birthyear}`; // The parameter of the function works just like a normal variable.
    console.log(output);

    if (birthyear >= 1981 && birthyear <= 1996) {
      // Creating  variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Redifining outer scope's variable
      output = 'NEW OUTPUT!'; // This is not block scoped

      const str = `Oh, and you are a millenial, ${firstName}`; // Here, this string will use Steven as firstName instead of Vaibhav because first it will look in its own scope but if the variable is not found there, then it will do variable lookup.
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(output);
    // add(2, 3);  Since we cannot call add() function outside the block, it proves that function are block scoped (But only in strict mode)
  }
  printAge();

  return age;
}

const firstName = 'Vaibhav'; // firstName variable won't be found if we initialize it after calling the function
calcAge(1992);
// printAge();  // This function is not accessible outside the calcAge() function because function is also a variable which cannot be accessed from global scope because it is defined inside a function.
