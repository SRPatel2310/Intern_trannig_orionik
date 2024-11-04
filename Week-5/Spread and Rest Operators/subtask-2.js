//  Combining arrays and objects using the spread operator.

let array1 = [11, 22, 33, 44];
let array2 = [...array1, 55, 66, 77, 88];
console.log(array2);

// objects

let object1 = {
  student_id: 201,
  student_name: "suresh",
};

let object2 = {
  ...object1,
  student_grad: "A",
  student_pass_fail: "Pass",
};
console.log(object2);
