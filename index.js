const numbers = [1, 2, 3, 4];

console.log(includes(numbers, 2));

function includes(array, searchElement) {
  for (const element of array) {
    if (element === searchElement) return true;
  }

  return false;
}
