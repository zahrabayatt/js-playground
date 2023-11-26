function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);

// Adding property
circle.location = { x: 1 };
circle["location"] = { x: 1 };

// Example of bracket notation for adding property
const propertyName = "location";
circle[propertyName] = { x: 1 };

const pName = "center-location"; // in dot notation we can use hyphen or septical characters
circle[pName] = { x: 1 };

// Removing property
delete circle.location;
delete circle["center-location"];
