function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius, color) {
  // call super constructor
  Shape.call(this, color); // we bind this refer to object created by Circle in Shape parent

  this.radius = radius;
}

Circle.prototype.draw = function () {
  console.log("draw");
};

// Circle inherit form Shape
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

const c = new Circle(1, "red");
