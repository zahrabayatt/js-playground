// Objects are collections of key-value pairs. If we have properties that are highly related, we encapsulate them in an object.

// We can group these variables into one object.
let radius = 1;
let x = 1;
let y = 1;

// Object-oriented Programming (OOP): It is the style of programming where we view a program as a collection of objects that communicate with each other to perform some functionality.
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,

  // We can group related functions in an object, and we call these instances of functions methods.
  draw: function () {
    console.log("draw");
  },
};

// Call the draw method of the circle object.
circle.draw();
