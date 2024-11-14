// Make a simple GET request to a public API and display data in the console.

fetch("https://fakestoreapi.com/products", {
  method: "GET",
})
  .then((res) => res.json("this success"))
  .then((json) => console.log(json))
  .catch((res) => console.log("Error now!!!!!!"));


