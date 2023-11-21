// In JS, we have two way to defining functions:
// 1- Function Declaration
// 2- Function Expression

// we can call function declaration before defining that but we can't do this with expression functions, the reason for this is because JS engine when execute this code, it moves all the functions declaration to top of the file and it called hoisting.

// In summery, hoisting is a process of moving function declaring to top of the file and it done automatically by JS engine.

// Function Declaration
walk();
function walk() {
  console.log("walk");
}

// Function Expression
run(); // get error
const run = function run() {
  console.log("run");
};
