const output = fizzBuzz(NaN);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== "number") return "Not a number";

  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  if (input % 3 !== 0 && input % 5 === 0) return "Buzz";
  if (input % 3 === 0 && input % 5 !== 0) return "Fizz";
  return input;
}
