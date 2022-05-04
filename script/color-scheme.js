//Come back to this later
var r = document.querySelector(':root');

// Check to see if Media-Queries are supported
if (window.matchMedia) {
    // Check if the dark-mode Media-Query matches
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      // Dark
      r.style.setProperty("--clr-accent", "0, 100% 50%");
    } else {
      // Light
      alert("Light");
    }
  } else {
    // Default (when Media-Queries are not supported)
  }