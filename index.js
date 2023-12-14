// this in Event Handlers:
// The keyword this when used in an event handler refers to the element that received the event.

// Example
// In HTML event handlers, this refers to the HTML element that received the event:
const myButton = document.querySelector("button");
myButton.onclick = function (params) {
  console.log(this); // <button style="display: none;">Click to Remove Me!</button>
  this.style.display = "none";
};

// myButton.addEventListener("click", function () {
//   console.log(this); // <button style="display: none;">Click to Remove Me!</button>
//   this.style.display = "none";
// });

// myButton.onclick = () => {
//   console.log(this); // window
//   this.style.display = "none"; // doesn't work
// };

// myButton.addEventListener("click", () => {
//   console.log(this); // window
//   this.style.display = "none"; // doesn't work
// });

// Visit the following resources to learn more:
// https://www.w3schools.com/js/js_this.asp
// https://stackoverflow.com/questions/66518020/javascript-this-keyword-and-arrow-function
