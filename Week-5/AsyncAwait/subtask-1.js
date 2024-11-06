// Converting Promises to async/await syntax.
// Converting Promises to async/await syntax.

const prob1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let roll_no = [1, 2, 3, 4, 5];
    resolve(roll_no);
  }, 2000);
});

const getbiodata = (indexdata) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        let biodata = {
          name: "ravi",
          age: 21,
        };
        resolve(
          `my name is ${biodata.name} and I am ${biodata.age} years old.`
        );
      },
      3000,
      indexdata
    );
  });
};

prob1
  .then((roll_no) => {
    console.log(roll_no);
    return getbiodata(roll_no[1]);
  })
  .then((kuchbhi) => {
    console.log(kuchbhi);
  })
  .catch((Error) => {
    console.log(Error);
  });

async function getdata() {}

getdata();
