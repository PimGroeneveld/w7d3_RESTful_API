const PubSub = require('../helpers/pub_sub.js');
const Request = require("../helpers/requests.js");

const Joke = function () {
  this.text = null;
}

//RESTful
Joke.prototype.getData = function () {
  const request = new Request("https://icanhazdadjoke.com");

  // get takes in data
  request.get((data) => {
    this.text = data.joke; //sets this.text from above to the actual joke
    PubSub.publish("Joke:joke-loaded", this.text); //publishes it to joke_view
  });
};

module.exports = Joke;
