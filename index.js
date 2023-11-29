function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}
function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle() {}

extend(Circle, Shape);

Circle.prototype.duplicate = function () {
  console.log("duplicate circle");
};

function Square() {}

extend(Square, Shape);

Square.prototype.duplicate = function () {
  console.log("duplicate square");
};

// example of usage polymorphism
const shapes = [new Square(), new Circle()];
for (const shape of shapes) {
  shape.duplicate();
}

// if we want to code none object oriented, we code something like this:

// for (const shape of shapes) {
//   if (shape.type === "circle") duplicateCircle();
//   if (shape.type === "square") duplicateSquare();
//   else duplicateShape();
// }
