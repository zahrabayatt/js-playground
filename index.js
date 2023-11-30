const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);

    // solution I : define getter for radius
    // Object.defineProperty(this, "radius", {
    //   get: function () {},
    // });
  }

  // solution II : define getter for radius
  // getRadius() {
  //   return _radius.get(this);
  // }

  // solution III : define getter and setter with new feature in ES6
  get radius() {
    return _radius.get(this);
  }

  set radius(value) {
    if (value <= 0) throw new Error("invalid radius");
    _radius.set(this, value);
  }
}

const c = new Circle(1);
console.log(c.radius);
c.radius = 10;
console.log(c.radius);
