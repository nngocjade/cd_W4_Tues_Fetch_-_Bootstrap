// VARIABLES
let result = document.getElementById("result");
let anyJokeBtn = document.getElementById("anyJokeBtn");
let miscJokeBtn = document.getElementById("miscJokeBtn");
let programmingJokeBtn = document.getElementById("programmingJokeBtn");
let darkJokeBtn = document.getElementById("darkJokeBtn");
let PunJokeBtn = document.getElementById("PunJokeBtn");
let SpookyJokeBtn = document.getElementById("SpookyJokeBtn");
let ChristmasJokeBtn = document.getElementById("ChristmasJokeBtn");

const getAnyJoke = async () => {
  const url =
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  result.innerHTML = " ";
  if (data.type === "single") {
    result.innerHTML = data.joke;
    result.style.color = "green";
  }
  if (data.type === "twopart") {
    result.innerHTML = `<p class="two-part"><strong>Question:</strong> ${data.setup}</p> <p class="two-part"><strong>Answer:</strong> ${data.delivery}</p>`;
    result.style.color = "purple";
  }
};

const getMiscJoke = async () => {
  const url =
    "https://v2.jokeapi.dev/joke/Misc?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
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

const getProgrammingJoke = async () => {
  const url =
    "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
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
const getDarkJoke = async () => {
  const url =
    "https://v2.jokeapi.dev/joke/Dark?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
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
const getPunJoke = async () => {
  const url =
    "https://v2.jokeapi.dev/joke/Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
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
const getSpookyJoke = async () => {
  const url =
    "https://v2.jokeapi.dev/joke/Spooky?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
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

const getChristmasJoke = async () => {
  const url =
    "https://v2.jokeapi.dev/joke/Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
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

//EVENT LISTENER / HAS TO COME AFTER FETCH
anyJokeBtn.addEventListener("click", getAnyJoke);
miscJokeBtn.addEventListener("click", getMiscJoke);
programmingJokeBtn.addEventListener("click", getProgrammingJoke);
darkJokeBtn.addEventListener("click", getDarkJoke);
PunJokeBtn.addEventListener("click", getPunJoke);
SpookyJokeBtn.addEventListener("click", getSpookyJoke);
ChristmasJokeBtn.addEventListener("click", getChristmasJoke);

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
