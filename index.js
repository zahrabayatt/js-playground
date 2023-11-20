// Functions are objects and have all the member objects.

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

console.log(Circle.name); // Circle
console.log(Circle.length); // 1 - returns the number of arguments
console.log(Circle.constructor); // [Function: Function] - reference to the function that creates Circle objects
console.log(Circle.call({}, 1)); // The first argument is 'this', which we pass as an empty object. 'this' in Circle refers to that object, and the other argument is the function's argument.
console.log(Circle.apply({}, [1])); // Exactly like the call method, except the second argument is an array of function's arguments.

// Create a function with Function
const anotherCircle = new Function(
  "radius",
  `this.radius = radius;
   this.draw = function () {
    console.log("draw");
  };`
);

const c = new anotherCircle(1);
