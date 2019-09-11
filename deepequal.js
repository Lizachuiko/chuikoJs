// Code goes here

'use strict';

let a = {
  name: 'Misha',
  order: {
    price: 20
  },
};

let b = {
  name: 'Misha',
  order: {
    price: 20,
  }
};


// console.log(a === b);


// function deepEqual(a, b) {
//   let e = JSON.stringify(a) === JSON.stringify(b);
//   console.log('q',e)
//   return e
// }

// deepEqual(a, b);

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  if (obj1 === null || obj2 === null ) {
    return false;
  }

  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return false;
  }

  let keysObj1 = Object.keys(obj1);
  let keysObj2 = Object.keys(obj2);

  return keysObj1.every((key) => deepEqual(obj1[key], obj2[key]));
}
console.log(deepEqual(a,b));