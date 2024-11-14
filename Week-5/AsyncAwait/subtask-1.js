// Converting Promises to async/await syntax.

const student = new Promise((resolve, reject) => {
  setTimeout(() => {
    let array = [2, 3, 4, 5, 6];
    resolve("this is array of rolnumber");
  }, 2000);
});

console.log();
console.log(student);