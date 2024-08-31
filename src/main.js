let currentSlide = 0;
const totalSlides = document.querySelectorAll(".slide").length;
const slider = document.querySelector(".slider");
const sliderContainer = document.querySelector(".slider-container");
const slideHeight = document.querySelector(".slide").clientHeight; // Each slide's height
const slideGap = parseInt(
  window.getComputedStyle(document.querySelector(".slider")).gap
); // Gap between slides

function moveToSlide(index) {
  const translateY = index * (slideHeight + slideGap);
  const maxTranslateY = slider.clientHeight - sliderContainer.clientHeight;

  slider.style.transform = `translateY(-${Math.min(
    translateY,
    maxTranslateY
  )}px)`;

  if (translateY < maxTranslateY) {
    currentSlide = index;
  }
}

document.getElementById("upBtn").addEventListener("click", () => {
  moveToSlide(currentSlide - 1);
});

document.getElementById("downBtn").addEventListener("click", () => {
  moveToSlide(currentSlide + 1);
});

document.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    moveToSlide(currentSlide + 1);
  } else {
    moveToSlide(currentSlide - 1);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    moveToSlide(currentSlide - 1);
  } else if (event.key === "ArrowDown") {
    moveToSlide(currentSlide + 1);
  }
});

document.getElementById("goToSlideBtn").addEventListener("click", () => {
  const slideNumber = parseInt(document.getElementById("slideInput").value);
  if (!isNaN(slideNumber)) {
    const slideIndex = slideNumber - 1; // Convert to zero-based index
    moveToSlide(slideIndex);
  }
});
