// Constructor Function: It is another approach for creating or constructing objects to place all the logic of the object in a single place.

// We use Camel notation for factory functions, but we use Pascal notation for constructor functions.

// Constructor Function
function Circle(radius) {
  this.radius = radius; // add a new property
  this.draw = function () {
    console.log("draw");
  };
}

// Create an object from the constructor function
const circle = new Circle();

// When we use the 'new' keyword for creating an object:
// 1 - const x = {}; creates an empty object
// 2 - 'this' refers to the object that is created
// 3 - the object is implicitly returned from the Circle function
