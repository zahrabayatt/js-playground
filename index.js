let selectedColors = ["red", "blue"]; // Array Literal
console.log(selectedColors); // {'red', 'blue'}
console.log(selectedColors[0]); // red

selectedColors[2] = "green";
console.log(selectedColors);

selectedColors[2] = 1; // we can change type of element in arrays because JS is Dynamic language
console.log(selectedColors);

// Technically, an array is an object. For example, the 'length' property comes from the object nature of arrays.
console.log(selectedColors.length);
