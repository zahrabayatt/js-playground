const numbers = [1, 2, 3];

// we don't get index with for-of loop
for (const number of numbers) {
  console.log(number);
}

// numbers.forEach(function (number) {
//   console.log(number);
// });
numbers.forEach((number) => console.log(number));

// we get index with forEach loop
numbers.forEach((number, index) => console.log(number, number));
