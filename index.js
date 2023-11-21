let numbers = [1, 2, 3, 4];
let another = numbers;

// Solution 1 - if we don't have references to original array
// numbers = [];

// console.log(numbers); // []
// console.log(another); // [1,2,3,4] not garb by GC because another referee to that

// Solution 2
// numbers.length = 0;
// console.log(numbers); // []
// console.log(another); // []

// Solution 3
// numbers.splice(0, numbers.length);
// console.log(numbers); // []
// console.log(another); // []

// Solution 4 - not efficient for large array cause make cost performance
while (numbers.length > 0) numbers.pop();
console.log(numbers);
console.log(another);
