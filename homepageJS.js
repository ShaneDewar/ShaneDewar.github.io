/* This would have been impossible without help from w3schools, especially setInterval and clearInterval methods
 described at w3schools.com/jsref/met_win_clearinterval.asp https://www.w3schools.com/jsref/obj_window.asp 
 https://www.w3schools.com/jsref/met_win_setinterval.asp also a lot of help came from
 https://www.w3schools.com/jsref/met_win_settimeout.asp but this led to issues. 
 https://www.w3schools.com/howto/howto_js_slideshow.asp provided fundimentals of how a slideshow works.
 A lot of this was trial and error and googling how to get the interactions to do what I wanted. I originally
 wanted to be able to have buttons as floating images and have the carousel images be JavaScript objects that
 linked to specific pages. Additionally, I wanted there to be a pool of objects and have the carousel choose
 X random ones on page load. I ran out of time and skill, however. 
*/

// imageIndex is the array position of which image will be active in our carousel
var imageIndex = 1;

// make a countdown timer that is use to trigger paging to the next image in the carousel with setInterval()
var timer;

// Make a load event that starts a timer to increment the images.
window.addEventListener("load", function() {
  moveCarousel(imageIndex);   // Start our carousel
  
  // timer will track when we change pictures. This keeps us from having  lots of timers.
  timer = setInterval(function() {
       nextPicture(1)}, 5000);
})

// Allows the user to manual move through the images without screwing up the timers.
function nextPicture(increment) {
  // We have to delete our timer
  clearInterval(timer);
  
  // If current is negative, we want to go back, otherwise we want forward.
  if(increment < 0) {
    moveCarousel(imageIndex = imageIndex-1);
    
  } else {
    moveCarousel(imageIndex = imageIndex+1);
  }

  // Since we're incrementing the carousel image manually we have to 
  // reset the timer and set the interval again so it doesn't desynch.  
  timer = setInterval(function(){nextPicture(increment+1)}, 5000);
  
}

// moveCarousel does the major work organizing the array of images, hiding the inactive
// images and displaying the proper image when I want it to display.
function moveCarousel(current) {
  var displayedPicture;
  
  // Find out how many images are in the carousel
  var photoCount = document.getElementsByClassName("carouselImage");
 
  // When we're at the end of the carousel go to the beginning  
  if (current > photoCount.length) {
    imageIndex = 1;
  }
  
  // If current is negative, go back the the last image
  if (current < 1) {
    imageIndex = photoCount.length;
  }
   
  // Start at the first image in the carousel to display (it's an array)
  for (displayedPicture = 0; displayedPicture < photoCount.length; displayedPicture++) {
    // we tell the carousel to hide the last picture so we don't still have it on our
    // display when we go to the next one.
    photoCount[displayedPicture].style.display = "none";
  }
  
  // Now we display the image we want shown 
  photoCount[imageIndex-1].style.display = "block";
}