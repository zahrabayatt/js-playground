const numbers = [1, 2, 3, 4, 6];

const max = getMax(numbers);

console.log(max);

function getMax(array) {
  if (array.length === 0) return undefined;

  return array.reduce((a, b) => (a > b ? a : b));
}
