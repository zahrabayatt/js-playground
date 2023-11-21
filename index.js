const numbers = [1, -1, 2, 3];

const items = numbers.map((n) => `<li>${n}</li>`);

const html = "<ul>\n" + items.join("\n") + "\n</ul>\n";

console.log(html);
//------------------
const objs1 = numbers.map((n) => {
  return { value: n };
});

const objs2 = numbers.map((n) => {
  value: n;
}); // {} consider of code's block not object literal
// to fix that we can use this:
const objs = numbers.map((n) => ({ value: n }));

console.log(objs);
// -----------------
const result = numbers
  .filter((n) => n >= 0)
  .map((n) => ({ value: n }))
  .filter((obj) => obj.value > 1)
  .map((obj) => obj.value);

console.log(result);
