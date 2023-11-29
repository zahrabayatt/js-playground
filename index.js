"use strict"; // enable strict mode

const Circle = function () {
  this.draw = function () {
    console.log(this);
  };
};

const c = new Circle();
// Method Call
c.draw(); // this will point to c object

const draw = c.draw;

// Function Call
draw(); // this will point to global object - if strict mode is enable this is undefined

// In ES6:
class Square {
  draw() {
    console.log(this);
  }
}

const s = new Square();
s.draw(); // this will point to s object
const d = s.draw;
d(); // undefined - where ever strict mode enable or untenable - the reason is because classes executed by default in strict mode
