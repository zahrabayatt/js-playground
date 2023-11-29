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

// Circle inherit form Shape
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

const c = new Circle(1);

// there is a issue with above approach:

// we expect a constructor of circle object refer to circle constructor function and we can create object with new keyword :
// Circle.prototype.constructor = Circle;
// new Circle.prototype.constructor(1) = new Circle(1);
// But it is like this:
// Circle.prototype.constructor = Shape;
// new Circle.prototype.constructor(1) = new Shape(1);
// it happen because we reset prototype and to prevent this issue we need to reset constructor : line 17
