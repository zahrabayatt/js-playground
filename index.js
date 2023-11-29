// In ES6, we have classes which is syntax sugar over objects
// with classes we can use inheritance in modern way.

class Circle {
  constructor(radius) {
    this.radius = radius;
    this.move = function () {
      console.log("move");
    }; // define method in object instance
  }

  draw() {
    console.log("draw");
  } // define method in object's prototype
}

const c = new Circle(10); // Classes in ES6 forces developer to use new keywords unless they got the error
console.log(c);

console.log(typeof c); // function
// to understand this : head over https://babel.io (JS compiler) to see result of completion of this code to understand why c is function.
