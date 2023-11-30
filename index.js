// weakmap which is a new type in ES6 to implement private properties and methods in an object.

// weakmap is essentially a dictionary where keys are objects and values can be anything. the reason we call them weakmap is because the keys are weak. so if there are no references to these keys it will be garbage collected.

// technically we can access this radius private property if we can get access to this weakmap but with modules we can hide this weakmap in a modules and only export the circle class and we don't have access to this weakmap.

const _radius = new WeakMap();
const _move = new WeakMap();

// we can define weakmap like this but above approach is better
const privateProps = new WeakMap();

class Circle {
  constructor(radius) {
    privateProps.set(this, {
      radius: radius,
      move: () => {},
    }); // set

    privateProps.get(this).radius; // access

    //-------------------

    _radius.set(this, radius);
    _move.set(this, function () {
      console.log("move", this); // this will be point to undefined
    });

    _move.set(
      this,
      () => console.log("move", this) // this inherit from containing function which is construct so it will point to circle object
    );
  }

  draw() {
    _move.get(this)(); // access to private method inside the class
    console.log(_radius.get(this)); // access to private property inside the class

    console.log("draw");
  }
}

const c = new Circle(1); // c object doesn't have radius property and we can not access that.

c.draw();
