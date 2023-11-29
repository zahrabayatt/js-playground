// Intermediate Function Inheritance
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
// we must overwrite method from parent after extend
Circle.prototype.duplicate = function () {
  console.log("duplicate circle");
};

// if we want to call duplicate from shape in overwrite method, we do like this:
// Circle.prototype.duplicate = function () {
//   Shape.prototype.duplicate();
//   // if we use this in duplicate in Shape we call method like this:
//   // Shape.prototype.call(this);

//   console.log("duplicate circle");
// };

const c = new Circle();
c.duplicate();
