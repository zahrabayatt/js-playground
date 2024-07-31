// Phase 1 : Capturing -> from root to target
// Phase 2 : target
//Phase 3: Bobbling -> from target to root

// Event Propagation

//Capturing

window.addEventListener(
  "click",
  function () {
    console.log("Window");
  },
  true
);

document.addEventListener(
  "click",
  function () {
    console.log("Document");
  },
  true
);

document.querySelector(".div2").addEventListener(
  "click",
  function () {
    console.log("DIV 2");
  },
  true
);

document.querySelector(".div1").addEventListener(
  "click",
  function () {
    console.log("DIV 1");
  },
  true
);

document.querySelector("button").addEventListener(
  "click",
  function (e) {
    console.log(e);
    console.log(e.target);
  },
  true
);
