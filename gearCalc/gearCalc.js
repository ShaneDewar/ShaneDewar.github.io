// JavaScript for Weather form get request activity via AJAX 
// Shane Dewar CS290 May 2020
// With help from the book, videos and developer docs
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
// also used info from 
// https://openweathermap.org/current#multi


document.addEventListener('DOMContentLoaded', getInfo);

function getInfo(){
  document.getElementById('urlSubmit').addEventListener('click', function(event)
  {
    var wheelDiameter;
    var chainring;
    var rearCog;
    
    var gearInches = 0;
    
    // Get our gear info
    wheelDiameter = document.getElementById('wheelDiameter').value;
    chainring = document.getElementById('chainring').value;
    rearCog = document.getElementById('rearCog').value;
    
    gearInches = wheelDiameter * (chainring/rearCog);
    
    document.getElementById("gearInches").textContent = gearInches;
    
    event.preventDefault();
  });
}
