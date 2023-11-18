// Get the width of the viewport
var viewportWidth = window.innerWidth;

// Media query for small screens
if (viewportWidth <= 768) {
  // Hide the education and skills sections
  document.querySelector(".education").style.display = "none";
  document.querySelector(".skills").style.display = "none";
}

// Media query for medium screens
if (viewportWidth <= 992) {
  // Hide the contact section
  document.querySelector(".contact").style.display = "none";
}
else{
  console.log();
}