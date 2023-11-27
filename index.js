function Circle(radius) {
  // Instance Member
  this.radius = radius;

  // this.draw = function () {
  //   console.log("draw");
  // };

  // access to prototype member in instance member
  this.move = function () {
    this.draw(); // JS engine will find the draw method in prototype
    console.log("move");
  };
}

// if we define methods in function constructor, for each instance object in memory we going to have copy of the draw method and it going to waste a lot o memories. for solution we can define our method in prototype so we are going to have a single instance of this prototype in the memory, and with prototypical inheritance we can access to draw function.

// Prototype Member
Circle.prototype.draw = function () {
  console.log("draw");
};

// we can overwrite prototype member like this:
Circle.prototype.toString = function () {
  return "Circle with radius " + this.radius; // access instance member in prototype member
}; // even though we have a implementation in prototype object we use this implementation because it is more accessible

const circle = new Circle(12);
circle.move();
console.log(circle.toString());

// we shouldn't call move in draw and call draw in move in the same time because it makes to have a circular dependency
