const Request = function(url){
  this.url = url;
}

//get takes in function what want to happen after all been loaded (callback)
Request.prototype.get = function(onComplete){
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
    onComplete(data);  // data (JSON joke) gets loaded on complete
  });

  // initialize
  xhr.open("GET", this.url); //will insert picked url here
  //add request header: only get JSO back and no HTML
  xhr.setRequestHeader("Accept", "application/json");
  //send request
  xhr.send();
}

module.exports = Request;
