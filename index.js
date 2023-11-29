// Abstraction: hiding the details and complexity and showing only the essential parts.
// to implement abstraction we use private properties and methods

// approach I: name private members with starting character underline - this is a bad approach because we can still access to private members
class Circle {
  constructor(radius) {
    this._radius = radius;
  }
}

const c = new Circle(1);
c._radius;

// approach II: using symbols
// a symbol is essentially a unique identifier and this is not a constructor function so we can not new that up.
// Symbol return a uniq value - Symbol() doesn't equal to Symbol()
const _size = Symbol();
const _draw = Symbol();
class Square {
  constructor(radius) {
    this[_size] = radius;
  }

  [_draw]() {} // ES6 we have a feature called computed property names so we can add brackets and inside of these brackets we add an expression, when that expression is evaluated the resulting value will be used as the name of a property or method.
}

const s = new Square(12);
console.log(Object.getOwnPropertyNames(s)); // []

// we can still access to private property
const key = Object.getOwnPropertySymbols(s)[0];
console.log(s[key]); //12
