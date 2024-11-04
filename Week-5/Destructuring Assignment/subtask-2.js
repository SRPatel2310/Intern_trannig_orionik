//  Object destructuring basics.

const user = {
  name: "Suresh_Patel",
  age: 21,
  contact_No: 1234567890,
};

const { name, age, contact_No } = user;

console.log(name, age,contact_No);

console.log(user);  //user define key and value all 