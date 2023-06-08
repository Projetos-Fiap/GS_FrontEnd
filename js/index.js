alert('Bem Vindo!')

function iniciaLocalStorage(){
  localStorage.setItem("modoEscuro", 0);
}

function switchModos(){
  let body = document.querySelector(".body");
  let header = document.querySelector(".header");
  let logo = document.querySelector(".logo");
  let section1H1 = document.querySelector(".section1 h1");
  let section2H1 = document.querySelector(".section2 h1");
  let section3H1 = document.querySelector(".section3 h1"); 
  let section4H1 = document.querySelector(".section4 h1"); 
  let section5H1 = document.querySelector(".section5 h1"); 
  let section6H1 = document.querySelector(".section6 h1");  

  let section1 = document.querySelector(".section1");  
  let section2 = document.querySelector(".section2");  
  let section3 = document.querySelector(".section3");  
  let section4 = document.querySelector(".section4");  
  let section5 = document.querySelector(".section5");  
  let section6 = document.querySelector(".section6");  

  let footer = document.querySelector(".footer");
  let lampada = document.querySelector(".switch");

  if( localStorage.getItem("modoEscuro") == 1){

      localStorage.setItem("modoEscuro", 0);
      
      body.style.cssText = "margin: 0;padding: 0;position: relative;width: auto;background-color: rgb(189, 180, 180);"
      section1.style.cssText = "margin-bottom: 20em; color: black;"
      section2.style.cssText = "margin-bottom: 20em; color: black;"
      section3.style.cssText = "margin-bottom: 20em; color: black;"
      section4.style.cssText = "margin-bottom: 20em; color: black;"
      section5.style.cssText = "margin-bottom: 20em; color: black;"
      section6.style.cssText = "margin-bottom: 20em; color: black;"

      lampada.src = "./images/mobile/apagada.png"
  } else {

    localStorage.setItem("modoEscuro", 1);

    body.style.cssText = "margin: 0;padding: 0;position: relative;width: auto;background-color: rgb(63, 59, 59);"
    section1.style.cssText = "margin-bottom: 20em; color: white;"
    section2.style.cssText = "margin-bottom: 20em; color: white;"
    section3.style.cssText = "margin-bottom: 20em; color: white;"
    section4.style.cssText = "margin-bottom: 20em; color: white;"
    section5.style.cssText = "margin-bottom: 20em; color: white;"
    section6.style.cssText = "margin-bottom: 20em; color: white;"

    lampada.src = "./images/mobile/acesa.png"
  }   
}

document.addEventListener('DOMContentLoaded', function() {
    var carouselImages = document.querySelectorAll('.carousel-image');
    var carouselButtons = document.querySelectorAll('.carousel-button');
    var currentImageIndex = 0;
  
    function showImage(index) {
      carouselImages.forEach(function(image) {
        image.classList.remove('active');
      });
  
      carouselImages[index].classList.add('active');
    }
  
    function previousImage() {
      currentImageIndex--;
  
      if (currentImageIndex < 0) {
        currentImageIndex = carouselImages.length - 1;
      }
  
      showImage(currentImageIndex);
    }
  
    function nextImage() {
      currentImageIndex++;
  
      if (currentImageIndex >= carouselImages.length) {
        currentImageIndex = 0;
      }
  
      showImage(currentImageIndex);
    }
  
    carouselButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        if (button.classList.contains('previous')) {
          previousImage();
        } else if (button.classList.contains('next')) {
          nextImage();
        }
      });
    });
  });
  
iniciaLocalStorage()