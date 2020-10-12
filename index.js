const setupDiv = document.querySelector('#setup');
const punchlineDiv = document.querySelector('#punchline');
const punchlineBtn = document.querySelector('#punchlineBtn');
const newJokeBtn = document.querySelector('#newJokeBtn');
let punchline;

const getJoke = async () => {
  const jokePromise = await fetch(
    'https://official-joke-api.appspot.com/jokes/programming/random'
  );
  const joke = await jokePromise.json();
  setupDiv.textContent = joke[0].setup;

  punchline = joke[0].punchline;

  punchlineBtn.classList.toggle('hidden');
  newJokeBtn.classList.toggle('hidden');
};

getJoke();
