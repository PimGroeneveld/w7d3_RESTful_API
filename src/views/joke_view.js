const PubSub = require('../helpers/pub_sub.js');

const JokeView = function (container) {
  this.container = container;
}

//this page purely receives the JSON data via the API and only renders it to the page
JokeView.prototype.bindEvents = function () {
  PubSub.subscribe('Joke:joke-loaded', (evt) => {
    this.render(evt.detail);
  });
}

JokeView.prototype.render = function (joke) {
  const p = document.createElement('p');
  p.textContent = joke;
  this.container.appendChild(p);
}

module.exports = JokeView;
