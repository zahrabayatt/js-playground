// use Object.defineProperty to define setter or getter

function Circle(radius) {
  let defaultLocation = {
    x: 0,
    y: 0,
  };

  this.radius = radius;
  this.draw = function () {
    console.log(defaultLocation);
    console.log(this.radius);
  };

  // readonly property
  this.getDefaultLocation = function () {
    return defaultLocation;
  };

  // OR

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
  });

  // Define setter and getter for property
  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      // add some validation
      if (!value.x || !value.y) {
        throw new Error("Invalid location.");
      }

      defaultLocation = value;
    },
  });
}

const circle = new Circle(10);

circle.defaultLocation = 1;
