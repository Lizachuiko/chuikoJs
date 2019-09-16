let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];


// users.sort(byField('age'));

function byField(field) {

  return function(a, b) {

    return a[field] > b[field] ? 1 : -1;
  }
}

console.log(users.sort(byField('name')))