// Reference types:
// - Object
// - Array
// - Function

// what is object?
// In JavaScript, an object is a data structure that allows you to group related data and functions together. It is a collection of key-value pairs, where each key is a string (or symbol) and each value can be any data type, including other objects. Objects provide a way to organize and structure code, making it easier to represent real-world entities and their behaviors in a program.

// let name = "Zahra";
// let age = 23;

let person = {
  name: "Zahra",
  age: 23,
}; // Object Literal which contains one or more key value pairs.

console.log(person); // { name: 'Zahra', age: 23 }

// for change or read name of person we use :
// - Dot notion
person.name = "John";

console.log(person.name);

// - Bracket Notation
person["name"] = "Mary";

console.log(person["name"]);

let selection = "age";
console.log(person[selection]);
