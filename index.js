console.log(countTruthy([1, 2, 3, NaN]));

function countTruthy(array) {
  let count = 0;
  for (const element of array) {
    if (element) count++;
  }
  return count;
}
