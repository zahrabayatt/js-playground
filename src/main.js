// Phase 1 : Capturing -> from root to target
// Phase 2 : target
//Phase 3: Bobbling -> from target to root

// Event Propagation

//Bobbling

window.addEventListener(
  "click",
  function () {
    console.log("Window");
  },
  false
);

document.addEventListener(
  "click",
  function () {
    console.log("Document");
  },
  false
);

document.querySelector(".div2").addEventListener(
  "click",
  function (e) {
    //e.stopPropagation();
    console.log("DIV 2");
  },
  false
);

document.querySelector(".div1").addEventListener(
  "click",
  function () {
    console.log("DIV 1");
  },
  false
);

document.querySelector("button").addEventListener(
  "click",
  function (e) {
    console.log(e);
    console.log(e.target);
  },
  false
);
