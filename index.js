function Circle(radius) {
  // Instance Member
  this.radius = radius;

  this.move = function () {
    console.log("move");
  };
}

const circle = new Circle(12);

// Prototype Member
Circle.prototype.draw = function () {
  console.log("draw");
};

cl.draw();

// the order of modify prototype member and creating object doesn't matter, because at the end, prototype member will still be available in circle object because we are dealing with object references so we have single object in memory and as soon as we modify that all the changes are immediately visible.

// iterate over instance members
// Object.keys only returns instance members
console.log(Object.keys(circle));

// iterate over all member(instance + prototype)
for (const key in circle) {
  console.log(key);
}

// some docs use 'own' word instead of 'instance'

// check for existing instance member:
console.log(circle.hasOwnProperty("radius")); // true
console.log(circle.hasOwnProperty("draw")); // false - because draw is prototype member
