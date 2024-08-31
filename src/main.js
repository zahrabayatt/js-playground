let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");

function moveToSlide(index) {
  if (index >= 0 && index < slides.length) {
    slider.style.transform = `translateY(-${index * 100}vh)`;
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
