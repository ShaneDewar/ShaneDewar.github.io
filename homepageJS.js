// count the slides
var imageIndex = 0;
makeCarousel();

function makeCarousel() {
  var index;
  var imageCount = document.getElementsByClassName("carouselImage");
 

  //if (current > images.length) {imageIndex = 1}
 // if (current < 1) {
 //   imageIndex = images.length
//  }
    
 // } 
  for (index = 0; index < imageCount.length; index++) {
    imageCount[index].style.display = "none";
  }
  
  imageIndex++;
 
  if(imageIndex > imageCount.length) {imageIndex = 1}
  
  imageCount[imageIndex-1].style.display = "block";
  
  setTimeout(makeCarousel, 20000);
}