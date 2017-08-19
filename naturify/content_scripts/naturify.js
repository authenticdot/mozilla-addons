/*
naturify():
* removes every node in the document.body,
* then inserts the chosen target
* then removes itself as a listener
*/
function naturify(request, sender, sendResponse) {
    removeEverything();
    insertTarget(request.targetURL);
    browser.runtime.onMessage.removeListener(naturify);
  }
  
  /*
  Remove every node under document.body
  */
  function removeEverything() {
    while (document.body.firstChild) {
      document.body.firstChild.remove();
    }
  }


/*
Given a URL to a target image, create and style an IMG node pointing to
that image, then insert the node into the document.
*/
function insertTarget(targetURL) {
    var targetImage = document.createElement("img");
    targetImage.setAttribute("src", targetURL);
    targetImage.setAttribute("style", "width: 100vw");
    targetImage.setAttribute("style", "height: 100vh");
    document.body.appendChild(targetImage);
  }
  
  /*
  Assign naturify() as a listener for messages from the extension.
  */
  browser.runtime.onMessage.addListener(naturify);