const numbers = [1, -1, 2, 3];

const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
  //,0 // by default initialValue for accumulator is 0
);

console.log(sum);
