// Abstraction: Hide the details, Show the essentials

// Closure in JavaScript determines what variables will be accessible to an inner function.
function Circle(radius) {
  // let color = 'red'; // it is only a local variable inside the function.

  let defaultLocation = {
    x: 0,
    y: 0,
  };
  let computeOptimumLocation = function () {
    //...
  };

  this.radius = radius;
  this.draw = function () {
    computeOptimumLocation(0.1); // access to private method (local function)
    console.log(defaultLocation); // access to private property (local variable)
    console.log(this.radius); // access to property in method
  };
}

const circle = new Circle(10);

// can't access to local variable of object
console.log(circle.computeOptimumLocation); // undefined
