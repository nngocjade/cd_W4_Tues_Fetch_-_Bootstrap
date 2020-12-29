let result = document.getElementById("result");
let anyjokeBtn = document.getElementById("anyjokeBtn");

const getJoke = async () => {
  const url =
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  if (data.type === "single") {
    result.innerHTML = data.joke;
    result.style.color = "green";
  }
  if (data.type === "twopart") {
    result.innerHTML = `<p class="two-part"><strong>Question:</strong> ${data.setup}</p> <p class="two-part"><strong>Answer:</strong> ${data.delivery}</p>`;
    result.style.color = "purple";
  }
};

//EVENT LISTENER
anyjokeBtn.addEventListener("click", getJoke);

// ONE PART JOKE
// "category": "Misc",
// "type": "single",
// "joke": "My wife and I have reached the difficult decision that we do not want children.\nIf anybody does, please just send me your contact details and we can drop them off tomorrow.",

// TWO PART JOKE
// {
//   "category": "Programming",
//   "type": "twopart",
//   "setup": "Why do programmers prefer using the dark mode?",
//   "delivery": "Because light attracts bugs.",
// }
