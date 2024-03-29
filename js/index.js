let sliderIndex = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

function showSlide() {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${sliderIndex * (100 / totalSlides)}%)`; 
  });
}

function nextSlide() {
  if (sliderIndex < totalSlides - 1) {
    sliderIndex++;
  } else {
    sliderIndex = 0;
  }
  showSlide();
}

function prevSlide() {
  if (sliderIndex > 0) {
    sliderIndex--;
  } else {
    sliderIndex = totalSlides - 1;
  }
  showSlide();
}

showSlide();

setInterval(nextSlide, 3000);









// card slider///
const multipleItemCarousel = document.querySelector('#carouselExample');

if (window.matchMedia("(min-width:576px)").matches) {
    const carousel = new bootstrap.Carousel(multipleItemCarousel, {
        interval: false
    });

    const carouselInner = multipleItemCarousel.querySelector('.carousel-inner');
    const cardWidth = carouselInner.querySelector('.carousel-item').offsetWidth;
    let scrollPosition = 0;

    multipleItemCarousel.querySelector('.carousel-control-next').addEventListener('click', function () {
        if (scrollPosition < (carouselInner.scrollWidth - (cardWidth * 4))) {
            scrollPosition += cardWidth;
            carouselInner.scrollLeft = scrollPosition;
        }
    });

    multipleItemCarousel.querySelector('.carousel-control-prev').addEventListener('click', function () {
        if (scrollPosition > 0) {
            scrollPosition -= cardWidth;
            carouselInner.scrollLeft = scrollPosition;
        }
    });
} else {
    multipleItemCarousel.classList.add("slide");
}



// customer slide///


const slider = document.querySelector('.customer-slider');
const cards = document.querySelectorAll('.customer-card');

let currentIndex = 0; 

const intervalTime = 3000; 

function nextSlide() {
    currentIndex++;
    if (currentIndex >= cards.length) {
        currentIndex = 0;
    }
    updateSlider();
}

function updateSlider() {
    const translateXValue = -currentIndex * cards[0].offsetWidth;
    slider.style.transform = `translateX(${translateXValue}px)`;
}

setInterval(nextSlide, intervalTime);

