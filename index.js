// Incorrect approach: We can create a factory function so that we have a single place for the circle object.

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
};

const circle2 = {
  radius: 2,
  location: {
    x: 0,
    y: 0,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
};

// Correct approach:
// Factory Function
function createCircle(radius, location, isVisible) {
  return {
    radius, // short syntax for radius: radius
    location,
    isVisible,
    // draw: function () {
    //   console.log("draw");
    // },
    // short syntax for the draw method
    draw() {
      console.log("draw");
    },
  };
}

const c1 = createCircle(1, { x: 0, y: 0 }, true);
c1.draw();

const c2 = createCircle(2, { x: 0, y: 0 }, true);
c2.draw();
