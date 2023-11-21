const numbers = [3, 4];

// Add element to end of array:
numbers.push(5, 6);
console.log(numbers);

// Add element to beginning of array:
numbers.unshift(1, 2);
console.log(numbers);

// Add element to middle of array:
numbers.splice(2, 0, "a", "b");
console.log(numbers);
