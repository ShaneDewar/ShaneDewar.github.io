// Attach the button in the HTML to the JS
var button = document.getElementById("downloadButton");

// Listen for a click event on the button
button.addEventListener("click", buttonClicked);

function buttonClicked() {
  window.open("92crisscross_smaller.jpg");  // Download the picture in new tab
  }
