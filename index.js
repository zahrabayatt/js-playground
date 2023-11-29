function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

// Refactor: create a method for extend from object
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Circle(radius, color) {
  Shape.call(this, color);

  this.radius = radius;
}

Circle.prototype.draw = function () {
  console.log("draw");
};

// Circle inherit form Shape
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;
// Refactor: use extend function - we call this 'Intermediate Function Inheritance'
extend(Circle, Shape);
function Square(size, color) {
  Shape.call(this, color);

  this.size = size;
}

// Square inherit from Shape
// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.constructor = Square;
// Refactor: use extend function
extend(Square, Shape);

const c = new Circle(1, "red");
const sq = new Square(1, "blue");
