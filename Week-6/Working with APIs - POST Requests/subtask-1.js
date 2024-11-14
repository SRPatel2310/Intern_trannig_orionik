//  Making POST requests with the Fetch API.

fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  body: JSON.stringify({
    title: "this my first post",
    body: "POST METHOD",
    userId: 54,
  }),
  headers: {
    "Content-type": "application/json",
  },
})
  .then((userinfo) => {
    return userinfo.json();
  })
  .then((data) => {
    console.log(data);
  });
