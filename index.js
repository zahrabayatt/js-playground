const numbers = [1, -1, 2, 3];

// as soon as get false from element it going to return false and doesn't check all members
const allPositive = numbers.every((value) => value >= 0);

// as soon as get true from element it going to return true and doesn't check all members
const atLeastOnePositive = numbers.some((value) => value >= 0);

console.log(allPositive);
console.log(atLeastOnePositive);

// some and every are new method which might some browsers don't support them.
