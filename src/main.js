// DOM Manipulation

// Event Delegation

// It allows users to append a SINGLE event to a parent element that adds it to all of its present a AND future descendants that match a selector.

document.querySelector("#sports").addEventListener("click", function (e) {
  const target = e.target;

  if (target.matches("li")) {
    console.log(target.id + " is clicked");
    target.style.backgroundColor = "lightgrey";
  }
});

const sports = document.querySelector("#sports");
const newSport = document.createElement("li");

newSport.innerText = "rugby";
newSport.setAttribute("id", "rugby");

sports.appendChild(newSport);
