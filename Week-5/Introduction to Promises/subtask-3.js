// Practice exercise - Create a simple Promise that resolves after a timeout and logs a message.

const Promis = new Promise((resolve, reject) => {
  setTimeout(() => {
    const persone = true;
    if (persone) {
      resolve("this is work on laptop..");
    } else {
      reject("this not work on laptop");
    }
  }, 2000);
});

Promis.then((Data) => {
  console.log("this work resolve..", Data);
}).catch((Data) => {
  console.log("this work catch..", Data);
});
