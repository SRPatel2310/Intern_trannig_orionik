//Practice exercise - Use the spread operator to combine multiple arrays into one and the rest parameter to handle variable arguments in a function.

let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];

let array3 = [...array1, ...array2];
console.log(array3);

//rest parameter

function sum(...args) {
  let result = 0;

  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  console.log(result);
}
sum(35,40,5-2);

