document
  .querySelector(".scrollable-div")
  .addEventListener("wheel", function (event) {
    event.stopPropagation();
  });
