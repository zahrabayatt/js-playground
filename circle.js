// by default everything that defined in a module is considered to be private so it won't be accessible to the outside unless we explicitly export it.

// Implementor Detail
const _radius = new WeakMap();

// Public Interface
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log("Circle with radius " + _radius.get(this));
  }
}

// the way we export objects in CommonJS format is like this:
// keyword module refers to the current module
// this module has a property called exports and it is an object, we can add one or more properties to this object so we can add a property called circle and set that to a circle class here.
// module.exports.Circle = Circle;

// because in this example we are exporting only a single object we can also do something like this:
module.exports = Circle;

// if we had multiple classes here and we wanted to export them together we cloud do something like this:
//  so this module that exports is an object with two properties Square and Shape and then we can import this object inside of our index.js and access these properties.
// class Shape {
//   draw() {
//     console.log("draw");
//   }
// }
// class Square {
//   draw() {
//     console.log("draw");
//   }
// }
// module.exports.Square = Square;
// module.exports.Shape = Shape;
