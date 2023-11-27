function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle();

// constructor functions are object so the prototype of Circle constructor is object base.
// Circle is also the constructor of circle object, so circle.constructor = Circle function.
console.log(Circle.prototype);

// the prototype of the circle is object base.
console.log(Object.getPrototypeOf(circle));

// the prototype of both Circle constructor and circle object is same and it is object base.
console.log(Object.getPrototypeOf(circle) === Circle.prototype); //

// another example
let x = {};
// when we use object literal for creating object under the hood it translate to let x = new Object();
// which Object is function Constructor

// so prototype of x is object base and prototype of Object constructor is object base
