let myArray = [];
console.log(myArray);

// prototype of myArray is array base and the prototype of array base is object base.

// so myArray drives from array base and array base drives form the object base, this is called multi level inheritance.

function Circle(radius) {
  this.radius = radius;

  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);

// we create circle object using constructor function.

// prototype of circle  object is the prototype of all objects that we create using our circle constructor, we call this prototype circle base. the prototype of circle base is object base.

// every time we call circle constructor to create a new circle object this constructor will create a new object and set its prototype to circle base.

// In conclusion, Object created by a given constructor will have the same prototype.
