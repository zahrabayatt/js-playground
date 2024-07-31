// Event Listeners

//element.addEventListener("click", function)

const buttonTwo = document.querySelector(".btn-2");

function alertBtn() {
  alert("I also love JS");
}

buttonTwo.addEventListener("click", alertBtn);

// Mouseover event

const boxThree = document.querySelector(".box-3");

function changeBgColor() {
  boxThree.style.backgroundColor = "blue";
}

boxThree.addEventListener("mouseover", changeBgColor);
