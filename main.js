/* navbar */

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("logo").style.width = "40px";
    document.querySelector(".highlight").style.fontSize = "40px";
}
  else {
    document.getElementById("logo").style.width =  "80px"
    document.querySelector(".highlight").style.fontSize = "60px";
  }
}

/* auto gallery */

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var y = document.getElementsByClassName("mySlides1");
  var z = document.getElementsByClassName("mySlides2");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.display = "none";
    z[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  y[slideIndex-1].style.display = "block";
  z[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5000); 
}

/* lightbox */

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "flex";
  document.querySelector("header").style.zIndex = "0";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.querySelector("header").style.zIndex = "9999";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  
  if (n == 7) {slideIndex = 1} 
  if (n == 15) {slideIndex = 9}
  if (n == 23) {slideIndex = 17}    // reset to first slide
  if (n == 0) {slideIndex = 6}
  if (n == 8) {slideIndex = 14}
  if (n == 16) {slideIndex = 22}    // go to last slide from 1st slide
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}






