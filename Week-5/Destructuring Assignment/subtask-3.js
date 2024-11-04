// Using destructuring with function parameters.

const user = {
  name: "Patel Suresh",
  age: 25,
  city: "Kadi",
};

function userinfo({ name, age, city }) {
  console.log(`Name: ${name}`);
  console.log(`age: ${age}`);
  console.log(`city: ${city}`);
}
userinfo(user);


