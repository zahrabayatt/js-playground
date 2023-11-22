function start() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  //console.log(i); // error - Creating a block-scoped variable with 'let' makes it limited to the block instance.
}

start();

function start1() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }

  console.log(i); // 5 - Creating a function-scoped variable with 'var' makes it limited to the function instance.
}

start1();

// var => function-scoped
// ES6(ES2015): let, const => block-scoped

// When we define a global variable using 'var', it becomes attached to the window object in browsers. This is considered bad practice, as it can lead to issues if a third-party library also uses a variable with the same name. The variable could be overwritten, causing problems in our program.

var color = "red";
console.log(window.color); // red

let age = 30;
console.log(window.age); // undefined

// Technically, when we define a function like 'sayHi' without any specific scoping, it becomes attached to the window object. This is also considered bad practice. With modules, we can encapsulate functions, avoiding the pollution of the global scope.

function sayHi() {
  console.log("hi");
}

window.sayHi();
