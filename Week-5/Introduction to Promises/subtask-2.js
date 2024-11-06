// Creating and using Promises (resolve, reject, then, catch).

let bookflight = new Promise((resolve, reject) => {
  const isboarded = true;
  if (isboarded) {
    resolve("you are not in the flight");
  } else {
    reject("your flight has cancelled.");
  }
});

bookflight
  .then((Data) => {
    console.log("wohoo", Data);
  })

  .catch((Data) => {
    console.log("oh nooooo ", Data);
  })
  .finally((Data) => {
    console.log("this is always execute..");
  });
