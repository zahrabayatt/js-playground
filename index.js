// arguments of function are dynamic.
function sum1(a, b) {
  console.log(arguments);
  return a + b;
}

console.log(sum1(1, 2));
console.log(sum1(1)); // NaN - 1 + undefined

function sum() {
  let total = 0;
  // plain objects are not iterable so we can not use them with for-of but arguments object has exception and because it has symbol.iterate, it is iterable and we can use it with for-of
  for (const value of arguments) {
    total += value;
  }

  return total;
}

console.log(sum(1, 2, 3, 4, 5));
