// In classical OPP language we have two types of methods:
// 1- instance method
// 2- static method

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Instance Method
  draw() {}

  // Static Method
  static parse(str) {}
}

const circle = new Circle(1);
console.log(circle.draw()); // calling instance method
console.log(Circle.parse()); // calling static method

//Example

class Square {
  constructor(size) {
    this.size = size;
  }

  // Instance Method
  draw() {}

  // Static Method
  static parse(str) {
    const size = JSON.parse(str).size;
    return new Square(size);
  }
}

const square = Square.parse('{"size": 1 }');
console.log(square);

// another example: for utility function
class Math2 {
  static abs(value) {
    //...
  }
}

Math2.abs();
