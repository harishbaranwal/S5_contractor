let currentIndex = 0;

function moveSlide(direction) {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const images = document.querySelectorAll('.slider img');
    const totalImages = images.length;
    const imagesPerSlide = 3; // Number of images to show per slide
    const imageWidth = images[0].clientWidth;
    const gap = 15; // Gap between images
    
    currentIndex += direction;
    
    if (currentIndex < 0) {
        currentIndex = totalImages - imagesPerSlide;
    } else if (currentIndex >= totalImages - imagesPerSlide + 1) {
        currentIndex = 0;
    }

    const translateXValue = (currentIndex * (imageWidth + gap));
    sliderWrapper.style.transform = `translateX(-${translateXValue}px)`;
}





function moveSlide_2(direction) {
  const sliderWrapper = document.querySelector('.personal_project_slider-wrapper');
  const images = document.querySelectorAll('.personal_project_slider img');
  const totalImages = images.length;
  
  currentIndex += direction;
  
  if (currentIndex < 0) {
      currentIndex = totalImages - 1;
  } else if (currentIndex >= totalImages) {
      currentIndex = 0;
  }

  const imageWidth = images[0].clientWidth;
  const translateXValue = currentIndex * imageWidth;
  sliderWrapper.style.transform = `translateX(-${translateXValue}px)`;
}



