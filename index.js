let person = { name: "Zahra" };
console.log(person);

console.log(person.toString());

for (const key in person) {
  console.log(key); // only show name not toString method
}
// or
console.log(Object.keys(person)); // only show name not toString method

// the reason this happen is because all property has descriptor, and with descriptor we can config if property can enumerate or not

let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");

console.log(descriptor);
// {
//     configurable: true - that means we can delete this member
//     enumerable: false - that means we can enumerate this member
//     value: f toString() - set to a method and it is default implementation of toString()
//     writable: true - that means we can overwrite this member and change this implementation
//     __proto__: Object
// }

// when we create a object we can set these attribute of property in descriptor of property for example:

// the first arg is object we want to add property, the second arg is the name of property, the third arg is descriptor of property
Object.defineProperty(person, "name", {
  //get: function () {}, // define getter
  //set: function () {}, // define setter
  writable: false,
  configurable: false,
  enumerable: false,
  value: "parisa",
});

console.log(person); // {name: 'parisa'}
