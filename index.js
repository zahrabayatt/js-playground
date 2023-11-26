function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);

// iterate in methods and properties of object with for-in
for (const key in circle) {
  if (typeof circle[key] !== "function")
    // only log properties
    console.log(key, circle[key]);
}

const keys = Object.keys(circle);
console.log(keys);

if ("radius" in circle) console.log("Circle has a radius.");
