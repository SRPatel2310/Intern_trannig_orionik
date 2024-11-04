// Spread operator (...) to clone arrays and objects.

// array spreat operator
let array1 = [1, 2, 3];
let array2 = [4, 5, 6, ...array1];
console.log(array2);

// object spreat operator

let object1 = {
  name: "suresh",
  age: 21,
};
let object2 = {
  ...object1,
  birth_date: 23_10_2003,
  birth_place: "lakshmanpura",
};
console.log(object2);
