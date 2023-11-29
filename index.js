function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.draw = function () {
  console.log("draw");
};

// Circle prototype is like this (Circle base):
//Circle.prototype = Object.create(object.prototype);
// Circle inherit form Shape (Circle base that inherit form Shape base)
Circle.prototype = Object.create(Shape.prototype);
