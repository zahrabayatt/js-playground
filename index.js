// Refactor: Create mixin function for composing objects
function mixin(target, ...sources) {
  // ... is rest operator - to collect member in array
  Object.assign(target, ...sources); // ... is spread operator - to split array's members
}
const canEat = {
  eat: function () {
    this.hunger--;
    console.log("eating");
  },
};

const canWalk = {
  walk: function () {
    console.log("walking");
  },
};

const canSwim = {
  swim: function () {
    console.log("swim");
  },
};

// in ES6 with assign we can copy properties and method from another object

// create Person object:

// with this approach, methods are define in person object

//Refactor: extract this line of code in mixin function
// const p = Object.assign({}, canEat, canWalk);
const p = {};
mixin(p, canWalk, canEat);
console.log(p);

// with this approach, methods are define in person's prototype
function Person() {}

//Refactor: extract this line of code in mixin function
// Object.assign(Person.prototype, canEat, canWalk);
mixin(Person.prototype, canWalk, canEat);

const person = new Person();
console.log(person);

// create Goldfish object:
function Goldfish() {}

const goldFish = new Goldfish();
console.log(goldFish);
