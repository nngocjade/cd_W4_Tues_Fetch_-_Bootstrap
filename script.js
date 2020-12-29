let result = document.getElementById("result");
let jokeBtn = document.getElementById("jokeBtn");

const getJoke = async () => {
  const url =
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  if (data.type === "single") {
    result.innerHTML = data.joke;
  }
  if (data.type === "twopart") {
    result.innerHTML = `<p class="two-part">${data.setup}</p> <p class="two-part">${data.delivery}</p>`;
  }
};

//EVENT LISTENER
jokeBtn.addEventListener("click", getJoke);

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
