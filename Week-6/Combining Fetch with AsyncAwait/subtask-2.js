//  Handling multiple asynchronous requests.

async function multidata() {
  try {
    const data = {
      response: await fetch("https://jsonplaceholder.typicode.com/posts"),
      response1: await fetch("https://jsonplaceholder.typicode.com/photos"),
    };

    const data2 = {
      muldata: await data.response.json(),
      muldata2: await data.response1.json(),
    };

    // console.log(data2.muldata[1].title);

    console.log(data2);

    return data2;
  } catch (error) {
    console.log("this my code in error ", error);
  }
}
multidata();
