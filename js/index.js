alert('Bem Vindo!')

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
  