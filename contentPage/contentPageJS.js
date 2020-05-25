// Attach the button in the HTML to the JS
var button = document.getElementById("downloadButton");
var file = "../92crisscross_smaller.jpg";

// Listen for a click event on the button
button.addEventListener("click", buttonClicked);

function buttonClicked() {
  var toGet = document.createElement('pic');
  
  toGet.href = file;
  toGet.download = file.substr(file.lastIndexOf("/") + 1);
  toGet.click();
  //window.location = "92crisscross_smaller.jpg";  // Download the picture in the window
  }
