class Shape {
  constructor(color) {
    this.color = color;
  }
  move() {
    console.log("move");
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color); // must call ctor of super class first in ctor of child class
    this.radius = radius;
  }
  draw() {
    console.log("draw");
  }
}

const c = new Circle("red", 1);
console.log(c);
c.move();
c.draw();
