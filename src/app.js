const Joke = require('./models/joke.js');
const JokeView = require('./views/joke_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const joke = new Joke();
  joke.getData();

  const jokeContainer = document.querySelector('div#joke-container');
  const jokeView = new JokeView(jokeContainer);
  jokeView.bindEvents();
});

//API saves you from hardcoding info in. Makes bits of software to talk to each other, and have data updated from an other location (skyscanner)

//Most API's provide us with JSON objects
//JSON: keys need to be strings with " "
// Can only be data, not functions
