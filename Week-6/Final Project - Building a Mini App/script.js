// *****btn newquout******
const quoutBtn = document.querySelector("#Quote");
const copydata = document.getElementById("copy");
const QuoteDisplay = document.getElementById("copyp");
const authorname = document.getElementById("author");

async function random() {
  const data = await fetch("http://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);

      QuoteDisplay.innerHTML = result.content;
      authorname.innerHTML = result.author;
    });
}
quoutBtn.addEventListener("click", random);

// // // copy btnwork*****

function copyBtn() {
  const quoteText = QuoteDisplay.textContent; // Get the current quote text
  navigator.clipboard
    .writeText(quoteText)
    .then(() => {
      alert("Quote copied to clipboard!");
    })
    .catch((error) => {
      console.error("Error copying quote:", error);
      alert("Failed to copy quote.");
    });
}
copydata.addEventListener("click", copyBtn);
