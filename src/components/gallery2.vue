<template>
<div class="slideshow-container">
  <div class="mySlides fade">
    <div class="numbertext">1 / 3</div>
    <img src="../assets/art01.jpg">
    <div class="text">Katie</div>
  </div>

  <div class="mySlides fade">
    <div class="numbertext">2 / 3</div>
    <img src="../assets/art02.jpg">
    <div class="text">Julia</div>
  </div>

  <div class="mySlides fade">
    <div class="numbertext">3 / 3</div>
    <img src="../assets/art03.jpg">
    <div class="text">Thomas</div>
  </div>

  <a class="prev">&#10094;</a>
  <a class="next">&#10095;</a>

  <!-- <div style="text-align:center">
    <span class="dot" onclick="currentSlide(1)"></span>     
    <span class="dot" onclick="currentSlide(2)"></span> 
    <span class="dot" onclick="currentSlide(3)"></span> 
  </div> -->
</div>
</template>

<script>
window.onload = function () {
  var slideIndex = 1
  showSlides(slideIndex)
  document.getElementsByClassName('prev').onclick = plusSlides(-1)
  document.getElementsByClassName('next').onclick = plusSlides(1)
}
var slideIndex = 1
function plusSlides (n) {
  showSlides(slideIndex += n)
}

function showSlides (n) {
  var i
  var slides = document.getElementsByClassName('mySlides')
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  slides[slideIndex - 1].style.display = 'block'
}
</script>

<style>


/* Slideshow container */
.slideshow-container {
  max-width: 100%;
  position: relative;
  margin: 0 auto;
  top: 80px;
}

/* .mySlides {
    display: none;
} */
.mySlides img {
  width: 100%;
}

/* Next & previous buttons */
.prev .next {
  cursor: pointer;
  position: absolute;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: black;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 24px;
  /* position: absolute; */
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
/* .dot {
  cursor:pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
} */

/* .active, .dot:hover {
  background-color: #717171;
} */

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}
</style>


