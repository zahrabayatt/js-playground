function sum(...args) {
  console.log(args); // [1,2,3,4,5] - it is array of arguments that pass to function

  return args.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// another example
function calculateFinalPrice(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(calculateFinalPrice(0.1, 20, 30)); // 45

// Rest parameter must be final parameter
