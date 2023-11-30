class Shape {
  move() {
    console.log("move");
  }
}

class Circle extends Shape {
  move() {
    // super.move(); // access to implementor of move in super class
    console.log("circle move");
  }
}

const c = new Circle();
c.move(); // circle move
