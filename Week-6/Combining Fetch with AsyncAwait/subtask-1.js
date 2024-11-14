//  Using async/await with Fetch for cleaner code.

async function datafetch(url) {
  try {
    const Response = await fetch(url);

    let data = await Response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("data fetch error");
  }
}
datafetch("https://jsonplaceholder.typicode.com/posts");
