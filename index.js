// Primitives - copy by value

const first = [1, 2, 3];
const second = [4, 5, 6];

// combined
const combined = first.concat(second);

// slice

const copy = combined.slice();

const sliceFromIndex = combined.slice(2);

const sliceRageIndex = combined.slice(1, 4);

console.log(combined);
console.log(copy);
console.log(sliceFromIndex);
console.log(sliceRageIndex);

// References - copy by reference
const obj = [{ id: 10 }];
const another = [1, 2, 3];

const c = obj.concat(another);

const s = c.slice();

obj[0].id = 12;

console.log(obj);
console.log(c);
console.log(s);
