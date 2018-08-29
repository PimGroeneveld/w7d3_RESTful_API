const PubSub = require('../helpers/pub_sub.js');

const Joke = function () {
  this.text = null;
}

//RESTful
Joke.prototype.getData = function () {
  //browser inbuild tools to help (xhr = xml http request)
  //load, accept, get, responseText etc are build in set functions
  const xhr = new XMLHttpRequest();

  //addEventListener --> callback, make sure its fully loaded --> 200 code is the OK code
  xhr.addEventListener("load", () => {
    if(xhr.status != 200){
      return;
    }
    const jsonString = xhr.responseText; //get response back as string of text
    const data = JSON.parse(jsonString); //convert string back into JSON object
    this.text = data.joke; //sets this.text from above to the actual joke
    PubSub.publish("Joke:joke-loaded", this.text); //publishes it to joke_view
  });

  // initialize
  xhr.open("GET", "https://icanhazdadjoke.com");
  //add request header: only get JSO back and no HTML
  xhr.setRequestHeader("Accept", "application/json");
  //send request
  xhr.send();
}

module.exports = Joke;
