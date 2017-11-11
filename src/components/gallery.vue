<template>
  <div class="slider_container">
    <div class="showSlide fade">
      <img src="../assets/art01.jpg" alt="작품">
      <div class="genre">Abstract</div>
    </div>
    <div class="showSlide fade">
      <img src="../assets/art02.jpg" alt="작품">
      <div class="genre">Impression</div>
    </div>
    <div class="showSlide fade">
      <img src="../assets/art03.jpg" alt="작품">
      <div class="genre">Classic</div>
    </div>
    <div class="showSlide fade">
      <img src="../assets/art04.jpg" alt="작품">
      <div class="genre">Contemporary</div>
    </div>
    <div class="showSlide fade">
      <img src="../assets/art05.jpg" alt="작품">
      <div class="genre">Surrealism</div>
    </div>
    <div class="showSlide fade">
      <img src="../assets/art06.jpg" alt="작품">
      <div class="genre">Religious</div>
    </div>
    <div class="showSlide fade">
      <img src="../assets/art07.jpg" alt="작품">
      <div class="genre">Colorful</div>
    </div>
    <!-- navigation arrows -->
    <a class="left_arrow" onclick="nextSlide(-1)">&#10094;</a>
    <a class="right_arrow" onclick="nextSlide(1)">&#10095;</a>
  </div>
</template>

<script type="text/javascript">
window.onload = function () {
  displaySlides(slideIndex)
  //   function currentSlide (n) {
  //     displaySlides(slideIndex = n)
  //   };
  document.getElementsByClassName('left_arrow').onclick = nextSlide(-1)
  document.getElementsByClassName('right_arrow').onclick = nextSlide(1)
}

var slideIndex = 1

function nextSlide (n) {
  displaySlides(slideIndex += n)
}
function displaySlides (n) {
  var i
  var slides = document.getElementsByClassName('showSlide')
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  slideIndex++
  slides[slideIndex - 1].style.display = 'block'
  setTimeout(displaySlides, 3000)
};
</script>

<style>
  body {  
    margin: 0;  
  }  
  /* .showSlide {  
    display: none;
  }   */
  .showSlide img { 
    width: 100%; 
  }
  .slidercontainer {  
    max-width: 1000px; 
    position: relative;
    margin: auto;  
  }  
  .left_arrow, .right_arrow { 
    /* display: hidden;  */
    cursor: pointer;  
    position: absolute;
    top: 50%;  
    width: auto;  
    padding: 16px;  
    margin-top: -22px;  
    color: white;  
    font-weight: bold;  
    font-size: 18px;  
    transition: 0.6s ease;  
    border-radius: 0 3px 3px 0;  
  }  
  .right_arrow {  
    right: 0;  
    border-radius: 3px 0 0 3px;  
  }  
  .left_arrow:hover, .right_arrow:hover {  
    background-color: rgba(115, 115, 115, 0.8);  
  }  
  .genre {
    display: hidden;
    color: #282522;  
    font-size: 30px;
    position: relative; 
    /* position: absolute; */
    top: -8rem;  
    width: 100%;  
    text-align: center;  
  }  
  .active {  
    background-color: #717171;  
  }  
  /* Fading animation */  
  .fade {  
    -webkit-animation-name: fade;  
    -webkit-animation-duration: 1.5s;
    animation-name: fade;  
    animation-duration: 1.5s;
  }  
  @-webkit-keyframes fade {  
    from {  
      opacity: .4  
    }  
    to {  
      opacity: 1  
    }  
  }  
  
  @keyframes fade {  
    from {  
      opacity: .4  
    }  
    to {  
      opacity: 1  
    }  
  }  
</style>
