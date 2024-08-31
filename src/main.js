let currentSlide = 0;
const slideHeight = 98; // Each slide's height
const slideGap = 16; // Gap between slides
const slidesToShow = 4; // Number of slides visible at once (based on container height)
const totalSlides = document.querySelectorAll(".slide").length;
const slider = document.querySelector(".slider");
const maxSlideIndex = totalSlides - slidesToShow;

function moveToSlide(index) {
  if (index >= 0 && index <= maxSlideIndex) {
    const translateY = index * (slideHeight + slideGap);
    slider.style.transform = `translateY(-${translateY}px)`;
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
