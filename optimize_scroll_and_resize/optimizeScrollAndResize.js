/*
* This function optimize jQuery scroll and resize function by trigger function
* binded to event only once per given time.
* @param {Function} func
* @param {String} eventType
* @param {Number} delay
* @return None
*/

function optimizeScrollAndResize(func, eventType, delay) {

  // declare variables
  var waiting,
      endEventHandle;

  /*
  * Initializing variables
  */
  function init() {
    waiting = false;

    checkParams();
    bind();
  }

  /*
  * Check params
  */
  function checkParams(){
    if (eventType !== "scroll" && eventType !== "resize" && eventType !== 'touchmove') {
      console.log("You need to pass 'scroll' or 'resize' or 'touchmove' event to function.");
      return;
    }
    if (typeof delay !== "number") {
      console.log("You need to pass delay time to function.");
      return;
    }
    if (typeof func !== "function") {
      console.log("You need to pass function to execute to function.");
      return;
    }
  }

  /**
  * Function bind
  * bind function to eventType
  */
  function bind() {
    $(window).on(eventType, function(e) {
      if (waiting) {
        return
      }

      waiting = true;
      clearTimeout(endEventHandle);

      // run function bind to scroll every delay time,
      // function bind to resize run only on the end of resizing
      if (eventType === 'scroll') {
        func(e);
      }

      setTimeout(function() {
        waiting = false;
      }, delay);

      // Add function execution on the end of scrolling or resizing
      endEventHandle = setTimeout(function() {
        func(e);
      }, delay + 100)
    })
  }

  // Start function
  init();
}
