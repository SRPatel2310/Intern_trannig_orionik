// Parsing JSON responses using .json().

fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population").then(
  (data) => {
    data.json();
    console.log(data);
  }
);
