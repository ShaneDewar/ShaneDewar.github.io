// JavaScript used for gear calculator of bicycle gear inches by Shane Dewar
// This is based off the weather submission form we used previously.

// Wait for the page to load 
document.addEventListener('DOMContentLoaded', getInfo);


// When the user clicks submit on the form pull the variable info and perform the calculation
// before updating the page with the gear inch value.
function getInfo(){
  document.getElementById('urlSubmit').addEventListener('click', function(event)
  {
    // Variables to hold submitted info for mathematics.
    var wheelDiameter = 0;
    var chainring = 0;
    var rearCog = 0;
    var tireSize = 0;
    
    // Our target value.
    var gearInches = 0;
    
    // Get our gear info by accessing the form data with getElementId
    wheelDiameter = parseInt(document.getElementById('wheelDiameter').value);
    tireSize = parseInt(document.getElementById('tireSize').value);   
    chainring = parseInt(document.getElementById('chainring').value);
    rearCog = parseInt(document.getElementById('rearCog').value);
   
    // gear inch is total wheel+tire diameter * teeth of chainring / teeth of sprocket
    gearInches = ((wheelDiameter + tireSize) * (chainring/rearCog));
    
    // Insert the calculated value.
    document.getElementById("gearInches").textContent = gearInches;
    
    // For debugging.
    console.log(wheelDiameter, tireSize, chainring, rearCog, gearInches);
    
    event.preventDefault();
  });
}
