// by default everything that defined in a module is considered to be private so it won't be accessible to the outside unless we explicitly export it.

// Implementor Detail
const _radius = new WeakMap();

// Public Interface
// for exporting in ES6 modules we use export keyword before them:
export class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log("Circle with radius " + _radius.get(this));
  }
}
