// Creating dynamic content based on fetched data.

fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => {
    return data.json();
  })
  .then((userdata) => {
    console.log(userdata);
  });
