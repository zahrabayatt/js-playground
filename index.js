// Every object has a constructor property which references the function used to create the object.

// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCircle(2);
console.log(circle.constructor);
// [Function: Object] - Reference to Object's constructor function

const x = {}; // Translates to new Object();

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Circle(1);
console.log(another.constructor);
// [Function: Circle] - Reference to the Circle constructor function
