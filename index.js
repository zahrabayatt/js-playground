const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = [...first, ...second];
const combined = [...first, "a", ...second, "b"]; // with spread operator we have more flexibility

const copy = [...combined];

console.log(combined);
console.log(copy);

const a = [{ id: 12 }];
const b = [...a];
a[0].id = 13;

console.log(a);
console.log(b);
