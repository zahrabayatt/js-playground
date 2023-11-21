// In JS, we have two way to defining functions:
// 1- Function Decurion
// 2- Function Expression

// Function Declaration
function walk() {
  console.log("walk");
}

walk();

// Function Expression
let run = function run() {
  console.log("run");
};

// Anonymous Function Expression
run = function () {
  console.log("run faster");
};

let move = run;

run();
move();
