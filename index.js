// Value / Primitives Types:
// - Number
// - String
// - Boolean
// - Symbol
// - undefined
// - null

// Primitive are copied by their value
// Example
let x = 10;
let y = x;

x = 20;

console.log(x, y); // 20, 10
// Example
let number = 10;
function increase(number) {
  number++;
}

increase(number);
console.log(number); //10

// Reference Types
// - Object
// - Function
// - Array

// References are copied by their reference
//Example
let a = { value: 10 };
let b = a;

a.value = 20;
console.log(a, b); // {value: 20} {value: 20}
// Example
let obj = { value: 10 };
function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj); //{value: 11}
