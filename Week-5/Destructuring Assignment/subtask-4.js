//Practice exercise - Use destructuring to extract values from an object and an array.

const student = {
  name: "patel_suresh",
  age: 21,
  student_info: ["student_id=201", "rollno:21"],
};

const {
  name,
  age,
  student_info: [id, rollno],
} = student;

console.log(name,age,id, rollno);
