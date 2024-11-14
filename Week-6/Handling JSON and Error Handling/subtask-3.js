// Practice exercise - Fetch data from a public API, parse it, and handle errors appropriately.

try {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
} catch (errors) {
  console.log("this is ERROR ", errors);
}
