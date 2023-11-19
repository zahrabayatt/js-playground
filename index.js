// We can use logical operators with non-boolean values
console.log(false || true); // true
console.log(false || "Zahra"); // Zahra
console.log(false || 1); // 1

// Falsy (false):
// - undefined
// - null
// - 0
// - false
// - ''
// - NaN

// Truthy (true): Anything that is not Falsy.

// The JS engine checks if the non-boolean operand is truthy or falsy and then applies logical operators.

console.log(false || 1 || 2); // Evaluation starts from left to right, and as soon as it finds a truthy operand, it stops and returns that operand. This is called short-circuiting.

// Real-world example:
let userColor = "red";
let defaultColor = "blue";
let currentColor = userColor || defaultColor; // If we have a value for userColor, we use that; otherwise, we use defaultColor.

console.log(currentColor);
